// Crie uma função que recebe um valor inteiro e retorne verdadeiro se
// é um valor perfeito ou falso se não for. Um valor é dito perfeito
// quando ele é igual a soma dos seus divisores excetuando ele
// próprio.

// Ex: 6 é perfeito, pois 6 = 1 + 2 + 3, que são seus divisores

let numero = Number(prompt("Digite um número:"));

function ehPerfeito(n) {
  let soma = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      soma += i;
    }
  }
  return soma === n;
}

console.log(ehPerfeito(numero)); // Deve retornar verdadeiro se o número for perfeito
