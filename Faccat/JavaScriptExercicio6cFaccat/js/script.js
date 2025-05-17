/* Escreva um algoritmo para ler as dimensões de um triângulo (base e altura) / 2, calcular e escrever a área do retânguo. */

alert("Triângulo Área");

let base = parseFloat(prompt("Digite a base: "));
let altura = parseFloat(prompt("Digite a altura: "));

let areaTriangulo = (base * altura) / 2;

alert("A base desse triângulo é: " + areaTriangulo);