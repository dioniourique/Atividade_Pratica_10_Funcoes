// Crie uma função que recebe por parâmetro o tempo de duração de
// uma fábrica expressa em segundos e retorna esse tempo em horas,
// minutos e segundos.

let segundos = prompt("Por favor, insira o número de segundos:");

function converterTempo(segundos) {
  let horas = (segundos / 3600) | 0;
  segundos %= 3600;
  let minutos = (segundos / 60) | 0;
  segundos %= 60;

  return `Horas: ${horas}, Minutos: ${minutos}, Segundos: ${segundos}`;
}

alert(converterTempo(segundos));
