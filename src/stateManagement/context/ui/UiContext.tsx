import { createContext } from 'react';

interface IUiContext {
  isMenuOpen: boolean;
  toggleSideMenu: () => void;
}

export const UiContext = createContext({} as IUiContext);
