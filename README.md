Authentication API
Uma API simples para autenticação de usuários, utilizando Node.js, Express e MongoDB. Permite registro, login e acesso a rotas privadas com autenticação via JWT.

Funcionalidades
Registro de Usuário: Crie uma conta com nome, e-mail e senha.

Login: Autentique-se com e-mail e senha para receber um token JWT.

Rota Privada: Acesse dados do usuário autenticado usando o token JWT.

Tecnologias
Express.js

Mongoose (ORM para MongoDB)

Bcrypt (Criptografia de senhas)

JSON Web Token (JWT) (Autenticação stateless)

Dotenv (Gerenciamento de variáveis de ambiente)

Pré-requisitos
Node.js (v18+)

MongoDB (local ou Atlas)

NPM ou Yarn

Instalação
Clone o repositório:

bash
Copy
git clone https://github.com/seu-usuario/authentication-api.git
cd authentication-api
Instale as dependências:

bash
Copy
npm install
# ou
yarn install
Crie um arquivo .env na raiz do projeto e configure as variáveis:

env
Copy
MONGO_URL=sua_url_mongodb
JWT_SECRET=seu_secret_jwt
Inicie o servidor:

bash
Copy
npm start
# ou
yarn start
O servidor estará disponível em http://localhost:3000.

Endpoints
GET /
Descrição: Rota pública de boas-vindas.

Resposta:

json
Copy
{ "message": "Bem vindo a nossa API de autenticação!" }
POST /auth/register
Descrição: Registra um novo usuário.

Corpo da Requisição:

json
Copy
{
  "name": "João Silva",
  "email": "joao@email.com",
  "password": "123456",
  "confirmPassword": "123456"
}
Respostas:

201 Created: Usuário criado com sucesso.

422 Unprocessable Entity: Campos inválidos ou usuário já existe.

POST /auth/login
Descrição: Autentica um usuário e retorna um token JWT.

Corpo da Requisição:

json
Copy
{
  "email": "joao@email.com",
  "password": "123456"
}
Resposta de Sucesso:

json
Copy
{
  "message": "Usuário logado com sucesso!",
  "token": "seu_token_jwt"
}
Respostas de Erro:

422 Unprocessable Entity: Credenciais inválidas.

GET /user/:id
Descrição: Retorna informações do usuário (requer autenticação).

Headers:

bash
Copy
Authorization: Bearer <token>
Resposta de Sucesso:

json
Copy
{
  "message": "Usuário encontrado!",
  "user": {
    "_id": "123",
    "name": "João Silva",
    "email": "joao@email.com"
  }
}
Respostas de Erro:

401 Unauthorized: Token ausente ou inválido.

404 Not Found: Usuário não encontrado.

Exemplo de Uso
Registro:

bash
Copy
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name": "Maria", "email": "maria@email.com", "password": "senha123", "confirmPassword": "senha123"}'
Login:

bash
Copy
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "maria@email.com", "password": "senha123"}'
Acesso à Rota Privada (substitua <token> e <user_id>):

bash
Copy
curl http://localhost:3000/user/<user_id> \
  -H "Authorization: Bearer <token>"
Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

Nota: Garanta que o MongoDB esteja em execução localmente ou configure uma URL remota no .env.

