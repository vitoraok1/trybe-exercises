# Exercise 02

Copy the already implemented function and develop the tests. Separate the function and test into different files to avoid any kind of problem.

- The `myRemove(arr, item)` function takes an array arr and returns a copy of that array without the `item` element if it exists in the array

  - Check that calling `myRemove([1, 2, 3, 4], 3)` returns the expected array

  - Check that calling `myRemove([1, 2, 3, 4], 3)` **does not** return array `[1, 2, 3, 4]`

  - Check that calling `myRemove([1, 2, 3, 4], 5)` returns the expected array

```
function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
```