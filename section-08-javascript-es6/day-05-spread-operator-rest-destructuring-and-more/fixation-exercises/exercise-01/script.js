// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Mamão', 'Melancia', 'Melão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Maça', 'Banana', 'Ameixa'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));