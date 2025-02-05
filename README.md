# API de Autenticação com Node.js, Express, MongoDB e JWT

Este projeto é uma API de autenticação simples utilizando Node.js, Express, MongoDB, JWT (JSON Web Tokens) e bcrypt para gerenciamento de senhas.

## Funcionalidades

- **Registro de usuário**: Permite criar uma conta de usuário com validações de campos.
- **Login de usuário**: Valida as credenciais e gera um token JWT para autenticação.
- **Rotas públicas e privadas**: Uma rota pública de boas-vindas e uma rota privada para obter os dados do usuário autenticado.

## Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcrypt

## Requisitos

- Node.js v14 ou superior
- MongoDB (local ou Atlas)
- Um arquivo `.env` com variáveis de ambiente configuradas.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
Instale as dependências:

```bash
Copiar
npm install
Crie um arquivo .env na raiz do projeto com as seguintes variáveis de ambiente:

php-template
Copiar
MONGO_URL=mongodb://<usuario>:<senha>@<host>:<porta>/<nome-do-banco>
JWT_SECRET=sua-chave-secreta
Inicie o servidor:

```bash
Copiar
npm start
O servidor estará rodando na porta 3000.

Rotas da API
GET /
Retorna uma mensagem de boas-vindas.

Resposta:
json
Copiar
{
  "message": "Bem vindo a nossa API de autenticação!"
}
GET /user/:id
Retorna as informações de um usuário, exceto a senha, dado o seu ID.

Parâmetros:

id: ID do usuário.
Resposta:

json
Copiar
{
  "message": "Usuário encontrado!",
  "user": {
    "_id": "ID_DO_USUARIO",
    "name": "Nome do Usuário",
    "email": "email@exemplo.com"
  }
}
POST /auth/register
Registra um novo usuário.

Corpo da requisição:

json
Copiar
{
  "name": "Nome do Usuário",
  "email": "email@exemplo.com",
  "password": "senha123",
  "confirmPassword": "senha123"
}
Resposta:

Sucesso:
json
Copiar
{
  "message": "Usuário criado com sucesso!"
}
Erro de validação:
json
Copiar
{
  "message": "Todos os campos são obrigatórios!"
}
POST /auth/login
Realiza o login do usuário e retorna um token JWT.

Corpo da requisição:

json
Copiar
{
  "email": "email@exemplo.com",
  "password": "senha123"
}
Resposta:

Sucesso:
json
Copiar
{
  "message": "Usuário logado com sucesso!",
  "token": "JWT_TOKEN"
}
Erro de credenciais:
json
Copiar
{
  "message": "Senha inválida!"
}
Ambiente de Desenvolvimento
Este projeto foi desenvolvido com a seguinte configuração:

Node.js: v16.x.x
MongoDB: Local ou Atlas
Dependências: Express, Mongoose, dotenv, bcrypt, jwt
Contribuindo
Se você deseja contribuir com este projeto, fique à vontade para abrir uma issue ou enviar um pull request.

Faça um fork deste repositório.
Crie uma branch para sua feature (git checkout -b feature/nova-feature).
Faça as alterações necessárias e commit (git commit -am 'Adicionando nova feature').
Envie para o repositório remoto (git push origin feature/nova-feature).
Abra um pull request.
Licença
Este projeto está licenciado sob a Licença MIT - consulte o arquivo LICENSE para mais detalhes.

Autor
Seu Nome

php-template
Copiar

### Como criar o arquivo `.env`

Na raiz do projeto, crie um arquivo `.env` com as variáveis de ambiente:

```bash
MONGO_URL=mongodb://<usuario>:<senha>@<host>:<porta>/<nome-do-banco>
JWT_SECRET=sua-chave-secreta
Observações:
A API está configurada para rodar na porta 3000 por padrão.
O MongoDB pode ser local ou utilizar o MongoDB Atlas.
O segredo do JWT (JWT_SECRET) deve ser uma chave segura.
