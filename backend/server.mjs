import { createServer } from 'node:http';
import { execFile } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { promisify } from 'node:util';

const loadEnvFile = (fileName) => {
  if (!existsSync(fileName)) return;

  const content = readFileSync(fileName, 'utf8');
  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const separatorIndex = trimmed.indexOf('=');
    if (separatorIndex <= 0) continue;

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim();

    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
};

loadEnvFile('.env.backend');
loadEnvFile('.env');

const execFileAsync = promisify(execFile);
const PORT = Number(process.env.API_PORT || 3333);

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

const readJsonBody = async (req) => {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  const raw = Buffer.concat(chunks).toString('utf8').trim();
  if (!raw) return {};

  try {
    return JSON.parse(raw);
  } catch {
    throw new Error('JSON inválido no corpo da requisição.');
  }
};

const runPsql = async (sql, variables = {}) => {
  const args = ['--no-psqlrc', '-X', '-t', '-A', '-F', ',', '-v', 'ON_ERROR_STOP=1'];

  for (const [key, value] of Object.entries(variables)) {
    args.push('-v', `${key}=${String(value)}`);
  }

  if (process.env.DATABASE_URL) {
    args.push('-d', process.env.DATABASE_URL);
  }

  args.push('-c', sql);

  const { stdout } = await execFileAsync('psql', args, {
    env: {
      ...process.env,
      PAGER: 'cat',
    },
  });

  return stdout.trim();
};

const createOrder = async ({ bookId, paymentMethod, amount }) => {
  if (!bookId || typeof bookId !== 'string') {
    throw new Error('bookId é obrigatório.');
  }

  if (!['pix', 'cartao', 'boleto'].includes(paymentMethod)) {
    throw new Error('paymentMethod inválido. Use pix, cartao ou boleto.');
  }

  const amountNumber = Number(amount);
  if (!Number.isFinite(amountNumber) || amountNumber <= 0) {
    throw new Error('amount precisa ser um número maior que zero.');
  }

  const amountCents = Math.round(amountNumber * 100);

  const sql = `
    with new_order as (
      insert into orders (total_cents, payment_method, status)
      values (:'amount_cents'::int, :'payment_method', 'pending')
      returning id, status, total_cents
    ), new_payment as (
      insert into payments (order_id, provider, method, status, amount_cents)
      select id, 'manual', :'payment_method', 'pending', total_cents
      from new_order
      returning id
    )
    select id, status from new_order;
  `;

  const output = await runPsql(sql, {
    amount_cents: amountCents,
    payment_method: paymentMethod,
  });

  const [orderId, status] = output.split(',');

  if (!orderId || !status) {
    throw new Error('Não foi possível criar o pedido no banco.');
  }

  return { orderId, status };
};

const server = createServer(async (req, res) => {
  Object.entries(corsHeaders).forEach(([key, value]) => res.setHeader(key, value));

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method === 'GET' && req.url === '/health') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ ok: true }));
    return;
  }

  if (req.method === 'POST' && req.url === '/api/orders') {
    try {
      const payload = await readJsonBody(req);
      const result = await createOrder(payload);

      res.statusCode = 201;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ ...result, message: 'Pedido criado com sucesso.' }));
      return;
    } catch (error) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(
        JSON.stringify({
          message: error instanceof Error ? error.message : 'Erro ao criar pedido.',
        }),
      );
      return;
    }
  }

  res.statusCode = 404;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: 'Rota não encontrada.' }));
});

server.listen(PORT, () => {
  console.log(`API de checkout rodando em http://localhost:${PORT}`);
});
