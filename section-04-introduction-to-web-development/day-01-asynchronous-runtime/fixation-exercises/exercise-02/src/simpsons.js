const fs = require('fs').promises;

async function readAll() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const eachSimpson = simpsons.map(({ id, name }) => `${id} - ${name}`);

  eachSimpson.forEach((nameAndId) => console.log(nameAndId));
}

async function main() {
  await readAll();
}

main();