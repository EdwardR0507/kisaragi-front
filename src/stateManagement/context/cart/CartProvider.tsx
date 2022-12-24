import { kisaragi_core } from '@/config';
import {
  ICartProduct,
  IOrderCreate,
  IOrderSummary,
  IShippingAddress,
} from '@/interfaces';
import axios from 'axios';
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

  useEffect(() => {
    const isFirstNameSaved = Cookies.get('firstName');
    if (isFirstNameSaved) {
      const shippingAddress = {
        firstName: Cookies.get('firstName') || '',
        lastName: Cookies.get('lastName') || '',
        address: Cookies.get('address') || '',
        address2: Cookies.get('address2') || '',
        city: Cookies.get('city') || '',
        phone: Cookies.get('phone') || '',
      };
      dispatch({
        type: '[Cart] - Load Address from cookies',
        payload: shippingAddress,
      });
    }
  }, []);

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

  const updateAddress = (address: IShippingAddress) => {
    Cookies.set('firstName', address.firstName);
    Cookies.set('lastName', address.lastName);
    Cookies.set('address', address.address);
    Cookies.set('address2', address.address2 || '');
    Cookies.set('city', address.city);
    Cookies.set('phone', address.phone);
    dispatch({
      type: '[Cart] - Update Address',
      payload: address,
    });
  };

  const createOrder = async (
    storeId: number,
    userId: string
  ): Promise<{
    hasError: boolean;
    message: string;
  }> => {
    if (!state.shippingAddress) throw new Error('No ha agregado una dirección');

    const products = state.cart.map((p) => {
      return {
        idProduct: Number(p.id),
        quantity: Number(p.quantity),
      };
    });

    const body: IOrderCreate = {
      address: state.shippingAddress.address,
      tracking: crypto.randomUUID(),
      total: state.orderSummary.total,
      products,
      storeId,
      userId,
    };

    try {
      const { data } = await kisaragi_core.post('/orders/save', body);
      dispatch({ type: '[Cart] - Order complete' });

      return {
        hasError: false,
        message: data.tracking!,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          hasError: true,
          message: error.response?.data.message || 'Algo salió mal',
        };
      }
      return {
        hasError: true,
        message: 'Algo salió mal',
      };
    }
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addProductToCart,
        removeCartProduct,
        updateCartQuantity,
        updateAddress,
        createOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
