# TrybeCrafts

## Exercise 01

Implement the `insert` function in the `01-insert.t`s file and do the typing using `Type Annotation` and considering that the function must:

- Receive a parameter with the name of the product of type string.

- Return a value of type string.

  - Return the message: `<productName> successfully added!`.


## Exercise 02

Implement the `insertProducts` function in the `02-insertProducts.ts` file and do the typing using `Type Aliases` and considering that the function must:

- Receive two parameters – an array of `strings`, which will be a list of brands, and a product, which will be an object of type Product , with the following properties.


|  Chave   |       Tipo       |
| :------: | :--------------: |
|    id    |      number      |
|   name   |      string      |
|  price   |      number      |
| quantity |      number      |
|  brands  | Array de strings |

- Return a value of type string.

- Check if the brands, `brands`, of the product are in the array passed by parameter.

  - If so, the returned message must be `<productName> added with the price of BRL <price>.`. If the price is a decimal number, you can ignore the last zero in the message.
  - If not, the returned message should read `Your product contains unavailable brands.`


## Exercise 03

Implement the `findById` function in the `03-findById.t` file by typing it with `Union Type` and considering that the function must:

- Receive a parameter with the `id` of the product of type `number`.

- Return a value of type `Product` or `string`.
  - If the id is found in the array of products, a value of type `Product` with the product information must be returned, as shown below.

  ```typescript
  {
    id: 2,
    name: 'Caneca',
    price: 19.90,
    quantity: 12
    brands: ['Stanley', 'Camelbak'],
  }
  ```

  - If `id` is not found, a string value must be returned with the message `Product with ID <id> not found.`, where `<id>` is the id of the product passed as a parameter.


## Exercise 04

Implement the `calculateTotalPrice` function in the `04-calculateTotalPrice.ts` file by typing it with `Type Aliases` and considering that the function must:

- Receive an array of objects of type `Item` as a parameter. You must declare and export it from this same file for the tests to work. It must have the following properties:


|  Chave   |  Tipo   |
| :------: | :-----: |
| product  | Product |
| quantity | number  |
|  phrase  | string  |
|  brand   | string  |

- Return the total value of all items received as a parameter.
  - Return type `number`, with two decimal places.
  - Return `0` if the function receives an empty array of items.


## Exercise 05

Implement the `orderRequest` function in the `05-orderRequest.ts` file and do the typing using `Type Aliases` and `Union Type` and considering that the function should:

- Receive as a parameter an order that will be an object of type `Order`. You must declare and export it from this same file for the tests to work. It must have the following properties:


|     Chave     |              Tipo               |
| :-----------: | :-----------------------------: |
|      id       |             number              |
| customerName  |             string              |
| customerEmail |             string              |
|     items     |         Array de Items          |
|    status     | pendente ou enviado ou entregue |

- If any of the products are out of stock, an error should be thrown with a message in the format: `Sorry, <productName> is not available in stock`. Where `<productName>` is the name of the first product in the list that is out of stock.
  - If all products have stock, the returned message should be: `Hello <customerName>, your order ID <id> was <status>.`. Where `<customerName>`, `<id>` and `<status>` are order information passed by parameter;
