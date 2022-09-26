//Primeiramente precisamos declarar uma variável a mais no início que vai se refererir a posição da coluna que o asteriscos serão impressos em cada linha, com o mesmo valor de n. Após isso iniciamos a estrutura do nosso laço de repetição for, que nesse caso o primeiro será referente a linha e o segundo que estará dentro dele a coluna, após isso acontece a verificação se a posição da coluna é menor que da posição desejada, no caso n(5), caso seja adicionaremos um espaço vazio na variável inputLine, caso não seja irá adicionar o asterisco a linha. Após a impressão da linha precisamos zerar a variável inputLine e descrescer a variável inputPosition em 1 para a impressão dos asteriscos começar 1 posição antes do laço atual.

let n = 5;
let inputLine = "";
let asterisk = "*";
let inputPosition = n 

for (let indexLine = 0; indexLine <= n; indexLine += 1) {
    for (let indexColumn = 0; indexColumn <= n; indexColumn += 1) {
        if (indexColumn < inputPosition) {
            inputLine += " ";
        } else {
            inputLine += asterisk;
        }
    }
    console.log(inputLine);
    inputLine = "";
    inputPosition -= 1;
}
