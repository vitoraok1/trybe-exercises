const angle1 = 50;
const angle2 = 50;
const angle3 = 80;

// Além das 3 constantes representando os ângulos internos do triangulo que iremos testar, precisamos definir duas variáveis antes de começar a desenvolver a lógica. Uma que vai receber a soma dos 3 angulos que depois verificaremos se é estritamente igual a 180 (configurando um triângulo válido) e a outra que vai ser utilizada para verificar se todos ângulos são maiores que 0, ou seja positivos.

let sumOfAngles = angle1 + angle2 + angle3;
let positiveValues = angle1 > 0 && angle2 > 0 && angle3 > 0;

// Dessa forma para esse programa, precisaremos utilizar dois if, sendo um dentro do laço do outro para verificar primeiro se os ângulos são positivos para prosseguir para o próximo if que verifica se a soma dos ângulos é estritamente igual a 180, caso não atenda o primeiro requisito ele ja irá retornar no console que algum ângulo é inválido.

if (positiveValues) {
    if (sumOfAngles === 180) {
        console.log (true);
    } else {
        console.log (false);
    }
} else {
    console.log ("Erro: Algum ângulo é inválido");
}