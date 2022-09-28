## Exercise 02

- Add an equal class for the two paragraphs;

- Retrieve your paragraphs via JavaScript code, using the `getElementsByClassName` function;

- Change some style of the first one;

- Retrieve the subtitle and change its color using the `getElementsByTagName` function.

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