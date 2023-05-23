import { Product } from './02-insertProducts';

export type Item = {
  product: Product,
  quantity: number,
  phrase: string,
  brand: string
};

export default function calculateTotalPrice(itensList:Item[]):number {
  const totalPrice = itensList.reduce((total, item) => (
    total + item.product.price * item.quantity
  ), 0);

  return parseFloat(totalPrice.toFixed(2));
}
