const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  const returnName = arr.some((names) => names === name);

  if (returnName) {
    return `O nome ${name} está presente na lista VIP`;
  } else {
    return `O nome ${name} não está presente na lista VIP`;
  }
};

console.log(hasName(names, 'Ana'));