import { signOut, useSession } from 'next-auth/react';
import React, { FC, useEffect, useReducer } from 'react';

import { IUser } from '@/interfaces/index';
import { AuthContext, authReducer } from './';

export interface AuthState {
  isLoggedIn: boolean;
  user?: IUser;
}

const Auth_INITIAL_STATE: AuthState = {
  isLoggedIn: false,
  user: undefined,
};

interface AuthProps {
  children?: React.ReactNode | undefined;
}

export const AuthProvider: FC<AuthProps> = ({ children }) => {
  const { data, status } = useSession();
  const [state, dispatch] = useReducer(authReducer, Auth_INITIAL_STATE);

  const logoutUser = () => {
    signOut({
      callbackUrl: `${process.env.NEXT_PUBLIC_KISARAGI_AUTH}/`,
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
