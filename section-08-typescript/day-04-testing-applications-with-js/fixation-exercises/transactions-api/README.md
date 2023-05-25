# Transactions API

## Exercises

### Exercise 1

Create integration tests for the `/transactions` route, of type `POST`.

**Warning ⚠️**: You should pay attention to some specifications:

- The tests must be developed in the `create.test.ts` file, which is already created in the `tests/integration/transactions/create.test.ts` path.
- Tests need to meet the following scenarios:
  - When the request is made with valid data:
    - Should return an _HTTP status_ `201` with a transaction created.
    - In `it`, the test must have the description `must return a status 201 with a transaction created`.

  - When the request is made with invalid data:
    - When sending a request with the `name` attribute present, but empty, an _HTTP status_ `400` must be returned with the message `“Name is required”`.
    - In `it`, the test must have the description `when sending an empty name it should return a status 400 with an error message`.


<details>
  <summary>Is your application returning `401` and this is crashing you? See this tip!</summary>

What does _status_ `401` mean? It stands for `UNAUTHORIZED`. Your test is not creating a transaction because you are not being authenticated! Remember that to create a transaction, the application must check your _token_ to ensure that it is valid. But you don't really need to _login_, you just need to simulate! In that case, don't forget to:

- Make the request with the _header_ in the correct format and containing a `token`.
- _Mock_ the functions your authentication _middleware_ calls to do the check.

**Keep an eye on the tip 👀**: If you need a reminder of the syntax for any of these functions, do a quick search.

</details>

### Exercise 2

Create unit tests for the `create` function, from the _service_ layer.

- The tests must be developed in the `transactions.service.test.ts` file, which is already created in the path `tests/unit/services/transactions.service.test.ts`.
- Tests need to meet the following scenarios:

  - It must be possible to successfully create transactions.
    - In `it`, the test must have the description: `it must be possible to create a transaction successfully`.

  - Should return an error if a name is not submitted.
    - The error message should be: `"Name is required"` (with initial capital letter).
    - In `it`, the test must have the description: `must return an error when a name is not sent`.

### Exercise 3

Create unit tests for the `create` function, from the _controller_ layer.

- The tests must be developed in the `transactions.controller.test.ts` file, which is already created in the `tests/unit/controllers/transactions.controller.test.ts` path.

- Tests need to meet the following scenarios:
  - It must be possible to successfully create transactions.

- In `it`, the test must have the description: `must save when sending valid data`.

  - Should return an error if a name is not submitted.
    - The error message should be: `"Name is required"` (with initial capital letter).
    - In the `it`, the test must have the description `must return an error if it sends an invalid name`.