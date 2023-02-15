## Introduction - Hooks

What are we going to learn?

There are two ways to create a React component:

  - Defining a class that extends the `React.Component` class.
  - Defining a function that returns what is rendered.

But what is the difference between these two forms?

The class gives you more tools, however, it is a bit more complicated to create.

When React was released, functional components were very limited. It was not possible to use states in these components, nor to perform operations in the different stages of the lifecycle. The only way to do this was using class components, so we could, for example, define states, access contexts or use component lifecycle methods.

So sometimes it would be great if we could do all of this in a simpler way, with a functional component. This was possible from version `16.8`, with the release of Hooks in React.

