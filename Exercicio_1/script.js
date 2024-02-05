// Crie uma função que recebe 3 notas de um aluno por parâmetro e
// uma letra. Se a letra for A a função deve calcular a média aritmética,
// se for P, a média ponderada (peso: 5, 3 e 2).

function calcularMedia() {
  let nota1 = parseFloat(prompt("Digite a primeira nota:"));
  let nota2 = parseFloat(prompt("Digite a segunda nota:"));
  let nota3 = parseFloat(prompt("Digite a terceira nota:"));
  let tipo = prompt(
    "Digite 'A' para média aritmética ou 'P' para média ponderada:"
  );

  tipo = tipo.toUpperCase();

  if (tipo === "A") {
    return (nota1 + nota2 + nota3) / 3;
  } else if (tipo === "P") {
    return (nota1 * 5 + nota2 * 3 + nota3 * 2) / 10;
  } else {
    return "Tipo de média desconhecido";
  }
}

console.log(calcularMedia());
