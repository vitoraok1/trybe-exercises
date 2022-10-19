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
// console.log(Object.keys(order.order.pizza))

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const namePerson = order.name;
  const phoneNumber = order.phoneNumber;
  const streetName = order.address.street;
  const houseNumber = order.address.number;
  const apartmentNumber = order.address.apartment;

  console.log(`Olá ${deliveryPerson}, entrega para: ${namePerson}, Telefone: ${phoneNumber}, R. ${streetName}, Nº: ${houseNumber}, AP: ${apartmentNumber}`);
  
};

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const newBuyer = order.name = 'Luiz Silva'
  const totalPrice = order.payment.total = 50;
  const pizzaFlavors = Object.keys(order.order.pizza);
  const coke = order.order.drinks.coke.type;


  console.log(`Olá ${newBuyer}, o total do seu pedido de ${pizzaFlavors[0]}, ${pizzaFlavors[1]} e ${coke} é R$${totalPrice},00`)
};

orderModifier(order);