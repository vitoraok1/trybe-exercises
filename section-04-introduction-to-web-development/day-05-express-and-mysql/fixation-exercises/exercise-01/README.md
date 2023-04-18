# Exercises

## Exercise 01
Create a `docker-compose.yaml` file that is capable of initializing a docker container with MySQL v8.0.29 and that creates a database called `todolistdb`. Then connect to the MySQL server using the *MySQL* console or *MySQL Workbench* to create the aforementioned tables by executing the following SQL command:

```sql
CREATE TABLE todolistdb.tasks (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);
```

## Exercise 02
Create the `src/db/connection.js` file that creates and exports a MySQL connection pool.

## Exercise 03
Create the `src/db/tasksDB.js` file that contains the following functions:

- `insert`: Function that receives a `task` object as a parameter and uses a `Prepared Statement` to store the data of the `task` object in the database. The `task` object received via parameter must have the following structure:

```javascript
{
  name: 'Deliver Pizza',
  description: 'Job Task',
}
```

- `update`: Function that receives a `task` object and an `id` of a task as a parameter and uses a `Prepared Statement` to change the task data with identifier equal to the `id` parameter with the data of the object ` task` in the database. The `task` object received via parameter must have the following structure:

```javascript
{
  name: 'Deliver Pizza',
  description: 'Job Task',
}
```

- `remove`: Function that receives an `id` of a task as a parameter and uses a `Prepared Statement` to delete the task with an identifier equal to the `id` parameter of the database.

- `findAll`: Function that does not receive any parameters and uses a `Prepared Statement` to retrieve all tasks registered in the database.
  
- `findById`: Function that receives an `id` of a task as a parameter and uses a `Prepared Statement` to retrieve the task with an identifier equal to the `id` parameter of the database.

## Exercise 04 🚀

Refactor the `src/routes/tasksRoutes.js` file so that it performs the operations according to the given specification. To do so, use the `src/db/tasksDB.js` file created in `Exercise 03` to perform the necessary operations on the database.

## Exercise 05 🚀
Write integration tests for the `POST /tasks` **endpoint** using `mocha`, `chai`, `chai-http` and `sinon`.

## Bonus

## Exercise 01 🚀
Write integration tests for **endpoint** `PUT /tasks/:id` using `mocha`, `chai`, `chai-http` and `sinon`.

## Exercise 02 🚀
Write integration tests for **endpoint** `DELETE /tasks/:id` using `mocha`, `chai`, `chai-http` and `sinon`.

## Exercise 03 🚀
Write integration tests for the **endpoint** `GET /tasks` using `mocha`, `chai`, `chai-http` and `sinon`.

## Exercise 04 🚀
Write integration tests for the **endpoint** `GET /tasks/:id` using `mocha`, `chai`, `chai-http` and `sinon`.