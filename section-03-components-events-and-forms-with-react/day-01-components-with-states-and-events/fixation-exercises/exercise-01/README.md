# Exercise 01

## To Consolidate

- Create a React application with `npx create-react-app fancy-buttons`, which meets the following criteria: The `App.js` component must be changed to be a class component and contain a button associated with an event that prints any text via `console .log()`.
⚠ Don't worry about the correct syntax for event functions for now.

- Make your previous application display three buttons side by side with different text. Each button clicked should trigger a different event, each writing something different to the browser's console via `console.log()`.

- Using the same code as in the previous exercise, declare within the `<App>` class the functions that were previously declared outside the class.

- Make the functions created in the previous exercise have access to the `this` object.

- Now you are going to convert the application developed in the previous exercises to one that counts the number of clicks made on each button!
Define an initial state for the count of each button.

- Now, when a button is clicked, asynchronously change the state of this button from zero to one.

- Finally, increment the count of a button every time it is clicked.

- Define a logic that states that when the number of clicks on the button is even, it must be green.

- Now, when clicking on the button, its current color must be printed through a `console.log()`. **This logic needs to be implemented in the same function used to increase the button click count**.