const books = require('./books');

const authorWith3DotsOnName = (booksArray) => {
  return booksArray.find((book) => (
      book.author.name[1] === '.' &&
      book.author.name[4] === '.' &&
      book.author.name[7] === '.'
    )).name;
}

console.log(authorWith3DotsOnName(books));