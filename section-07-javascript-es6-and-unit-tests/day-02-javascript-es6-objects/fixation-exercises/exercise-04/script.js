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

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

//Using the object allLessons, create a function to count how many students attended Math classes.

const countStudents = (object) => {
 
  let studentsTotal = 0;
  const allLessonsArray = Object.keys(object);

  for (index in allLessonsArray) {
    if (object[allLessonsArray[index]].materia === 'Matemática') {
      studentsTotal += object[allLessonsArray[index]].numeroEstudantes; 
    }
  }
  return studentsTotal;
}

console.log(countStudents(allLessons));