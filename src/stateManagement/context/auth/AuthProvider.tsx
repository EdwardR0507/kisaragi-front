import { signOut, useSession } from 'next-auth/react';
import React, { FC, useEffect, useReducer } from 'react';

import { IUser } from '@/interfaces/index';
import Cookies from 'js-cookie';
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
    // Delete all cookies
    const cookies = Cookies.get();
    for (const name in cookies) {
      Cookies.remove(name);
    }
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
