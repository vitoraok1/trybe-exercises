const sum = require(`./sum`);

describe('Teste se o retorno de sum(4, 5) é 9', () => {
  it('Deve retornar o resultado da soma de 4 + 5 que é igual a 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('Deve retornar o resultado da soma de 0 + 0 que é igual a 0', () => {
    expect(sum(0, 0)).toBe(0);
  })
});
