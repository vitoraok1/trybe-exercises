const fs = require('fs').promises;

async function readAll() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const eachSimpson = simpsons.map(({ id, name }) => `${id} - ${name}`);

  eachSimpson.forEach((nameAndId) => console.log(nameAndId));
}

async function getSimpsonById(id) {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const findSimpson = simpsons.find((simpson) => Number(simpson.id) === id);

  if (!findSimpson) {
    throw new Error('id não encontrado');
  }

  return findSimpson;
}

async function main() {
  // await readAll();
  const answerId = 2;
  const getSimpson = await getSimpsonById(answerId);
  console.log(getSimpson);
}

main();