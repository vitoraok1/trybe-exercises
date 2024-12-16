## Exercise 09

:rocket: Exercises - objects and for/in

Using the object below, do the following exercises:

```
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
```

- Print a welcome message from the console for the above character, including their name. Use the `meuObjeto.chave` syntax. Expected value in the console:

```
Bem-vinda, Margarida
```

- Insert in the object a new property with the key name 'recurring' and the value 'Yes' and then print the object in the console. Use the syntax `meuObjeto['chave'] = valor`. Expected value in the console:

```
{
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
}
```

- Do a `for/in` that shows all the keys of the object. Expected value in the console:

```
personagem
origem
nota
recorrente
```

- Make a new `for/in`, but now show all the values ​​of the object's keys. Expected value in the console:

```
Margarida
Pato Donald
Namorada do personagem principal nos quadrinhos do Pato Donald
Sim
```

- Now, define a second object with the same structure (same keys) as the first and the following values: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Then print the values ​​of each object together according to each of the keys. Expected value in the console:
```
Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes // Atenção para essa última linha!
```
