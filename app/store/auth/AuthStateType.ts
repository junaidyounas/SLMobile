import {LoginResponse} from 'types/auth/LoginResponse';

export interface AuthStateType {
  token: string;
  user: LoginResponse;
}
