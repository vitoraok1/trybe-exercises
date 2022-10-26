const books = require('./books');

const formatedBookNames = (booksArray) => booksArray.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);

console.log(formatedBookNames(books));