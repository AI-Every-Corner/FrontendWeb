import React from 'react';
import { Navigate, useParams  } from 'react-router-dom';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // 檢查是否有 token
  const params = useParams(); // // 獲取 URL 中的動態參數

  // 檢查是否認證，否則重定向到登錄頁
  return isAuthenticated ? (<Component {...rest} {...params} />
  ) : (
  <Navigate to="/sign-in" />
);
};

export default PrivateRoute;