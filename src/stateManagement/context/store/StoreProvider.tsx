import { IStore } from '@/interfaces';
import Cookies from 'js-cookie';
import React, { FC, useEffect, useReducer } from 'react';
import { StoreContext, storeReducer } from './';

export interface StoreState {
  store: IStore | null;
}

const Store_INITIAL_STATE: StoreState = {
  store: null,
};

interface StoreProps {
  children?: React.ReactNode | undefined;
}

export const StoreProvider: FC<StoreProps> = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, Store_INITIAL_STATE);

  useEffect(() => {
    try {
      const cookieStore = Cookies.get('store')
        ? JSON.parse(Cookies.get('store')!)
        : null;
      dispatch({
        type: '[Store] - LoadStore from cookies',
        payload: cookieStore,
      });
    } catch (error) {
      dispatch({
        type: '[Store] - LoadStore from cookies',
        payload: null,
      });
    }
  }, []);

  const setStore = (store: IStore) => {
    dispatch({ type: '[Store] - Set store', payload: store });
  };

  useEffect(() => {
    Cookies.set('store', JSON.stringify(state.store));
  }, [state.store]);

  return (
    <StoreContext.Provider
      value={{
        ...state,
        setStore,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
