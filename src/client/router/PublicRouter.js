import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRouter = ({component: Component, ...rest}) => {
  const { isAuthenticated } = useSelector(state => state);
  return (
    <Route render={ props => isAuthenticated == false ? <Component {...props} /> : <Redirect to ="/dashboard" />} 
      {...rest}
    />
  )
}