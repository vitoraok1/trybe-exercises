// Para fazermos um programa que verifica se um número definido em uma variável é primo (divisível somente por 1 e ele mesmo) ou não, primeiro definimos duas variáveis, uma que vai receber o numero que vamos verificar se é primo, e a outra que vai receber quantos divisores esse número é primo (começaremos com o valor 2, pois todo número é divisível por ele mesmo e por 1 pelo menos). Depois disso podemos iniciar nosso loop for, com o index começando na posição 2 (pois os números primos começam a partir do 1) e indo até o valor do numero que iremos checar, o caso 97. Estruturamos a condição if, com caso o numero que estamos verificando, seja divisível pelo index, irá adicionar mais um divisor para esse número, e fora desse for podemos estipular mais um if/else que verifica se a quantidade de divisores configura o número como primo ou não e retorna no console.

let checkNumber = 97;
let divisors = 2;

for (let index = 2; index <= checkNumber; index += 1) {
  if (checkNumber % index === 0) {
    divisors += 1;
  }

};

if (divisors > 3)  {
  console.log(checkNumber + ' não é primo');
} else {
  console.log(checkNumber + ' é primo');
};
