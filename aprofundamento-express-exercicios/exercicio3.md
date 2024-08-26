Exercício 3
Agora vamos praticar o método PUT implementado um endpoint de edição. Por enquanto não se preocupe em validar as entradas, foque no caso de sucesso (caminho feliz).

Edit Product by id
method HTTP (PUT)
path ("/products/:id")
body
id (parâmetro opcional)
name (parâmetro opcional)
price (parâmetro opcional)
description (parâmetro opcional)
imageUrl (parâmetro opcional)
response
status 200
"Produto atualizado com sucesso"