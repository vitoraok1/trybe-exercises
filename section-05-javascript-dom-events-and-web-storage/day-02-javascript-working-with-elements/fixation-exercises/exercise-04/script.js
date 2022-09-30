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

// Add `p` tag as child of `section` created in step 3 and put some text;

const pTag = document.createElement('p');
pTag.innerHTML = 'Fixando o aprendizado';
sectionTag.appendChild(pTag);

// Add the `section` tag with the `left-content` class as a child of the `main` tag created in step 2;

const leftSection = document.createElement('section');
leftSection.className = 'left-content';
mainTag.appendChild(leftSection);

// Add the `section` tag with the `right-content` class as a child of the `main` tag created in step 2;

const rightSection = document.createElement('section');
rightSection.className = 'right-content';
mainTag.appendChild(rightSection);

