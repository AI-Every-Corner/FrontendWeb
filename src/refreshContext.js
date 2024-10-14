import React, { createContext, useState } from 'react';

export const RefreshContext = createContext();

export const RefreshProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <RefreshContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </RefreshContext.Provider>
  );
};