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
```

Instale as dependências:

- **Copy**
```bash
npm install
```

Configure as variáveis de ambiente:

Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:

- **env**
```Copy
MONGO_URL=sua_url_de_conexao_mongodb
JWT_SECRET=sua_chave_secreta_jwt
```

Inicie o servidor:

- **Copy**
```bash
npm start
```

O servidor estará rodando na porta 3000. Você pode acessar a API em http://localhost:3000.

Rotas da API
```json
Rota Pública
GET / - Retorna uma mensagem de boas-vindas.
```


- **Copy**
```json
{
  "message": "Bem vindo a nossa API de autenticação!"
}
```
Rotas de Autenticação
POST /auth/register - Registra um novo usuário.

Corpo da Requisição:

json
Copy
{
  "name": "Nome do Usuário",
  "email": "usuario@example.com",
  "password": "senha123",
  "confirmPassword": "senha123"
}
Resposta de Sucesso:

json
Copy
{
  "message": "Usuário criado com sucesso!"
}
POST /auth/login - Realiza o login do usuário.

Corpo da Requisição:

###json
Copy
{
  "email": "usuario@example.com",
  "password": "senha123"
}
Resposta de Sucesso:

###json
Copy
{
  "message": "Usuário logado com sucesso!",
  "token": "token_jwt_gerado"
}
Rota Privada
GET /user/:id - Retorna informações do usuário (requer autenticação via token JWT).

Resposta de Sucesso:

###json
Copy
{
  "message": "Usuário encontrado!",
  "user": {
    "_id": "id_do_usuario",
    "name": "Nome do Usuário",
    "email": "usuario@example.com"
  }
}
Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
