//Primeiro precisamos criar uma constante currentHour com um valor aleatório que testará se nosso código está funcionando e a variável message que vai receber o resultado da condição, por isso a princípio pode estar vazia.

const currentHour = 17;
let message = "";

// Utilização da condição if/else e o operador && (and) para determinar os parâmetros pedidos pelo exercício e consequentemente a impressão dos resultados correspondentes.


if(currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
}
else if(currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
}
else if(currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?"
}
else if(currentHour >= 11 && currentHour <= 14) {
    message = "Hora do almoço!!";
}
else {
    message = "Hmmm, cheiro de café recém-passado"
}

console.log(message);