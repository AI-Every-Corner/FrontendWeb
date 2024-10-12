import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from './context';
import axios from 'axios';
import Intro from './intro';
import Recentmedia from './recentmedia';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import Avatar from './avatar';
import Cover from './cover';

function Photo() {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const userId = params.get('userId'); // 從查詢參數中獲取 userId

    const [formData, setFormData] = useState({
        nickName: '',
        username: ''
    });

    const [posts, setPosts] = useState([]);
    const [isCurrentUser, setIsCurrentUser] = useState(false); //

    useEffect(() => {
        console.log('Fetched userId:', userId);

        const currentUserId = localStorage.getItem('userId');
        setIsCurrentUser(userId === currentUserId);

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

    useEffect(() => {
        const token = localStorage.getItem('token'); // Assuming token is stored in localStorage

        axios.get(`http://localhost:8080/posts/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error("Error fetching posts:", error);
            });
    }, [userId]);

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
                <div className="container-fluid newsfeed " id="wrapper">
                    <div className="row newsfeed-size">
                        <div className="col-md-12 p-0">

                            <div className="row profile-right-side-content">
                                <div className="user-profile">
                                    <Cover />
                                    <div className="row profile-rows">
                                        <div className="col-md-3">
                                            <div className="profile-info-left">
                                                <div className="text-center">
                                                    <div className="profile-img w-shadow">
                                                        <Avatar />
                                                    </div>
                                                    <p className="profile-fullname mt-3">{formData.nickName || 'Your Nickname'}</p>
                                                    <p className="profile-username mb-3 text-muted">
                                                        @{formData.username || 'username'}
                                                    </p>
                                                </div>
                                                {!isCurrentUser && (
                                                <div className="intro mt-4">
                                                    <div className="d-flex">
                                                        <button type="button" className="btn btn-follow mr-3">
                                                            <i className="bx bx-plus" /> Follow
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
                                                    </div>
                                                </div>
                                                )}
                                                <div className="intro mt-5 mv-hidden">
                                                    <div className="intro-item d-flex justify-content-between align-items-center">
                                                        <h3 className="intro-about">Intro</h3>
                                                    </div>
                                                    <Intro />
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
                                                                <a href={`/profile?userId=${userId}`}>Timeline</a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a href={`/about?userId=${userId}`}>About</a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a href={`/friends?userId=${userId}`}>Friends</a>
                                                            </li>
                                                            <li className="list-inline-item profile-active">
                                                                <a href={`/photo?userId=${userId}`}>Photos</a>
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
                                                        <ul className="list-group list-group-horizontal types-list fs-8">
                                                            <form className="list-group-item d-flex w-100 align-items-center p-0 form-inline dropdown search-form">
                                                                <div className="input-group w-95" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="searchDropdown">
                                                                    <input type="text" className="form-control search-input" placeholder="Search for photo" aria-label="Search" aria-describedby="search-addon" />
                                                                    <div className="input-group-append">
                                                                        <button className="btn search-button" type="button">
                                                                            <i className='bx bx-search'></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <ul className="dropdown-menu notify-drop nav-drop shadow-sm" aria-labelledby="searchDropdown">
                                                                    <div className="notify-drop-title">
                                                                        <div className="row">
                                                                            <div className="col-md-6 col-sm-6 col-xs-6 fs-8">Search Results
                                                                                <span className="badge badge-pill badge-primary ml-2">29</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="drop-content">
                                                                        <h6 className="dropdown-header">Peoples</h6>
                                                                        <li className="dropdown-item">
                                                                            <div className="col-md-2 col-sm-2 col-xs-2">
                                                                                <div className="notify-img">
                                                                                    <img src="assets/images/users/user-6.png" alt="Search result" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-10 col-sm-10 col-xs-10">
                                                                                <a href="#" className="notification-user">Susan P. Jarvis</a>
                                                                                <a href="#" className="btn btn-quick-link join-group-btn border text-right float-right">
                                                                                    Add Friend
                                                                                </a>
                                                                                <p className="time">6 Mutual friends</p>
                                                                            </div>
                                                                        </li>
                                                                        <li className="dropdown-item">
                                                                            <div className="col-md-2 col-sm-2 col-xs-2">
                                                                                <div className="notify-img">
                                                                                    <img src="assets/images/users/user-5.png" alt="Search result" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-10 col-sm-10 col-xs-10">
                                                                                <a href="#" className="notification-user">Ruth D. Greene</a>
                                                                                <a href="#" className="btn btn-quick-link join-group-btn border text-right float-right">
                                                                                    Add Friend
                                                                                </a>
                                                                            </div>
                                                                        </li>
                                                                        <h6 className="dropdown-header">Groups</h6>
                                                                        <li className="dropdown-item">
                                                                            <div className="col-md-2 col-sm-2 col-xs-2">
                                                                                <div className="notify-img">
                                                                                    <img src="assets/images/groups/group-2.jpg" alt="Search result" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-10 col-sm-10 col-xs-10">
                                                                                <a href="#" className="notification-user">Tourism</a>
                                                                                <a href="#" className="btn btn-quick-link join-group-btn border text-right float-right">
                                                                                    Join
                                                                                </a>
                                                                                <p className="time">2.5k Members 35+ post a week</p>
                                                                            </div>
                                                                        </li>
                                                                        <li className="dropdown-item">
                                                                            <div className="col-md-2 col-sm-2 col-xs-2">
                                                                                <div className="notify-img">
                                                                                    <img src="assets/images/groups/group-1.png" alt="Search result" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-10 col-sm-10 col-xs-10">
                                                                                <a href="#" className="notification-user">Argon Social Network
                                                                                    <img src="assets/images/theme/verify.png" width="10px" className="verify" alt="Group verified" />
                                                                                </a>
                                                                                <a href="#" className="btn btn-quick-link join-group-btn border text-right float-right">
                                                                                    Join
                                                                                </a>
                                                                                <p className="time">10k Members 20+ post a week</p>
                                                                            </div>
                                                                        </li>
                                                                    </div>
                                                                    <div className="notify-drop-footer text-center">
                                                                        <a href="#">See More</a>
                                                                    </div>
                                                                </ul>
                                                            </form>
                                                        </ul>
                                                        <div className="bg-white py-3 px-4 shadow-sm">
                                                            <div className="card-head d-flex justify-content-between">
                                                                <h5 className="mb-4">Photo</h5>
                                                                <a href="#" className="btn btn-link">See All</a>
                                                            </div>
                                                            <div className="row">

                                                                {posts.map((post, index) => (
                                                                    <div key={index} className="col-md-4 col-sm-6">
                                                                        <div className="card group-card shadow-sm">
                                                                            {post.imagePath ? (
                                                                                <img
                                                                                    src={post.imagePath}
                                                                                    className="card-img-top group-card-image"
                                                                                    alt="post image"
                                                                                />
                                                                            ) : (
                                                                                <p>No image</p>
                                                                            )}

                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Recentmedia />
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

export default Photo;