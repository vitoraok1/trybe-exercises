const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareArrays = (rightAnswers, studentAnswers) => {

  if (rightAnswers === studentAnswers) {
    return 1;
  } else if (studentAnswers === 'N.A') {
    return 0;
  } else {
    return -0.5;
  }
};

const countPoints = (rightAnswers, studentAnswers, action) => {
  let totalPoints = 0;

  for(let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    totalPoints += actionReturn;
  }
  return `Resultado final: ${totalPoints} pontos`;
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareArrays));

