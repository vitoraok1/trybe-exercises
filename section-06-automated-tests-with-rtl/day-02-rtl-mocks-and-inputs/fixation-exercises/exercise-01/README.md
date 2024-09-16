# Exercise 01

## To Consolidate

This pinning exercise will use code from our joke generator that we saw in the previous section. Before starting testing, let's add a new feature to our joke application we were working on:

  - create a button called “New Joke” that, when clicked, makes a new request to the API and renders a new joke on the screen.

With this new functionality created, write a test to verify the following behaviors:

  - when rendering the page, the first joke is displayed on the screen;
  - the `fetch` function was called once;
  - by clicking on the “New joke” button, a new joke is displayed on the screen;
  - the first joke is no longer displayed on the screen;
  - the `fetch` function was called 2 times.