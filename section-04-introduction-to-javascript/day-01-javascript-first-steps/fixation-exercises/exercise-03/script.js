const personTestGrade = 86;

// Utilização da condição if/else para determinar os parâmetros pedidos pelo exercício e consequentemente a impressão dos resultados correspondentes.

if (personTestGrade >= 80) {
    console.log("Parabéns, você foi aprovado(a)");
}
else if (personTestGrade < 80 && personTestGrade >= 60) {
    console.log("Você está na nossa lista de espera");
}
else {
    console.log("Você foi reprovado(a)");
}