/* Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 
1 até 500. */

let i = 1;
let soma = 0;

while (i <= 500) {
    if (i % 2 == 0) {
        soma = soma + i
        console.log("Soma: " + soma + " Incremento " + i);
    }
    i++;
}

alert("Somatório final dos números pares de 1 até 500: " + soma);