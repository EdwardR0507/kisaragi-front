import { IStore } from '@/interfaces';
import { createContext } from 'react';

interface IStoreContext {
  store: IStore | null;
  setStore: (store: IStore) => void;
}

export const StoreContext = createContext({} as IStoreContext);
