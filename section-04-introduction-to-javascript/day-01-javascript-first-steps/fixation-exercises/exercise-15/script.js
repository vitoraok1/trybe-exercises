const numberA = 3;
const numberB = 14;
const numberC = 22;

//Criação de uma variável isOdd("é ímpar") com valor "false" para que utilizando somente um if pedido pelo exercício consigamos retornar se algum dos números é ou não ímpar.

let isOdd = false;

if (numberA % 2 !== 0 || numberB % 2 !== 0 || numberC % 2 !== 0) {
    isOdd = true;
};

console.log (isOdd);