/* 
Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo 
seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo 
usuário.  */

let valor = parseFloat(prompt("Insira um valor"));
let maior = 0;
let menor = valor;

while (valor >= 0) {
   
    if (valor > maior){
        maior = valor;
    } 
    if (valor < menor) {
        menor = valor;
    }
    alert("Maior valor até então: " + maior + "\nValor recebido agora: " + valor);
    alert("Menor valor até então: " + menor + "\nValor recebido agora: " + valor);
    valor = parseFloat(prompt("Insira outro valor"));
}

alert("Maior valor: " + maior + "\nMenor valor: " + menor);