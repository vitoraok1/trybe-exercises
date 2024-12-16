# Exercise 01

## Manipulating Pixar DB

*To perform exercises 1 to 7, restore the pixar database below.*

```
DROP SCHEMA IF EXISTS pixar;
CREATE SCHEMA pixar;
USE pixar;

CREATE TABLE movies (
  id INTEGER auto_increment PRIMARY KEY NOT NULL,
  title VARCHAR(30) NOT NULL,
  director VARCHAR(30) NULL,
  year INT NOT NULL,
  length_minutes INT NOT NULL
);

CREATE TABLE box_office (
  movie_id INTEGER,
  FOREIGN KEY (movie_id) REFERENCES movies (id),
  rating DECIMAL(2,1) NOT NULL,
  domestic_sales INT NOT NULL,
  international_sales INT NOT NULL
);

INSERT INTO movies(title, director, year, length_minutes)
  VALUES ('Toy Story', 'John Lasseter', 1995, 81),
         ('Vida de inseto', 'Andrew Stanton', 1998, 95),
         ('ratatui', 'Brad Bird', 2010, 115),
         ('UP', 'Pete Docter', 2009, 101),
         ('Carros', 'John Lasseter', 2006, 117),
         ('Toy Story 2', 'John Lasseter', 1999, 93),
         ('Valente', 'Brenda Chapman', 2012, 98);

INSERT INTO box_office(movie_id, rating, domestic_sales, international_sales)
  VALUES (1, 8.3, 190000000, 170000000),
         (2, 7.2, 160000000, 200600000),
         (3, 7.9, 245000000, 239000000),
         (4, 6.1, 330000000, 540000000),
         (5, 7.8, 140000000, 310000000),
         (6, 5.8, 540000000, 600000000),
         (7, 7.5, 250000000, 190000000);
```

1. Insert Pixar productions into the `movies` table:

  - Monsters Inc, by Pete Docter, released in 2001, with 92 minutes of duration.
  - Finding Nemo, by John Lasseter, released in 2003, with 107 minutes of duration.
  - The Incredibles, by Brad Bird, released in 2004, with 116 minutes of duration.
  - WALL-E, by Pete Docter, released in 2008, with 104 minutes of duration.

2. The film Finding Nemo was rated 6.8, made 450 million domestically and 370 million internationally. Insert the information to the `box_office` table.

3. The name of the director of the film “Finding Nemo” is incorrect, it was directed by Andrew Stanton. Correct this data using the `UPDATE` command.

4. The movie title “Ratatouille” is incorrect in the movies table. Also, the movie was released in 2007 and not 2010. Please correct this data using the `UPDATE` command.

5. Insert the new classifications below into the `box_office` table, remember that the `movie_id` column is a foreign key referring to the `id` column of the `movies` table:


  - Monsters SA, ranked 8.5, earned 300 million domestically and 250 million internationally.
  - The Incredibles, ranked 7.4, earned 460 million domestically and 510 million internationally.
  - WALL-E, ranked 9.9, earned 290 million domestically and 280 million internationally.

6. Delete the movie “WALL-E” from the `movies` table.

7. Delete all movies directed by “Andrew Stanton” from the `movies` table.

8. Change the `box_office` table rating to 9.0 of all movies that grossed over 400 million domestically.

9. Change the `box_office` table rating to 6.0 of all movies that grossed less than 300 million in the international market and more than 200 million in the domestic market.

10. Delete all movies less than 100 minutes in length from the `movies` table.