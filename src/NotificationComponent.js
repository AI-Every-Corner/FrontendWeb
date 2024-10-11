import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Unified Notification Component to handle badge and dropdown list
const NotificationComponent = ({ userId }) => {
  const [unreadCount, setUnreadCount] = useState(0);
  const [notifications, setNotifications] = useState([]);
  const [page, setPage] = useState(0);
  const [notificationDropdownVisible, setNotificationDropdownVisible] = useState(false);
  const size = 10;
  const token = localStorage.getItem('token');

  // Fetch unread count
  useEffect(() => {
    const fetchUnreadCount = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/notifications/unread-count/${userId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setUnreadCount(response.data);
      } catch (error) {
        console.error('Error fetching unread notifications count', error);
      }
    };

    fetchUnreadCount();
  }, [userId, token]);

  // Fetch unread notifications
  useEffect(() => {
    if (notificationDropdownVisible) {
      const fetchNotifications = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/api/notifications/unread/${userId}?page=${page}&size=${size}`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          setNotifications(response.data);
        } catch (error) {
          console.error('Error fetching notifications', error);
        }
      };

      fetchNotifications();
    }
  }, [userId, page, token, notificationDropdownVisible]);

  // Mark notification as read
  const markAsRead = async (notificationId) => {
    try {
      await axios.put(`http://localhost:8080/api/notifications/mark-as-read/${notificationId}`, {}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setNotifications(notifications.filter(n => n.notificationId !== notificationId));
      setUnreadCount(unreadCount - 1);
    } catch (error) {
      console.error('Error marking notification as read', error);
    }
  };

  // Toggle dropdown visibility
  const toggleNotificationDropdown = () => {
    setNotificationDropdownVisible(!notificationDropdownVisible);
  };

  return (
    <li className="nav-item s-nav dropdown notification">
      <a
        href="#"
        className="nav-link nav-links rm-drop-mobile drop-w-tooltip"
        onClick={toggleNotificationDropdown}
        data-placement="bottom"
        data-title="Notifications"
        role="button"
        aria-haspopup="true"
        aria-expanded={notificationDropdownVisible}
      >
        <img
          src="assets/images/icons/navbar/notification.png"
          className="notification-bell"
          alt="navbar icon"
        />
        <span className="badge badge-pill badge-primary">{unreadCount}</span>
      </a>
      {notificationDropdownVisible && (
        <ul
          className={`dropdown-menu notify-drop dropdown-menu-right nav-drop ${notificationDropdownVisible ? 'show' : ''}`}
        >
          <div className="notify-drop-title">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-xs-6 fs-8">
                Notifications
              </div>
              <div className="col-md-6 col-sm-6 col-xs-6 text-right">
                <a href="#" className="notify-right-icon">
                  Mark All as Read
                </a>
              </div>
            </div>
          </div>
          <div className="notification-list">
            {notifications.map((notification) => (
              <div key={notification.notificationId} className="notification-item">
                <p>{notification.contextType}</p>
                <button onClick={() => markAsRead(notification.notificationId)}>Mark as Read</button>
              </div>
            ))}
            <button onClick={() => setPage(page + 1)}>Load More</button>
          </div>
          <div className="notify-drop-footer text-center">
            <a href="#">See More</a>
          </div>
        </ul>
      )}
    </li>
  );
};

export default NotificationComponent;