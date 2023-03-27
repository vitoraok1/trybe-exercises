-- 1 - Insira as produções da Pixar na tabela movies:
INSERT INTO pixar.movies (title, director, year, length_minutes)
	VALUES
		('Monstros SA', 'Pete Docter', 2001, 92),
        ('Procurando Nemo', 'John Lasseter', 2003, 107),
        ('Os Incríveis', 'Brad Bird', 2004, 116),
        ('WALL-E', 'Pete Docter', 2008, 104);
        
-- 2 - O filme Procurando Nemo foi classificado em 6.8, fez 450 milhões no mercado interno e 370 milhões no mercado internacional. Insira as informações à tabela box_office.
INSERT INTO pixar.box_office (movie_id, rating, domestic_sales, international_sales)
	VALUES 
		(9, 6.8, 450000000, 370000000);
        
-- 3 - O nome do diretor do filme “Procurando Nemo” está incorreto, ele foi dirigido por Andrew Stanton. Corrija esse dado utilizando o comando UPDATE.
UPDATE pixar.movies
SET director = 'Andrew Stanton'
WHERE id = 9;

-- 4 - O título do filme “Ratatouille” está incorreto na tabela movies. Além disso, o filme foi lançado em 2007 e não em 2010. Corrija esses dados utilizando o comando UPDATE
UPDATE pixar.movies
SET title = 'Ratatouille', year = 2007
WHERE id = 3;

-- 5 - Insira as novas classificações abaixo na tabela box_office, lembre-se que a coluna movie_id é uma foreign key referente a coluna id da tabela movies:
INSERT INTO pixar.box_office (movie_id, rating, domestic_sales, international_sales)
	VALUES
		(8, 8.5, 300000000, 250000000),
        (10, 7.4, 460000000, 510000000),
        (11, 9.9, 290000000, 280000000);
        
-- 6 - Exclua da tabela movies o filme “WALL-E”.
DELETE FROM pixar.box_office
WHERE movie_id = 11;

DELETE FROM pixar.movies
WHERE title = 'WALL-E';

-- 7 - Exclua da tabela movies todos os filmes dirigidos por “Andrew Stanton”.
SELECT id FROM pixar.movies
WHERE director = 'Andrew Stanton';

DELETE FROM pixar.box_office
WHERE movie_id IN (2, 9);

DELETE FROM pixar.movies
WHERE director = 'Andrew Stanton';

-- 8 - Altere a classificação da tabela box_office para 9.0 de todos os filmes que lucraram mais de 400 milhões no mercado interno.
SELECT movie_id FROM pixar.box_office
WHERE domestic_sales > 400000000;

UPDATE pixar.box_office
SET rating = 9
WHERE movie_id IN (6, 10);

-- 9 - Altere a classificação da tabela box_office para 6.0 de todos os filmes que lucraram menos de 300 milhões no mercado internacional e mais de 200 milhões no mercado interno.
SELECT movie_id FROM pixar.box_office
WHERE international_sales < 300000000
AND domestic_sales > 200000000;

UPDATE pixar.box_office
SET rating = 6
WHERE movie_id IN (3, 7, 8);

-- 10 - Exclua da tabela movies todos os filmes com menos de 100 minutos de duração.
SELECT id FROM pixar.movies
WHERE length_minutes < 100;

DELETE FROM pixar.box_office
WHERE movie_id IN (1, 6, 7, 8);

DELETE FROM pixar.movies
WHERE id IN (1, 6, 7, 8);