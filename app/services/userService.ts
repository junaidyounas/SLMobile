import {addUser, login} from 'store/auth/authSlice';
import {store} from 'store/store';
import {LoginResponse} from 'types/auth/LoginResponse';
import {Category} from 'types/Category';
import {api} from './apiService';
import {urls} from './constants';

const loginViaEmailPassword = (email: string, password: string) => {
  return new Promise<LoginResponse>((resolve, reject) => {
    api
      .post(urls.login_via_email_password, {
        email,
        password,
      })
      .then((res: any) => {
        store.dispatch(login(res.data.token));
        store.dispatch(addUser(res.data));
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const userService = {
  loginViaEmailPassword,
};
