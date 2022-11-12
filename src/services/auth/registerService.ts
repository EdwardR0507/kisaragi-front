import { kisaragi_auth } from '@/config/api';
import { IRegister } from '@/views/auth/interfaces';

export const registerService = async (form: IRegister) => {
  try {
    const { data } = await kisaragi_auth.post('/users', form);
    return data;
  } catch (error: any) {
    return error;
  }
};
