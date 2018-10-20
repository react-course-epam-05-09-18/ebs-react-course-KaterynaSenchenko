import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from '../../store'

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    isAuthenticated()
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)
  
