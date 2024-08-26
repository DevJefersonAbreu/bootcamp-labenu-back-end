function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Recebendo argumentos do terminal
  const escolha = process.argv[2];
  const opcoes = ['pedra', 'papel', 'tesoura'];
  
  // Verificando se a escolha é válida
  if (!escolha || !opcoes.includes(escolha)) {
    console.log('Uso: node pedra-papel-tesoura.js <pedra|papel|tesoura>');
    process.exit(1);
  }
  
  // Computador faz uma escolha aleatória
  const escolhaComputador = opcoes[getRndInteger(0, opcoes.length - 1)];
  let resultado;
  
  if (escolha === escolhaComputador) {
    resultado = 'Empate!';
  } else if (
    (escolha === 'pedra' && escolhaComputador === 'tesoura') ||
    (escolha === 'papel' && escolhaComputador === 'pedra') ||
    (escolha === 'tesoura' && escolhaComputador === 'papel')
  ) {
    resultado = 'Você ganhou!';
  } else {
    resultado = 'Você perdeu!';
  }
  
  console.log(`Você escolheu ${escolha} e o computador escolheu ${escolhaComputador}. ${resultado}`);
  