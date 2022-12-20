import { ICartProduct, IOrderSummary, IShippingAddress } from '@/interfaces';
import { createContext } from 'react';

interface ICartContext {
  cart: ICartProduct[];
  isLoaded: boolean;
  orderSummary: IOrderSummary;
  shippingAddress?: IShippingAddress;

  addProductToCart: (product: ICartProduct) => void;
  updateCartQuantity: (product: ICartProduct) => void;
  removeCartProduct: (product: ICartProduct) => void;
}

export const CartContext = createContext({} as ICartContext);
