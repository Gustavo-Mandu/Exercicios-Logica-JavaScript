/* Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).  */

let i = 1;
let soma = 0;
let resultado = 0;

    while(i <= 100) {
        soma = soma + i;
        console.log(soma);
        i++;
    }

    alert("Valor total da soma: " + soma);