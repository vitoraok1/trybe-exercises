//Para fazermos um programa que retorne o maior de dois números, faremos uma função, com dois parâmetros a ser comparados (a, b) e uma condição if/else, para caso o número a seja maior que b retornar um resultado, e caso seja o inverso também. Para testarmos podemos imprimir o resultado com dois números aleatórios num console.log.

function greaterThanTwo(a, b) {
    if(a > b) {
        return "o número " + a + " é maior que o número " + b;
    } else {
        return "o número " + b + " é maior que o número " + a;
    }
};

console.log(greaterThanTwo(2, 6));