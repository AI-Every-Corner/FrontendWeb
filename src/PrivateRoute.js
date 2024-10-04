import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // 檢查是否有 token

  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;