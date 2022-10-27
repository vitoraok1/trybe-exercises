const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

function containsA() {
  let wordSum = 0;
  names.forEach((name) => {
    const letters = name.split('');
    wordSum += letters.reduce((sum, letter) => {
      if (letter.toLowerCase() === 'a') {
        return sum + 1;
      }
      return sum;
    }, 0);
  });
  return wordSum;
};

console.log(containsA());