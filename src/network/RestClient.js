/* eslint-disable import/named */
import { create } from 'apisauce';

// Rest Client for Americamp APIs
export const RestClient = create({
  baseURL: 'https://www.a-paea.org/dev/api',
  headers: {
    Accept: 'application/json',
    Authorization: '',
  },
  timeout: 30000,
});
