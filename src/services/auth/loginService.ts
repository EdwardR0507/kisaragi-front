import { kisaragi_auth } from '@/config/api';
import { ILogin } from '@/views/auth/interfaces';

export const loginService = async (form: ILogin) => {
  try {
    const { data } = await kisaragi_auth.post('/auth', form);
    return data;
  } catch (error: any) {
    return error;
  }
};
