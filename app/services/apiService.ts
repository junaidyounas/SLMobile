import {create} from 'apisauce';
import {store} from 'store/store';

// define the api
export const api = create({
  baseURL: 'http://192.168.1.251:3000',
  headers: {
    Authorization: `Bearer ${store.getState().auth?.token}`,
  },
});
