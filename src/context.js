import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    const storedAvatarUrl = localStorage.getItem('userImage');
    if (storedAvatarUrl) {
      setAvatarUrl(`http://localhost:8080${storedAvatarUrl}`);
    }
  }, []);

  return (
    <UserContext.Provider value={{ avatarUrl, setAvatarUrl }}>
      {children}
    </UserContext.Provider>
  );
};