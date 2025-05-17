/* 
Elaborar um programa que apresente os resultados da soma e da média aritmética dos valores 
pares situados na faixa numérica de 50 a 70.  */

let valor = 50;
let soma = 0;
let divisor = 0;

function somaEMediaAritmetica50a70() {
    while (valor <= 70) {
        if (valor % 2 == 0) {
            soma = soma + valor;
            console.log("Valor a ser somado: " + valor + " Total: " + soma);
            alert("Valor a ser somado: " + valor + " Total: " + soma);
            divisor++;
        }
        valor++;
    }

    let media = soma / divisor;
    console.log("Média aritmética: " + media);
    alert("Média aritmética: " + media);
}

somaEMediaAritmetica50a70();