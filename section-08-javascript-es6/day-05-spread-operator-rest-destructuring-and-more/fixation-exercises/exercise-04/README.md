# Exercise 04

## Default Destructuring

As it is, when `person` is passed to the `getNationality` function, `John is undefined`. Adjust the `getNationality` function so that the `getNationality(person)` call returns `João is Brazilian`.

```
const getNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));
```
