const { encode, decode } = require('./encodeDecode');

describe('Testa as funções encode e decode', () => {
  it('Testa se encode é realmente uma função', () => {
    expect(typeof encode).toEqual('function');
  });

  it('Testa se decode é realmente uma função', () => {
    expect(typeof decode).toEqual('function');
  });

  it('Testa se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5 na função encode', () => {
    expect(encode('Eu vou ser aprovado no projeto de hoje!')).toEqual('E5 v45 s2r 1pr4v1d4 n4 pr4j2t4 d2 h4j2!');
    expect(encode('projeto unit tests')).toEqual('pr4j2t4 5n3t t2sts');
  });

  it('Testa se as se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u na função decode', () => {
    expect(decode('12345')).toEqual('aeiou');
    expect(decode('22 31 42 133')).toEqual('ee ia oe aii');
  });
});