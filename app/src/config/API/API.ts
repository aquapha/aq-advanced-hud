import { TimeConstants } from '@/utils/enums';
import axios, { AxiosRequestConfig } from 'axios';

const APIConfig: AxiosRequestConfig = {
  baseURL: `https://${import.meta.env.VITE_RESOURCE_NAME}/`,
  timeout: TimeConstants.Minute * 2,
  responseType: 'json',
  maxRedirects: 1,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const API = axios.create(APIConfig);
