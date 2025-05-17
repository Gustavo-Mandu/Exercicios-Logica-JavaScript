/* 
Elaborar um programa que apresente como resultado o valor de uma potência de uma base 
qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor 
do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do 
portuguol (^).  */

let base = parseInt(prompt("Digite o valor da base: "));
let expoenteMaximo = parseInt(prompt("Digite o valor do expoente: "));
let expoenteAtual = 0;
let resultado = 0;


while (expoenteAtual <= expoenteMaximo) {

    if (expoenteAtual == 0) {
        resultado = 1;
    } else if (expoenteAtual == 1) {
        resultado = base;
    } else {
        resultado = resultado * base;
    }


    // alert("Base: " + base + " expoente: " + contadora + " resultado: " + resultado);
    console.log("Base: " + base + " expoente: " + expoenteAtual + " resultado: " + resultado);
    alert("Base: " + base + " expoente: " + expoenteAtual + " resultado: " + resultado);
    expoenteAtual++;
}
