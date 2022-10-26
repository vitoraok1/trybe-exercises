# Exercise 04

- Consider the code below to perform the next exercise:

```
const vogais = ['a', 'e', 'i', 'o', 'u'];
const code = [1, 2, 3, 4, 5];

function encode(text) {
  const caracters = text.split('');
  caracters.forEach((letra, i) => {
    vogais.forEach((vogal, k) => {
      caracters[i] = (letra === vogal) ? code[k] : caracters[i];
    });
  });

  return caracters.join('');
}

function decode(text) {
  const caracters = text.split('');
  caracters.forEach((caracter, i) => {
    code.forEach((num, k) => {
      caracters[i] = (caracter === num.toString()) ? vogais[k] : caracters[i];
    });
  });

  return caracters.join('');
}
```

- For the `encode` and `decode` functions, create the following tests in Jest:
  - Test if `encode` and `decode` are functions;
  - For the `encode` function, test whether the vowels **a**, **e**, **i**, **o**, **u** are converted to 1, 2, 3, 4, and 5, respectively;
  - For the decode function, test whether the numbers 1, 2, 3, 4 and 5 are converted to the vowels **a**, **e**, **i**, **o**, **u**, respectively;
  - Test if the other letters/numbers are not converted for each case;
  - Test if the `string` that is returned by the functions has the same number of characters as the `string` passed as a parameter.