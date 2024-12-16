# Exercise 02

*To perform tasks 1 through 5, restore the following database:*

```
-- Exclui o banco de dados caso já exista
DROP SCHEMA IF EXISTS PiecesProviders;

-- Cria o banco PiecesProviders
CREATE SCHEMA PiecesProviders;
USE PiecesProviders;

-- Cria a tabela Pieces
CREATE TABLE Pieces (
  Code INTEGER PRIMARY KEY NOT NULL,
  Name TEXT NOT NULL
);

-- Cria a tabela Providers
CREATE TABLE Providers (
  Code VARCHAR(40) PRIMARY KEY NOT NULL,
  Name TEXT NOT NULL
);

-- Cria a tabela Provides
CREATE TABLE Provides (
  Piece INTEGER,
  FOREIGN KEY (Piece) REFERENCES Pieces (Code),
  Provider VARCHAR(40),
  FOREIGN KEY (Provider) REFERENCES Providers (Code),
  Price INTEGER NOT NULL,
  PRIMARY KEY (Piece , Provider)
);

-- Insere valores na tabela Providers
INSERT INTO Providers(Code, Name)
  VALUES ('HAL', 'Clarke Enterprises'),
    ('RBT', 'Susan Calvin Corp.'),
    ('TNBC', 'Skellington Supplies');

-- Insere valores na tabela Pieces
INSERT INTO Pieces(Code, Name)
  VALUES (1, 'Sprocket'),
    (2, 'Screw'),
    (3, 'Nut'),
    (4, 'Bolt');

-- Insere valores na tabela Provides
INSERT INTO Provides(Piece, Provider, Price)
  VALUES (1, 'HAL', 10),
    (1, 'RBT', 15),
    (2, 'HAL', 20),
    (2, 'RBT', 25),
    (2, 'TNBC', 14),
    (3, 'RBT', 50),
    (3, 'TNBC', 45),
    (4, 'HAL', 5),
    (4, 'RBT', 7);
```

1. Write a query to display the part and price of everything provided by the company `RBT`.

2. Write a query to display all the information for the five pieces with the highest prices.

3. Write a query to display the name of the companies and the price of the four pieces with the highest prices, starting the list from the 3rd item.

4. Write a query to display all the parts information that is provided by the `HAL` company. Sort the result by part prices in descending order.

5. Write a query to display how many companies the part `1` is provided by.