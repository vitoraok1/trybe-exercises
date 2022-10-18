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

// Create a function to add the night shift to `lesson2`. This function must have three parameters, namely: the object to be modified, the key that must be added and its value.

const addFunction = (object, key, value) => {
  object[key] = value;
}

addFunction(lesson2, 'turno', 'noite');
console.log(lesson2);

// Create a function to list the keys of an object. This function must take an object as a parameter.

const listKeys = (object) => Object.keys(object);

console.log(listKeys(lesson2));

// Create a function to show the size of an object.

const objectSize = (object) => {
  const size = Object.keys(object).length;
  return size;
}

console.log(`The object size is ${objectSize(lesson1)}`);

// Create a function to list the values ​​of an object. This function must take an object as a parameter.

const valuesList = (object) => Object.values(object);

console.log(valuesList(lesson3));

// Create an object named `allLessons`, which should group all classes through `Object.assign`. Each key of this new object will be a class, these keys being: `lesson1`, `lesson2` and `lesson3`.

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

// Using the object created in the previous topic, create a function that returns the total number of students in all classes.

const returnTotalStudents = (allLessons) => {
  const studentsLesson1 = allLessons.lesson1.numeroEstudantes;
  const studentsLesson2 = allLessons.lesson2.numeroEstudantes;
  const studentsLesson3 = allLessons.lesson3.numeroEstudantes;
  const totalStudents = studentsLesson1 + studentsLesson2 + studentsLesson3;
  return totalStudents;
}

console.log(`The total number of students is ${returnTotalStudents(allLessons)}`)
