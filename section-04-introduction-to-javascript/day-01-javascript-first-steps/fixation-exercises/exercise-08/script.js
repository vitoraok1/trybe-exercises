const a = 5;
const b = 8;
const c = 4;

//Nesse caso precisamos além de usar a condição if/else, o perador de comparação (>) e o operador lógico (&& - and).

if (a > b && a > c) {
    console.log("O número a é o maior de todos");
} else if (b > a && b > c) {
    console.log("O número b é o maior de todos");
} else {
    console.log("O número c é o maior de todos");
} 