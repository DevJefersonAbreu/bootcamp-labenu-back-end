Exercício 1
O typescript é uma lib que deve ser instalada nas dependências de desenvolvimento da aplicação (somente nós, devs, precisamos dela e por isso não disponibilizamos na versão de produção, que é para clientes).

adicione o typescript no package.json como devDependencies
aproveite e adicione também a tipagem do node (@types/node) como devDependencies
é necessário porque estamos usando typescript no node e o node não tem suas tipagens incluídas no pacote base
Crie o arquivo de configuração do typescript (tsconfig.json)
lembre-se de referenciar o material assíncrono para copiar as configurações corretas
Refatore o package.json
remova a linha "type": "module", pois o typescript já utiliza módulos automaticamente e repeti-la aqui dá problemas de execução
Delete a pasta exercicios/
delete a pasta exercicios/ com os arquivos feitos ontem (process-argv.js, par-ou-impar.js e pedra-papel-tesoura.js)
não se preocupe, os códigos estão salvos na branch de ontem (node-package-json) e podem ser referenciados se necessário
Crie a pasta src/
Na raiz do projeto, crie a pasta src/.

Altere o index.js para index.ts e mova-o para a src/
Coloque um console.log no src/index.ts só para verificar se tudo funcionou.

edite o script de start para executar a transpilação e rodar o javascript da pasta build (que é criada na transpilação)
lembre-se de referenciar o material assíncrono para saber como configurar o script de start para o typescript
rode o script de start e confirme que se seu console.log apareceu