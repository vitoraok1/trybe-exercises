const books = require('./books');

const expectedResult = 43;

function averageAge() {
  const releasedBooks = books.length;
  const sumOfAges = books.reduce((acc, curr) => (
    acc + (curr.releaseYear - curr.author.birthYear)
  ), 0);
  return sumOfAges / releasedBooks;
}

console.log(averageAge());