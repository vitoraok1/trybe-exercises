let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

//Para acessarmos as chaves nome, sobrenome e titulo (que está dentro da chave livrosFavoritos que é uma array), convocamos o console.log e fazemos a concatenação da string, com as propriedades que podemos acessar por objeto.nomeDaChave. Já para acessarmos a posição 0 da chave livrosFavoritos que é uma array, utilizamos objeto.nomeDaChave[0].segundoNomeDaChave.

console.log('O livro favorito de', leitor.nome, leitor.sobrenome, 'se chama', leitor.livrosFavoritos[0].titulo);

//Para adicionarmos um novo livro a array livrosFavoritos, precisaremos utilizar o .push e colocar o objeto dentro de colchetes.

leitor.livrosFavoritos.push(
    {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editor: 'Rocco',
    },
);

//Para imprimirmos o resultado de uma forma que caso alterarmos a quantidade de objetos dentro da array livrosFavoritos se atualizasse, precisamos trazer o console.log e utilizarmos o .length depois da chave livrosFavoritos.

console.log(leitor.nome, 'tem', leitor.livrosFavoritos.length, 'livros favoritos');
