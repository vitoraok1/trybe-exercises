//Para fazermos um programa que retorne o maior de três números, faremos uma função, com três parâmetros a ser comparados (a, b, c) e uma condição if/else, para comparar e verificar qual dos números é o maior e retornar, no final podemos testar com 3 números aleatórios em um console.log

function greaterThanThree(a, b, c) {
    if(a > b && a > c) {
        return "o número " + a + " é maior que os números " + b + " e " + c;
    } else if(b > a && b > c) {
        return "o número " + b + " é maior que os números " + a + " e " + c;
    } else {
        return "o número " + c + " é maior que os números " + a + " e " + b;
    }
};

console.log(greaterThanThree(2, 6, 8));