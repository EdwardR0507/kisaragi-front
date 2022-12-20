import { IStore } from '@/interfaces';
import { StoreState } from './';

type StoreActionType =
  | { type: '[Store] - Set store'; payload: IStore }
  | { type: '[Store] - LoadStore from cookies'; payload: IStore | null };

export const storeReducer = (
  state: StoreState,
  action: StoreActionType
): StoreState => {
  switch (action.type) {
    case '[Store] - LoadStore from cookies':
      return {
        ...state,
        store: action.payload,
      };
    case '[Store] - Set store':
      return {
        ...state,
        store: action.payload,
      };

    default:
      return state;
  }
};
