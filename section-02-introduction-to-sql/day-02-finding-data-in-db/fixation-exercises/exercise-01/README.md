# Exercise 01

*To perform activities 1 through 15, restore the following database:*

```
-- Exclui o banco de dados Scientists caso já exista
DROP SCHEMA IF EXISTS Scientists;

-- Cria o banco Scientists
CREATE SCHEMA Scientists;
USE Scientists;

-- Cria a tabela Scientists
CREATE TABLE Scientists (
  SSN INT,
  Name CHAR(30) NOT NULL,
  PRIMARY KEY (SSN)
);

-- Cria a tabela Projects
CREATE TABLE Projects (
  Code CHAR(4),
  Name CHAR(50) NOT NULL,
  Hours INT,
  PRIMARY KEY (Code)
);

-- Cria a tabela AssignedTo
CREATE TABLE AssignedTo (
  Scientist INT NOT NULL,
  Project CHAR(4) NOT NULL,
  PRIMARY KEY (Scientist, Project),
  FOREIGN KEY (Scientist) REFERENCES Scientists (SSN),
  FOREIGN KEY (Project) REFERENCES Projects (Code)
);

-- Insere valores na tabela Scientists
INSERT INTO Scientists(SSN,Name)
  VALUES(123234877, 'Michael Rogers'),
    (152934485, 'Anand Manikutty'),
    (222364883, 'Carol Smith'),
    (326587417, 'Joe Stevens'),
    (332154719, 'Mary-Anne Foster'),
    (332569843, 'George ODonnell'),
    (546523478, 'John Doe'),
    (631231482, 'David Smith'),
    (654873219, 'Zacary Efron'),
    (745685214, 'Eric Goldsmith'),
    (845657245, 'Elizabeth Doe'),
    (845657246, 'Kumar Swamy');

-- Insere valores na tabela Projects
 INSERT INTO Projects (Code, Name, Hours)
  VALUES ('AeH1' ,'Winds: Studying Bernoullis Principle', 156),
    ('AeH2', 'Aerodynamics and Bridge Design', 189),
    ('AeH3', 'Aerodynamics and Gas Mileage', 256),
    ('AeH4', 'Aerodynamics and Ice Hockey', 789),
    ('AeH5', 'Aerodynamics of a Football', 98),
    ('AeH6', 'Aerodynamics of Air Hockey', 89),
    ('Ast1', 'A Matter of Time', 112),
    ('Ast2', 'A Puzzling Parallax', 299),
    ('Ast3', 'Build Your Own Telescope', 6546),
    ('Bte1', 'Juicy: Extracting Apple Juice with Pectinase', 321),
    ('Bte2', 'A Magnetic Primer Designer', 9684),
    ('Bte3', 'Bacterial Transformation Efficiency', 321),
    ('Che1', 'A Silver-Cleaning Battery', 545),
    ('Che2', 'A Soluble Separation Solution', 778);

-- Insere valores na tabela AssignedTo
 INSERT INTO AssignedTo (Scientist, Project)
  VALUES (123234877, 'AeH1'),
    (152934485, 'AeH3'),
    (222364883, 'Ast3'),
    (326587417, 'Ast3'),
    (332154719, 'Bte1'),
    (546523478, 'Che1'),
    (631231482, 'Ast3'),
    (654873219, 'Che1'),
    (745685214, 'AeH3'),
    (845657245, 'Ast1'),
    (845657246, 'Ast2'),
    (332569843, 'AeH4');
```

1. Write a *query* to display the string “This is SQL Exercise, Practice and Solution”.

2. Write a *query* to display three numbers in three columns.

3. Write a *query* to display the sum of the numbers 10 and 15.

4. Write a *query* to display the result of any arithmetic expression.

5. Write a *query* to display all information for all scientists.

6. Write a *query* to display the name as “Project Name” and the hours as “Work Time” for each project.

7. Write a *query* to display the scientists' names in alphabetical order.

8. Write a *query* to display the names of projects in descending alphabetical order.

9. Write a *query* that displays the string “Project `Name` took `Hours` hours to complete.” for each project.

10. Write a *query* to display the name and times of the three projects with the most hours.

11. Write a *query* to display the code for all projects in the `AssignedTo` table without repeating.

12. Write a *query* to display the name of the project with the most hours.

13. Write a *query* to display the name of the second project with the fewest hours.

14. Write a *query* to display all information for the five projects with the least amount of hours.

15. Write a *query* that displays the string “There are `Number` scientists in the Scientists table.”, where `Number` refers to the number of scientists.