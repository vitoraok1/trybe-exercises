# Exercise 01

## To improve our knowledge of images and volumes

1. Create an HTML file called `missao_trybe.html` that has the following structure:
 
- Tag `<title>` with the following text “Trybe”;
- Tag `<H1>` with the following text “Missão da Trybe”;
- Tag `<p>` with the following text “Generate opportunities for people”;
- Save the file anywhere on your machine with the `html` extension

2. Create a container to hold an Apache `httpd:2.4.54` server and link its internal port with port 4545 on your local machine.

3. After creating the container, access the HTML page running on the server in your browser.

4. Access the `missao_trybe.html` file and add the `<p>` tag with the following text: “Our business is PEOPLE! #VQV”;

5. Get the container id `httpd:2.4.54`;

6. Get the `Mounts` through the `Source` property, which should show the volume of this container on the Docker Host;

7. Now stop the `httpd:2.4.54` container;

8. Delete your container;

9. Make sure the folder where you saved the html file remains in the same place;

10. Get the `IMAGE ID` from the server;

11. After getting the `IMAGE ID`, delete the image.
