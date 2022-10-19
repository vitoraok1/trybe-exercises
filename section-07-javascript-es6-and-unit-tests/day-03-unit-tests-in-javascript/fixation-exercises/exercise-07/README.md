# Exercise 07 - Bonus

- Are you ready for a challenge?! In this exercise, you will practice test-driven development by implementing:
- The function;
- Tests for this function;

Consider the data below. You must create a function that receives two parameters: the `id` of the employee and the information available about him (`firstName`, `lastName`, `specialties`). You must also create the tests for this function. Your function should then return the results of the search for the `id` for that employee and the information queried. If the id is not in the staff, your function should return the error `"Unidentified ID"`. If the information to be accessed does not exist, the function should return the error `"Information unavailable"`.

```
// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  // Implemente seu código aqui
};
```

As a starting point, start by implementing a test to check if the function exists. Run the test you wrote and implement the functionality that will pass that test in the function. Repeat this process until all expected returns are tested.