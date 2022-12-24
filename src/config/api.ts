import axios from 'axios';
import { KISARAGI_AUTH_ENDPOINT, KISARAGI_CORE_ENDPOINT } from './env';

export const kisaragi_auth = axios.create({
  baseURL: KISARAGI_AUTH_ENDPOINT,
});

export const kisaragi_core = axios.create({
  baseURL: KISARAGI_CORE_ENDPOINT,
});
