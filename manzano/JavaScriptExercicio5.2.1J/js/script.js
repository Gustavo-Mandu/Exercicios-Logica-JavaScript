/* Elaborar um programa que apresente o resultado inteiro da divisão de dois números quaisquer. 
Para a elaboração do programa, não utilizar em hipótese alguma o conceito do operador aritmético 
DIV. A solução deve ser alcançada com a utilização de looping. Ou seja, o programa deve 
apresentar como resultado (quociente) quantas vezes o divisor cabe no dividendo.  */

let dividendo = parseFloat(prompt("Digite o dividendo: "));
let divisor = parseFloat(prompt("Digite o divisor: "));
let quociente = 0;

if (divisor == 0) {
    console.log("Divisão por zero não é permitida.");
} else {
    while (dividendo >= divisor) {
        console.log("Dividendo: " + dividendo + "\nDivisor: " + divisor + "\nQuociente: " + quociente);
        alert("Dividendo: " + dividendo + "\nDivisor: " + divisor + "\nQuociente: " + quociente);
        dividendo -= divisor;
        quociente++;
        console.log('\n');
    }
    console.log("Dividendo: " + dividendo + "\nDivisor: " + divisor + "\nQuociente: " + quociente);
    alert("Dividendo: " + dividendo + "\nDivisor: " + divisor + "\nQuociente: " + quociente);
}