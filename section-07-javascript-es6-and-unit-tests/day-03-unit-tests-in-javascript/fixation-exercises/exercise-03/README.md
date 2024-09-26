# Exercise 03

Copy the already implemented function and develop the tests. Separate the function and test into different files to avoid any kind of problem.

- Function `myFizzBuzz(num)` takes a number `num` and returns `"fizzbuzz"` if the number is divisible by `3` and `5`, returns `"fizz"` if it is divisible only by `3`, returns `"buzz"` if divisible only by `5`, returns the number itself if not divisible by `3` or `5` and returns `false` if `num` is not a number

  - Make a call with a number divisible by `3` and `5` and check if the return is as expected

  - Make a call with a number divisible by `3` and check if the return is as expected

  - Make a call with a number divisible by `5` and check if the return is as expected

  - Make a call with a number that is not divisible by `3` or `5` and check if the return is as expected

  - Make a call with a parameter that is not a number and check if the return is as expected

```
function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
```