import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT
} from '../actions/login';

import { getUserFromStorage } from '../util';

const user = getUserFromStorage();

const initialState = {
  user: user,
  error: ''
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_FAIL: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        error: '',
      };
    }
    case LOGOUT: {
      return {
        ...initialState,
        user: null,
      };
    }
  }
  return state;
}