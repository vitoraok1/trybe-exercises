# Exercise 01

## Creating an image component

Create a React app on your machine via `create-react-app` with the name `exercise-image-component`.

After that, create an `Image.js` file in the project's `src` directory and copy the code written below to this file. After all requests, answer:

```
import React from 'react';

class Image extends React.Component {
  render() {
    const { source, alternativeText } = this.props;
    return <img src={ source } alt={ alternativeText } />;
  }
}

export default Image;vvv
```

1. What is the name of the component declared above?

2. Call the `Image` component inside the `App` component, so that this [image](https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg) or the text: `Cute cat staring` is displayed, in case the image fails to load.