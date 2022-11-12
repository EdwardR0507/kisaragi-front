import axios from 'axios';
import { KISARAGI_AUTH_ENDPOINT } from './env';

export const kisaragi_auth = axios.create({
  baseURL: KISARAGI_AUTH_ENDPOINT,
});
