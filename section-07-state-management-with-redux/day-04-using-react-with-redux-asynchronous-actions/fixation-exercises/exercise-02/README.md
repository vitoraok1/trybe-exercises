# Exercise 02

## Game of Thunks

It's time to consolidate all the knowledge of Redux learned so far. You will develop an application that will allow you to search for information about characters from the famous television series: *Game of Thrones*.

The application must have:

- An input that should be named after a character from the series (Jon Snow, Ned Stark, Arya Stark…);
- A button that, when clicked, should render on screen the information of the character (name, titles, nicknames and any other information received by the API that you want) whose name was inserted in the input.

Character information must be obtained through a call to the [API of Ice And Fire](https://anapioficeandfire.com/). You can use the following endpoint: `https://anapioficeandfire.com/api/characters?name=${CHARACTER NAME}`.

You **must** use Redux as the application's global state manager. The information received by the API must be stored in the global state (use the Thunk `middleware` from the `redux-thunk` library to create the asynchronous action).

Create a new React application with the `npx create-react-app game-of-thunks` command and have fun coding!
