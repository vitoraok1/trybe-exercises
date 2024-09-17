const books = require('./books');

const oldBooks = (booksArray) => {
  const actualYear = new Date().getFullYear();
  return booksArray
    .filter((book) => actualYear - book.releaseYear >= 60)
    .map((book) => book.name)
};

console.log(oldBooks(books));