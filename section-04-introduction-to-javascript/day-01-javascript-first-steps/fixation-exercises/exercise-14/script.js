const numberA = 14;
const numberB = 7;
const numberC = 9;

//Criação de uma variável isEven ("é par") com valor "false" para que utilizando somente um if pedido pelo exercício consigamos retornar se algum dos números é ou não par.

let isEven = false;

if (numberA % 2 === 0 || numberB % 2 === 0 || numberC % 2 === 0) {
    isEven = true;
};

console.log (isEven);