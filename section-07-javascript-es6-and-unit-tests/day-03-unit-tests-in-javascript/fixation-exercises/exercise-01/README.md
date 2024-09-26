# Exercise 01

Copy the already implemented function and develop the tests. Separate the function and test into different files to avoid any kind of problem.

  - Create the files with the respective function name. Ex: sum.js and sum.test.js

The function `sum(a, b)` returns the sum of parameter `a` and `b`
Test if `sum(4, 5)` returns `9`

Test if `sum(0, 0)` returns `0`

Test if `sum` function throws an error when parameters are `4` and `"5"` (string 5)

Test if the error message is “parameters must be numbers” when calling `sum(4, "5")`

```
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}
```