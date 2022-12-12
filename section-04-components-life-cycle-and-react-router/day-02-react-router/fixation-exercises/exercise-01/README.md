# Exercise 01

## To Consolidate

- Make the application browsable, encapsulating what is returned by the `App` inside the `BrowserRouter` component.

- Create a route to the `Home` component, using a `Route` that maps the URL path "/" to `Home`.

- Add a route that maps the URL path "/about" to the `About` component. Visit `http://localhost:3000/abou`t to see if the `About` component rendered!

- The `About` component was rendered in the previous exercise, but the `Home` component was also rendered, which was not desired for our case. under Now change the way URL path matching is being done to render `Home` so that `Home` is only rendered if the URL path is exactly equal to "/".

- Add a route that maps the URL path "/users" to the `Users` component. Go to `http://localhost:3000/users` to see that only the `Users` component was rendered.

- Add inside `BrowserRouter` a list containing 3 links:

- a link that points to the URL path "/" containing the text `Home`;
- a link pointing to the URL path "/about" containing the text `About`;
- a link that points to the URL path "/users" containing the text `Users`.

- Change the `Users` component to be able to do the following exercise:

```
// arquivo Users.js
import React, { Component } from 'react';

class Users extends Component {
  render() {
    const { greetingsMessage } = this.props
    return (
      <div>
        <h2>Users</h2>
        <p> { greetingsMessage }, My awesome Users component </p>
      </div>
    );
  }
};

export default Users;
```

- In the `App` component there is a route that renders the `Users` component. Change the way it renders the `Users` component, passing it the `greetingsMessage` prop with the value equal to "Good Morning". Remember to use the correct prop in `Route`!

- To fix use of *URL* with parameters, change the route, defining the parameter named `id`. Then, change the `Users` component, so that it shows in the paragraph the value received for the `id` parameter. Test if it's working by invoking the urls `localhost:3000/users/10`, `localhost:3000/users/11` and `localhost:3000/users/100`, for example.

- In the `App` component, you must have 3 routes: one to render the `Home` component, another to render `About`, and another to render `Users`, the last one making use of *URL* parameter. Encapsulate these 3 routes in a `Switch` component and order the routes from most specific to most generic, starting from the top.

- Add, in the `src` directory, a component called `StrictAccess`.

- As the name says, this component has restricted access, and it must receive a `user` object as props.
- If user `username` and `password` are "john" and "1234", respectively, the `StrictAccess` component renders a paragraph that says "Welcome john!".
- If `username` or `password` are not the expected values, the component needs to generate an alert saying `Access denied` and redirect whoever uses your application to the main page.

- Add in the `App` component a link that points to the URL path "/strict-access", containing the text `Strict Access`.

- Add, in the `App` component, a route that maps the URL path "/strict-access" to the `StrictAccess` component. In order to test the authentication flow, pass to the `user` prop of `StrictAccess` different values ​​for the `username` and `password` properties.