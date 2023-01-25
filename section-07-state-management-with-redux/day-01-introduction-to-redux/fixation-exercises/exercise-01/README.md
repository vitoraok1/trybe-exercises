# Exercise 01

## Let's build a state managed by Redux

Our goal will be to manipulate the color of a container through Redux.

The initial code will be made available below:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="https://unpkg.com/redux@latest/dist/redux.min.js"></script>
    <style>
      body {
        height: 100vh;
        margin: 0;
        padding: 0;
      }

      #container {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      button {
        height: 50px;
        width: 200px;
      }
    </style>
  </head>
  <body>
    <div id="container">
      <p>Color: <span id="value">white</span></p>
      <button id="previous">Previous color</button>
      <button id="next">Next color</button>
    </div>
    <script>
      const INITIAL_STATE = {
        colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
        index: 0,
      };
    </script>
  </body>
</html>
```

Let's go through the changes that will need to be made, step by step:

1. Create a store for our application.

2. Create a reducer, implementing a `switch` that returns only the initial state as `default`.

⚠️ Don't forget to put the reducer as a parameter for *`createStore`*, done in the previous step.

3. Increment the `switch` created in the previous step with the `NEXT_COLOR` and `PREVIOUS_COLOR` `cases`. These actions must change the `index` value stored in `INITIAL_STATE`.

4. Create `eventListeners` that listen to the clicks of each button, the Previous color and the Next color, and perform a `dispatch` with the respective `actions`.

5. `Subscribe` to the store, changing the `innerHTML` of the tag with id `value` to the current color and style of the element with id `container`. You should be able to see the colors changing in the background and the name of the displayed color.

6. Create a button with the text Random color, an `eventListener` and an `action` in the `reducer`, adding a random color to the `colors` array saved in our initial state. Also make this color show when it is created by changing the `index` state to its position.