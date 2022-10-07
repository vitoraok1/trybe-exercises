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

//