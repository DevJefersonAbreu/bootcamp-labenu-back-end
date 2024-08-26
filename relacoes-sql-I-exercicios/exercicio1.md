Exercício 1
Agora que sabemos como implementar relações do tipo 1:m e 1:1, vamos refatorar a estrutura do Labecommerce!
Por ora não precisaremos editar as tabelas já existentes (users e products). Nosso objetivo hoje é criar a tabela de pedidos (purchases).

Criação da tabela de pedidos
nome da tabela: purchases
colunas da tabela:
id (TEXT, PK, único e obrigatório)
buyer (TEXT, obrigatório)
total_price (REAL e obrigatório)
created_at (TEXT e obrigatório)
a chave estrangeira (FK) será a coluna buyer e irá referenciar a coluna id da tabela users
Observação
Por enquanto só estamos criando a tabela de pedidos! Na próxima aula veremos como criar a tabela para adicionar os produtos de cada pedido.