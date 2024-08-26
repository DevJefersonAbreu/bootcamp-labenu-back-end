Exercício 1
Hoje nosso foco será refatorar nossos endpoints do Labecommerce e torná-los mais robustos e preparados para lidar com erros.

Get All Users
não precisa de validação, basta refatorar para o uso do try/catch
Get All Products
se query params for recebido, deve possuir pelo menos um caractere
Create User
validar o body
extra:
não deve ser possível criar mais de uma conta com a mesma id
não deve ser possível criar mais de uma conta com o mesmo e-mail
Create Product
validar o body
extra:
não deve ser possível criar mais de um produto com a mesma id