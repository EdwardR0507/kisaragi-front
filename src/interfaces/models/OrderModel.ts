import { IUser } from './';

export interface IShippingAddress {
  firstName: string;
  lastName: string;
  address: string;
  address2: string;
  city: string;
  phone: string;
}

export interface IOrder {
  _id?: string;
  user?: IUser | string; // user or user id
  orderItems: IOrderItem[];
  shippingAddress: IShippingAddress;
  paymentResult?: string;

  numberOfItems: number;
  subTotal: number;
  tax: number;
  total: number;

  isPaid: boolean;
  paidAt?: string;

  transactionId?: string;

  createdAt?: string;
  updatedAt?: string;
}

export interface IOrderItem {
  _id: string;
  title: string;
  quantity: number;
  slug: string;
  image: string;
  price: number;
}
