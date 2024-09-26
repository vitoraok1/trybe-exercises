let n = 5;
let asterisk = "*";
let inputLine = "";

// Para esse exercício primeiro precisamos definir uma variável que vai receber a posição central da nossa pirâmide, para isso podemos fazer n (tamanho da base) + 1 / 2 e como a altura da nossa pirâmide vai ser da mesma altura do centro dela, podemos declarar as variáveis de controle para esquerda e direita como a posição do meio.

let middlePosition = (n + 1) / 2;
let controlLeft = middlePosition;
let controlRight = middlePosition;

// Já no laço de repetiçao for, a estrutura vai ser semelhante ao do exercício anterior, entretanto para esse, precisamos estipular que o laço inicial vai continuar o loop até o indice da linha ser menor ou igual a posição central e a condição vai ser se a coluna é maior que o controle esquerdo e menor que o direito, caso sim imprimimos o asterisco, caso não o espaço em vazio. Por fim imprimimos no console o resultado, zeramos a variável inputLine, acrescemos uma unidade no controle da direita e decrescemos uma unidade no controle direito antes do loop for se iniciar novamente. Dessa forma a nossa pirâmide vai se expandir para direita e esquerda até chegar ao número n da base definida no inicio.

for (let indexLine = 0; indexLine <= middlePosition; indexLine += 1) {
    for (let indexColumn = 0; indexColumn <= n; indexColumn += 1) {
        if (indexColumn > controlLeft && indexColumn < controlRight) {
            inputLine += asterisk;
        } else {
            inputLine += " ";
        }
    }
    console.log(inputLine);
    inputLine = "";
    controlRight += 1;
    controlLeft -= 1;
};

