/* Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo 
seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo 
usuário.  */

let numero = parseFloat(prompt(`Digite um valor inteiro (use um valor negativo para sair)`));
let maior = numero;
let menor = numero;
let contadora = 0;

do {
    if (contadora > 0) {
        numero = parseFloat(prompt(`Digite um valor inteiro (use um valor negativo para sair)`));
    }
    if (numero > maior && numero >= 0) {
        maior = numero;
    } else if (numero < menor && numero >= 0) {
            menor = numero;
        }

    contadora++;
    console.log(`Número digitado: ${numero} | Maior número: ${maior} | Menor número: ${menor}`);
    alert(`Número digitado: ${numero} | Maior número: ${maior} | Menor número: ${menor}`);
} while (numero >= 0);