/* Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.  */

let numero = prompt("Digite um número: ");
let i = 1;

while(i <= 10) {
    let resultado = numero * i;
    console.log("Resultado da tabuada: " + i + " x " + numero + " é igual a " + resultado);
    alert("Resultado da tabuada: " + i + " x " + numero + " é igual a " + resultado);
    i++;
}
