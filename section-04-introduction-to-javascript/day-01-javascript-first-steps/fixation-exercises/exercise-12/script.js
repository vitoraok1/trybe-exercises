let gradeGiven = 87;

// Como as notas são dadas de 0 a 100, para esse programa primeiro precisamos definir uma condição que faça essa verificação e caso não seja atendida já retorne o resultado e não precise passar por todas as outras condições.

if (gradeGiven > 100 || gradeGiven < 0) {
    console.log ("Erro : nota inválida, o programa irá encerrar");
} else if (gradeGiven >= 90) {
    console.log ("Sua nota foi A");
} else if (gradeGiven >= 80) {
    console.log ("Sua nota foi B");
} else if (gradeGiven >= 70) {
    console.log ("Sua nota foi C");
} else if (gradeGiven >= 60) {
    console.log ("Sua nota foi D");
} else if (gradeGiven >= 50) {
    console.log ("Sua nota foi E");
} else {
    console.log ("Sua nota foi F");
}