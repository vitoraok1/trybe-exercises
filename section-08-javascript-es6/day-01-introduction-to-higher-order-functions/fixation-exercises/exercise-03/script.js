const verifyNumber = (myNumber, number) => myNumber === number;

const prizeDraw = (myNumber, callback) => {
  const numDraw = Math.floor(Math.random() * (5 - 1 + 1) + 1);

  if (callback(myNumber, numDraw)) {
    return 'Parabéns você ganhou'
  } else {
    return 'Tente novamente';
  }
};

console.log(prizeDraw(2, verifyNumber));