import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    isAuthenticated()
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

export const isAuthenticated = () => {
  return JSON.parse(localStorage.getItem('authenticated'));
};
  
