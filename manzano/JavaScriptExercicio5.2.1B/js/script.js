/* Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 
1 até 500.  */

let numero = 1;
let somatorio = 0;

do {
    if (numero % 2 == 0) {
        somatorio += numero;
    }
    numero++;
} while (numero <= 500);

alert("Somatório dos números pares de 1 a 500: " + somatorio);