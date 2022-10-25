const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  const returnAges = arr.every((name) => name.age >= minimumAge);

  if (returnAges) {
    return `Todos da lista possuem idade maior ou igual a ${minimumAge}`;
  } else {
    return `Nem todos da lista possuem idade maior ou igual a ${minimumAge}`;
  }
};

console.log(verifyAges(people, 18));