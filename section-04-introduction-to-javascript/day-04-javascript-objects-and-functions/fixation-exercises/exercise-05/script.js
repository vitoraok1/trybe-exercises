// Para criarmos um programa que verifique se um parâmetro é positivo, negativo ou zero, precisamos criar uma função que receba um parâmetro (number) com algumas condições if/else para verificar se esse parâmetro é maior que 0, menor ou igual e retornar o resultado. Por fim podemos testar com um valor aleatório no console.log.

function positiveOrNegative(number) {
    if(number > 0) {
        return "positive";
    } else if(number < 0) {
        return "negative";
    } else {
        return "zero";
    }
};

console.log(positiveOrNegative(-5));