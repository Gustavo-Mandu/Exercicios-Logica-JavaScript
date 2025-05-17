/* Apresentar os quadrados dos números inteiros de 15 a 200.  */

let numero = 15;
let quadradoDoNumero = 0;

do {
    quadradoDoNumero = numero * numero;
    alert("Quadrado do número " + numero + " é " + quadradoDoNumero);
    numero++;
} while(numero <= 200);