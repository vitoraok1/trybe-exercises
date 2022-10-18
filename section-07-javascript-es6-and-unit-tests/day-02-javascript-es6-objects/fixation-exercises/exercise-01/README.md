# Exercise 01

## Part I - Creating Exception Flow

Copy and paste the code below into your text editor:

`index.html`

```
<!DOCTYPE html>
<html lang='pt-BR'>
<head>
  <meta charset='UTF-8'>
  <meta http-equiv='X-UA-Compatible' content='IE=edge'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <title>Calculadora</title>
</head>
<body>
  <p>Informe dois números para realizar a soma:</p>
  <label for='value1'>Valor 1:</label>
  <input type='text' id='value1'>
  <label for='value2'>Valor 2:</label>
  <input type='text' id='value2'>
  <button id='button'>Somar</button>
  <p id='result'></p>
  <script>
    function sum() {
      const value1 = document.getElementById('value1').value;
      const value2 = document.getElementById('value2').value;
      const result = Number(value1) + Number(value2);
      document.getElementById('result').innerHTML = `Resultado: ${result}`;
      document.getElementById('value1').value = '';
      document.getElementById('value2').value = '';
    }
    window.onload = () => {
      const button = document.getElementById('button');
      button.addEventListener('click', sum);
    }
  </script>
</body>
</html>
```

Take some time to understand the code above:

  - The application asks the user to enter two numbers to make a sum. These numbers are entered through the `inputs`;

  - When clicking the button, the `sum` function is called, capturing the value written in the `inputs` and performing the operation. Before, it is necessary to convert the value using Number(), as it arrives at the function in the form of a `string`, there are other ways to convert a `string` into a number, such as parseInt() and parseFloat();

  - At the end, the `sum` function prints the value in a paragraph and clears the `inputs` so that the user can insert new values.

Apparently everything is working, but the application has no exception flow. That is, if an error occurs, they will not be handled. How about solving this?

- Create custom errors.

- Try running the application with one of the blank values. Notice that the return is not very descriptive?

- Use the `throw new Error` and the `try/catch` block.

- Avoid roles that have many different responsibilities.

- If the user does not fill any `input`, or fills only one `input`, throw an error.

- If the values ​​entered in the `inputs` by the user are not numbers, throw an error. You can check this using the isNan() function.

- Add the text of the errors in the paragraph with id `result`, so that the user knows what happened. Remember to use descriptive errors!

- Use finally to delete the `inputs` values ​​at the end of the `try/catch` block.

