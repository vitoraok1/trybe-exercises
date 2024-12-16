CREATE DATABASE IF NOT EXISTS zoo;

USE zoo;

CREATE TABLE animal (
    animal_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    specie VARCHAR(50) NOT NULL,
    genre VARCHAR(10) NOT NULL,
    age INT,
    localization VARCHAR(50) NOT NULL
)  ENGINE=INNODB;

CREATE TABLE manager (
    manager_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
)  ENGINE=INNODB;

CREATE TABLE caretaker (
    caretaker_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    manager_id INT NOT NULL,
    FOREIGN KEY (manager_id) REFERENCES manager (manager_id)
)  ENGINE=INNODB;

CREATE TABLE animal_caretaker (
	animal_id INT,
    caretaker_id INT,
    CONSTRAINT PRIMARY KEY (animal_id, caretaker_id),
    FOREIGN KEY (animal_id) REFERENCES animal (animal_id),
    FOREIGN KEY (caretaker_id) REFERENCES caretaker (caretaker_id)
) ENGINE=INNODB;