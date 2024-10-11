import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const AvatarProvider = ({ children, id }) => {
  const [avatarUrl, setAvatarUrl] = useState('');
  const [userId, setUserId] = useState('');

  const fetchUser = async () => {
    console.log("fetchUser");
    try {
      const token = localStorage.getItem('token'); // 從 localStorage 中讀取 token
      const response = await axios.get(`http://localhost:8080/api/auth/${id}`,{
        headers: {
          'Authorization': `Bearer ${token}` // 添加 Authorization header
        }
      });
      const receivedAvatarUrl = response.data.imagePath;
      const receivedUserId = response.data.userId;
      
      if (receivedAvatarUrl) {
        setAvatarUrl(`${receivedAvatarUrl}`);
      }

      if (receivedUserId) {
        setUserId(receivedUserId);
      }
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  }

  useEffect(() => {

    console.log("id: " + id);
    if (id) {
      fetchUser();
    }

  }, [id]);

  return (
    <UserContext.Provider value={{ avatarUrl, setAvatarUrl, userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};