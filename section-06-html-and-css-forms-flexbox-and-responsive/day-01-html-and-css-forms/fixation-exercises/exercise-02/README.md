# Exercise 02

## Understand prevent default

- Create an HTML file `index.html`.

- Create a Javascript file `script.js`.

- In your HTML file:
    - Add the `<script src="script.js"></script>` at the end of the `body` of the HTML.
    - Copy the three elements below `(a, input type="text", checkbox)` into your page

- In your Javascript file.
    - Add the selectors below at the beginning of the file.

```
<!-- elemento para copiar -->
<a href="www.betrybe.com" target="_blank" id="href">TRYBE</a>
<input type="text" id="input-text"/>
<input type="checkbox" id="input-checkbox" />
```

```
// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");
```

- Add a `click` event to the `a` element that has the `href` id. In the event function, implement the `.preventDefault()` method to prevent the element's default behavior. That is, when you click on the link, nothing should happen.

- Add a `click` event to the `checkbox` element that has the id `input-checkbox`. In the event function, implement the `.preventDefault()` method to prevent the element's default behavior. That is, when you click on the box, nothing should happen.

- Add a `keypress` event to the `input type="text"` element that has the id `input-text`. In the event function, implement the `.preventDefault()` method so that only the character `a` (lowercase letter 'a') can be typed in the box. (hint: to capture the typed key, use `event.key`)