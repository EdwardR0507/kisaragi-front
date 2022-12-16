import { createContext } from 'react';

import { IUser } from '@/interfaces/index';

interface IAuthContext {
  isLoggedIn: boolean;
  user?: IUser;
  logoutUser: () => void;
}

export const AuthContext = createContext({} as IAuthContext);
