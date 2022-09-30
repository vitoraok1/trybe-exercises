// Add the `h1` tag with the text `Exercício - JavaScript DOM` as child of `body` tag.

const tagH1 = document.createElement('h1');
tagH1.innerText = 'Exercício - JavaScript DOM';
document.body.appendChild(tagH1);

// Add `main` tag with class `main-content` as child of `body` tag;

const mainTag = document.createElement('main');
mainTag.className = 'main-content';
document.body.appendChild(mainTag);

// Add the `section` tag with the class `center-content` as a child of the `main` tag created in step 2;

const sectionTag = document.createElement('section');
sectionTag.className = 'center-content';
mainTag.appendChild(sectionTag);
