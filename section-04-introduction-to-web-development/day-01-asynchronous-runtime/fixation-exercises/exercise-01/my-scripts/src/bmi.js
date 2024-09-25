const readline = require('readline-sync');

const BMI_MAX_AND_MIN = {

  'Underweight': {
    minBMI: 0,
    maxBMI: 18.4,
  },

  'Normal Weight': {
    minBMI: 18.5,
    maxBMI: 24.9,
  },

  'Overweight': {
    minBMI: 25,
    maxBMI: 29.9,
  },

  'Obese Class I': {
    minBMI: 30.0,
    maxBMI: 34.9,
  },

  'Obese Class II': {
    minBMI: 35,
    maxBMI: 39.9,
  },

  'Obese Class III': {
    minBMI: 40,
    maxBMI: 100, 
  },

};

function imcCalc(weight, height) {
  console.log(`Weight: ${weight}kg, Height: ${height}cm`);
  const heightInMeters = height / 100;

  const imc = weight / heightInMeters ** 2;

  return imc;
};

function imcSituation(imc) {
  const statuses = Object.keys(BMI_MAX_AND_MIN);

  const resultFind = statuses.find((status) => {
    const { maxBMI, minBMI } = BMI_MAX_AND_MIN[status];
    return imc >= minBMI && imc <= maxBMI;
  });

  return resultFind;
}

function main() {
  const weightInKg = readline.questionFloat('Whats your weight in kilograms?');
  const heightInCm = readline.questionInt('Whats your height in centimeters?');

  const imcFinal = imcCalc(weightInKg, heightInCm);
  const situation = imcSituation(imcFinal);
  
  console.log(`Your IMC: ${imcFinal.toFixed(2)}, Your Situation: ${situation}`);
};

main();