const user = {
  nameUser: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const userAndJobInfos = {...user,...jobInfos};
const { nameUser, age, nationality, profession, squad, squadInitials} = userAndJobInfos;

console.log(`"Hi, my name is ${nameUser}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}"`);