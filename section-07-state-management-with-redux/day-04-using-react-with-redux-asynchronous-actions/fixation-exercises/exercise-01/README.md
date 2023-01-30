# Exercise 01

## Cat API

In this exercise, you will implement an `asynchronous` action using `redux-thunk`.

Your challenge will be to implement the `fetchAPI` asynchronous action and the `Redux Thunk`. For this you will need to implement the following files:

`./src/redux/index.js`: This file contains the application's store. You will need to implement `redux-thunk` here.
`./src/redux/actions/index.js`: You will need to implement the fetchAPI `asynchronous` action creator. This `asynchronous` action should `fetch` to the `https://aws.random.cat/meow` endpoint. In addition, you must use two other actions:
  - `requestAPI`: to inform the user that the requested information is loading
  - `getPicture`: to save the URL of the image requested from the API in the application's global state.