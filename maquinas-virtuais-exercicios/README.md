Máquinas Virtuais
Antes de começar
Esse exercício é opcional. Caso seu PC não consiga executar VMs por questões de hardware, use o tempo livre para revisar outros conteúdos ou focar no projeto.

Enunciado
Exercício 1
Delete as VMs que você criou durante as práticas e crie novamente uma VM com Ubuntu.

Exercício 2
Utilize a VM e faça o deploy de um CRA (create react app) na porta 3000. Pode ser apenas o template React com a logo rodando.

Exercício 3
Acesse o app CRA na porta 3003 de sua VM através de seu PC host.



RESPOSTA

sudo apt update
sudo apt install nodejs npm

node -v
npm -v

npx create-react-app my-app

cd my-app

npm start


ip a


http://<IP-DA-VM>:3000

