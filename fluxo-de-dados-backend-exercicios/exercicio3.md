Exercício 3
Nosso objetivo agora é documentar a API criada.

a) Crie e publique uma coleção de requisições no Postman. Use os exemplos do material assíncrono como referência.

b) Além disso, você deve criar um README.md para seu repositório, explicando a API Labecommerce. Nesse README, inclua o link para a coleção de requisições do passo a.




# Labecommerce API

Esta é a API para o projeto Labecommerce, uma aplicação de gerenciamento de usuários e produtos.

## Endpoints

### Usuários

- **GET /users**
  - Obtém todos os usuários.

- **POST /users**
  - Cria um novo usuário.
  - **Body:**
    ```json
    {
      "id": "string",
      "name": "string",
      "email": "string",
      "password": "string",
      "createdAt": "string"
    }
    ```

- **DELETE /users/:id**
  - Deleta um usuário pelo ID.

### Produtos

- **GET /products**
  - Obtém todos os produtos ou filtra por nome.
  - **Query params:**
    - `name`: termo para filtrar produtos pelo nome.

- **POST /products**
  - Cria um novo produto.
  - **Body:**
    ```json
    {
      "id": "string",
      "name": "string",
      "price": "number",
      "description": "string",
      "imageUrl": "string"
    }
    ```

- **DELETE /products/:id**
  - Deleta um produto pelo ID.

- **PUT /products/:id**
  - Atualiza um produto pelo ID.
  - **Body:**
    ```json
    {
      "name": "string",
      "price": "number",
      "description": "string",
      "imageUrl": "string"
    }
    ```

## Teste a API

Você pode testar a API usando a coleção do Postman que criamos. Acesse o link abaixo para importar a coleção no Postman:

[Link para a Coleção do Postman](URL_DA_COLECAO_POSTMAN)

