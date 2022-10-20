const { encode, decode } = require('./encodeDecode');

describe('Testa as funções encode e decode', () => {
  it('Testa se encode é realmente uma função', () => {
    expect(typeof encode).toEqual('function');
  });

  it('Testa se decode é realmente uma função', () => {
    expect(typeof decode).toEqual('function');
  });
});