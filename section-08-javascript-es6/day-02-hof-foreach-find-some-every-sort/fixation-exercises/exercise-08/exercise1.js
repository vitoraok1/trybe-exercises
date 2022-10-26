const books = require('./script');

function authorBornIn1947(year) {
  const authorName = books.find((name) => name.author.birthYear === year);
  return authorName.author.name;
}

console.log(authorBornIn1947(1947));