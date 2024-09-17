const books = require('./books');

const nameAndAge = (booksArray) => {
  const arrayBooks = booksArray.map((book) => (
    {
    author:  book.author.name,
    age: book.releaseYear - book.author.birthYear,
    }
  ));
  return arrayBooks.sort((a, b) => a.age - b.age);
};

console.log(nameAndAge(books));