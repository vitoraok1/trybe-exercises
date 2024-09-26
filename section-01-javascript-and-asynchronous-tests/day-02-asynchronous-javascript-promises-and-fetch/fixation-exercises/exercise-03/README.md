# Exercise 03

## Bonus - Select Pet

Do you like to see pictures of cute [kittens](https://aws.random.cat/meow) and [puppies](https://dog.ceo/api/breeds/image/random)? Then you will like this exercise! Let's create an application that displays random photos of dogs and cats. You will be able to choose which type of animal you want to see the image, or you can choose the “Surprise me” option and let luck decide which pet will be displayed. Like the idea? Let's go to the necessary steps:

1. Create a new project using *npm*. Install and configure `vite` to use it as a web server.
2. Create a new page that has the following elements:
  - a button with the text `Get random dog`;
  - a button with the text `Get random cat`;
  - a button with the text `Surprise me`;
  - an image that should have `Random pet` as alt text. This image will start with the empty src attribute.
3. When the `Get random dog` button is clicked, make a request to the API `https://dog.ceo/api/breeds/image/random`. This API will return an object with the image of a random dog. Use the image tag created in item 2 to display the image returned by the API.
4. When the `Get random cat` button is clicked, make a request to the `https://aws.random.cat/meow` API. This API will return an object with the image of a random cat.Use the image tag created in item 2 to display the image returned by the API.
5. When the `Surprise Me` button is clicked, make two requests: one to the [cat pictures](https://aws.random.cat/meow) API and one to the [dog pictures](https://dog.ceo/api/breeds/image/random) API. Only display the API image that returns first. Ignore the result of the second request and also ignore the result if any request returns with an error.

![Example](./imgs/b3a59b0c-5971-41eb-83ae-0961fc771994-Gif%20mostrando%20o%20comportamento%20da%20aplica%C3%A7%C3%A3o.gif)