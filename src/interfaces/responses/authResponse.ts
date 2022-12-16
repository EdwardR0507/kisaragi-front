import { IUser } from '../models/UserModel';

export interface IAuthResponse {
  user: IUser;
  token: string;
}
