# From the html code given below, fulfill the exercise requirements:

`index.html`
```
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <title>#GoTrybe</title>
  </head>
  <body>
    <h1><em>Combinações e Classes Descendentes</em></h1>
    <br />
    <h3>Top 5 frases memoráveis:</h3>
    <ol>
      <li><em>Com grandes poderes vêm grandes responsabilidades.</em> - Tio Ben (Homem Aranha)</li>
      <li><em>Houston, temos um problema.</em> - Jack Swigert</li>
      <li><em>Sempre parece impossível até que esteja feito.</em> - Nelson Mandela</li>
      <li><em>Parte da jornada é o fim.</em> - Tony Stark (Homem de Ferro)</li>
      <li><em>Às vezes, o melhor que podemos fazer é começar novamente.</em> - Steve Rogers (Capitão América)</li>
    </ol>
    <h3>As maiores linguagens de programação:</h3>
    <ul>
      <li>Python</li>
      <li>Java</li>
      <li>JavaScript</li>
      <li>C#</li>
      <li>C / C++</li>
    </ul>
    <h3>Maiores aliados de uma pessoa desenvolvedora:</h3>
    <ul>
      <li>
        <a href="https://pt.stackoverflow.com/" target="_blank">StackOverflow</a>
      </li>
      <li>
        <a href="https://www.w3schools.com/" target="_blank">W3Schools</a>
      </li>
      <li>
        <a href="https://developer.mozilla.org/pt-BR/" target="_blank">MDN Web Docs</a>
      </li>
      <li>
        <a href="https://devdocs.io/" target="_blank">DevDocs</a>
      </li>
      <li>
        <a href="https://app.betrybe.com/" target="_blank">Trybe</a>
      </li>
    </ul>
  </body>
</html>
```
Create the `style.css` file and solve the following exercises:

1. Make all Ordered Lists items a yellow background color. See item numbering for PAR, make font color green. If the number is considered ODD, use a text-transform property to capitalize the text. (Hint: combining classes can be useful here).

2. Make all Header tags (h1, h2...) have a red font color and, if any of them are in italics, increase their size to 40px and add a solid black 1px border.

3. Make all li's 20px font size, and for all italic text within a li, use a font-weight property to make it bold.

4. In the programming languages ​​list, make the first 3 lists have a blue font color and, if any have "java*" in the text, use a pink background color.

5. Bonus) For each link in the developer's allies list, make sure that when hovering over each one, the text becomes bold and assumes the "site-themed" font color
Tip 1: Use the :hover picker to control the mouse hover.
Tip 2: Suggestion of default cores. StackOverflow (orange), W3Schools (green), MDN (black), DevDocs (yellow), Trybe (green).