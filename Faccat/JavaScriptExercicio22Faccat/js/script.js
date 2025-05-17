alert("Cálculo hora extra");
let horasTrabalhadas = parseFloat(prompt("Digite o total de horas trabalhadas em um mês: "));
let salarioHora = parseFloat(prompt("Digite o valor do salário por hora: "));
let horaExtra = 0;
let calculoFinal = 0;

if (horasTrabalhadas > 160) {
    horaExtra = horasTrabalhadas - 160;
    calculoFinal = salarioHora * horasTrabalhadas + salarioHora * horaExtra * 50/100;
    alert("Valor total do salário: " + calculoFinal);
} else{
    calculoFinal = salarioHora * horasTrabalhadas;
    alert("Valor total do salário: " + calculoFinal);
}