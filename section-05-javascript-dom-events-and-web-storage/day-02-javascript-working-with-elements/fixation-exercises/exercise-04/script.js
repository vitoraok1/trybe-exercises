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

// Add an image with `src` set to `https://picsum.photos/200` and class `small-image`. This element must be a child of the `section` created in step 5;

const srcImg = document.createElement('img');
srcImg.className = 'small-image';
srcImg.src = 'https://picsum.photos/200';
leftSection.appendChild(srcImg);

// Add an unordered list with the values ​​from 1 to 10 in full, i.e., `um`, `dois`, `três`, … as list values. This list must be a child of the `section` created in step 6;

const unorderedList = document.createElement('ul');
rightSection.appendChild(unorderedList);

const numbersList = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis',
'Sete', 'Oito', 'Nove', 'Dez'];

for (let index = 0; index < numbersList.length; index += 1) {
    const elementsLi = document.createElement('li');
    elementsLi.innerHTML = numbersList[index];
    unorderedList.appendChild(elementsLi);
}

// Add 3 `h3` tags, all children of the `main` created in step 2.

for (let index = 1; index <= 3; index += 1) {
    const h3Tags = document.createElement('h3');
    h3Tags.innerHTML = 'Item ' + index;
    mainTag.appendChild(h3Tags);
}

// - Add the `title` class to the created `h1` tag;

const titleTag = document.getElementsByTagName('h1')[0];
titleTag.className = 'title'

// Add the `description` class to the 3 created `h3` tags;

const descriptionTags = document.getElementsByTagName('h3');
for (let index = 0; index < 3; index += 1) {
    descriptionTags[index].className = 'description';
}

// Remove the `section` created in step 5 (the one with the `left-content` class). Use the .`removeChild()` function;

const leftSectionClear = document.getElementsByClassName('left-content')[0];
mainTag.removeChild(leftSectionClear);

// Center the `section` created in step 6 (the one with the `right-content` class). Tip: to center, just set the `margin-right: auto` da `section`;

const rightSectionAllign = document.getElementsByClassName('right-content')[0];
rightSectionAllign.style.marginRight = 'auto';

// Change the background color of the parent element of the `section` created in step 3 (the one with the `center-content` class) to green;

const changeFatherColor = document.getElementsByClassName('main-content')[0];
changeFatherColor.style.backgroundColor = 'green';

// Remove the `last two elements` from the list created in step 8.

const removeUlItens = document.getElementsByTagName('ul')[0];
removeUlItens.lastChild.remove();
removeUlItens.lastChild.remove();