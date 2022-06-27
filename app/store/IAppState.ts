import {AuthState} from './auth/AuthState';
import {AuthStateType} from './auth/AuthStateType';

export interface IAppState {
  auth: AuthStateType;
}
