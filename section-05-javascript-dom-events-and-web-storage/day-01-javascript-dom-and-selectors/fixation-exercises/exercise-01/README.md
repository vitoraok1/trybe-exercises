## Exercise 01

Now you! Do the following:

- Retrieve the element that contains the page title and do something with it, like change it to the name of your favorite movie.

- Now retrieve the second paragraph and use your creativity to change it.

- Finally, retrieve the subtitle and change it too.

`index.html`

```
<!DOCTYPE html>
<html>
  <body>
    <header>
      <h2 id="page-title">Título</h2>
      <p id="paragraph">Dê uma cor para este parágrafo!</p>
      <h4 id="subtitle">Subtítulo</h4>
      <p id="second-paragraph">Segundo parágrafo!</p>
    </header>
    <script>
      const paragraph = document.getElementById("paragraph");
      paragraph.style.color = "red";
    </script>
  </body>
</html>
```
