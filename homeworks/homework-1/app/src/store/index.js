
import * as fromLogin from './reducers/login';
export const reducers = {
  auth: fromLogin.reducer,
};
export * from './actions/login';
export * from './reducers/login';
export * from './selectors/login';
export * from './util';
