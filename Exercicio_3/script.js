// Crie uma função que recebe por parâmetro um valor inteiro e
// positivo e retorne verdadeiro se o número for primo ou falso se não
// for.

function ehPrimo(n) {
  if (n <= 1 || n % 1 !== 0) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

let n = Number(prompt("Digite um número inteiro e positivo:"));
if (n % 1 !== 0) {
  console.log("Por favor, digite um número inteiro.");
} else {
  console.log(ehPrimo(n));
}
