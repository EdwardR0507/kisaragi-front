import { ICartProduct, IOrderSummary } from '@/interfaces/index';
import { CartState } from './';

type CartActionType =
  | {
      type: '[Cart] - LoadCart from cookies';
      payload: ICartProduct[];
    }
  | {
      type: '[Cart] - Update products in cart';
      payload: ICartProduct[];
    }
  | {
      type: '[Cart] - Change cart quantity';
      payload: ICartProduct;
    }
  | {
      type: '[Cart] - Remove product in cart';
      payload: ICartProduct;
    }
  | {
      type: '[Cart] - Update order summary';
      payload: IOrderSummary;
    };

export const cartReducer = (
  state: CartState,
  action: CartActionType
): CartState => {
  switch (action.type) {
    case '[Cart] - LoadCart from cookies':
      return {
        ...state,
        isLoaded: true,
        cart: [...action.payload],
      };
    case '[Cart] - Update products in cart':
      return {
        ...state,
        cart: [...action.payload],
      };
    case '[Cart] - Change cart quantity':
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id !== action.payload.id ? product : action.payload
        ),
      };
    case '[Cart] - Remove product in cart':
      return {
        ...state,
        cart: state.cart.filter(
          (product) => !(product.id === action.payload.id)
        ),
      };
    case '[Cart] - Update order summary':
      return {
        ...state,
        orderSummary: action.payload,
      };
    default:
      return state;
  }
};
