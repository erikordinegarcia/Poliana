# Pagamentos com PostgreSQL (pgAdmin + backend local)

Este projeto já possui checkout no front e agora inclui um backend local em `backend/server.mjs` com endpoint `POST /api/orders`.

## 1) Preparar variáveis de ambiente

### Backend (`.env.backend`)
Crie um arquivo `.env.backend` na raiz:

```env
# Porta da API
API_PORT=3333

# Opção A (recomendada): conexão por partes
PGHOST=localhost
PGPORT=5432
PGDATABASE=poliana_store
PGUSER=postgres
PGPASSWORD=@Ordine2310

# Opção B: URL única (se usar, codifique "@" no password como %40)
# DATABASE_URL=postgresql://postgres:%40Ordine2310@localhost:5432/poliana_store
```

> Observação: a URL que você enviou (`postgresql://postgres:@Ordine2310@localhost:5432/poliana_store`) tende a quebrar por causa do `@` na senha. Se usar `DATABASE_URL`, codifique como `%40`.

### Frontend (`.env`)
Crie o arquivo `.env`:

```env
VITE_API_BASE_URL=http://localhost:3333
```

Se você não definir `VITE_API_BASE_URL`, o front também funciona em desenvolvimento via proxy do Vite (`/api -> localhost:3333`).

## 2) Subir backend e frontend

Em terminais separados:

```bash
# terminal 1: API
source .env.backend
npm run dev:api

# terminal 2: Front
npm run dev
```

## 3) Endpoint já implementado

### POST `/api/orders`

Payload esperado:

```json
{
  "bookId": "book-1",
  "paymentMethod": "pix",
  "amount": 49.9
}
```

Resposta de sucesso (201):

```json
{
  "orderId": "uuid-do-pedido",
  "status": "pending",
  "message": "Pedido criado com sucesso."
}
```

### O que é salvo no banco
- 1 registro em `orders` com `status = pending`
- 1 registro em `payments` com `provider = manual` e mesmo método (`pix/cartao/boleto`)

## 4) Teste rápido no terminal

```bash
curl -X POST http://localhost:3333/api/orders \
  -H "Content-Type: application/json" \
  -d '{"bookId":"book-1","paymentMethod":"pix","amount":39.9}'
```

## 5) Próximo passo recomendado

Depois de validar esse fluxo local, substitua `provider = manual` por integração real com gateway (Stripe/Pagar.me/Asaas etc.) e implemente webhook para atualização de status em `payments` e `orders`.
