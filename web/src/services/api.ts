import { configure } from 'axios-hooks';
import LRU from 'lru-cache';
import Axios from 'axios';
import store from '@redux/store';

const axios = Axios.create({
  baseURL: 'http://127.0.0.1:3002/',
});

const cache = new LRU({ max: 10 });

axios.interceptors.request.use((config) => {
  const token = store.getState().system.session;
  const Authorization = `Bearer ${token}`;
  return {
    ...config,
    headers: { Authorization },
  };
}, (error) => Promise.reject(error));

export default function configureApi() {
  configure({ axios, cache });
}
