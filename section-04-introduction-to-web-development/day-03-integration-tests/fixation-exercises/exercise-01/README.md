# Exercise 01

## API Cacau Trybe

1. Create integration tests for the endpoint GET `/chocolates/total`

  - Create a case for the returned code
  - Create another case for expected return

2. Implement the endpoint GET `/chocolates/total` in the application

  - Create a new endpoint returning the total number of chocolates in the database
  - After deploying, make sure the tests pass successfully

3. Create the integration tests for the endpoint GET `/chocolates/search`

  - Create a case by checking the code and the expected return for when there are chocolates with the name entered;
  - Create a case for when there are no chocolates with the given name;
  - Check if the tests fail successfully.

4. Implement the GET `/chocolates/search` endpoint in the application

  - Create a new endpoint returning the chocolates that have the string `name` in the database;
  - After deploying, verify that the tests pass successfully.

5. Create integration tests for the PUT `/chocolates/:id` endpoint

  - Create a case by checking the code and the expected return for when the chocolate is updated;
  - Create a case for when there is no chocolate with the informed `id`;
  - Check if the tests fail successfully.

6. Implement the PUT `/chocolates/:id` endpoint in the application

  - Create a new endpoint that updates a chocolate in the database;
  - After deploying, verify that the tests pass successfully.