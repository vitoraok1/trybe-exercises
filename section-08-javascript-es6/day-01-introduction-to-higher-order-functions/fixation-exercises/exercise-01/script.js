const wakeUp = () => 'Acordando!!';
const coffeeTime = () => 'Bora tomar café!!';
const letsSleep = () => 'Partiu dormir!!';

const doingThings = (func) => func();

console.log(doingThings(wakeUp));
console.log(doingThings(coffeeTime));
console.log(doingThings(letsSleep));