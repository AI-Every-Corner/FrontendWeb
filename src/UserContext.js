import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // 檢查 localStorage 中是否有 token
    const token = localStorage.getItem('token');
    if (token) {
      // 假設有一個 API 可以根據 token 取得使用者資訊
      axios.get('http://localhost:8080/api/auth/me', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('驗證失敗:', error);
        localStorage.removeItem('token');
      });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};