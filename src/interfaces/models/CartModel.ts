export interface ICartProduct {
  id: string;
  image: string;
  price: number;
  name: string;
  quantity: number;
}

export interface IOrderSummary {
  numberOfItems: number;
  subTotal: number;
  tax: number;
  total: number;
}
