/* Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente no final o total do 
somatório e a média aritmética dos valores lidos.  */

let valor = 0;
let contadora = 1;
let valorInteiro = 0;

function somatoriaEMediaValores() {
    while (contadora <= 10) {
        valor = prompt("Digite um valor \n" + contadora + " de 10");
        valorInteiro = valorInteiro + parseInt(valor);

        console.log("Somatório atual: " + valorInteiro);
        alert("Somatório atual: " + valorInteiro);
        contadora++;
    }
}

somatoriaEMediaValores();