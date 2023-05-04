# Day 01 - Exercises

## Library Database

1. Create a **migration** to create a books table with the following columns:

- `id`: must be of type `integer`, cannot be null and be the primary key of the table with autoincrement;
- `title`: must be of type `string` and cannot be null;
- `author`: must be of type `string` and cannot be null;
- `pageQuantity`: must be of type `integer` and can be null;
- `createdAt`: must be of type `date` and cannot be null;
- `updatedAt`: must be of type `date` and cannot be null;

2. Create the **model** `Book` using the Sequelize API. The model must contain the following fields:

- `title`: must be of type `DataTypes.STRING`
- `author`: must be of type `DataTypes.STRING`
- `pageQuantity`: must be of type `DataTypes.INTEGER`
- `createdAt`: must be of type `DataTypes.DATE`
- `updatedAt`: must be of type `DataTypes.DATE`

3. Create a **service** `BooksService` with the `getAll` method to return a list of books via the `Book` model.

4. Create a `BooksController` **controller** with the `getAll` method being *middleware* to return the list of books via the `getAll` method of `BookService`.

5. Bind the `GET /books` route to access your **controller**.

6. In the `BooksService` service, create a `getById` method that receives an `id` as a parameter and use the **model** `Book` to fetch that book. Return the object found by **model**.


7. In **controller** `BooksController` create the method `getById` being a *middleware* that receives the `id` as route parameter and fetch the book through **service**. If the book does not exist, the request response must have the status `404` and the json `{ "message": "Book not found" }`.

8. Bind the `GET /books/:id` route to access your **controller**.

9. In the `BooksService` service, create a `create` method that receives an object with the attributes `title`, `author`, `pageQuantity` and save a new book using the **model** `Book`.

10. In the **controller** `BooksController` create the method `create` being a *middleware* that receives the attributes `title`, `author`, `pageQuantity` from the *body* of the request and save the data through the **service**.

11. Bind the `POST /books` route to access your **controller**.

12. In **service** `BooksService` create an `update` method that receives two parameters: the `id` of the book to be changed and an object with the attributes `title`, `author`, `pageQuantity` and update the book using the **model** `Book`.

13. In the `BooksController` controller, create the `update` method as a *middleware* that receives the `id` as a route parameter and the attributes `title`, `author`, `pageQuantity` of the *body* of the request and save the data through the **service**. The request should return the status `200` and the message 'Book updated!'. If the book is not found, the message 'Book not found!' will be returned.

14. Bind the `PUT /books/:id` route to access your **controller**.

15. In `BooksService` **service** create a `remove` method that receives the `id` of the book to be removed and removes it using the `Book` model.

16. In the **controller** `BooksController` create the method `remove` being a *middleware* that receives the `id` as a route parameter and removes the book through **service**.

17. Bind the `DELETE /books/:id` route to access your **controller**.