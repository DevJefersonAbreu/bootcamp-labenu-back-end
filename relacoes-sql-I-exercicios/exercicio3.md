Exercício 3
Crie a query de consulta utilizando junção (SELECT com JOIN) para simular um endpoint de informações de uma compra específica.
Imagine que você esteja criando a lógica para gerar o recibo, que deve possuir os dados:

id da compra
id de quem fez a compra
nome de quem fez a compra
email de quem fez a compra
preço total da compra
data da compra
Dica: todos esses dados estão nas tabelas users e purchases! Faça um SELECT com JOIN unindo as duas e selecionando as colunas necessárias.

Exemplo de resultado
image

created_at poderia estar no formato '2023-06-22T18:42:00.278Z' sem problemas
criado através do new Date().toISOString() dentro do JS ou TS