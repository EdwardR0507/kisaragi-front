import { ICartProduct, IOrderSummary, IShippingAddress } from '@/interfaces';
import Cookies from 'js-cookie';
import React, { FC, useEffect, useReducer } from 'react';
import { CartContext, cartReducer } from './';

export interface CartState {
  cart: ICartProduct[];
  isLoaded: boolean;
  orderSummary: IOrderSummary;
  shippingAddress?: IShippingAddress;
}

const CART_INITIAL_STATE: CartState = {
  cart: [],
  isLoaded: false,
  orderSummary: {
    numberOfItems: 0,
    subTotal: 0,
    tax: 0,
    total: 0,
  },
  shippingAddress: undefined,
};

interface CartProps {
  children?: React.ReactNode | undefined;
}

export const CartProvider: FC<CartProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  useEffect(() => {
    try {
      const cookieProducts = Cookies.get('cart')
        ? JSON.parse(Cookies.get('cart')!)
        : [];
      dispatch({
        type: '[Cart] - LoadCart from cookies',
        payload: cookieProducts,
      });
    } catch (error) {
      dispatch({
        type: '[Cart] - LoadCart from cookies',
        payload: [],
      });
    }
  }, []);

  useEffect(() => {
    if (state.isLoaded) Cookies.set('cart', JSON.stringify(state.cart));
  }, [state.cart, state.isLoaded]);

  useEffect(() => {
    const numberOfItems = state.cart.reduce(
      (acc, curr) => acc + curr.quantity,
      0
    );
    const subTotal = state.cart.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );
    const taxRate = Number(process.env.NEXT_PUBLIC_TAX_RATE || 0);
    const tax = subTotal * taxRate;
    const total = subTotal * (taxRate + 1);
    const orderSummary = {
      numberOfItems,
      subTotal,
      tax,
      total,
    };
    dispatch({
      type: '[Cart] - Update order summary',
      payload: orderSummary,
    });
  }, [state.cart]);

  const addProductToCart = (product: ICartProduct) => {
    const productInCart = state.cart.some((p) => p.id === product.id);
    if (!productInCart)
      return dispatch({
        type: '[Cart] - Update products in cart',
        payload: [...state.cart, product],
      });

    const updatedProducts = state.cart.map((p) => {
      if (p.id !== product.id) return p;
      p.quantity += product.quantity;
      return p;
    });

    dispatch({
      type: '[Cart] - Update products in cart',
      payload: updatedProducts,
    });
  };

  const updateCartQuantity = (product: ICartProduct) => {
    dispatch({
      type: '[Cart] - Change cart quantity',
      payload: product,
    });
  };

  const removeCartProduct = (product: ICartProduct) => {
    dispatch({
      type: '[Cart] - Remove product in cart',
      payload: product,
    });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addProductToCart,
        removeCartProduct,
        updateCartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
