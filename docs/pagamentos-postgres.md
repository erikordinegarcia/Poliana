# Pagamentos com PostgreSQL (pgAdmin) - Poliana Store

## 1) Criar as tabelas no pgAdmin
1. Abra o pgAdmin e conecte no servidor PostgreSQL.
2. Selecione o banco `poliana_store`.
3. Abra **Query Tool**.
4. Cole e execute o script `db/poliana_store.sql`.

## 2) O que o front-end espera
A tela de checkout chama o endpoint:

- `POST /api/orders`

Payload enviado:

```json
{
  "bookId": "10",
  "paymentMethod": "pix",
  "amount": 700
}
```

Resposta esperada:

```json
{
  "orderId": "ORD-12345",
  "status": "pending"
}
```

## 3) Configuração da URL da API
Crie um arquivo `.env` na raiz do projeto:

```bash
VITE_API_BASE_URL=http://localhost:3333
```

Se a variável não existir, o front usa URL relativa (`/api/orders`).

## 4) Próximo passo obrigatório
Implementar backend para:
- salvar pedidos no PostgreSQL,
- criar transação no gateway (Pix/cartão/boleto),
- receber webhook e atualizar status (`orders` e `payments`).
