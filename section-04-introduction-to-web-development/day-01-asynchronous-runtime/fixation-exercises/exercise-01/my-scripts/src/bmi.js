const readline = require('readline-sync');

const weightInKg = readline.questionFloat('Whats your weight in kilograms?');
const heightInCm = readline.questionInt('Whats your height in centimeters?');

function imcCalc(weight, height) {
  console.log(`Weight: ${weight}kg, Height: ${height}cm`);
  const heightInMeters = height / 100;

  const imc = weight / heightInMeters ** 2;

  return imc;
};

function main() {
  const imcFinal = imcCalc(weightInKg, heightInCm);

  console.log(`Your IMC: ${imcFinal.toFixed(2)}`);
};

main();