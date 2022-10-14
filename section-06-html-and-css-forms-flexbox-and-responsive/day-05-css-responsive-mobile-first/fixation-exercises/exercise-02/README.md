# Exercise 02

## Create page for small screen

Before starting, copy the `HTML` and `CSS` template below and save them in their respective files:

`small-screen.html`

```
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Media Query Demo</title>
  <link rel="stylesheet" href="small-screen.css" />
</head>
  <body>
    <header>
      <h1>Media Query Demo</h1>
    </header>
    <article>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, ipsum quae veritatis in nihil laudantium labore beatae nulla laborum rem. Error, molestiae eaque quod placeat at. Labore architecto minus accusantium.
      </p>
    </article>
    <main>
      <h2>Box Columns</h2>
      <section>
        <figure>
          <img src="http://placekitten.com/452/450?image=12" alt="Placeholder kitteh">
          <figcaption>Place Kittens are great</figcaption>
        </figure>
        <figure>
          <img src="http://placekitten.com/452/450?image=5" alt="Placeholder kitteh">
          <figcaption>Place Kittens are great</figcaption>
        </figure>
        <figure>
          <img src="http://placekitten.com/452/450?image=1" alt="Placeholder kitteh">
          <figcaption>Place Kittens are great</figcaption>
        </figure>
        <figure>
          <img src="http://placekitten.com/452/450?image=9" alt="Placeholder kitteh">
          <figcaption>Place Kittens are great</figcaption>
        </figure>
        <figure>
          <img src="http://placekitten.com/452/450?image=6" alt="Placeholder kitteh">
          <figcaption>Place Kittens are great</figcaption>
        </figure>
        <figure>
          <img src="http://placekitten.com/452/450?image=16" alt="Placeholder kitteh">
          <figcaption>Place Kittens are great</figcaption>
        </figure>
      </section>
    </main>
  </body>
</html>
```

`small-screen.css`

```
/*
 * @see http://www.paulirish.com/2012/box-sizing-border-box-ftw/
 * apply a natural box layout model to all elements, but allowing components to change
 */
 html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {

}

article {

}

h1 {

}

h2 {

}

img {
	max-width: 100%;
}

main {

}

section {

}

figure {
	margin: 0;
}

figcaption {
  font-size: .8em;
}
```

Start the exercise by analyzing the page on a small screen, to simulate what it might look like on a mobile device.

When thinking about designing a small screen first, we are applying the **mobile first** approach. In doing so, we started with a basic ~~(lowest common denominator)~~ design and then worked on more sophisticated improvements for browsers with advanced functionality and specific layouts.

This ensures that we are building an experience that will work for everyone. It also has a side effect: it also helps us realize what content is really important on our page.

- Start expanding the width of your canvas. Do this until you reach a point where your current page *design* no longer works. For example, the length of the lines may start to get too long for the text to be easily read, or the page may become wide enough that it no longer makes sense for the images to be displayed one below the other.

Now you will adjust the *CSS* to improve the view of the page.

**Perform the following tasks:**

- Make the font size larger;

- Make the font size of `h1` elements smaller;

- Increase the spacing between the figures;

- Add some margin to the page.

- Save the screen width at the point where you identified the current layout didn't work well (eg 800px). This will be the first breakpoint of the layout. A breakpoint is just a point where we are defining that the current design must change;

- Create a media query in your CSS file, using the pixel dimension you saved as the `min-width` of the media query test. Inside that breakpoint, add the following tweaks:

- Change the background color (this will help you to see when the media query took effect);

- Adjust the font size;

- Adjust the page margins;

- Make the images show in two columns.

- Now, you will create another breakpoint for large screens. Resize your canvas again to find a new breakpoint.

- Create a new media query in your CSS file using the dimension you found for large screens (for example 1300px), and make the following adjustments inside the breakpoint:

    - Change the background color;

    - Adjust the font size;

    - Adjust the page margins;

    - Add the `max-width` property to the page, to ensure that the width of the lines is not too large.