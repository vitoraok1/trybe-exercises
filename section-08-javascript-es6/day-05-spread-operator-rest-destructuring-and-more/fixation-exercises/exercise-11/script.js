const myList = [5, 2, 3];
const [firstNumber, secondNumber, thirdNumber] = myList;

const swap = (paramList) => [thirdNumber, secondNumber, firstNumber];

console.log(swap(myList));