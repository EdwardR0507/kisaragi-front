import { ICartProduct, IUser } from './';

export interface IShippingAddress {
  firstName: string;
  lastName: string;
  address: string;
  address2: string;
  city: string;
  phone: string;
}

export interface IOrder {
  tracking: string;
  user?: IUser | string;
  orderItems: ICartProduct[];
  shippingAddress: IShippingAddress;
  numberOfItems: number;
  subTotal: number;
  tax: number;
  total: number;
  isPaid: boolean;
}

export interface IOrderResponse {
  order_id: number;
  tracking: string;
  store_name: string;
  products: IProductCreate[];
  total: number;
  address: string;
  state: string;
  userId: string;
}

interface IProductCreate {
  idProduct: number;
  quantity: number;
  product_name?: string;
}

export interface IOrderCreate {
  products: IProductCreate[];
  address: string;
  tracking: string;
  storeId: number;
  userId: string;
  total: number;
}
