//Para criarmos um programa que mediante a 3 ângulos retorne se é um triângulo ou não, precisamos criar uma função que receba 3 parâmetros (angle1, angle2, angle3), criamos uma variável que vai receber a soma desses ângulos e após isso utilizarmos a condição if/else para verificar se essa soma é estritamente igual 180 ou não, retornando true e false. Por fim podemos testar a função com 3 valores aleatórios e imprimindo no console.log.

function triangleCheck(angle1, angle2, angle3) {
    let angleSum = angle1 + angle2 + angle3;
    if(angleSum === 180) {
        return true;
    } else {
        return false;
    }
};

console.log(triangleCheck(20, 40, 100));