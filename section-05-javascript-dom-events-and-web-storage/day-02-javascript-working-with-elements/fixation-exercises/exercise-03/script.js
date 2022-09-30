// Para removermos todos os elementos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho, primeiro analisando a estrutura como o filho pai que contém varios outros filhos é um dos elementos que não vai precisar ser deletado, podemos iniciar resgatando o elemento com id 'pai' e armazenando em uma constante. Após isso utilizando a propriedade .childNodes par retornar uma NodeList com todos nós filhos dessa id.

const pai = document.getElementById('pai');
const todosFilhos = pai.childNodes;

// Após obtermos a NodeList, precisamos estruturar um for que verifique todos elementos dessa lista, adicionem a uma nova constante novoFilho e uma condição para que todos elementos diferentes da id 'elementoOndeVoceEsta' sejam removidos com a propriedade .remove().

for (let index = todosFilhos.length; index >= 0; index -= 1) {
    const novoFilho = todosFilhos[index];
    if (novoFilho.id !== 'elementoOndeVoceEsta') {
        novoFilho.remove();
    }
}

// Por fim, precisamos deletar o elemento segundoEUltimoFilhoDoFilho que é um filho do elementoOndeVoceEsta. Primeiro convocamos ele pelo getElementById e depois removemos com a propriedade .remove().

const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove();
