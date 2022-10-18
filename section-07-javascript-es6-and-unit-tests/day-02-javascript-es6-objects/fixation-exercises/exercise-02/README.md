# Exercise 02

## Part II - Customer Request

For the following exercises, use the following code:

`script.js`

```
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.

};

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.

};

orderModifier(order);
```

Now you are going to do some exercises.

- Complete the customerInfo() function so that your return is similar to “Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701”.

- Complete the orderModifier() function so that your return is similar to “Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.”
  - Modify the name of the buyer person.
  - Change the total purchase amount to R$ 50.00.
