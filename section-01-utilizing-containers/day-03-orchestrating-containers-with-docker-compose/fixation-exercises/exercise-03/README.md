# Exercise 03

## Changing behavior

1. Create a new db service for our database:

    We can use the MySQL database, use the image mysql:5.7.40;
    We need to set a root password for the database, for that use the environment variable MYSQL_ROOT_PASSWORD

2. Now we need to configure our ghost service to use the database:

- Define the database type to be used by `ghost` by setting the `database__client` environment variable to `mysql`;
- Define the `db` service as the database server in the `database__connection__host` environment variable;
- Set the credentials for the database connection
    - To define the user person (root), use the `database__connection__user` environment variable
    - To set the password (the same one we set in our `db` service), use the `database__connection__password` environment variable
- Set the `ghost` name to the database name in the database using the `database__connection__database` environment variable;
- Use the `depends_on` option to create dependency relationships between services.

3. Build the environment with the new file using `docker-compose` and then access the port.

4. Configure our mysql service to use a volume, as we saw in the content, use the target path /var/lib/mysql.

5. Instead of using the default network created by Compose, define a network called my-network for the two services to communicate.

6. Upload the environment with the new file using docker-compose and then access it.