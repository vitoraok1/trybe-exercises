# Exercise 02

## Object Destructuring

- Create a third object, which will have the personal data and the job data together.

There are two objects referring to a user, one with personal information and the other with information regarding their position in the **trappistEnterprise** company. You need to create a third object, which will have the personal data and the job data together. For this, use the `spread operator`.

```
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

```

- Print a sentence on the console using the data of the object created earlier. For this, use object destructuring in conjunction with `template literals`.
Example `"Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic"`