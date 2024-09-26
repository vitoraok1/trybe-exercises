# Exercise 02

## Superhero API

Let's create an application that searches for the image and name of a super heroine or a super hero. For that, use the [SuperHero](https://www.superheroapi.com/) API. The application must also have an alert, in case the API returns an error. Here's a suggestion: try using the [SweetAlert2](https://sweetalert2.github.io/) library 😉

![Exercise Animation](./imgs/821e5164-9795-445a-b488-dad3a062fcd2-Anima%C3%A7%C3%A3o%20do%20Exerc%C3%ADcio.gif)

1. Create an `npm` project from scratch
2. Structure an HTML page that contains: a *card* with the image of the superhero or superhero and a button
3. The *card* must contain the person's image and name. This data will be provided by the API (Check it out: you can read the API documentation to know exactly which fields you should use here)
4. The button must generate a random number, which will be the ID used for the API (Check it out: you can simulate an API error if you request an `id` greater than the API can return. For example: there are 500 `ids` registered and you request a random number up to 750)
5. The button must search the API for the ID and render the person's name and image on the screen
6. If there is an error during the API request, the application must issue an alert informing the error occurred.
