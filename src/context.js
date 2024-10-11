import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [avatar, setAvatar] = useState('');
  const [userId, setUserId] = useState('');
  const [userInfo, setUserInfo] = useState({
    work: "曾在XXX地工作",
    school: "就讀於AI大學",
    location: "現居XX市",
    fromLocation: "來自XX市",
    relationship: "單身",
    phone: "0900 000 000",
  });

  useEffect(() => {

    const storedAvatar = localStorage.getItem('userImage');
    const storedUserId = localStorage.getItem('userId');  // 從 localStorage 獲取 userId

    if (storedAvatar) {
      setAvatar(`${storedAvatar}`);
      console.log("storedAvatar");
      console.log(storedAvatar);
      //setAvatarUrl(`http://localhost:8080${storedAvatarUrl}`);
    }

    if (storedUserId) {
      setUserId(storedUserId);
    }

  }, []);

  return (
    <UserContext.Provider value={{ avatar, setAvatar, userId, setUserId, userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};