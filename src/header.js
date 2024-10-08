import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from './context';
import { logout } from './api';


function Header() {

    // State to manage the visibility of the dropdown menu
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [settingDropdownVisible, setSettingDropdownVisible] = useState(false);
    const [notificationDropdownVisible, setNotificationDropdownVisible] = useState(false);
    const location = useLocation(); // 使用 useLocation 來獲取當前路徑
    const { avatarUrl } = useContext(UserContext); // 使用 useContext 來獲取 此用者相片
    const navigate = useNavigate();

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    // Function to toggle dropdown visibility
    const toggleSettingDropdown = () => {
        setSettingDropdownVisible(!settingDropdownVisible);
    };

    // Function to toggle notification dropdown visibility
    const toggleNotificationDropdown = () => {
        setNotificationDropdownVisible(!notificationDropdownVisible);
    };

    // 檢查當前路徑是否為首頁，來決定是否顯示 Quick Links
    const isHomePage = location.pathname === '/';

    // Function to handle logout
    const handleLogout = async () => {
        await logout();
        alert('登出成功');
        navigate('/sign-in');
    };

    return (
        <div className="Header">
            <>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <link rel="icon" type="image/png" href="assets/images/logo-16x16.png" />
                {/* The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags */}
                <title>Argon - Social Network</title>
                {/* Fonts */}
                <link
                    href="https://fonts.googleapis.com/css?family=Major+Mono+Display"
                    rel="stylesheet"
                />
                <link
                    href="https://cdn.jsdelivr.net/npm/boxicons@1.9.2/css/boxicons.min.css"
                    rel="stylesheet"
                />
                {/* Styles */}
                <link href="assets/css/bootstrap/bootstrap.min.css" rel="stylesheet" />
                <link href="assets/css/style.css" rel="stylesheet" />
                <link href="assets/css/components.css" rel="stylesheet" />
                <link href="assets/css/settings.css" rel="stylesheet" />
                <link href="assets/css/forms.css" rel="stylesheet" />
                <link href="assets/css/media.css" rel="stylesheet" />
                <div className="container-fluid newsfeed d-flex" id="wrapper">
                    <div className="row newsfeed-size f-width">
                        <div className="col-md-12 message-right-side">
                            <nav
                                id="navbar-main"
                                className="navbar navbar-expand-lg shadow-sm sticky-top"
                                style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}
                            >
                                <ul className="navbar-nav mr-5" id="main_menu">
                                    <a className="navbar-brand nav-item mr-lg-5" href="/">
                                        <img
                                            src="assets/images/logo-64x64.png"
                                            width={40}
                                            height={40}
                                            className="mr-3"
                                            alt="Logo"
                                        />
                                    </a>
                                    {!isHomePage &&(
                                        <li
                                        className="dropdown nav-item nav-quick-links"
                                        data-toggle="tooltip"
                                        data-placement="bottom"
                                        title="Quick Links"
                                    >
                                        <a
                                            
                                            className="nav-link nav-links nav-icon"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            onClick={toggleDropdown}
                                        >
                                            <i className="bx bx-align-middle" />
                                        </a>
                                        {dropdownVisible && ( // Conditionally render the dropdown menu
                                            <div className="dropdown-menu nav-drop show"
                                            style={{
                                                position: 'absolute',
                                                zIndex: 999, // Ensure dropdown appears above content
                                            }}>
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <a href="index.html" className="sidebar-item">
                                                            <i className="bx bx-news text-primary" /> News Feed
                                                        </a>
                                                        <a href="#" className="newsfeedListicon">
                                                            <i className="bx bx-dots-horizontal-rounded" />
                                                        </a>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <a href="messages.html" className="sidebar-item">
                                                            <i className="bx bx-envelope text-primary" /> Messages
                                                        </a>
                                                        <span className="badge badge-primary badge-pill">2</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <a href="groups.html" className="sidebar-item">
                                                            <i className="bx bx-group text-primary" /> Groups
                                                        </a>
                                                        <span className="badge badge-primary badge-pill">17</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <a href="events.html" className="sidebar-item">
                                                            <i className="bx bx-calendar text-primary" /> Events
                                                        </a>
                                                        <span className="badge badge-primary badge-pill">3</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <a href="saved.html" className="sidebar-item">
                                                            <i className="bx bx-bookmarks text-primary" /> Saved
                                                        </a>
                                                        <span className="badge badge-primary badge-pill">8</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <a href="find-friends.html" className="sidebar-item">
                                                            <i className="bx bxs-user-detail text-primary" /> Find
                                                            Friends
                                                        </a>
                                                        <span className="badge badge-primary badge-pill">
                                                            <i className="bx bx-chevron-right" />
                                                        </span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <a href="matches.html" className="sidebar-item">
                                                            <i className="bx bx-carousel text-primary" /> Matches
                                                        </a>
                                                        <span className="badge badge-primary badge-pill">
                                                            <i className="bx bx-chevron-right" />
                                                        </span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <a href="teams.html" className="sidebar-item">
                                                            <i className="bx bxl-slack-old text-primary" /> Argon For
                                                            Teams
                                                        </a>
                                                        <span className="badge badge-primary badge-pill">
                                                            <i className="bx bx-chevron-right" />
                                                        </span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <a href="news.html" className="sidebar-item">
                                                            <i className="bx bx-file text-primary" /> News
                                                        </a>
                                                        <span className="badge badge-primary badge-pill">
                                                            <i className="bx bx-chevron-right" />
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                    )}
                                    {/* Collect the nav links, forms, and other content for toggling */}
                                    <form className="w-30 mx-2 my-auto d-inline form-inline mr-5">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control search-input w-75"
                                                placeholder="Search for people, companies, events and more..."
                                                aria-label="Search"
                                                aria-describedby="search-addon"
                                            />
                                            <div className="input-group-append">
                                                <button className="btn search-button" type="button">
                                                    <i className="bx bx-search" />
                                                </button>
                                            </div>
                                        </div>
                                    </form>

                                    <li className="nav-item s-nav dropdown notification">
                                        <a
                                            href="#"
                                            className="nav-link nav-links rm-drop-mobile drop-w-tooltip"
                                            onClick={toggleNotificationDropdown} // Toggle notification dropdown on click
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
                                            />{" "}
                                            <span className="badge badge-pill badge-primary">3</span>
                                        </a>
                                        <ul
                                            className={`dropdown-menu notify-drop dropdown-menu-right nav-drop ${notificationDropdownVisible ? 'show' : ''
                                                }`}
                                        >
                                            <div className="notify-drop-title">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-6 col-xs-6 fs-8">
                                                        Notifications{" "}
                                                        <span className="badge badge-pill badge-primary ml-2">
                                                            3
                                                        </span>
                                                    </div>
                                                    <div className="col-md-6 col-sm-6 col-xs-6 text-right">
                                                        <a href="#" className="notify-right-icon">
                                                            Mark All as Read
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end notify title */}
                                            {/* notify content */}
                                            <div className="drop-content">
                                                <li>
                                                    <div className="col-md-2 col-sm-2 col-xs-2">
                                                        <div className="notify-img">
                                                            <img
                                                                src="assets/images/users/user-10.png"
                                                                alt="notification user image"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-10 col-sm-10 col-xs-10">
                                                        <a href="#" className="notification-user">
                                                            Sean
                                                        </a>{" "}
                                                        <span className="notification-type">
                                                            replied to your comment on a post in{" "}
                                                        </span>
                                                        <a href="#" className="notification-for">
                                                            PHP
                                                        </a>
                                                        <a href="#" className="notify-right-icon">
                                                            <i className="bx bx-radio-circle-marked" />
                                                        </a>
                                                        <p className="time">
                                                            <span className="badge badge-pill badge-primary">
                                                                <i className="bx bxs-group" />
                                                            </span>{" "}
                                                            3h
                                                        </p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="col-md-2 col-sm-2 col-xs-2">
                                                        <div className="notify-img">
                                                            <img
                                                                src="assets/images/users/user-7.png"
                                                                alt="notification user image"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-10 col-sm-10 col-xs-10">
                                                        <a href="#" className="notification-user">
                                                            Kimberly
                                                        </a>{" "}
                                                        <span className="notification-type">
                                                            likes your comment "I would really...{" "}
                                                        </span>
                                                        <a href="#" className="notify-right-icon">
                                                            <i className="bx bx-radio-circle-marked" />
                                                        </a>
                                                        <p className="time">
                                                            <span className="badge badge-pill badge-primary">
                                                                <i className="bx bxs-like" />
                                                            </span>{" "}
                                                            7h
                                                        </p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="col-md-2 col-sm-2 col-xs-2">
                                                        <div className="notify-img">
                                                            <img
                                                                src="assets/images/users/user-8.png"
                                                                alt="notification user image"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-10 col-sm-10 col-xs-10">
                                                        <span className="notification-type">
                                                            10 people saw your story before it disappeared. See
                                                            who saw it.
                                                        </span>
                                                        <a href="#" className="notify-right-icon">
                                                            <i className="bx bx-radio-circle-marked" />
                                                        </a>
                                                        <p className="time">
                                                            <span className="badge badge-pill badge-primary">
                                                                <i className="bx bx-images" />
                                                            </span>{" "}
                                                            23h
                                                        </p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="col-md-2 col-sm-2 col-xs-2">
                                                        <div className="notify-img">
                                                            <img
                                                                src="assets/images/users/user-11.png"
                                                                alt="notification user image"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-10 col-sm-10 col-xs-10">
                                                        <a href="#" className="notification-user">
                                                            Michelle
                                                        </a>{" "}
                                                        <span className="notification-type">posted in </span>
                                                        <a href="#" className="notification-for">
                                                            Argon Social Design System
                                                        </a>
                                                        <a href="#" className="notify-right-icon">
                                                            <i className="bx bx-radio-circle-marked" />
                                                        </a>
                                                        <p className="time">
                                                            <span className="badge badge-pill badge-primary">
                                                                <i className="bx bxs-quote-right" />
                                                            </span>{" "}
                                                            1d
                                                        </p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="col-md-2 col-sm-2 col-xs-2">
                                                        <div className="notify-img">
                                                            <img
                                                                src="assets/images/users/user-5.png"
                                                                alt="notification user image"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-10 col-sm-10 col-xs-10">
                                                        <a href="#" className="notification-user">
                                                            Karen
                                                        </a>{" "}
                                                        <span className="notification-type">
                                                            likes your comment "Sure, here...{" "}
                                                        </span>
                                                        <a href="#" className="notify-right-icon">
                                                            <i className="bx bx-radio-circle-marked" />
                                                        </a>
                                                        <p className="time">
                                                            <span className="badge badge-pill badge-primary">
                                                                <i className="bx bxs-like" />
                                                            </span>{" "}
                                                            2d
                                                        </p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="col-md-2 col-sm-2 col-xs-2">
                                                        <div className="notify-img">
                                                            <img
                                                                src="assets/images/users/user-12.png"
                                                                alt="notification user image"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-10 col-sm-10 col-xs-10">
                                                        <a href="#" className="notification-user">
                                                            Irwin
                                                        </a>{" "}
                                                        <span className="notification-type">posted in </span>
                                                        <a href="#" className="notification-for">
                                                            Themeforest
                                                        </a>
                                                        <a href="#" className="notify-right-icon">
                                                            <i className="bx bx-radio-circle-marked" />
                                                        </a>
                                                        <p className="time">
                                                            <span className="badge badge-pill badge-primary">
                                                                <i className="bx bxs-quote-right" />
                                                            </span>{" "}
                                                            3d
                                                        </p>
                                                    </div>
                                                </li>
                                            </div>
                                            <div className="notify-drop-footer text-center">
                                                <a href="#">See More</a>
                                            </div>
                                        </ul>
                                    </li>
                                    <li className="nav-item s-nav">
                                        <a href="/profile" className="nav-link nav-links">
                                            <div className="menu-user-image">
                                                <img
                                                    src={avatarUrl} 
                                                    className="menu-user-img ml-1"
                                                    alt="Menu Image"
                                                />
                                            </div>
                                        </a>
                                    </li>
                                    <li className="nav-item s-nav nav-icon dropdown">
                                        <a
                                            href="#"
                                            onClick={toggleSettingDropdown} // Toggle dropdown on click
                                            data-placement="bottom"
                                            data-title="Settings"
                                            className="nav-link settings-link rm-drop-mobile drop-w-tooltip"
                                            id="settings-dropdown"
                                            aria-expanded={settingDropdownVisible}
                                        >
                                            <img
                                                src="assets/images/icons/navbar/settings.png"
                                                className="nav-settings"
                                                alt="navbar icon"
                                            />
                                        </a>

                                        <div
                                            className={`dropdown-menu dropdown-menu-right settings-dropdown shadow-sm ${settingDropdownVisible ? 'show' : ''
                                                }`}
                                        >
                                            <a className="dropdown-item" href="#">
                                                <img
                                                    src="assets/images/icons/navbar/help.png"
                                                    alt="Navbar icon"
                                                />{" "}
                                                Help Center
                                            </a>
                                            <a className="dropdown-item" href="/settings">
                                                <img
                                                    src="assets/images/icons/navbar/gear-1.png"
                                                    alt="Navbar icon"
                                                />{" "}
                                                Settings
                                            </a>
                                            <a className="dropdown-item logout-btn" href="#" onClick={handleLogout}>
                                                <img
                                                    src="assets/images/icons/navbar/logout.png"
                                                    alt="Navbar icon"
                                                />{" "}
                                                Log Out
                                            </a>
                                        </div>

                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>


            </>

        </div >
    );
}

export default Header;