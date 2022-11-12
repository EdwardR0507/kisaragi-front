import { User } from '../models/UserModel';

export interface IAuthResponse {
  user: User;
  token: string;
}
