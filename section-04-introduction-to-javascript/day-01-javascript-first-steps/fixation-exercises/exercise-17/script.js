//Para esse programa como a finalidade é calcular o valor líquido a ser recebido à partir de um salário bruto, primeiro precisamos definir uma constante com o valor que queremos testar no salário bruto e as duas variáveis das aliquotas vazias que iram receber os valores a partir das condições que iremos estipular no proximo passo.

const grossSalary = 3000.00;
let aliquotINSS = 0;
let aliquotIR = 0;

//Na primeira condição if/else precisamos verificar se o salário sem os descontos (salário bruto) está entre alguns valores para podermos descobrir o valor da aliquota do INSS.

if (grossSalary <= 1556.94) {
    aliquotINSS = grossSalary * 0.08;
} else if (grossSalary >= 1556.95 && grossSalary <= 2594.92) {
    aliquotINSS = grossSalary * 0.09;
} else if (grossSalary >= 2594.92 && grossSalary <= 5189.82) {
    aliquotINSS = grossSalary * 0.11;
} else {
    aliquotINSS = 570.88;
}

//Após essa primeira condição e já com o valor da aliquota do INSS em mãos, criamos uma constante do salário base que vai ser o salário bruto que estipulamos lá no início subtraindo a aliquota do INSS que acabamos de obter.

const baseSalary = grossSalary - aliquotINSS;

//Com isso, podemos fazer a segunda condição if/else, que vai pegar o salário base e verificar se está entre alguns valores para podermos descobrir qual será o valor da aliquota do IR.

if (baseSalary <= 1903.98) {
    aliquotIR = 0;
} else if (baseSalary >= 1903.99 && baseSalary <= 2826.65) {
    aliquotIR = ((baseSalary * 0.075) - 142.80);
} else if (baseSalary >= 2826.66 && baseSalary <= 3751.05) {
    aliquotIR = ((baseSalary * 0.15) - 354.80);
} else if (baseSalary >= 3751.06 && baseSalary <= 4664.68) {
    aliquotIR = ((baseSalary * 0.225) - 636.13);
} else {
    aliquotIR = ((baseSalary * 0.275) - 869.36);
}

//Por fim definimos uma constante que vai receber o salário liquido, sendo o salário base subtraindo a aliquota do IR que acabamos de obter e podemos imprimir o resultado no console de qual vai ser o salário final.

const netSalary = baseSalary - aliquotIR;

console.log ("O salário líquido é de " + netSalary + " R$");