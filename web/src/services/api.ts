import { configure } from 'axios-hooks';
import LRU from 'lru-cache';
import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'http://127.0.0.1:3002/',
});

const cache = new LRU({ max: 10 });
export default function configureApi() {
  configure({ axios, cache });
}
