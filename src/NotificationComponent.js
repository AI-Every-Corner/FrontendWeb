import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
    <li className="nav-item s-nav dropdown notification" style={{width:80}} >
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
      <ul
        className={`dropdown-menu notify-drop dropdown-menu-right nav-drop ${notificationDropdownVisible ? 'show' : ''}`}
      >
        <div className="notify-drop-title">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-6 fs-8">
              Notifications
              <span className="badge badge-pill badge-primary ml-2">
                {unreadCount}
              </span>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6 text-right">
              {/* <button className="btn btn-link notify-right-icon" onClick={props.markAllAsRead}>
                Mark All as Read
              </button> */}
            </div>
          </div>
        </div>
        <div className="drop-content">
          {notifications.length > 0 ? (
            notifications.map((notification) => {
              const timeDifference = Math.floor((new Date() - new Date(notification.createdAt)) / 1000);
              let timeAgo = '';
              if (timeDifference < 60) {
                timeAgo = `${timeDifference} seconds ago`;
              } else if (timeDifference < 3600) {
                timeAgo = `${Math.floor(timeDifference / 60)} minutes ago`;
              } else if (timeDifference < 86400) {
                timeAgo = `${Math.floor(timeDifference / 3600)} hours ago`;
              } else {
                timeAgo = `${Math.floor(timeDifference / 86400)} days ago`;
              }
              return (
                <li key={notification.notificationId} className="row">
                  {console.log(notification)}
                  <div className="col-md-2 col-sm-2 col-xs-2">
                  <img 
                      src={notification.imagepath} 
                      alt={notification.username}
                      className="notification-avatar"
                      style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                    />
                  </div>
                  <div className="col-md-10 col-sm-10 col-xs-10">
                    <a href="#" className="notification-user">
                      <Link to={`/profile?userId=${notification.senderId}`}>{notification.username}</Link>
                    </a>
                  <br/>
                    <span className="notification-type">
                      {notification.contextType}
                    </span>
                    <button
                      className="btn btn-link notify-right-icon mark-read-btn"
                      onClick={() => markAsRead(notification.notificationId)}
                    >
                     <a> Mark as Read </a>
                    </button>
                    <p className="time">
                      <span className="badge badge-pill badge-primary" style={{width: 10,  height: 10, backgroundColor: '#007bff', borderRadius: '50%'}}>
                        <i className="bx bxs-time" />
                      </span>
                      {timeAgo}
                    </p>
                  </div>
                </li>
              );
            })
          ) : (
            <li className="text-center">No new notifications</li>
          )}
        </div>
        <div className="notify-drop-footer text-center">
          {/* <a href="#" onClick={props.loadMoreNotifications}>
            See More
          </a> */}
        </div>
      </ul>
    </li>
  );
};

export default NotificationComponent;