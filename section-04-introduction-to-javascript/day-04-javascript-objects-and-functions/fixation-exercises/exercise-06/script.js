//Para criarmos um programa que mediante a 3 ângulos retorne se é um triângulo ou não, precisamos criar uma função que receba 3 parâmetros (angle1, angle2, angle3), criamos uma variável que vai receber a soma desses ângulos, e outra variável para checar se os 3 ângulos são positivos, após isso utilizarmos a primeira condição if/else para verificar se a variável que verifica se os ângulos são positivos é true, caso sim a função continua pelo segundo if/else que faz a verificação se as somas dos ângulos é 180, caso os ângulos não sejam positivos, ele retorna a mensagem de erro. Por fim podemos testar a função com 3 valores aleatórios e imprimindo no console.log.

function triangleCheck(angle1, angle2, angle3) {
    let angleSum = angle1 + angle2 + angle3;
    let anglesPositiveCheck = angle1 > 0 && angle2 > 0 && angle3 > 0;

    if(anglesPositiveCheck) {
        if(angleSum === 180) {
            return true;
        } else {
            return false;
        }
    } else {
        return 'Erro: ângulo inválido';
    }
};

console.log(triangleCheck(-20, 40, 100));