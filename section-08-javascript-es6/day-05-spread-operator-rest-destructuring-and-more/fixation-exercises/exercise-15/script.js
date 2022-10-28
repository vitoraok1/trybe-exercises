const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};
// yearSeasons: estações do ano.

const monthsOfYear = () => {
  const {spring, summer, autumn, winter} = yearSeasons;
  const returnArray = [...spring, ...summer, ...autumn, ...winter];
  return returnArray;
}

console.log(monthsOfYear());