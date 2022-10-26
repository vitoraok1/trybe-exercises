const books = require('./script');

function getNamedBook() {
  return books.find((book) => book.name.length === 26);
};

console.log(getNamedBook());