# Exercise 01

## Clipboard copy

Using the code presented in the content, we will implement a new functionality to the application. When clicking on the generated password, the application should copy the password to the clipboard. To do this, install the library [clipboard-copy](https://www.npmjs.com/package/clipboard-copy).

Use the code below to perform the exercise:

```
import { nanoid } from 'nanoid';
import './style.css';

const passwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');
passwordBtnEl.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPasswordEl.innerHTML = randomPassword;
});
```
