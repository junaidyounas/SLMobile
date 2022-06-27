import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IAppState} from 'store/IAppState';
import {AuthState} from './AuthState';
export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: AuthState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const {login} = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const token = (state: IAppState) => state.auth.token;

export default authSlice.reducer;
