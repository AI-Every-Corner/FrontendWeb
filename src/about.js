import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from './context';
import axios from 'axios';


function About() {

    const { avatarUrl } = useContext(UserContext);
    const [formData, setFormData] = useState({
        nickName: '',
        username: ''
    });
    const { userId, setAvatarUrl } = useContext(UserContext);

    useEffect(() => {
        console.log('Fetched userId:', userId);

        // 從後端獲取用戶資料
        const token = localStorage.getItem('token'); // 假設 token 已存儲在 localStorage 中

        axios.get(`http://localhost:8080/api/auth/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}` // 設置 Authorization 標頭
            }
        })
            .then(response => {
                const userData = response.data;
                setFormData({
                    nickName: userData.nickName,  // 假設後端返回的資料包含 nickName 和 username
                    username: userData.username
                });
            })
            .catch(error => {
                console.error("獲取用戶資料時發生錯誤:", error);
            });
    }, [userId]);

    // 狀態管理個人資料和是否處於編輯模式
    const [isEditing, setIsEditing] = useState(false);
    const [userInfo, setUserInfo] = useState({
        work: "曾在XXX地工作",
        school: "就讀於AI大學",
        location: "現居XX市",
        fromLocation: "來自XX市",
        relationship: "單身",
        phone: "0900 000 000",
    });

    // 切換編輯模式
    const toggleEditMode = () => {
        setIsEditing(!isEditing);
    };

    // 處理表單數據變更
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    // 處理表單提交
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsEditing(false); // 提交後關閉編輯模式
    };

    return (
        <div className="Profile">
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
                <link href="assets/css/profile.css" rel="stylesheet" />
                <link href="assets/css/media.css" rel="stylesheet" />
                <div className="container-fluid " id="wrapper">
                    <div className="row newsfeed-size">
                        <div className="col-md-12 p-0">
                            <div className="row profile-right-side-content">
                                <div className="user-profile">
                                    <div className="profile-header-background">
                                        <a href="#" className="profile-cover">
                                            <img
                                                src="assets/images/users/cover/cover-1.gif"
                                                alt="Profile Header Background"
                                            />
                                        </a>
                                        <div className="cover-overlay">
                                            <a href="#" className="profile-cover"></a>
                                            <a href="#" className="btn btn-update-cover">
                                                <i className="bx bxs-camera" /> Update Cover Photo
                                            </a>
                                        </div>
                                    </div>
                                    <div className="row profile-rows">
                                        <div className="col-md-3">
                                            <div className="profile-info-left">
                                                <div className="text-center">
                                                <div className="profile-img w-shadow">
                                                        <div className="profile-img-overlay" />
                                                        <img
                                                            src={avatarUrl}
                                                            alt="Avatar"
                                                            className="avatar img-circle"
                                                        />
                                                        <div className="profile-img-caption">
                                                            <label htmlFor="updateProfilePic" className="upload">
                                                                <i className="bx bxs-camera" /> Update
                                                                <input
                                                                    type="file"
                                                                    id="updateProfilePicInput"
                                                                    className="text-center upload"
                                                                />
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <p className="profile-fullname mt-3">{formData.nickName || 'Your Nickname'}</p>
                                                    <p className="profile-username mb-3 text-muted">
                                                        @{formData.username || 'username'}
                                                    </p>
                                                </div>
                                                <div className="intro mt-4">
                                                    <div className="d-flex">
                                                        <button type="button" className="btn btn-follow mr-3">
                                                            <i className="bx bx-plus" /> Follow
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-start-chat"
                                                            data-toggle="modal"
                                                            data-target="#newMessageModal"
                                                        >
                                                            <i className="bx bxs-message-rounded" />{" "}
                                                            <span className="fs-8">Message</span>
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-follow"
                                                            id="moreMobile"
                                                            data-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        >
                                                            <i className="bx bx-dots-horizontal-rounded" />{" "}
                                                            <span className="fs-8">More</span>
                                                        </button>
                                                        <div
                                                            className="dropdown-menu dropdown-menu-right profile-ql-dropdown"
                                                            aria-labelledby="moreMobile"
                                                        >
                                                            <a href="newsfeed.html" className="dropdown-item">
                                                                Timeline
                                                            </a>
                                                            <a href="/about" className="dropdown-item">
                                                                About
                                                            </a>
                                                            <a href="followers.html" className="dropdown-item">
                                                                Followers
                                                            </a>
                                                            <a href="following.html" className="dropdown-item">
                                                                Following
                                                            </a>
                                                            <a href="/photos" className="dropdown-item">
                                                                Photos
                                                            </a>
                                                            <a href="videos.html" className="dropdown-item">
                                                                Videos
                                                            </a>
                                                            <a href="check-ins.html" className="dropdown-item">
                                                                Check-Ins
                                                            </a>
                                                            <a href="events.html" className="dropdown-item">
                                                                Events
                                                            </a>
                                                            <a href="likes.html" className="dropdown-item">
                                                                Likes
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="intro mt-5 mv-hidden">
                                                    <div className="intro-item d-flex justify-content-between align-items-center">
                                                        <h3 className="intro-about">Intro</h3>
                                                    </div>
                                                    <div className="intro-item d-flex justify-content-between align-items-center">
                                                        <p className="intro-title text-muted">
                                                            <i className="bx bx-briefcase text-primary" /> Web
                                                            Developer at <a href="#">Company Name</a>
                                                        </p>
                                                    </div>
                                                    <div className="intro-item d-flex justify-content-between align-items-center">
                                                        <p className="intro-title text-muted">
                                                            <i className="bx bx-map text-primary" /> Lives in{" "}
                                                            <a href="#">City, Country</a>
                                                        </p>
                                                    </div>
                                                    <div className="intro-item d-flex justify-content-between align-items-center">
                                                        <p className="intro-title text-muted">
                                                            <i className="bx bx-time text-primary" /> Last Login{" "}
                                                            <a href="#">
                                                                Online{" "}
                                                                <span className="ml-1 online-status bg-success" />
                                                            </a>
                                                        </p>
                                                    </div>
                                                    <div className="intro-item d-flex justify-content-between align-items-center">
                                                        <a
                                                            href="#"
                                                            className="btn btn-quick-link join-group-btn border w-100"
                                                        >
                                                            Edit Details
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="intro mt-5 row mv-hidden">
                                                    <div className="col-md-4">
                                                        <img
                                                            src="assets/images/users/album/album-1.jpg"
                                                            width={95}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <img
                                                            src="assets/images/users/album/album-2.jpg"
                                                            width={95}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <img
                                                            src="assets/images/users/album/album-3.jpg"
                                                            width={95}
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="intro mt-5 mv-hidden">
                                                    <div className="intro-item d-flex justify-content-between align-items-center">
                                                        <h3 className="intro-about">Other Social Accounts</h3>
                                                    </div>
                                                    <div className="intro-item d-flex justify-content-between align-items-center">
                                                        <p className="intro-title text-muted">
                                                            <i className="bx bxl-facebook-square facebook-color" />{" "}
                                                            <a href="#" target="_blank">
                                                                facebook.com/username
                                                            </a>
                                                        </p>
                                                    </div>
                                                    <div className="intro-item d-flex justify-content-between align-items-center">
                                                        <p className="intro-title text-muted">
                                                            <i className="bx bxl-twitter twitter-color" />{" "}
                                                            <a href="#" target="_blank">
                                                                twitter.com/username
                                                            </a>
                                                        </p>
                                                    </div>
                                                    <div className="intro-item d-flex justify-content-between align-items-center">
                                                        <p className="intro-title text-muted">
                                                            <i className="bx bxl-instagram instagram-color" />{" "}
                                                            <a href="#" target="_blank">
                                                                instagram.com/username
                                                            </a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-9 p-0">
                                            <div className="profile-info-right">
                                                {/* Posts section */}
                                                <div className="row">
                                                    <div className="col-md-9 profile-center">
                                                        <ul className="list-inline profile-links d-flex justify-content-between w-shadow rounded">
                                                            <li className="list-inline-item ">
                                                                <a href="/profile">Timeline</a>
                                                            </li>
                                                            <li className="list-inline-item profile-active">
                                                                <a href="/about">About</a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a href="/friends">Friends</a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a href="/photo">Photos</a>
                                                            </li>
                                                            <li className="list-inline-item dropdown">
                                                                <a
                                                                    href="#"
                                                                    data-toggle="dropdown"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                >
                                                                    <i className="bx bx-dots-vertical-rounded" />
                                                                </a>
                                                                <div className="dropdown-menu dropdown-menu-right profile-ql-dropdown">
                                                                    <a href="#" className="dropdown-item">
                                                                        Activity Log
                                                                    </a>
                                                                    <a href="#" className="dropdown-item">
                                                                        Videos
                                                                    </a>
                                                                    <a href="#" className="dropdown-item">
                                                                        Check-Ins
                                                                    </a>
                                                                    <a href="#" className="dropdown-item">
                                                                        Events
                                                                    </a>
                                                                    <a href="#" className="dropdown-item">
                                                                        Likes
                                                                    </a>
                                                                </div>
                                                            </li>
                                                        </ul>

                                                        <div className="bg-white profile-posts-options mt-5 mb-4 py-3 d-flex justify-content-between shadow-sm">
                                                            <div className="col-md-3 col-sm-12">
                                                                <h6 className="timeline-title">About</h6>
                                                            </div>
                                                            <div className="col-md-9 col-sm-12">
                                                                <div className="timeline-manage">
                                                                    <button className="btn btn-manage" onClick={toggleEditMode}>
                                                                        {isEditing ? "Cancel" : "Manage About"}
                                                                    </button>
                                                                </div>
                                                                {/* 如果處於編輯模式，顯示編輯表單 */}
                                                                {isEditing ? (
                                                                    <form onSubmit={handleSubmit} className="about-edit-form">
                                                                        <div className="form-group">
                                                                            <label>工作</label>
                                                                            <input
                                                                                type="text"
                                                                                name="work"
                                                                                value={userInfo.work}
                                                                                onChange={handleInputChange}
                                                                            />
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label>學校</label>
                                                                            <input
                                                                                type="text"
                                                                                name="school"
                                                                                value={userInfo.school}
                                                                                onChange={handleInputChange}
                                                                            />
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label>現居地</label>
                                                                            <input
                                                                                type="text"
                                                                                name="location"
                                                                                value={userInfo.location}
                                                                                onChange={handleInputChange}
                                                                            />
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label>來自</label>
                                                                            <input
                                                                                type="text"
                                                                                name="fromLocation"
                                                                                value={userInfo.fromLocation}
                                                                                onChange={handleInputChange}
                                                                            />
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label>感情狀況</label>
                                                                            <input
                                                                                type="text"
                                                                                name="relationship"
                                                                                value={userInfo.relationship}
                                                                                onChange={handleInputChange}
                                                                            />
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label>電話</label>
                                                                            <input
                                                                                type="text"
                                                                                name="phone"
                                                                                value={userInfo.phone}
                                                                                onChange={handleInputChange}
                                                                            />
                                                                        </div>
                                                                        <button type="submit" className="btn btn-save">
                                                                            Save
                                                                        </button>
                                                                    </form>
                                                                ) : (
                                                                    // 如果不處於編輯模式，顯示個人資料
                                                                    <div className="about-details">
                                                                        <div className="about-item">
                                                                            <img src="assets/icons/work-icon.png" alt="Work Icon" />
                                                                            <span>{userInfo.work}</span>
                                                                        </div>
                                                                        <div className="about-item">
                                                                            <img src="assets/icons/school-icon.png" alt="School Icon" />
                                                                            <span>{userInfo.school}</span>
                                                                        </div>
                                                                        <div className="about-item">
                                                                            <img src="assets/icons/location-icon.png" alt="Location Icon" />
                                                                            <span>{userInfo.location}</span>
                                                                        </div>
                                                                        <div className="about-item">
                                                                            <img src="assets/icons/from-location-icon.png" alt="From Location Icon" />
                                                                            <span>{userInfo.fromLocation}</span>
                                                                        </div>
                                                                        <div className="about-item">
                                                                            <img src="assets/icons/relationship-icon.png" alt="Relationship Icon" />
                                                                            <span>{userInfo.relationship}</span>
                                                                        </div>
                                                                        <div className="about-item">
                                                                            <img src="assets/icons/phone-icon.png" alt="Phone Icon" />
                                                                            <span>{userInfo.phone}</span>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="col-md-3 profile-quick-media">
                                                        <h6 className="text-muted timeline-title">
                                                            Recent Media
                                                        </h6>
                                                        <div className="quick-media">
                                                            <div className="media-overlay" />
                                                            <a href="#" className="quick-media-img">
                                                                <img
                                                                    src="assets/images/users/album/album-1.jpg"
                                                                    alt="Quick media"
                                                                />
                                                            </a>
                                                            <div className="media-overlay-content">
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div className="media-overlay-owner">
                                                                        <img
                                                                            src="assets/images/users/user-12.png"
                                                                            alt="Media owner image"
                                                                        />
                                                                        <span className="overlay-owner-name fs-9">
                                                                            Irwin M. Spelle
                                                                        </span>
                                                                    </div>
                                                                    <div className="dropdown">
                                                                        <a
                                                                            href="#"
                                                                            className="overlay-more"
                                                                            data-toggle="dropdown"
                                                                            role="button"
                                                                            aria-haspopup="true"
                                                                            aria-expanded="false"
                                                                        >
                                                                            <i className="bx bx-dots-horizontal-rounded" />
                                                                        </a>
                                                                        <div className="dropdown-menu dropdown-menu-right nav-drop dropdown-shadow">
                                                                            <a className="dropdown-item" href="#">
                                                                                Save post
                                                                            </a>
                                                                            <a className="dropdown-item" href="#">
                                                                                Turn on notifications
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="overlay-bottom d-flex justify-content-between align-items-center">
                                                                    <div className="argon-reaction">
                                                                        <span className="like-btn">
                                                                            <a
                                                                                href="#"
                                                                                className="post-card-buttons"
                                                                                id="reactions"
                                                                            >
                                                                                <i className="bx bxs-like mr-1" /> 67
                                                                            </a>
                                                                            <ul className="reactions-box dropdown-shadow">
                                                                                <li
                                                                                    className="reaction reaction-like"
                                                                                    data-reaction="Like"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-love"
                                                                                    data-reaction="Love"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-haha"
                                                                                    data-reaction="HaHa"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-wow"
                                                                                    data-reaction="Wow"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-sad"
                                                                                    data-reaction="Sad"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-angry"
                                                                                    data-reaction="Angry"
                                                                                />
                                                                            </ul>
                                                                        </span>
                                                                    </div>
                                                                    <div className="liked-users">
                                                                        <img
                                                                            src="assets/images/users/user-9.png"
                                                                            alt="Liked users"
                                                                        />
                                                                        <img
                                                                            src="assets/images/users/user-6.png"
                                                                            alt="Liked users"
                                                                        />
                                                                        <img
                                                                            src="assets/images/users/user-12.png"
                                                                            alt="Liked users"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="quick-media">
                                                            <div className="media-overlay" />
                                                            <a href="#" className="quick-media-img">
                                                                <img
                                                                    src="assets/images/users/album/album-2.jpg"
                                                                    alt="Quick media"
                                                                />
                                                            </a>
                                                            <div className="media-overlay-content">
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div className="media-overlay-owner">
                                                                        <img
                                                                            src="assets/images/users/user-12.png"
                                                                            alt="Media owner image"
                                                                        />
                                                                        <span className="overlay-owner-name fs-9">
                                                                            Irwin M. Spelle
                                                                        </span>
                                                                    </div>
                                                                    <div className="dropdown">
                                                                        <a
                                                                            href="#"
                                                                            className="overlay-more"
                                                                            data-toggle="dropdown"
                                                                            role="button"
                                                                            aria-haspopup="true"
                                                                            aria-expanded="false"
                                                                        >
                                                                            <i className="bx bx-dots-horizontal-rounded" />
                                                                        </a>
                                                                        <div className="dropdown-menu dropdown-menu-right nav-drop dropdown-shadow">
                                                                            <a className="dropdown-item" href="#">
                                                                                Save post
                                                                            </a>
                                                                            <a className="dropdown-item" href="#">
                                                                                Turn on notifications
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="overlay-bottom d-flex justify-content-between align-items-center">
                                                                    <div className="argon-reaction">
                                                                        <span className="like-btn">
                                                                            <a
                                                                                href="#"
                                                                                className="post-card-buttons"
                                                                                id="reactions"
                                                                            >
                                                                                <i className="bx bxs-like mr-1" /> 67
                                                                            </a>
                                                                            <ul className="reactions-box dropdown-shadow">
                                                                                <li
                                                                                    className="reaction reaction-like"
                                                                                    data-reaction="Like"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-love"
                                                                                    data-reaction="Love"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-haha"
                                                                                    data-reaction="HaHa"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-wow"
                                                                                    data-reaction="Wow"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-sad"
                                                                                    data-reaction="Sad"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-angry"
                                                                                    data-reaction="Angry"
                                                                                />
                                                                            </ul>
                                                                        </span>
                                                                    </div>
                                                                    <div className="liked-users">
                                                                        <img
                                                                            src="assets/images/users/user-9.png"
                                                                            alt="Liked users"
                                                                        />
                                                                        <img
                                                                            src="assets/images/users/user-6.png"
                                                                            alt="Liked users"
                                                                        />
                                                                        <img
                                                                            src="assets/images/users/user-12.png"
                                                                            alt="Liked users"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="quick-media">
                                                            <div className="media-overlay" />
                                                            <a href="#" className="quick-media-img">
                                                                <img
                                                                    src="assets/images/users/album/album-3.jpg"
                                                                    alt="Quick media"
                                                                />
                                                            </a>
                                                            <div className="media-overlay-content">
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div className="media-overlay-owner">
                                                                        <img
                                                                            src="assets/images/users/user-12.png"
                                                                            alt="Media owner image"
                                                                        />
                                                                        <span className="overlay-owner-name fs-9">
                                                                            Irwin M. Spelle
                                                                        </span>
                                                                    </div>
                                                                    <div className="dropdown">
                                                                        <a
                                                                            href="#"
                                                                            className="overlay-more"
                                                                            data-toggle="dropdown"
                                                                            role="button"
                                                                            aria-haspopup="true"
                                                                            aria-expanded="false"
                                                                        >
                                                                            <i className="bx bx-dots-horizontal-rounded" />
                                                                        </a>
                                                                        <div className="dropdown-menu dropdown-menu-right nav-drop dropdown-shadow">
                                                                            <a className="dropdown-item" href="#">
                                                                                Save post
                                                                            </a>
                                                                            <a className="dropdown-item" href="#">
                                                                                Turn on notifications
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="overlay-bottom d-flex justify-content-between align-items-center">
                                                                    <div className="argon-reaction">
                                                                        <span className="like-btn">
                                                                            <a
                                                                                href="#"
                                                                                className="post-card-buttons"
                                                                                id="reactions"
                                                                            >
                                                                                <i className="bx bxs-like mr-1" /> 67
                                                                            </a>
                                                                            <ul className="reactions-box dropdown-shadow">
                                                                                <li
                                                                                    className="reaction reaction-like"
                                                                                    data-reaction="Like"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-love"
                                                                                    data-reaction="Love"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-haha"
                                                                                    data-reaction="HaHa"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-wow"
                                                                                    data-reaction="Wow"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-sad"
                                                                                    data-reaction="Sad"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-angry"
                                                                                    data-reaction="Angry"
                                                                                />
                                                                            </ul>
                                                                        </span>
                                                                    </div>
                                                                    <div className="liked-users">
                                                                        <img
                                                                            src="assets/images/users/user-9.png"
                                                                            alt="Liked users"
                                                                        />
                                                                        <img
                                                                            src="assets/images/users/user-6.png"
                                                                            alt="Liked users"
                                                                        />
                                                                        <img
                                                                            src="assets/images/users/user-12.png"
                                                                            alt="Liked users"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* New message modal */}
                <div
                    className="modal fade"
                    id="newMessageModal"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="newMessageModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header new-msg-header">
                                <h5 className="modal-title" id="newMessageModalLabel">
                                    Start new conversation
                                </h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body new-msg-body">
                                <form action="" method="" className="new-msg-form">
                                    <div className="form-group">
                                        <label htmlFor="message-text" className="col-form-label">
                                            Message:
                                        </label>
                                        <textarea
                                            className="form-control search-input"
                                            rows={5}
                                            id="message-text"
                                            placeholder="Type a message..."
                                            defaultValue={""}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer new-msg-footer">
                                <button type="button" className="btn btn-primary btn-sm">
                                    Send message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Core */}
                {/* Optional */}
            </>

        </div>
    );
}

export default About;