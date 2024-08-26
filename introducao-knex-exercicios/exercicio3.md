Exercício 3
Mesmo fluxo do exercício 1.

Edit product by id
Edita um produto existente.

// Request
// path params = :id

// PUT /products/prod003
// body JSON
{
    "id": "prod0033",
    "name": "Teclado gamer RGB",
    "price": 300,
    "description": "Teclado mecânico com RGB e numpad",
    "imageUrl": "https://picsum.photos/seed/Teclado%20gamer%20RGB/400"
}

// Response
// status 200 OK
{
    message: "Produto atualizado com sucesso"
}
Delete purchase by id
Deleta um pedido existente.

// Request
// path params = :id
// DELETE /purchases/pur002

// Response
// status 200 OK
{
    message: "Pedido cancelado com sucesso"
}