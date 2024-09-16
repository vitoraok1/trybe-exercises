# Exercise 02

## New person hired

Create a function that returns an object in the form `{ fullName, email }` representing a new hire. Pass your function as a parameter of the HOF `newEmployees` to create each person hired under their respective id. Your function must receive the full name of the employee as a parameter and, from there, automatically generate an email in the format `person_name@trybe.com`.

```
const newEmployees = () => {
  const employees = {
    id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
```