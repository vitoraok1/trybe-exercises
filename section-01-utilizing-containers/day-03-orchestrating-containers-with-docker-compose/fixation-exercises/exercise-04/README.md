# Exercise 04

## React compose

1. Start a new `ReactJS` project using create-react-app;

2. Create the `Dockerfile`, as we saw in the last class;

3. Create a new Compose file using version `3`;

4. Define a service in the file for our app, for that use the `build` option to point to the `Dockerfile`;

5. Publish the port exposed in the `Dockerfile` by binding to port `8080` on localhost;

6. To simulate the development process, make the change in some part of the react app code, and then run the command to upload the service again, “rebuilding” the image to apply the changes.