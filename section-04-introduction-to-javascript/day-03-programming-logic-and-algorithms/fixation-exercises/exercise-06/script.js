let n = 7;
let asterisk = "*";
let inputLine = "";

// Para esse exercício também precisaremos definir as variáveis assim como no exercício anterior, entretanto que o valor da nossa base será 7 (n = 7)

let middlePosition = (n + 1) / 2;
let controlLeft = middlePosition;
let controlRight = middlePosition;

// Já no laço de repetiçao for, a estrutura vai ser semelhante ao do exercício anterior, entretanto para esse, a condição vai ser se a coluna é igual ao controle do lado esquerdo ou lado direito ou se a linha é igual a posição central, caso sim imprimimos o asterisco, caso não o espaço em vazio. Por fim imprimimos no console o resultado, zeramos a variável inputLine, acrescemos uma unidade no controle da direita e decrescemos uma unidade no controle direito antes do loop for se iniciar novamente. Dessa forma a nossa pirâmide vai se expandir para direita e esquerda até chegar ao número n da base definida no inicio.

for (let indexLine = 1; indexLine <= middlePosition; indexLine += 1) {
    for (let indexColumn = 1; indexColumn <= n; indexColumn += 1) {
        if (indexColumn == controlLeft || indexLine == middlePosition || indexColumn == controlRight) {
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