Exercício 3
Refatore o endpoint criado no exercício anterior para que o resultado bem sucedido também retorne a lista de produtos que tem relação com a compra pesquisada.

Exemplo de saída (output)
// GET /purchases/:id sendo id = "pur001"
// status 200 OK
{
    purchaseId: "pur001",
    buyerId: "u001",
    buyerName: "Fulano",
    buyerEmail: "fulano@email.com",
    totalPrice: 1400,
    createdAt: "2023-01-15 16:24:54",
    products: [
        {
            id: "prod001",
            name: "Mouse gamer",
            price: 250,
            description: "Melhor mouse do mercado!",
            imageUrl: "https://picsum.photos/seed/Mouse%20gamer/400",
            quantity: 2
        },
        {
            id: "prod002",
            name: "Monitor",
            price: 900,
            description: "Monitor LED Full HD 24 polegadas",
            imageUrl: "https://picsum.photos/seed/Monitor/400",
            quantity: 1
        }
    ]
}
Dicas
Esboce o algoritmo imaginando como você pode modelar os dados e ter a saída esperada.
Uma solução simples é criar duas requisições separadas no banco de dados:

uma para o que você já fez no exercício anterior;
e outra para buscar os dados específicos de cada produto baseado na sua id.
Outra saída é usando o JOIN.

Você já tem o conhecimento e a prática necessária para fazer cada passo separado, o desafio agora é juntar tudo em um único fluxo e unir com a manipulação de arrays e objetos no typescript para modelar a estrutura da resposta.