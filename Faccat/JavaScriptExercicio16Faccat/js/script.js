alert("Cálculo de maçãs compradas");

let valorMaca = 0;

let macasCompradas = parseInt(prompt("Digite o número de maçãs compradas: "));

if (macasCompradas <= 12) {
    valorMaca = 1.30;
} else {
    valorMaca = 1.00;
}

calculoFinal = macasCompradas * valorMaca;

alert(calculoFinal + " esse é o valor das maçãs compradas.");