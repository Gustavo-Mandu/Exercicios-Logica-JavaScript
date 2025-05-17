

/* Elaborar um programa que efetue a leitura de 15 valores numéricos inteiros e no final apresente o 
total do somatório da fatorial de cada valor lido.  */

let valor = 0;
let somatorioFatorial = 0;
let contadora = 0;
let contadoraInterna = 0;
let valorChumbado = 0;
let somaFinal = 0;

do {
    valor = parseInt(prompt("Digite um valor: "));

    if (valor == 0) {
        contadoraInterna = 1;
    } else contadoraInterna = valor;

    valorChumbado = valor;

    do {
        contadoraInterna--;
        somatorioFatorial = ((valor == 0 || valor == 1) ? 1 : valor * contadoraInterna);
        console.log("Fatorial de " + valorChumbado
            + ": " + ((valor == 0 || valor == 1) ? "" : valor + " * " + contadoraInterna + " = ") + somatorioFatorial + " | resultado somado desse fatorial: " + somatorioFatorial);
        valor = somatorioFatorial;
    } while (contadoraInterna > 1);

    somaFinal += somatorioFatorial;

    console.log("Resultado de todos os fatoriais somados: " + somaFinal);
    contadora++;
    console.log('\n');
} while (contadora < 15);

// 15! = 15 * 14 * 13 * 12 * 11 * 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1