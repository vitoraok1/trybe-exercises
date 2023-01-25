# Exercise 02

## Let's make an application that uses a reducer to control the theme (light mode and dark mode) and to change the status (online and offline)

The initial code is available below:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>App Trybe</title>
    <script src="https://unpkg.com/redux@latest/dist/redux.js"></script>
    <style>
      body {
        color: white;
        background-color: #333;
        font-family: sans-serif;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Minha Aplicação</h1>
      <p>Status: Você está <span id="status">Offline</span></p>
      <button id="toggle-theme">Light Mode</button>
      <button id="toggle-status">Ficar Online</button>
    </div>
    <script>
      const INITIAL_STATE = {
        status: 'offline',
        theme: 'dark',
      };

      const themeButton = document.getElementById('toggle-theme');
      const statusButton = document.getElementById('toggle-status');

      themeButton.addEventListener('click', () => {
        // coloque o código aqui.
      });

      statusButton.addEventListener('click', () => {
        // coloque o código aqui.
      });
    </script>
  </body>
</html>
```

1. Create a reducer with the initial states.

2. Create a store with the created reducer.

3. Add a `case` inside the reducer `switch` to change the `theme` and status states. The `theme` state's `case` should toggle it between 'light' and 'dark'. The `case` of the status state should toggle it between 'online' and 'offline'.

4. Dispatch each of the actions by clicking on the respective buttons.

5. Add a `store.subscribe()` to update the following information on the page:

- If the theme is `light`, the body must have a `dark` background color and a `light` font.
- If the theme is `dark`, it must have a `light` background color and `dark` font.
- If the status is `online`, the `#status` must contain the text `Online`.
- If the status is `offline`, the `#status` must contain the text `Offline`.
- Also, don't forget to modify the text of the buttons to reflect exactly what they do.