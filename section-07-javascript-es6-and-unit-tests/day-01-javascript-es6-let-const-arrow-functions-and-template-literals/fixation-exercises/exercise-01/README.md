# Exercise 01

Change the type of variables(`var`) to `let` or `const` to respect the scope in which they were declared, and change the function using `arrow function` and `template literals`.

- Modify the structure of the function so that it is an `arrow function`;
- Modify the variables to respect the scope where they are declared;
- Modify the concatenations to `template literals`.

Copy the code below:

`script.js`

```
  function testingScope(escopo) {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
      console.log(elseScope);
    }
    console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }

  testingScope(true);
```

Create a function that returns an array in ascending order.

Copy the code below:

```
  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const sortOddsAndEvens = () => {

  // Seu código aqui.

  console.log(oddsAndEvens); // será necessário alterar essa linha 😉
```

- Create a function that makes the `oddsAndEvens` array in ascending order;
- Use `template literals` so that the call `console.log(<your code>oddsAndEvens<your code>)`; return the sentence “The numbers 2,3,4,7,10,13 are in ascending order!”.
- Bonus (optional): try doing the same exercise using the `array.sort()` method.