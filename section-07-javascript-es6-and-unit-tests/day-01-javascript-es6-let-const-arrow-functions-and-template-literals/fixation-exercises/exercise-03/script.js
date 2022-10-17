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

// Using array.sort()

const longestWordNew = phrase => phrase.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(`A maior palavra é ${longestWordNew(phrase)}`);