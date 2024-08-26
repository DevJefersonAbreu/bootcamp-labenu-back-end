Exercício 3
Com as tipagens desenvolvidas, agora podemos criar alguns dados mock (mock = de mentirinha, mas verdadeiramente estruturados).

crie o arquivo database.ts dentro da pasta src
iremos criar um array para cada entidade e exportá-los
user
no database.ts, crie e exporte a constante users e tipe-a como um array do type respectivo criado no exercício 2
lembre-se de referenciar o material assíncrono
crie pelo menos 2 objetos nesse array:
a conta do fulano:
id é "u001"
name é "Fulano"
email é "fulano@email.com"
password é "fulano123"
createdAt pode ser gerado via new Date().toISOString()
a conta da beltrana:
id é "u002"
name é "Beltrana"
email é "beltrana@email.com"
password é "beltrana00"
createdAt pode ser gerado via new Date().toISOString()
product
no database.ts, crie e exporte a constante products e tipe-a como um array do type respectivo criado no exercício 2
lembre-se de referenciar o material assíncrono
crie pelo menos 2 objetos nesse array:
o mouse gamer:
id é "prod001"
name é "Mouse gamer"
price é 250
description é "Melhor mouse do mercado!"
imageUrl é "https://picsum.photos/seed/Mouse%20gamer/400"
o monitor:
id é "prod002"
name é "Monitor"
price é 900
description é "Monitor LED Full HD 24 polegadas"
imageUrl é "https://picsum.photos/seed/Monitor/400"
Para finalizar
Vá para o index.ts e importe as constantes users e products. Coloque um console.log para cada e rode a aplicação com o script de start para ver se deu tudo certo!