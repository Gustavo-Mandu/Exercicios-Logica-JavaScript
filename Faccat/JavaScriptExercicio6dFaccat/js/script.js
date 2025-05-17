/* Escreva um algoritmo para ler as dimensões de um círculo (PI x raio²), calcular e escrever a área do retânguo. */

alert("Círculo Área");

const PI = parseFloat(prompt("Digite o número de PI: "));
let raio = parseFloat(prompt("Digite o raio: "));

let areaCirculo = PI * raio * raio;

alert("A área do círculo é: " + areaCirculo + "cm²");