import React, { useEffect, useState } from 'react';
import axios from 'axios';

// NotificationList Component to display the list of unread notifications
const NotificationList = ({ userId }) => {
    const [notifications, setNotifications] = useState([]);
    const [page, setPage] = useState(0);
    const size = 10;
    const token = localStorage.getItem('token');
  
    useEffect(() => {
      const fetchNotifications = async () => {
        try {
          const response = await axios.get(`http://localhost:8080//api/notifications/unread/${userId}?page=${page}&size=${size}`, {
            headers: {
              'Authorization': `Bearer ${token}` // Set Authorization header
            }
          });
          setNotifications(response.data);
        } catch (error) {
          console.error('Error fetching notifications', error);
        }
      };
  
      fetchNotifications();
    }, [userId, page, token]);
  
    const markAsRead = async (notificationId) => {
      try {
        await axios.put(`/api/notifications/mark-as-read/${notificationId}`, {}, {
          headers: {
            'Authorization': `Bearer ${token}` // Set Authorization header
          }
        });
        setNotifications(notifications.filter(n => n.notificationId !== notificationId));
      } catch (error) {
        console.error('Error marking notification as read', error);
      }
    };
  
    return (
      <div className="notification-list">
        {notifications.map((notification) => (
          <div key={notification.notificationId} className="notification-item">
            <p>{notification.contextType}</p>
            <button onClick={() => markAsRead(notification.notificationId)}>Mark as Read</button>
          </div>
        ))}
        <button onClick={() => setPage(page + 1)}>Load More</button>
      </div>
    );
  };
  
  export default NotificationList;