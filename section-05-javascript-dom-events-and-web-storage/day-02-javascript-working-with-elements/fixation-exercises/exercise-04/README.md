## Exercise 04

Before starting this exercise, create an HTML file and copy the code below:

`index.html`

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Exercício</title>
    <style>
      section {
        border-color: black;
        border-style: solid;
      }

      .title {
        text-align: center;
      }

      .main-content {
        background-color: yellow;
      }

      .main-content .center-content {
        background-color: red;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
      }

      .main-content .center-content p {
        font-style: italic;
      }

      .main-content .left-content {
        background-color: green;
        width: 60%;
        margin-left: 0;
        margin-right: auto;
      }

      .main-content .left-content .small-image {
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 100%;
      }

      .main-content .right-content {
        background-color: blue;
        width: 60%;
        margin-left: auto;
        margin-right: 0;
      }

      .main-content .description {
        text-align: center;
      }
    </style>
  </head>
  <body>
    <script>
      // COLOQUE SEU CÓDIGO AQUI
    </script>
  </body>
</html>
```

The purpose of these exercises is to put your knowledge of the DOM into practice. Therefore, you must do the exercises using only JavaScript code, which must be inserted between the <script> and </script> tags.

Start by creating a few things:

- Add the `h1` tag with the text `Exercício - JavaScript DOM` as child of `body` tag;

- Add `main` tag with class `main-content` as child of `body` tag;

- Add the `section` tag with the class `center-content` as a child of the `main` tag created in step 2;

- Add `p` tag as child of `section` created in step 3 and put some text;

- Add the `section` tag with the `left-content` class as a child of the `main` tag created in step 2;

- Add the `section` tag with the `right-content` class as a child of the `main` tag created in step 2;

- Add an image with `src` set to `https://picsum.photos/200` and class `small-image`. This element must be a child of the `section` created in step 5;

- Add an unordered list with the values ​​from 1 to 10 in full, i.e., `um`, `dois`, `três`, … as list values. This list must be a child of the `section` created in step 6;

- Add 3 `h3` tags, all children of the `main` created in step 2.

Now that you've created a lot, let's make some changes and removals:

- Add the `title` class to the created `h1` tag;

- Add the `description` class to the 3 created `h3` tags;

- Remove the `section` created in step 5 (the one with the `left-content` class). Use the .`removeChild()` function;

- Remove the `section` created in step 5 (the one with the `right-content` class). Use the .`removeChild()` function;

- Change the background color of the parent element of the `section` created in step 3 (the one with the `center-content` class) to green;

- Remove the `last two elements` from the list created in step 8.
