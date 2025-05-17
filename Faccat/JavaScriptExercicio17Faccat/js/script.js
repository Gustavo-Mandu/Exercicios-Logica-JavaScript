alert("Cálculo de média simples");

let nota1 = parseInt(prompt("Digite a primeira nota: "));
let nota2 = parseInt(prompt("Digite a segunda nota: "));

let calcMedia = (nota1 + nota2) / 2;

if (calcMedia >= 6) {
    alert("Aluno aprovado");
} else {
    alert("Aluno reprovado");
}