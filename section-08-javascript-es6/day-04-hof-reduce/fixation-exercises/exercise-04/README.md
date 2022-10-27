# Exercise 04

## Organizing the library

- For the next exercise you must create a new array of objects from the information of students and grades, where each object of this new array will have the format `{ name: student name, average: grade average }`. For this, let's assume that rank 0 of `grades` refers to the student in rank 0 of `students`. To solve this exercise, in addition to `reduce`, you will also need to use the `map` function.

```
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  // escreva seu código aqui
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];
```