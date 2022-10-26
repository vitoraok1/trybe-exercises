## Exercise 21

Using the object below, do the following:

```
let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};
```

- Access the keys `nome`, `sobrenome`, `andar` and `apartamento `of the last resident of `blocoDois` and make a `console.log` in the following format: “O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101”.

- Use the `for` to print the full name of all residents of block 1 by accessing their keys `nome` and `sobrenome`. Then do the same for the residents of block 2.