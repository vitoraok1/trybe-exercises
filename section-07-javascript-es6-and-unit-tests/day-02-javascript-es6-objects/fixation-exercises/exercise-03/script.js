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