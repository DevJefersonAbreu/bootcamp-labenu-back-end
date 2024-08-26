Exercício 2
Caso ainda não tenha feito, recrie as tabelas que possuem CHAVE ESTRANGEIRA (FOREGIN KEY), adicionando efeito cascata em suas colunas!

https://labenu.notion.site/Definindo-efeito-cascata-ao-criar-foreign-keys-ea245ee9180047fe9ca3acb364f21737
Em seguida, refatore (ou crie caso ainda não tenha feito) os seguintes endpoints:

Create user
Cadastra uma nova pessoa.

// Request
// POST /users
// body JSON
{
    "id": "u003",
    "name": "Astrodev",
    "email": "astrodev@email.com",
    "password": "astrodev00"
}

// Response
// status 201 CREATED
{
    message: "Cadastro realizado com sucesso"
}
Create product
Cadastra um novo produto.

// Request
// POST /products
// body JSON
{
    "id": "prod003",
    "name": "Teclado gamer",
    "price": 200,
    "description": "Teclado mecânico com numpad",
    "imageUrl": "https://picsum.photos/seed/Teclado%20gamer/400"
}

// Response
// status 201 CREATED
{
    message: "Produto cadastrado com sucesso"
}
Create purchase
Cadastra um novo pedido. Como dica, o exercício 1 da aula de Relações em SQL II é uma boa referência.

// Request
// POST /purchases
// body JSON
{
    "id": "pur001",
    "buyer": "u001",
    "products": [
        {
            "id": "prod001",
            "quantity": 2
        },
        {
            "id": "prod002",
            "quantity": 1
        }
    ]
}

// Response
// status 201 CREATED
{
    message: "Pedido realizado com sucesso"
}