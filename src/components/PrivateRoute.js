import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, isLoading } = useAuth0();
  console.log("isLoading:", isLoading); // Debugging
  console.log("isAuthenticated:", isAuthenticated); // Debugging

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/" />;
};

export default PrivateRoute;
