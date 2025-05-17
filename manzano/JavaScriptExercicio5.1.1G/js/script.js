/*
Escreva um programa que apresente a série de Fibonacci até o décimo quinto termo. A série de 
Fibonacci é formada pela seqüência: 1, 1, 2, 3, 5, 8, 13, 21, 34, ..., etc. Esta série se caracteriza 
pela soma de um termo atual com o seu anterior subseqüente, para que seja formado o próximo 
valor da seqüência. Portanto começando com os números 1, 1 o próximo termo é 1+1=2, o próximo 
é 1+2=3, o próximo é 2+3=5, o próximo 3+5=8, etc.  */

let fibonacci = 0;
let temp = 1;
let temp0 = 0;
let contadora = 1;

function sequenciaFibonacci() {
    while(contadora <= 15){
        if (fibonacci == 0) {
            fibonacci++;
            alert("Fibonacci: " + fibonacci);
            console.log("Fibonacci: " + fibonacci);
            contadora++;
        }
        if (fibonacci == 1) {
            alert("Fibonacci: " + fibonacci);
            console.log(fibonacci);
            fibonacci++;
            contadora++;
        } else {
            temp0 = fibonacci; // temp0 = 8
            fibonacci += temp; // fibonacci = 8 + 5
            temp = temp0; // temp = 8
        }
        console.log("Fibonacci: " + fibonacci);
        alert("Fibonacci: " + fibonacci);
        contadora++;
    }
}

sequenciaFibonacci();