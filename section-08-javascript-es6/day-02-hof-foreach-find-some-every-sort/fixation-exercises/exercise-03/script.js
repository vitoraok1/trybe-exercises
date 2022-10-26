const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  const returnName = names.find((name) => name.length === 5);
  return `O primeiro nome com 5 letras é: ${returnName}`;
};

console.log(findNameWithFiveLetters());