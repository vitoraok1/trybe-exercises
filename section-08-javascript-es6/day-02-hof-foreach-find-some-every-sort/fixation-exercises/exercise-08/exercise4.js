const books = require('./script');

function booksOrderedByReleaseYearDesc() {
  return books.sort((a, b) => b.releaseYear - a.releaseYear)
};

console.log(booksOrderedByReleaseYearDesc())