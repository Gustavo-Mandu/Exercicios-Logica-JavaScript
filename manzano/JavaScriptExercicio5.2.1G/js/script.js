/* Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares 
situados na faixa numérica de 1 a 10.  */

let contadora = 1;
let valorFatorial = 1;
let proximoValorFatorial = 0;
let resultado = 0;
let temp = 0;
let valorFatorialImutavel = 0;;

do {
    valorFatorial = contadora;
    valorFatorialImutavel = contadora;
    if (valorFatorial == 1) {
        console.log(`Fatorial de ${valorFatorial}: 1`);
        console.log('\n');
    } else {
        resultado = valorFatorial;
        temp = resultado;
        console.log(`Fatorial de ${valorFatorialImutavel}`);
        while (valorFatorial > 1) {
            resultado = resultado * (valorFatorial - 1);
            console.log(`${temp} * ${valorFatorial - 1} = ${resultado}`);
            temp = resultado;
            valorFatorial--;
        }
        console.log('\n');
    }
    contadora += 2;
} while (contadora <= 10);