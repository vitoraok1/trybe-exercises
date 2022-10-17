const phrase = 'Antônio foi ao banheiro e não sabemos o que aconteceu';

const longestWord = (phrase) => {
  let wordsArray = phrase.split(' ');
  let wordLength = 0;
  let result = [];

  for (const word of wordsArray) {
    if (word.length > wordLength) {
      wordLength = word.length;
      result = word;
    }
  }
  return result;
}

console.log(`A maior palavra é ${longestWord(phrase)}`);