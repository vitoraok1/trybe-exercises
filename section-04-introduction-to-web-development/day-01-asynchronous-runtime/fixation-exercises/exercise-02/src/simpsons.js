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

async function filterSimpsonsById(id) {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const filterSimpson = simpsons.filter((simpson) => Number(simpson.id) !== id[0] && Number(simpson.id) !== id[1]);

  await fs.writeFile('./simpsons.json', JSON.stringify(filterSimpson));
}

async function createNewSimpsonsFile() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const newSimpsons = simpsons.filter((simpson) => Number(simpson.id) >= 1 && Number(simpson.id) <= 4);

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(newSimpsons));
}

async function addNewSimpson() {
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  simpsons.push({ id: '8', name: 'Nelson Muntz'});
  
  await fs.writeFile( './simpsonsFamily.json', JSON.stringify(simpsons));
}

async function main() {
  // await readAll();
  // const answerId = 2;
  // const getSimpson = await getSimpsonById(answerId);
  // console.log(getSimpson);
  // const filterIds = [10, 6];
  // const filteredSimpson = await filterSimpsonsById(filterIds);
  // return filteredSimpson;
  // createNewSimpsonsFile();
  addNewSimpson();
}

main();