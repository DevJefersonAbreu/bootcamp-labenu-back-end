Exercício 2
Crie o seguinte endpoint com query builder:

Get Purchase by id
method HTTP (GET)
path ("/purchases/:id")
response
status 200
um objeto contendo informações do pedido
Exemplo de saída (output)
// GET /purchases/:id sendo id = "pur001"
// status 200 OK
{
    purchaseId: "pur001",
    buyerId: "u001",
    buyerName: "Fulano",
    buyerEmail: "fulano@email.com",
    totalPrice: 1400,
    createdAt: "2023-01-15 16:24:54"
}