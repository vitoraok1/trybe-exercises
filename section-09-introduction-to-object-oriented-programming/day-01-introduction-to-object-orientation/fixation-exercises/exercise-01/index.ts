import Customer from './Customer';
import Order from './Order';
import OrderItem from './OrderItem';

const customer = new Customer('Vitor');

const acai = new OrderItem('Açai', 10.00);
const juice = new OrderItem('Suco de Melão', 4.00);

const order = new Order(customer, [acai, juice], 'crédito', 0.10);

console.log(order);