alert("Cálculo de início/fim do jogo de Xadrez");
let horaInicial = parseInt(prompt("Digite a hora de início do jogo: "));
let horaFinal = parseInt(prompt("Digite a hora de término do jogo: "));

let calculoDuracao = horaFinal - horaInicial;

if (calculoDuracao < 0) {
    calculoDuracao += 24;
}

alert("Duração do jogo = " + calculoDuracao);