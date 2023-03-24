# Exercise 01

## Now the practice

To perform tasks 1 through 7, restore the following database:


```
DROP SCHEMA IF EXISTS store;
CREATE SCHEMA store;
USE store;
CREATE TABLE itens (
  id INTEGER PRIMARY KEY NOT NULL,
  name TEXT NOT NULL
);
CREATE TABLE suppliers (
  id VARCHAR(40) PRIMARY KEY NOT NULL,
  name TEXT NOT NULL
);
CREATE TABLE supplies (
  id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  item_id INTEGER,
  FOREIGN KEY (item_id) REFERENCES itens (id),
  supplier_id VARCHAR(40),
  FOREIGN KEY (supplier_id) REFERENCES suppliers (id),
  price INTEGER NOT NULL
);
CREATE TABLE sales (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  supply_id INTEGER,
  quantity INTEGER,
  order_date DATETIME,
  FOREIGN KEY (supply_id) REFERENCES supplies (id)
);
INSERT INTO suppliers(id, name)
  VALUES ('ROB', 'Robauto SA'),
    ('CNF', 'Confiauto LTDA'),
    ('MAP', 'Malok Auto Peças'),
    ('INF', 'Infinity Peças LTDA');
INSERT INTO itens(id, name)
  VALUES (1, 'Rebimboca'),
    (2, 'Parafuseta'),
    (3, 'Grampola'),
    (4, 'Grapeta');
INSERT INTO supplies(item_id, supplier_id, price)
  VALUES (1, 'CNF', 10),
    (1, 'ROB', 15),
    (2, 'CNF', 20),
    (2, 'ROB', 25),
    (2, 'MAP', 14),
    (3, 'INF', 50),
    (3, 'MAP', 45),
    (4, 'CNF', 5),
    (4, 'ROB', 7);
INSERT INTO sales(supply_id, quantity, order_date)
  VALUES (1, 3, '2017-05-22 11:28:36'),
    (2, 2, '2018-03-22 11:35:24'),
    (3, 8, '2018-11-16 15:51:36'),
    (3, 10, '2019-02-13 13:23:22'),
    (8, 5, '2019-06-11 12:22:48'),
    (6, 1, '2019-09-07 09:53:58'),
    (7, 3, '2020-01-05 08:39:33'),
    (9, 5, '2020-05-13 14:05:19');
```


1. Let's go! Do a query on the item table that returns all data where the `name` column starts with the letters `GR`.

2. Now, write a query to return from the supply table the data in which the `item_id` column has the value `2`. Sort the result alphabetically by supplier_id.

3. Then do a query to display the item_id, price and supplier_id of `supply` where the value of `supplier_id` has the letter `N`.

4. Forward, not long to go! Write a query to display all information for `supplier` which are limited liability companies (LTDA). Sort these results in descending alphabetical order.

5. Now, make a query to display the number of companies (supplier) that contain the letter `F` in the code.

6. Almost there! Now write a query to display from supply, items that cost more than $15.00 and less than $40.00. Sort the results in ascending order.

7. Phew! Finally, make a query to display the number of sales (sale) made between `15/04/2018` and `30/07/2019`.