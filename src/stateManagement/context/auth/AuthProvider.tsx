import { signOut, useSession } from 'next-auth/react';
import React, { FC, useEffect, useReducer } from 'react';

import { IUser } from '@/interfaces/index';
import { AuthContext, authReducer } from './';

export interface AuthState {
  isLoggedIn: boolean;
  user: IUser | null;
}

const Auth_INITIAL_STATE: AuthState = {
  isLoggedIn: false,
  user: null,
};

interface AuthProps {
  children?: React.ReactNode | undefined;
}

export const AuthProvider: FC<AuthProps> = ({ children }) => {
  const { data, status } = useSession();
  const [state, dispatch] = useReducer(authReducer, Auth_INITIAL_STATE);

  const logoutUser = () => {
    signOut({
      callbackUrl: `/auth/login`,
      redirect: true,
    });
  };

  useEffect(() => {
    if (status === 'authenticated') {
      dispatch({ type: '[Auth] - Login', payload: data?.user as IUser });
    }
  }, [status, data]);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
