import { createContext } from 'react';

import { IUser } from '@/interfaces/index';

interface IAuthContext {
  isLoggedIn: boolean;
  user: IUser | null;
  logoutUser: () => void;
}

export const AuthContext = createContext({} as IAuthContext);
