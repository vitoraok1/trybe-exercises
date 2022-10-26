const books = require('./books');

const fantasyOrScienceFiction = (booksArray) => {
  return booksArray.filter((book) => {
    return book.genre === 'Ficção Científica' || book.genre === 'Fantasia'
  });
};

console.log(fantasyOrScienceFiction(books));