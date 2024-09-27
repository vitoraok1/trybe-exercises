let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Para ordernar os valores da array em ordem crescente, podemos utilizar o laço de repetição for que dentro de cada iteração irá percorrer toda array comparando os pares e em cada comparação realocando do menor para o maior. A utilização de dois laços for (um no escopo do outro) é para verificar dois valores de cada vez e comparar, já o if é a condição para caso seja atendida reordene esses valores, trocando de posição.

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < numbers.length; secondIndex += 1) {
        if (numbers[index] < numbers[secondIndex]) {
            let position = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = position;
        }
    }
}

console.log(numbers);

//Já para ordenar em forma decrescente utilizamos a mesma lógica, com a diferença que na condição if, caso o primeiro valor seja maior que o segundo mantemos ele na posição atual e o laço segue comparando as outras duas duplas assim por diante.

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < numbers.length; secondIndex += 1) {
        if (numbers[index] > numbers[secondIndex]) {
            let position = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = position;
        }
    }
}

console.log(numbers);

//Para obtermos os valores multiplicados da array (o primeiro com o segundo, segundo com o terceiro e assim por diante) primeiro precisamos definir uma array vazia que vai receber os novos valores, após isso utilizando o laço de repetição for e a condição if/else criamos uma lógica que vai passar por cada valor, verificar se o próximo valor (index + 1) ainda é menor que o comprimento da array, caso sim adicionar pelo método push na array criada fazendo a multiplicação desses dois números e partindo para os próximos. Chegando no ultimo valor da array ele irá multiplicar o valor por 2 e terminar o loop retornando no console os novos valores da array.

let multipliedArray = [];

for (let index = 0; index < numbers.length; index += 1) {
    if (index + 1 < numbers.length) {
      multipliedArray.push(numbers[index] * numbers[index + 1]);
    } else {
      multipliedArray.push(numbers[index] * 2);
    }
  }

console.log(multipliedArray);