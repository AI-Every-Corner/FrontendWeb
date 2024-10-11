import axios from 'axios';
import React, { useEffect, useState } from 'react';

// NotificationBadge Component to display the unread notification count
const NotificationBadge = ({ userId }) => {
  const [unreadCount, setUnreadCount] = useState(0);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchUnreadCount = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/notifications/unread-count/${userId}`, {
          headers: {
            'Authorization': `Bearer ${token}` // Set Authorization header
          }
        });
        setUnreadCount(response.data);
      } catch (error) {
        console.error('Error fetching unread notifications count', error);
      }
    };

    fetchUnreadCount();
  }, [userId, token]);

  return (
    <span className="badge badge-pill badge-primary">{unreadCount}</span>
  );
};

export default NotificationBadge;
