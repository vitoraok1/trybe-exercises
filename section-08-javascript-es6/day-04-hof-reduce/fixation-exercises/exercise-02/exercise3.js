const books = require('./books');

const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook() {
  return books.reduce((biggestBook, currentBook) => {
    if (currentBook.name.length < biggestBook.name.length) {
      return biggestBook;
    }
    return currentBook;
  });
}

console.log(longestNamedBook());