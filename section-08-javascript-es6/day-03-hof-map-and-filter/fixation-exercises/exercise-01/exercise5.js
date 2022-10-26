const books = require('./books');

const fantasyOrScienceFictionAuthors = (booksArray) => {
  return booksArray
    .filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia')
    .map((book) => book.author.name).sort();
};

console.log(fantasyOrScienceFictionAuthors(books));