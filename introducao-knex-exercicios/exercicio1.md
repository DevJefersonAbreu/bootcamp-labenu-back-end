Exercício 1
A partir de agora, vamos abandonar o uso do arquivo database.ts! Configure seu servidor Express para que ele se comunique com seu banco de dados (arquivo .db) via knex e refatore (ou crie caso ainda não tenha feito) os seguintes endpoints:

Get All Users
// Request
// GET /users

// Response
// status 200 OK
[
    {
        id: "u001",
        name: "Fulano",
        email: "fulano@email.com",
        password: "fulano123",
        createdAt: "2023-01-15 09:12:42"
    },
    {
        id: "u002",
        name: "Ciclana",
        email: "ciclana@email.com",
        password: "ciclana99",
        createdAt: "2023-01-17 12:35:28"
    }
]
Get All Products funcionalidade 1
Retorna todos os produtos cadastrados.

// Request
// GET /products

// Response
// status 200 OK
[
    {
        id: "prod001",
        name: "Mouse gamer",
        price: 250,
        description: "Melhor mouse do mercado!",
        imageUrl: "https://picsum.photos/seed/Mouse%20gamer/400"
    },
    {
        id: "prod002",
        name: "Monitor",
        price: 900,
        description: "Monitor LED Full HD 24 polegadas",
        imageUrl: "https://picsum.photos/seed/Monitor/400"
    },
    {
        id: "prod003",
        name: "Teclado gamer",
        price: 200,
        description: "Teclado mecânico com numpad",
        imageUrl: "https://picsum.photos/seed/Teclado%20gamer/400"
    }
]
Get All Products - funcionalidade 2
Nessa funcionalidade, NÃO devemos criar um novo endpoint para o Get All Products, é necessário apenas adicionar essa funcionalidade ao endpoint get all products.

caso seja enviada uma query params (name) deve ser retornado o resultado da busca de produtos que contenham o "name" informado em seu nome.
// Request
// query params = name
// GET /products?name=gamer

// Response
// status 200 OK
[
    {
        id: "prod001",
        name: "Mouse gamer",
        price: 250,
        description: "Melhor mouse do mercado!",
        imageUrl: "https://picsum.photos/seed/Mouse%20gamer/400"
    },
    {
        id: "prod003",
        name: "Teclado gamer",
        price: 200,
        description: "Teclado mecânico com numpad",
        imageUrl: "https://picsum.photos/seed/Teclado%20gamer/400"
    }
]