// Crie uma função que recebe um valor inteiro e retorne verdadeiro se
// for ímpar ou falso se for par.

let num = prompt("Digite um número:");
function verificarParidade(num) {
  if (num % 2 == 0) {
    alert("O número é par");
  } else {
    alert("O número é ímpar");
  }
}
verificarParidade(num);
