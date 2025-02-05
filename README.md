# Authentication API com Node.js, Express e MongoDB

Uma API de autenticação simples desenvolvida com Node.js, Express e MongoDB. Permite registro de usuários, login com geração de token JWT e acesso a uma rota privada protegida por autenticação.

## 📋 Funcionalidades

- Registro de usuário com senha criptografada (bcrypt)
- Login com geração de token JWT
- Rota privada para obtenção de dados do usuário
- Validação de campos e tratamento de erros
- Conexão segura com banco de dados MongoDB

## 🛠️ Pré-requisitos

- Node.js (v18 ou superior)
- npm ou yarn
- MongoDB (local ou Atlas)
- Postman/Insomnia (para testar as rotas)
- Variáveis de ambiente configuradas (`.env`)

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/authentication-api.git
cd authentication-api

Instale as dependências:
```bash
npm install

Crie um arquivo .env na raíz do projeto com as variáveis:
```bash
MONGO_URL=sua_url_de_conexao_mongodb
JWT_SECRET=seu_secret_jwt
PORT=3000
