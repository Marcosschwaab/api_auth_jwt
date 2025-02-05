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
bash
git clone https://github.com/seu-usuario/authentication-api.git
cd authentication-api

Instale as dependências:

bash
Copy
npm install
Crie um arquivo .env na raíz do projeto com as variáveis:

env
Copy
MONGO_URL=sua_url_de_conexao_mongodb
JWT_SECRET=seu_secret_jwt
PORT=3000
Inicie o servidor:

bash
Copy
npm start
📝 Estrutura do Projeto
Copy
src/
├── models/
│   └── User.js    # Modelo do usuário
├── server.js      # Configuração principal
.env               # Variáveis de ambiente
Modelo do Usuário (models/User.js):
javascript
Copy
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
🚀 Rotas da API
GET /
Descrição: Rota pública inicial

Resposta:

json
Copy
{ "message": "Bem vindo a nossa API de autenticação!" }
POST /auth/register
Descrição: Registrar novo usuário

Campos obrigatórios: name, email, password, confirmPassword

Exemplo de requisição:

json
Copy
{
  "name": "João Silva",
  "email": "joao@email.com",
  "password": "senha123",
  "confirmPassword": "senha123"
}
Resposta de sucesso:

json
Copy
{ "message": "Usuário criado com sucesso!" }
POST /auth/login
Descrição: Login de usuário

Campos obrigatórios: email, password

Exemplo de requisição:

json
Copy
{
  "email": "joao@email.com",
  "password": "senha123"
}
Resposta de sucesso:

json
Copy
{
  "message": "Usuário logado com sucesso!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
GET /user/:id
Descrição: Obter dados do usuário (rota protegida)

Headers: Authorization: Bearer <token>

Resposta de sucesso:

json
Copy
{
  "message": "Usuário encontrado!",
  "user": {
    "_id": "65a1b2c3d4e5f6g7h8i9j0k",
    "name": "João Silva",
    "email": "joao@email.com"
  }
}
🔒 Considerações de Segurança
Senhas armazenadas com hash bcrypt

Autenticação via JWT com tempo de expiração configurável

Proteção de rotas sensíveis

Validação de campos no servidor

Dados sensíveis armazenados em variáveis de ambiente

⚙️ Tecnologias Utilizadas
Node.js

Express

MongoDB/Mongoose

bcryptjs

JSON Web Tokens (JWT)

dotenv

📄 Licença
Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes.
