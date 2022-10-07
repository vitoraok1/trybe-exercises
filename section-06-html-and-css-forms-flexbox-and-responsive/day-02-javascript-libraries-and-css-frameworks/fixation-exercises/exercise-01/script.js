window.onload = function () {
    const clearButton = document.getElementById('clear-button')
    clearButton.addEventListener('click', clearForm);
    const sendButton = document.getElementById('send-button');
    sendButton.addEventListener('click', keepTexts);
    const terms = document.getElementById('terms');
    terms.addEventListener('change', enableSubmit);
};

//Função para manter os dados preenchidos ao enviar o formulário

function keepTexts(event) {
    event.preventDefault();
    const validation = textInputValidation();
    if (validation === false) {
      alert('Dados inválidos');
    } else {
      alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }
}

// Função para criar um botão que reseta o formulário (outra opção seria fazer direto no html utilizando o input com a propriedade "reset")

function clearForm() {
const allInputs = document.querySelectorAll('input');
const textArea = document.getElementById('textarea')

for (let index = 0; index < allInputs.length; index += 1) {
    const userInput = allInputs[index];
    userInput.value = '';
    userInput.checked = false;
    }
textArea.value = '';
}

// Função para deixar como obrigatório que o usuário aceite os termos antes de enviar o formulário (outra opção seria fazer direto no html utilizando a propriedade required no input button)

function enableSubmit() {
    const sendButton = document.getElementById('send-button');
    const terms = document.getElementById('terms');
    sendButton.disabled = !terms.checked;
  }

// Função para verificar se os inputs possuem o mínimo/máximo de caracteres exigidos para podermos depois convocá-lo na função que contem o preventDefault e emitirmos o alerta caso os dados sejam inválidos ou caso esteja tudo certo.

function textInputValidation() {
    const email = document.getElementById('mail').value.length;
    const invalidEmail = email < 10 || email > 50;
  
    const name = document.getElementById('name').value.length;
    const invalidName = name < 10 || name > 40;
  
    const reason = document.getElementById('textarea').value.length;
    const invalidReason = reason > 500;
  
    if (invalidEmail || invalidName || invalidReason) {
      return false;
    }
    else {
      return true;
    }
}