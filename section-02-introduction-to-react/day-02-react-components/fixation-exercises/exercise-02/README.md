# Exercise 02

## Rendering users

Create a *React* app on your machine via `create-react-app` with the name `exercise-listing-components`, create the `Image` and `UserProfile` components shown below. Also, change the `App` component as follows:

```
// arquivo Image.js
import React from 'react';

class Image extends React.Component {
  render() {
    const { source, alternativeText } = this.props;
    return <img src={ source } alt={ alternativeText } />;
  }
}

export default Image;
```

```
// arquivo UserProfile.js
import React from 'react';
import Image from './Image';

class UserProfile extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <p> { user.name } </p>
        <p> { user.email } </p>
        <Image source={ user.avatar } alternativeText="User avatar" />
      </div>
    );
  }
}

export default UserProfile;
```

```
// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import UserProfile from './UserProfile';

class App extends React.Component {
  render() {
    const joao = {
      id: 102,
      name: 'João',
      email: 'joao@gmail.com',
      avatar: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png'
    };

    const amelia = {
      id: 77,
      name: 'Amélia',
      email: 'amelia@gmail.com',
      avatar: 'https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png'
    };

    return (
      <div className="App">
        <UserProfile user={ joao } />
        <UserProfile user={ amelia } />
      </div>
    );
  }
}

export default App;
```

The `App` component has two `UserProfile` components as children. How about we generate these components dynamically? This can be done using the HOF `map`, as follows:

```
// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import UserProfile from './UserProfile';

class App extends React.Component {
  render() {
    const users = [
      {
        id: 102,
        name: 'João',
        email: 'joao@gmail.com',
        avatar: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png'
      },
      {
        id: 77,
        name: 'Amélia',
        email: 'amelia@gmail.com',
        avatar: 'https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png'
      }
    ];

    return (
      <div className="App">
        {users.map((user) => <UserProfile user={ user } />)}
      </div>
    );
  }
}

export default App;
```

However, the dynamic generation of the components is incomplete, as it is necessary to pass a `key` to the `UserProfile`. If you copy the above code into your project, run the `npm start` command to start the program and access your browser's `console`, you will notice the existence of a `warning` raised by React, precisely because the key attribute is missing.

That said, change the component's call to `UserProfile` so that the list is dynamically generated properly.