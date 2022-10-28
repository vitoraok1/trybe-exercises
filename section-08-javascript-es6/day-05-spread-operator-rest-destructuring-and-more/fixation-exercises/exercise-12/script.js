const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

const toObject = (array) => {
  const [carName, brandName, yearModel] = array;
  return {
    name: carName,
    brand: brandName,
    year: yearModel,
  }
}

console.log(toObject(chiron));