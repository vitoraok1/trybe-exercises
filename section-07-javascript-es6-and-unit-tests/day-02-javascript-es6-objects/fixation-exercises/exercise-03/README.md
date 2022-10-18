# Exercise 03

## Part III - Organizing Lessons

For the following exercises, use the following code.

`script.js`

```
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
```

- Create a function to add the night shift to `lesson2`. This function must have three parameters, namely: the object to be modified, the key that must be added and its value.

- Create a function to list the keys of an object. This function must take an object as a parameter.

- Create a function to show the size of an object.

- Create a function to list the values ​​of an object. This function must take an object as a parameter.

- Create an object named `allLessons`, which should group all classes through `Object.assign`. Each key of this new object will be a class, these keys being: `lesson1`, `lesson2` and `lesson3`. When running the `console.log(allLessons)` command, the output should be as follows:

```
console.log(allLessons);
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/
```

- Using the object created in the previous topic, create a function that returns the total number of students in all classes.

- Create a function that gets the value of the key according to its position in the object. For example:

```
console.log(getValueByNumber(lesson1, 0));
// Output: 'Matemática'
```

- Create a function that checks if the (key/value) pair exists in the function. This function must have three parameters, namely: the object, the key name and the key value. Example:

```
console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
```
