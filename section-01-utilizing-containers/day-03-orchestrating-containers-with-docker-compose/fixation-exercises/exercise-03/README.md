# Exercise 03

## MySQL practice

Create a Compose file to upload WordPress with MySQL:

1 - Use the image `wordpress:php8.0` and `mysql:5.7.40`;

2 - Bind port `80` of the wordpress container to `8080` of the host;

3 - Define the following variables for wordpress:

- WORDPRESS_DB_HOST: db:3306
- WORDPRESS_DB_USER: wordpress
- WORDPRESS_DB_PASSWORD: wordpress
- WORDPRESS_DB_NAME: wordpress

4 - Define the following variables for mysql:

- MYSQL_ROOT_PASSWORD: somewordpress
- MYSQL_DATABASE: wordpress
- MYSQL_USER: wordpress
- MYSQL_PASSWORD: wordpress

5 - Define the `db_data` volume for mysql;

6 - Use the `depends_on` parameter to create a dependency between the services;

7 - Add the `restart` policy with the value `always` to the services;

8 - Upload the services using `docker-compose` and open in the terminal to validate the operation.
