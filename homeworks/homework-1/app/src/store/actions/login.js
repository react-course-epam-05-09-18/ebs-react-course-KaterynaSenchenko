import history from '../util';

export const LOGIN_FAIL = '[Login] Login Fail';
export const LOGIN_SUCCESS = '[Login] Login Success';
export const LOGOUT = '[Logout] Logout';

export const loginUser = payload => dispatch => {
  var user = JSON.stringify(payload)
  dispatch(loginUserSuccess(user));
  localStorage.setItem('user', JSON.stringify(user));
  const { state: locationState = {} } = history.location;
  history.push(locationState.from || '/');
};

export const handleAlreadyAuth = user => () => {
  if (user) {
    const { state: locationState = {} } = history.location;
    history.push(locationState.from || '/');
  }
};

export const logoutUser = () => dispatch => {
  dispatch({ type: LOGOUT });
  localStorage.removeItem('user');
};

export const loginUserSuccess = payload => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export const loginUserFail = payload => {
  return {
    type: LOGIN_FAIL,
    payload,
  };
};
