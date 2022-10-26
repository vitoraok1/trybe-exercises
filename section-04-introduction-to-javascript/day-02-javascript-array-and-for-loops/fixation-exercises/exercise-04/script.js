let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// // // //Para percorrer todos os valores do array utilizamos o laço de repetição for e após isso imprimimos os valores com o console.log

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}

// // //Para somar todos valores contidos na array numbers, primeiro precisa se criar uma variável que vai receber o valor, após isso utiliza-se novamente o laço de repetição for com a diferença de que nesse caso, após cada número, é somado e adicionado a variável soma que criamos fora do laço. Depois de passar por todos números da array o laço se encerra e o console.log retorna a soma total.

let sum = 0;

for (let indexSum = 0; indexSum < numbers.length; indexSum += 1) {
    sum = sum + numbers[indexSum];
}

console.log(sum);

// // //Para calcular a média artimética, precisamos saber o resultado da soma de todos elementos (que já consiguimos no exercício anterior, na variável soma) e dividir pelo numero de elementos da array, dito isto, primeiramente precisamos definir uma variável que vai receber o resultado da media, após isso fazer o laço de repetição só que agora o resultado vai ser a divisão da soma pelo número de elementos da array (no caso 10) e por fim o retorno do resultado no console.

let arithmeticAverage = 0;

for (let indexAverage = 0; indexAverage < numbers.length; indexAverage += 1) {
    arithmeticAverage = sum / numbers.length
}

console.log(arithmeticAverage);

// // Para obter-se duas mensagens distintas dependendo do resultado da media, utilizamos if/else definindo o parâmetro exigido pelo exercício.

if (arithmeticAverage > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor ou igual a 20")
}

// // //Para obter-se o maior número da array numbers, primeiro é preciso criar uma varíavel maior valor com o valor numbers[0], ou seja, que vai tomar partido como se o primeiro valor fosse o maior, para assim iniciar o loop e ir verficando de um em um. Com o if consiguimos estipular que caso o valor verificado seja maior que o atual ele é substituido pelo mesmo, dessa forma até chegar ao ultimo valor e encerrar o laço. Por fim utilizamos o console.log para imprimir o resultado.

let highestValue = numbers[0];

for (let indexValue = 1; indexValue < numbers.length; indexValue += 1) {
    if (numbers[indexValue] > highestValue) {
        highestValue = numbers[indexValue];
    }
}

console.log(highestValue);

// // //Para descobrir quantos valores ímpares existem na array, assim como nos exercícios anteriores precisamos primeiro definir uma variável com valor 0 que vai receber caso exista a quantidade de números ímpares. Depois é utilizado o laço de repetição for com o if/else para verificar se cada número divido por 2 tem o resultado diferente de 0 (configurando que o número é impar) caso seja verdade é adicionado a variável. O segundo if/else é usado para retornar a mensagem caso o conteúdo seja diferente de 0 ou não.

let oddValues = 0;

for (let indexOdd = 0; indexOdd < numbers.length; indexOdd += 1) {
    if (numbers[indexImpares] % 2 !== 0) {
        oddValues = oddValues + 1;
    } 
}

if (oddValues === 0) {
    console.log("Nenhum valor ímpar encontrado");
} else {
    console.log(oddValues);
}

// // //Para descobrir o menor valor da array a lógica é igual a que utilizamos pro maior valor, a diferença se aplica somente na parte do if que ele vai passar por cada número verificando qual é menor que o atual.

let lowerValue = numbers[0];

for (let indexLower = 1; indexLower < numbers.length; indexLower += 1) {
    if (numbers[indexLower] < lowerValue) {
        lowerValue = numbers[indexLower];
    }
}

console.log(lowerValue);

//Para se criar uma nova array utilizando o laço de repetição for, primeiro precisamos definir uma nova array vazia para receber os valores, após isso fazemos o laço e utilizamos o .push pra ir adicionando 1 valor em cada repetição a array vazia, por ultimo imprimos o resultado da array no console.

let newArray = [];

for (let indexArray = 1; indexArray <= 25; indexArray += 1) {
    newArray.push(indexArray);
}

console.log(newArray);

//Para obter-se a divisão de cada elemento da array obtida anteriormente podemos utilizar novamente o laço for e retornar com o console.log dividindo por 2.

for (let indexDiv = 0; indexDiv < newArray.length; indexDiv += 1) {
    console.log(newArray[indexDiv] / 2);
}