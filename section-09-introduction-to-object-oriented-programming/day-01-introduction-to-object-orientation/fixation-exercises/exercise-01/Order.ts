import Customer from './Customer';
import OrderItem from './OrderItem';

export default class Order {
  private _client: Customer;
  private _items: OrderItem[] = [];
  private _paymentMethod: string;
  private _discount = 0;

  constructor(client: Customer, items: OrderItem[], payment: string, discount: number) {
    this._client = client;
    this._items = items;
    this._paymentMethod = payment;
    this._discount = discount;
  }

  public get client(): Customer {
    return this._client;
  }
  public set client(value: Customer) {
    this._client = value;
  }

  public get items(): OrderItem[] {
    return this._items;
  }
  public set items(value: OrderItem[]) {
    if (value.length === 0) {
      throw new Error('O pedido deve ter pelo menos um item');
    }
    this._items = value;
  }

  public get paymentMethod(): string {
    return this._paymentMethod;
  }
  public set paymentMethod(value: string) {
    this._paymentMethod = value;
  }

  public get discount() {
    return this._discount;
  }
  public set discount(value) {
    if (value < 0) {
      throw new Error('O desconto não pode ser negativo');
    }
    this._discount = value;
  }

  sumOrder(): number {
    return this.items
      .reduce((prevValue, item) => {
        const totalPrice = prevValue + item.price;
        return totalPrice;
      }, 0)
  }

  sumOrderWithDiscount(): number {
    const sumOrder = this.sumOrder();

    return sumOrder * (1 - this.discount);
  }
}