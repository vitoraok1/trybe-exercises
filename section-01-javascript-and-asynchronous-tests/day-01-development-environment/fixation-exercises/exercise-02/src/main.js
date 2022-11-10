import validator from 'validator';

const textField = document.getElementById('value');
const validateBtn = document.getElementById('button');
const selector = document.getElementById('option');
const outputText = document.getElementById('answer');

validateBtn.addEventListener('click', (event) => event.preventDefault());