/* Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser 
considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que 
neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^).  */

let resultado = 0;
let expoente = 0;

function potenciaDe3() {
    while (expoente <= 15) {

        if (expoente == 0) {
            resultado = 1;
        } else
            if (expoente == 1) {
                resultado = 3;
            } else {
                resultado = resultado * 3;
            }

        console.log("3 ^ " + expoente + " é igual a: " + resultado);
        alert("3 ^ " + expoente + " é igual a: " + resultado);
        expoente++;
    }
}

potenciaDe3();