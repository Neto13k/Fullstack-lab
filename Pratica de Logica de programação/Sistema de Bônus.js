/*
EXERCÍCIO 01: Sistema de Bônus de Funcionário

OBJETIVO:
Desenvolver um algoritmo que calcule o bônus anual e o salário final 
de um funcionário com base no seu tempo de serviço e salário atual.

REGRAS DE NEGÓCIO:
1. O programa deve receber: Nome do funcionário, Salário atual e Anos de empresa.
2. Cálculo do Bônus:
   - Se o funcionário tem 5 anos ou mais de empresa: Bônus de 20% sobre o salário.
   - Se o funcionário tem menos de 5 anos de empresa: Bônus de 10% sobre o salário.
3. Taxa Administrativa:
   - Se o salário atual for superior a R$ 5.000,00, deve-se subtrair uma taxa 
     fixa de R$ 100,00 do valor total final.

SAÍDA ESPERADA:
- Exibir o Nome do funcionário.
- Exibir o Valor do Bônus Bruto (em reais).
- Exibir o Salário Final (Salário Atual + Bônus - Taxas).
*/


let salary;
do {
  let inputSalary = prompt("Digite seu salário em reais:");
  if (inputSalary === null) break; // Sai do loop se clicar em cancelar
  salary = Number(inputSalary);

  if (isNaN(salary) || inputSalary.trim() === "" || salary <= 0) {
    alert("Erro! Por favor, insira um salário válido maior que zero.");
  }
} while (isNaN(salary) || salary <= 0);

let Years;
do {
  let inputYears = prompt("Digite seu tempo de empresa (anos):");
  if (inputYears === null) break;
  Years = Number(inputYears);

  if (isNaN(Years) || inputYears.trim() === "" || Years < 0) {
    alert("Erro! Por favor, insira um tempo válido.");
  }
} while (isNaN(Years) || Years < 0);

let bonus;
if (Years >= 5) {
  bonus = salary * 0.20; 
} else {
  bonus = salary * 0.10; 
}

let TotalValue;
if (salary > 5000) {
  TotalValue = salary + bonus - 100;
} else {
  TotalValue = salary + bonus;
}

console.log(`O valor total recebido por ${Name} será de R$ ${TotalValue.toFixed(2)}`);