let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

//Para imprimirmos no console a concatenação da string "Bem vinda, " e o o valor da chave personagem da variável info, podemos utilizar info.personagem ou info['personagem'].

console.log("Bem-vinda, ", info.personagem);

//Para inserirmos uma nova chave e valor a variável info, podemos utilizar info.novaChave = 'valor', ou info['novaChave'] = 'valor'

info.recorrente = 'Sim';
console.log (info);

//Para exibirmos toda as chaves do nosso objeto com o for/in, imprimimos o resultado no console.log convocando somente o as propriedades (property).

for(let property in info) {
    console.log(property);
}

//Para exibirmos todos os valores das chaves do nosso objeto com o for/in, imprimimos o resultado no console.log convocando os valores das propriedades (info[property]).

for(let property in info) {
    console.log(info[property]);
}

//Para imprimirmos os valores dos dois objetos juntos, estruturaremos nosso for/in parecido com o anterior, entretanto para esse caso precisamos utilizar dentro do for, uma condição if/else, que irá verificar caso a chave e o valor de recorrente sejam iguais, retornar "Ambos recorrentes" no console, caso não retornar no console a junção dos dois objetos.

let newInfo = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell`s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};

for(let property in info) {
    if(property === 'recorrente' && info[property] === 'Sim' && newInfo[property] === 'Sim') {
        console.log('Ambos recorrentes');
    } else {
        console.log(info[property] + ' e ' + newInfo[property]);
    }
};


