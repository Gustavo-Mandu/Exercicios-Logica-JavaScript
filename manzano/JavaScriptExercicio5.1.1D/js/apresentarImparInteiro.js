/* Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20. Para verificar 
se o número é ímpar, efetuar dentro da malha a verificação lógica desta condição com a instrução 
se, perguntando se o número é ímpar; sendo, mostre-o; não sendo, passe para o próximo passo.  */

let i = 0;

while(i <= 20) {
    if(!(i % 2 == 0)) {
        console.log("Número ímpar: " + i);
        alert("Número ímpar: " + i);
    }
    i++;
}

