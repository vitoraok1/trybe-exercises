# Trybe Travel

## Exercises

### 🚀 Exercise 1

Note that the _migrations_ and _seeders_ are already created and working! That said, create a _model_ for the user people table, from the `users` table.

**Warning ⚠️**: You should pay attention to some specifications:

- The _model_ must be created in the `src/database/models` directory;
- The file must be called **User.model.ts**;
- The _model_ must be defined as `UserModel`;
- The _model_ must be exported as `default`;

_model_ is expected to contain the following fields:

- `email`; must be of type `STRING`;
- `password`; must be of type `STRING`;

In addition, it is important that the model obeys two more rules:

- Must point to the `users` table.
- Must inform Sequelize that the model does not have the _timestamps_ columns.

The evaluator will query the data in the _users_ table, verifying that it contains the correct initial data.

### 🚀 Exercise 2

Note that the _migrations_ and _seeders_ are already created and working! That said, create a _model_ for the tour packages table, from the `packages` table.

**Attention ⚠️**: You must pay attention to some specifications:

- The _model_ must be created in the `src/database/models` directory;
- The file must be called **Package.model.ts**;
- The _model_ must be defined as `PackageModel`;
- The _model_ must be exported as `default`;

_model_ is expected to contain the following fields:

- `destination`; must be of type `STRING`;
- `category`; must be of type `STRING`;
- `price`; must be of type `DECIMAL`;

In addition, it is important that the model obeys two more rules:

- It should point to the `packages` table.
- Must inform Sequelize that the model does not have the _timestamps_ columns.


### 🚀 Exercício 3

Crie um _endpoint_ que atualize os dados de um pacote de viagem. Sua requisição deve retornar o _status_ adequado e os dados do objeto criado.

- O _endpoint_ deve ser do tipo `PATCH` e estar acessível no caminho `/packages/:id`;
- Apenas o pacote com o _id_ presente na URL deve ser atualizado;
- O corpo da requisição deverá seguir o formato abaixo:

```json
{
  "destination": "Natal",
  "category": "premium",
  "price": 900.0
}
```

- Caso o _id_ não exista, o retorno deve exibir um _status 404_ com a mensagem:

```ts
{
  message: "Pacote não encontrado!";
}
```

- Em caso de sucesso, o retorno deve ser um _status 200_ com a mensagem:

```ts
{
  "id": 1
  "destination": "Natal",
  "category": "premium",
  "price": 900.0
}
```

### 🚀 Exercise 4

Create an _endpoint_ that removes a travel package, starting from its _id_.

- The _endpoint_ must be of type `DELETE` and be accessible in the path `/packages/:id`;
- Only the package with the _id_ present in the URL must be deleted;
- If the _id_ does not exist, the return must display a _status 404_ with the message:

```ts
{
  message: "Package not found!";
}
```

- If the product is successfully deleted, no response should be returned, just an _HTTP status 204_.


### Exercise 5

Create an _endpoint_ to _login_ to the _site_ based on an _email_ and password.

- The _endpoint_ developed must be of type `POST` and be accessible in the path `/login`;
- The body of the request must follow the format below:

```json
{
  "email": "michaelscott@gmail.com",
  "password": "123456"
}
```

- It must not be possible to _login_ if the data sent in the request is from users who are not registered in the application. In this case, the return should display a _status 400_ with the message:

```ts
{
  message: "Invalid data!";
}
```

- In case of success, the request must present the _status 200_, and a _token_ must be returned, as shown below:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIs ImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
}
```

- Your _token_ must be generated from the _JWT_SECRET_ environment variable, from the _payload_ of the request and must not contain the `password` attribute in its construction.


## Exercise 6

Create _middleware_ to ensure that the code can be reused across all routes that require authentication.

- If a _token_ is not passed, the result returned should be a _status http 401_ with the message:

```ts
{
  message: "Token not found";
}
```

- If the _token_ is invalid, the result returned should be a _status http 401_ with the message:

```ts
{
  message: "Invalid or expired token";
}
```

- If a valid _token_ is passed, it must call a **next** _middleware_.


## Exercise 7

Create an _endpoint_ to list all people registered in the application.

- The _endpoint_ must be of type `GET` and be accessible in the path `/users`;
- User data must not be viewed by someone who is not properly authenticated in the application;
- If a _token_ is not passed, the result returned should be a _status http 401_ with the message:

```ts
{
  message: "Token not found";
}
```

- If the _token_ is invalid, the result returned should be a _status http 401_ with the message:

```ts
{
  message: "Invalid or expired token";
}
```

- In case of success, the request must present the _status 200_ and a return, as shown below:

```json
[
  {
    "id": 1,
    "email": "user1@email.com",
    "password": "chang3m3"
  },
  {
    "id": 2,
    "email": "user2@email.com",
    "password": "chang3m3"
  }
]
```