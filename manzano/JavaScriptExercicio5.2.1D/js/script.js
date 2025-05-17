

/* Elaborar um programa que efetue o cálculo e no final apresente o somatório do número de grãos de 
trigo que se pode obter num tabuleiro de xadrez, obedecendo à seguinte regra: colocar um grão de 
trigo no primeiro quadro e nos quadros seguintes o dobro do quadro anterior. Ou seja, no primeiro 
quadro coloca-se 1 grão, no segundo quadro colocam-se 2 grãos (neste momento têm-se 3 grãos), 
no terceiro quadro colocam-se 4 grãos (tendo neste momento 7 grãos), no quarto colocam-se 8 
grãos (tendo-se então 15 grãos) até atingir o sexagésimo quarto (64o) quadro. Utilize variáveis do 
tipo real 
como acumuladores. */

let quadros = 1;
let graos = 0;
let graosTotais = 0;

do {
    if (graos != 0) {

        graos = (graos * 2);
        graosTotais += graos;

        console.log("Quantidade de grãos: " + graos + " quadro n° " + quadros);
        console.log("Quantidade de grãos totais: " + graosTotais);
        console.log('\n');
    } else {
        graos = graos + 1;
        graosTotais++;
        console.log("Primeiro grão: " + graos + " quadro n° " + quadros);
    }
    quadros++;
} while (quadros <= 64);