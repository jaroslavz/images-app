import { User } from '../../models/user.model';
import { AuthActionTypes, All } from '../actions/auth.actions';


export interface State {
  // is a user authenticated?
  isAuthenticated: boolean;
  // if authenticated, there should be a user object
  user: User | null;
  // error message
  errorMessage: string | null;
}

export const initialState: State = {
  isAuthenticated: false,
  user: null,
  errorMessage: null
};

export function reducer(state = initialState, action: All): State {
  switch (action.type) {
    case AuthActionTypes.GET_TOKEN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          token: action.payload.access_token
        },
        errorMessage: null
      };
    }
    case AuthActionTypes.GET_TOKEN_FAILURE: {
      return {
        ...state,
        errorMessage: 'Authorization failed.'
      };
    }
    case AuthActionTypes.GET_TOKEN: {
      return {
        ...state
      };
    }
    case AuthActionTypes.LOGOUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
