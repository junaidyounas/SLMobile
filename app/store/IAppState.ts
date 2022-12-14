import {AppStateType} from './appState/AppStateType';
import {AuthState} from './auth/AuthState';
import {AuthStateType} from './auth/AuthStateType';

export interface IAppState {
  auth: AuthStateType;
  app: AppStateType;
}
