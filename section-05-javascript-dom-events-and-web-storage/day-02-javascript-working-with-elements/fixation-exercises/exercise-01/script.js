// Access the element elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

// Access 'pai' from elementoOndeVoceEsta element and add a color to it.
const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'orange';

// Go to the primeiroFilhoDoFilho and add some text to it.
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
primeiroFilhoDoFilho.innerText = 'Texto teste';

// Access the primeiroFilho from 'pai'.
const primeiroFilho = pai.firstElementChild;

// Now access the primeiroFilho from elementoOndeVoceEsta.
const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

// Now access the text Attention! from elementoOndeVoceEsta.
const text = elementoOndeVoceEsta.nextSibling;

// Now access the terceiroFilho from elementoOndeVoceEsta.
const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

// Now access the terceiroFilho from 'pai'.
const terceiroFilho2 = pai.lastElementChild.previousElementSibling;