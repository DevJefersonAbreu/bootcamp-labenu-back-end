Antes de começar
Vamos continuar criando endpoints para automatizar a manipulação dos dados do arquivo database.ts. Por enquanto não se preocupe em validar as entradas, foque no caso de sucesso (caminho feliz).

Exercício 1
Implemente a funcionalidade de deleção de user e lembre-se de referenciar o material para ordenar as rotas corretamente.

Delete User by id
method HTTP (DELETE)
path ("/users/:id")
response
status 200
"User apagado com sucesso"