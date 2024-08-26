function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Recebendo argumentos do terminal
  const escolha = process.argv[2];
  const numeroEscolhido = parseInt(process.argv[3], 10);
  
  // Verificando se os argumentos são válidos
  if (!escolha || isNaN(numeroEscolhido) || (escolha !== 'par' && escolha !== 'impar')) {
    console.log('Uso: node par-ou-impar.js <par|impar> <número>');
    process.exit(1);
  }
  
  // Computador faz uma escolha aleatória
  const numeroComputador = getRndInteger(0, 5);
  const soma = numeroComputador + numeroEscolhido;
  const resultadoComputador = (soma % 2 === 0) ? 'par' : 'impar';
  const resultado = (escolha === resultadoComputador) ? 'ganhou' : 'perdeu';
  
  console.log(`Você escolheu ${escolha} e o computador escolheu ${resultadoComputador}. O resultado foi ${soma}. Você ${resultado}!`);
  