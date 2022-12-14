import {create} from 'apisauce';
import { AppConstants } from 'constants/appConstants';
import {store} from 'store/store';
import {logMe} from 'utils/functions/logBinder';

async function getValue() {
  logMe(store.getState().auth?.token);
  return await store.getState().auth?.token;
}
// define the api
export const api = create({
  baseURL: `${AppConstants.serverUrl}`,
  headers: {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
  },
});

api.addRequestTransform(request => {
  request.headers.Authorization = `Bearer ${store.getState().auth?.token}`;
});
