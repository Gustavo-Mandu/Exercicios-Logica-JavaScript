/* Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha, 
banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do 
nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área 
do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar 
calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor 
total acumulado da área residencial.  */

let nomeComodo;
let larguraComodo = 0;
let comprimentoComodo = 0;
let areaComodo = 0;
let valorTotalAcumuladoDaAreaResidencial = 0;
let resposta;

while (resposta != "NAO") {
    nomeComodo = prompt("Digite o nome do cômodo: ");
    larguraComodo = prompt("Digite a largura do cômodo: ");
    comprimentoComodo = prompt("Digite o comprimento do cômodo: ");

    areaComodo = larguraComodo * comprimentoComodo;
    console.log("Área desse cômodo: " + areaComodo + "cm²");
    alert("Área desse cômodo: " + areaComodo + "cm²");
    valorTotalAcumuladoDaAreaResidencial += areaComodo;

    resposta = prompt("Deseja continuar? ");
}

alert("Valor total acumulado da área residencial: " + valorTotalAcumuladoDaAreaResidencial + "cm²");
console.log("Valor total acumulado da área residencial: " + valorTotalAcumuladoDaAreaResidencial + "cm²");