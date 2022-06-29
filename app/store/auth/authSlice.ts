import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {storeToken} from 'store/async-storage/auth';
import {IAppState} from 'store/IAppState';
import {LoginResponse} from 'types/auth/LoginResponse';
import {AuthState} from './AuthState';
export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: AuthState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      storeToken(action.payload);
      state.token = action.payload;
    },
    logout: state => {
      storeToken('');
      state.token = '';
      state.user = {_id: '', token: '', name: '', email: '', phone: ''};
    },
    addUser: (state, action: PayloadAction<LoginResponse>) => {
      state.user = action.payload;
    },
  },
});

export const {login, addUser, logout} = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const token = (state: IAppState) => state.auth.token;

export default authSlice.reducer;
