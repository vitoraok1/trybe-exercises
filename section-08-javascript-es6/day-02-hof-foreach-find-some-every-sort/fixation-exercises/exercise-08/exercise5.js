const books = require('./script');

function everyoneWasBornOnSecXX() {
  return books.every((book) => book.author.birthYear >= 1901 && book.author.birthYear <= 2000)
};

console.log(everyoneWasBornOnSecXX())