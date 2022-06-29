import {create} from 'apisauce';
import {store} from 'store/store';
import {logMe} from 'utils/functions/logBinder';

async function getValue() {
  logMe(store.getState().auth?.token);
  return await store.getState().auth?.token;
}
// define the api
export const api = create({
  baseURL: 'http://192.168.1.251:3000',
  headers: {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
  },
});

api.addRequestTransform(request => {
  request.headers.Authorization = `Bearer ${store.getState().auth?.token}`;
});
