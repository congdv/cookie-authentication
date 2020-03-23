import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRouter = ({component: Component, ...rest}) => {
  const { isAuthenticated } = useSelector(state => state);
  return (
    <Route render={props => isAuthenticated == true ? <Component {...props} /> : <Redirect to ="/login" />} 
    {...rest}
    />
  )
}