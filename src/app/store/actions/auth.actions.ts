import { Action } from '@ngrx/store';


export enum AuthActionTypes {
  GET_TOKEN = '[Auth] Get Token',
  GET_TOKEN_SUCCESS = '[Auth] Get Token Success',
  GET_TOKEN_FAILURE = '[Auth] Get Token Failure',
  LOGOUT = '[Auth] Logout'
}

export class GetToken implements Action {
  readonly type = AuthActionTypes.GET_TOKEN;
  constructor(public payload: any) { }
}

export class GetTokenSuccess implements Action {
  readonly type = AuthActionTypes.GET_TOKEN_SUCCESS;
  constructor(public payload: any) { }
}

export class LogInFailure implements Action {
  readonly type = AuthActionTypes.GET_TOKEN_FAILURE;
  constructor(public payload: any) { }
}

export class LogOut implements Action {
  readonly type = AuthActionTypes.LOGOUT;
}

export type All =
  | GetToken
  | GetTokenSuccess
  | LogInFailure
  | LogOut;
