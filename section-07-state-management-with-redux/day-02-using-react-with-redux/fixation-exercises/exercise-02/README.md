# Exercise 03

## Reading and writing in global state

In this exercise, we will implement an application to fetch and display character information from the X-Men universe. When selected, the X-men name must be saved in the global state. That way, any component will be able to access the information containing its name.

Also, we have a `show` key in the global state that has a `boolean` value. The value of this key will define which component should be rendered. This application is in the context of the X-men comic book series, but this strategy is very common in application development and can be adopted in many different contexts.

The application shown below is implemented with Redux. However, you will notice that after selecting a character and clicking the `Select` button, nothing happens. This is because the `dispatch` and `mapDispatchToProps` functions were not implemented correctly.

The global state of the application is in the following format:

```
state = {
  show: false,
  mutant: 'Absalon Mercator (Mister M)',
}
```

- `show`: Has a `boolean` value;
- `mutant`: Named after an X-men character (also known as a mutant).

Your objective in this exercise will be to finalize the implementation of the `SelectOmega` component, in the `./src/components/SelectOmega.js` file, performing the following actions:

- Implement the `mapStateToProps` function, so that the application has access to the `show` key, of the global state;
- Implement the `select` tag's `onChange()` function. For that, you will need to `dispatch()` the `selectMutant()` action. This action must receive the name of a mutant as a parameter.
- Implement the button's `onClick()` function. To do so, you will need to `dispatch()` the showMutant(true) action, passing the value `true` as a parameter.

You should complete the challenge by just deploying the ./src/components/SelectOmega.js file, but feel free to explore the entire application.