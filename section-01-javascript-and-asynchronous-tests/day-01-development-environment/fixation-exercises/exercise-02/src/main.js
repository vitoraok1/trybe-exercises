import validator from 'validator';

const textField = document.getElementById('value');
const validateBtn = document.getElementById('button');
const selector = document.getElementById('option');
const outputText = document.getElementById('answer');

validateBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const fields = {
    mobilePhone: validator.isMobilePhone(textField.value, 'pt-BR'),
    email: validator.isEmail(textField.value),
    birthDate: validator.isDate(textField.value, ['/', '-']),
    cpf: validator.isTaxID(textField.value, 'pt-BR'),
    hexColor: validator.isHexColor(textField.value),
  }

  outputText.innerHTML = `A validação retornou ${fields[selector.value]}`;
});
