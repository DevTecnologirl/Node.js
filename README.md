# 🚀 API Node.js + PostgreSQL (Docker)

Projeto simples de API REST utilizando **Node.js**, **Express** e **PostgreSQL rodando no Docker**.

---

## 📌 Tecnologias utilizadas

* Node.js
* Express.js
* PostgreSQL
* Docker
* Nodemon

---

## 📁 Criação do projeto

```bash
mkdir node-express-postgres
cd node-express-postgres

npm init -y

npm i express pg dotenv
npm i nodemon --save-dev
```

---

## 🐳 Subindo o PostgreSQL com Docker

```bash
docker run -d \
  --name postgres-loja \
  -e POSTGRES_DB=loja_api \
  -e POSTGRES_USER=loja_user \
  -e POSTGRES_PASSWORD=loja_pass \
  -p 5435:5432 \
  postgres:15
```

### 🔍 Configuração do banco

* **Banco:** loja_api
* **Usuário:** loja_user
* **Senha:** loja_pass
* **Porta:** 5435

---

## 🛠️ Criando a tabela

Execute no banco (via DBeaver ou terminal):

```sql
CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    preco NUMERIC(10,2) NOT NULL,
    quantidade INTEGER NOT NULL DEFAULT 0,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## ⚙️ Configuração do ambiente

Crie um arquivo `.env` na raiz:

```env
PORT=3000
DATABASE_URL=postgresql://loja_user:loja_pass123@localhost:5435/loja_api
```

---

## ▶️ Executando o projeto

```bash
npm run dev
```

Ou:

```bash
node src/server.js
```

---

## 🌐 Rotas da API

### GET `/`

Retorna status da API

```json
{
  "message": "API rodando com sucesso!"
}
```

---

### GET `/produtos`

Lista todos os produtos

---

### GET `/produtos/:id`

Busca produto por ID

---

### POST `/produtos`

Cria um novo produto

```json
{
  "nome": "Notebook",
  "preco": 3500.00,
  "quantidade": 10
}
```

---

### PUT `/produtos/:id`

Atualiza um produto

---

### DELETE `/produtos/:id`

Remove um produto

---

## 🧪 Testando a API

Você pode utilizar:

* Postman
* Insomnia

---

## 🧠 Conceitos aplicados

* API REST
* CRUD (Create, Read, Update, Delete)
* Integração com banco de dados
* Uso de variáveis de ambiente
* Organização em camadas (routes, controllers, config)

---

## ⚠️ Possíveis erros

### ❌ Banco não conecta

* Verifique se o Docker está rodando
* Verifique porta (5435)

### ❌ relation "produtos" does not exist

* Você esqueceu de criar a tabela

### ❌ password authentication failed

* Verifique usuário/senha no `.env`

---

## 🚀 Próximos passos

* Adicionar validação de dados
* Criar camada de services
* Implementar autenticação (JWT)
* Usar ORM (Prisma ou Sequelize)

---

## 👩‍💻 Autora: Tecnologirl

Projeto criado para estudos de backend com Node.js e PostgreSQL.
