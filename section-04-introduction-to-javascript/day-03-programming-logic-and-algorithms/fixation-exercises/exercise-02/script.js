//Para escrever um programa que imprima asteriscos de base e altura de valor n, precisamos primeiro definir a variável n (no caso 5 passado pelo exercício), a variável que vai conter o símbolo do asterisco e a que vai receber a quantidade de asteriscos. Com isso podemos construir nossas estruturas de repetição for, a primeira que irá adicionar a variável inputLine os asteriscos e segunda que irá imprimir a quantidade de vezes necessária para formar no quadrado, nesse caso 54.

let n = 5;
let asterisk = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine = inputLine + asterisk;
}
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  console.log(inputLine);
}
