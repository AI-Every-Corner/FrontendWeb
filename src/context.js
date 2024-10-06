import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [avatarUrl, setAvatarUrl] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {

    const storedAvatarUrl = localStorage.getItem('userImage');
    const storedUserId = localStorage.getItem('userId');  // 從 localStorage 獲取 userId

    if (storedAvatarUrl) {
      const baseUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080';  // 使用環境變量或默認值
      setAvatarUrl(`${baseUrl}${storedAvatarUrl}`);

      //setAvatarUrl(`http://localhost:8080${storedAvatarUrl}`);
    }

    if (storedUserId) {
      setUserId(storedUserId);
    }

  }, []);

  return (
    <UserContext.Provider value={{ avatarUrl, setAvatarUrl, userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};