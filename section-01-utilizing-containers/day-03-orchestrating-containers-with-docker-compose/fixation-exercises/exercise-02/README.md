# Exercise 02

## Ghost blog

Create the Compose file to upload a [ghost blog](https://ghost.org/), this platform is similar to WordPress and is used to create content sites. You can read on the official website how to create content on it and use it. For this exercise, we'll just use your example page:

1 - Use version “3” in the file;

2 - Create a `service` to upload the platform, use the `ghost:1-alpine` image;

3 - Publish port `2368`, also binding to `2368`;

4 - Upload the application using `docker-compose` and then access the published port to validate that everything went well.