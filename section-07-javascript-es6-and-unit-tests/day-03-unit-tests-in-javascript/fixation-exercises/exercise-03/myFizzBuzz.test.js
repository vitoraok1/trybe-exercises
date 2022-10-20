const myFizzBuzz = require('./myFizzBuzz');

describe ('Testando a função myFizzBuzz', () => {
  it ('Verificando se um número divisível por 3 e 5 retorna fizzbuzz', () => {
    expect (myFizzBuzz(15)).toBe('fizzbuzz');
    expect (myFizzBuzz(30)).toBe('fizzbuzz');
  })
});