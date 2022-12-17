import React, { FC, useReducer } from 'react';
import { UiContext, UiReducer } from './';

export interface UiState {
  isMenuOpen: boolean;
}

const Ui_INITIAL_STATE: UiState = {
  isMenuOpen: false,
};

interface UiProviderProps {
  children?: React.ReactNode | undefined;
}

export const UiProvider: FC<UiProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(UiReducer, Ui_INITIAL_STATE);

  const toggleSideMenu = () => {
    dispatch({ type: '[UI] - ToggleMenu' });
  };

  return (
    <UiContext.Provider
      value={{
        ...state,
        toggleSideMenu,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
