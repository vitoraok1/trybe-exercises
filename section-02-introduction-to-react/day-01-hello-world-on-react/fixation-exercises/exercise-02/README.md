# Exercise 02

## First class React component step by step

**Step 1.** Create a new project using `npx create-react-app my-app` command. Replace `my-app` with whatever you want for your app.

**Step 2.** In the `src` folder, access `App.js` and change the entire contents of the file so that it looks like this:

```
import React from 'react';

class App extends React.Component {
  render() {
    return ();
  }
}

export default App;
```

**Step 3.** In the `src` folder, create a file called `About.js`. Next, access the `About.js` file and create a component that returns an `<h1>` with your name and a paragraph `<p>` that contains a brief description of you.

**Step 4.** Now, let's create a list of the skills you've already learned in the course within the `About` component.

- Add an `<h2>` with the title “My Skills”
- Add an unordered list of your skills.

**Step 5.** Import your component in `App.js` so that it will be rendered on the screen when the application starts.

Note: You will need to use `export default` to export your component, e`xport default` is always used when we want to export just one element of a file, be it a function, a component or a variable.

**Step 6.** Run your application with the `npm start` command and check if everything went as expected. By the end of this exercise, you will have made your first class React component. Congratulations! 