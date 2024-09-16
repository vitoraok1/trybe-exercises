const employeeFunction = (fullName) => {
  const employeeEmail = fullName.toLowerCase().split(' ').join('_');
  return { fullName, email: `${employeeEmail}@trybe.com` };
};

const newEmployees = (employeeFunction) => {
  const employees = {
    id1: employeeFunction('Pedro Guerra'),
    id2: employeeFunction('Luiza Drumond'),
    id3: employeeFunction('Carla Paiva'),
  };
  return employees;
};

console.log(newEmployees(employeeFunction));

