const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
      console.log(elseScope);
    }

  }

  testingScope(true);


const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (numbersArray) => {
    const sortNumbers = numbersArray.sort((a, b) => a - b);
    return sortNumbers;
}

console.log(`Os números ${sortOddsAndEvens(oddsAndEvens)} se encontram ordenados de forma crescente!`);