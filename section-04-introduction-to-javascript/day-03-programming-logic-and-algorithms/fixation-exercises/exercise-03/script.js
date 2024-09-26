// Para fazer um programa que imprima um triângulo retângulo como do exercício, assim como no exercício anterior vamos declarar as variáveis inputLine (linhas do triângulo) e a asterisk (que recebe o símbolo). Após isso podemos iniciar o loop de repetição for que vai imprimir cada linha de asterisco, iniciando em 1 asterisco até chegar ao número definido na variável n.

let n = 5;
let inputLine = "";
let asterisk = "*";

for (let index = 0; index < n; index += 1) {
    inputLine += asterisk;
    console.log(inputLine);
}