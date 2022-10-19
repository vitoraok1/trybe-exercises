const sum = require(`./sum`);

describe('Teste se o retorno de sum(4, 5) é 9', () => {
  it('Deve retornar o resultado da soma', () => {
    expect(sum(4, 5)).toBe(9);
  });
});
