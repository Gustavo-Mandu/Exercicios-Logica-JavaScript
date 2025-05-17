/* 
Elaborar um programa que efetue a leitura sucessiva de valores numéricos e apresente no final o 
total do somatório, a média aritmética e o total de valores lidos. O programa deve fazer as leituras 
dos valores enquanto o usuário estiver fornecendo valores positivos. Ou seja, o programa deve 
parar quando o usuário fornecer um valor negativo. Não se esqueça que o usuário pode entrar 
como primeiro número um número negativo, portanto, cuidado com a divisão por zero no cálculo da 
média.  */

let valor = 0;
let somatorio = 0;
let divisor = 0;
let totalDeValoresLidos = 0;

do {
    valor = parseFloat(prompt("Digite um valor: "));
    if (valor < 0) {
        break;
    }
    somatorio += valor;
    divisor++;
    totalDeValoresLidos++;

} while (valor >= 0);

if (somatorio == 0) {
    console.log("Programa finalizado");
} else {

    let media = somatorio / divisor;

    console.log("Total do somatório: " + somatorio);
    alert("Total do somatório: " + somatorio);

    console.log("Média aritmética: " + media);
    alert("Média aritmética: " + media);

    console.log("Total de valores lidos: " + totalDeValoresLidos);
    alert("Total de valores lidos: " + totalDeValoresLidos);

}