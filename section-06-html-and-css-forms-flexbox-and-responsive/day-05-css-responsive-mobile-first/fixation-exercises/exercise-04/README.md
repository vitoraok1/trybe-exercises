# Exercise 04

## Creating mobile and print layouts

Before starting, copy the `HTML` and `CSS` template below and save them in their respective files:

`kitten-kare.html`

```
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Kitten Kare</title>
  <link rel="stylesheet" href="kitten-kare.css" />
</head>
<body>
  <div id="container">
    <header id="header">
      <h1>
        Kitten Kare
      </h1>
    </header>
    <nav id="navigation">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
      </ul>
    </nav>
    <main id="content-container">
      <article id="content">
        <h2>
          Welcome!
        </h2>
        <img src="http://placebear.com/400/400">
        <p>The domestic cat[1][2] (Felis catus[2] or Felis silvestris catus[4], informally Felis domesticus[6][7]) is a
          small, usually furry, domesticated, carnivorous mammal. It is often called the housecat when kept as an indoor
          pet,[8] or simply the cat when there is no need to distinguish it from other felids and felines. Cats are
          valued by humans for companionship and ability to hunt vermin and household pests. They are primarily
          nocturnal.[9]
        </p>
        <p>Cats are similar in anatomy to the other felids, with strong, flexible bodies, quick reflexes, sharp
          retractable claws, and teeth adapted to killing small prey. As crepuscular predators, cats use their acute
          hearing and ability to see in near darkness to locate prey. Not only can cats hear sounds too faint for human
          ears, they can also hear sounds higher in frequency than humans can perceive. This is because the usual prey
          of cats (particularly rodents such as mice) make high frequency noises, so the hearing of the cat has evolved
          to pinpoint these faint high-pitched sounds. Cats also have a much better sense of smell than humans.
        </p>
        <p>Despite being solitary hunters, cats are a social species, and cat communication includes the use of a
          variety of vocalizations (meowing, purring, trilling, hissing, growling and grunting) as well as pheromones
          and types of cat-specific body language.[10]
        </p>
      </article>
      <aside id="aside">
        <h3>
          Cat Body Types
        </h3>
        <ul>
          <li>Oriental</li>
          <li>Foreign</li>
          <li>Semi-Foreign</li>
          <li>Semi-Cobby</li>
          <li>Cobby</li>
        </ul>
      </aside>
    </main>
    <footer id="footer">
      Copyright © Kitten Kare, 2019
    </footer>
  </div>
</body>
</html>
```

`kitten-kare.css`

```
body {
  margin: 0;
}

#container {
  margin: 0 auto;
  width: 100%;
  background: #fff;
}

#header {
  background: #ccc;
  padding: 20px;
}

#header h1 {
  margin: 0;
}

#navigation {
  width: 100%;
  background: #333;
}

#navigation ul {
  display: flex;
  margin: 0;
  padding: 0;
}

#navigation ul li {
  list-style-type: none;
  display: flex;
}

#navigation li a {
  padding: 5px 10px;
  color: #fff;
  text-decoration: none;
  border-right: 1px solid #fff;
}

#navigation li a:hover {
  background: #383;
}

#content-container {
  width: 100%;
  background: #FFF;
}

#content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
  padding: 20px 0;
  margin: 0 0 0 4%;
}

#content h2 {
  margin: 0;
}

#aside {
  width: 33%;
  padding: 20px 0;
  margin: 0 3% 0 0;
}

#aside h3 {
  margin: 5px;
}

#footer {
  background: #ccc;
  text-align: right;
  padding: 20px;
  height: 1%;
}
```

**Perform the following tasks:**

- Add a media query in the CSS file and the necessary rules for the page to look like the image below when it is printed. Specifically:

- Elements with `id header`, `navigation` and `footer` should disappear;

- The element with `id aside` should be shown below the main content.

[Antes_impressao](./images/Visualiza%C3%A7%C3%A3o%20da%20p%C3%A1gina%20antes%20da%20impress%C3%A3o.png)

- Add a media query in the CSS file and the necessary rules to make the page look like the images below when the screen is resized to smaller widths. Specifically:

- The element with `id aside` should disappear;

- The `body` element must not have `padding`;

- Images must not exceed the width of the screen;

- Items within the `navigation` element must each appear on their own line;

- The element with `id header` must be fixed, so that it always appears at the top of the screen, even after the user scrolls the page.

[240x320](./images/240x320_%20tela%20pequena%20.png)

[360x640](./images/360x640%20tela%20de%20smartphone.png)