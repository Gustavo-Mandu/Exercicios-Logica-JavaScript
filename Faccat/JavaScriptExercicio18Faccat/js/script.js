alert("Validação de voto");

let anoAtual = parseFloat(prompt("Digite o ano atual (sem abreviar): "));
let anoDeNascimento = parseFloat(prompt("Digite o seu ano de nascimento: "));

calculoFinal = anoAtual - anoDeNascimento;

if (calculoFinal >= 16) {
    alert("Pode votar");
} else if (calculoFinal > 0){
    alert("Não pode votar");
} else {
    alert("Valor inválido")
}