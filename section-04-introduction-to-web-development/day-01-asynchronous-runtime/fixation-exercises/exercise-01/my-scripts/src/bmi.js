const weightInKg = 70;
const heightInCm = 176;

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