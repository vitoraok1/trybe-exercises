const books = require('./books');

const oldBooksOrdered = (booksArray) => {
  const actualYear = new Date().getFullYear();
  
  return booksArray.filter((book) => (
    actualYear - book.releaseYear >= 60))
    .sort((a, b) => a.releaseYear - b.releaseYear);
};

console.log(oldBooksOrdered(books));