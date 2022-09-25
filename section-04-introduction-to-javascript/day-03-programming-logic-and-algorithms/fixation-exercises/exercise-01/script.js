// //Para criarmos um algoritmo que imprima o fatorial do número 10, primeiro precisamos definir a variável com valor inicial (nesse caso 1 pois se trata de uma multiplicação), dessa forma utilizando o loop for, estipulamos que o index comece em 10 vá adicionando a variável que criamos fora do laço, decrescendo e multiplicando até chegar em 1 (10 * 9 * 8 * 7 e consecutivamente). Por final imprimos o resultado com um console.log.

let factorial = 1;

for (let index = 10; index > 0; index -= 1) {
    factorial = factorial * index
}

console.log("O fatorial de 10 é " + factorial);

// //Para criarmos um algoritmo que consiga inverter uma palavra fornecedida primeiro precisamos criar uma variável com uma string vazia que irá receber a palavra ao contrário. Já no loop for, seguimos a estrutura básica, com a diferença que adicionaremos as letras uma de cada vez do final para o começo, por isso "word.length - 1 - index"

let word = "tryber";
let reverseWord = "";

for (let index = 0; index < word.length; index += 1) {
    reverseWord = reverseWord + word[word.length - 1 - index];
}

console.log(reverseWord);

//Para esse exercício podemos fazer de duas formas criar duas estruturas de repetição for, uma para checar a maior palavra da array e a outra para a menor palavra ou como se trata da mesma array de objetos fazermos no mesmo loop for. Primeiro definimos as arrays que irão receber os valores, após isso criamos a estrutura for que irá percorrer nossa array e utilizar o if para comparar índice por índice para ver qual o menor ou maior e adicionar nas arrays anteriormente criadas. No final do laço imprimimos os dois resultados pelo console.log.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggerWord = [];
let smallerWord = array[0];

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > biggerWord.length) {
      biggerWord = array[index];
    } 
    if (array[index].length < smallerWord.length) {
        smallerWord = array[index];
    }
}

console.log("A maior palavra é " + biggerWord);
console.log("A menor palavra é " + smallerWord);

// Sabendo que um número primo é um número divisível somente por ele mesmo e por 1, precisamos desenvolver um algoritmo que verifique um a um os números de 2 a 50 quais atendem esse requisito para podermos obter o maior número dentre eles. Primeiramente definimos uma variável que vai receber o maior numero primo com valor inicial 0, após isso podemos iniciar nossa estrutura de loop for para o número e dentro do laço definimos a variável isPrime com valor inicial de true e o segundo for para o número divisor com uma condição if caso o restante da divisão entre o número e o divisor seja igual a 0 ele não é considerado um número primo e retorna para o segundo loop for acrescentando + 1 e repetindo a verificação. Dessa forma no final a variável criada vai conter somente o maior número primo dentre 2 e 50.

let biggerPrimeNumber = 0;

for (let indexNumber = 2; indexNumber <= 50; indexNumber += 1) {
    let isPrime = true;
    for (let indexDivisor = 2; indexDivisor < indexNumber; indexDivisor += 1) {
        if (indexNumber % indexDivisor === 0) {
            isPrime = false;
    }
}
    if (isPrime) {
        biggerPrimeNumber = indexNumber;
    }
} 

console.log(biggerPrimeNumber);
