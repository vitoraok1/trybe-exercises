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

// Using the object allLessons, create a function to count how many students attended Math classes.

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

// Using the object allLessons, create a function that should return an object that represents the teacher's report, the classes he or she taught and the total number of students

const getInfo = (object, name) => {
  const lessons = [];
  let students = 0;
  const allLessonsArray = Object.values(object);

  for (index in allLessonsArray) {
    if (allLessonsArray[index].professor === name) {
      lessons.push(allLessonsArray[index].materia);
      students += allLessonsArray[index].numeroEstudantes;
    }
  }
  return { aulas: lessons, estudantes: students};
}

const createReport = (object, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, getInfo(object, name));
  return report;
}

console.log(createReport(allLessons, 'Maria Clara'));