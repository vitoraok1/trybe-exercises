#Mr. Scott Grocery's

### Exercise 1 – Create the `Food` type

Mr. M. Scott wants all items that are eaten to have a name, a price, a weight, and a weight unit (which can be either _kilograms_ or _grams_). To do this, you must define a type obeying the following rules:

- Have the name `Food` and be exported with the syntax export type ...
- Be created in the `src/types/Food.ts` file.
- Have the following attributes as mandatory:
  - `name`: must be a _string_
  - `price`: must be a number
  - `weight`: must be a number
  - `weightUnit`: must accept only `kg` or `g` values.

---

### Exercise 2 - Create the `Drink` type

Mr. M. Scott wants all beverage items to have a name, price, capacity, and unit of capacity (which can be either _liters_ or _milliliters_). For this, we need to define a type obeying the following rules:

- Have the name `Drink` and be exported with the syntax export type ...
- Be created in the `src/types/Drink.ts` file;
- Have the following attributes as mandatory:
  - `name`: must be a string.
  - `price`: must be a number.
  - `capacity`: must be a number.
  - `capacityUnit`: must accept only `ml` or `l` values.

---

### Exercise 3 – Create the function `first`

Mr. M. Scott wants the application to have a functionality capable of returning the first item of an array, be that array of any type of product. The function must:

- Have the name `first` and be exported with the `export function ...` syntax.
- Be created in the `src/functions.ts` file.
- Have a single parameter that is **an array** of the type specified by _Generic_.
- Return **an object** of the type specified by _Generic_, the first in the list passed by parameter.

---

### Exercise 4 - Create the `updateItem` function

As food and drinks can have their prices and other properties updated, it is necessary to develop a function for this. The `updateItem` function should:

- Have the name `updateItem` and be exported with the `export function...` syntax.
- Be created in the `src/functions.ts` file.
- Have the following parameters, in this exact order:
  1. **an array** of the type specified by _Generic_.
  2️. **a number** corresponding to the index containing the array element to be changed.
  3️. **an object** of the same type specified by _Generic_.
- The return of the `updateItem` function must be **an array** of the type specified by _Generic_, with the updated marked item.
- If the function receives an index that does not exist, it must return the array unchanged.

---

### Exercise 5 – Create the `CartItem` type

Now, we need functionality to create a virtual cart of items that can be both food and drinks. The cart item will be a type with only the necessary information to make the purchase: the properties `name`, `price` and `quantity`. The new type must:

- Have the name `CartItem` and be exported with the `export type ...` syntax.
- Be created in the `src/types/CartItem.ts` file.
- Have the following attributes as mandatory:
  - `name`: must be a string.
  - `price`: must be a number.
  - `quantity`: must be a number.

---

### Exercise 6 – Create the `buildCartItem` function

Finally, you need a function that is able to turn any item that has **name** and **price**, like `Food` and `Drink`, into a `CartItem`. The function must:

> Tip: Use _Type Assertion_!

- Whether to call `buildCartItem` and be exported with the `export function...` syntax.
- Be created in the `src/functions.ts` file.
- Have the following parameters, in this order:
  1️. `item`: must be an object of type `Food` or `Drink`.
  2️. `quantity`: must be a number.
- Return an object of type `CartItem`.

