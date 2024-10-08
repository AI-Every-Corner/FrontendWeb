import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from './context';
import axios from 'axios';
import Intro from './intro';
import Recentmedia from './recentmedia';

function Friends() {

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

  return (
    <div className="Friends">
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
      <div className="container-fluid newsfeed d-flex" id="wrapper">
        <div className="row newsfeed-size">
          <div className="col-md-12 p-0">
            <div className="row profile-right-side-content">
              <div className="user-profile">
                <div className="profile-header-background">
                  <a href="#" className="profile-cover">
                    <img src="assets/images/users/cover/cover-1.gif" alt="Profile Header Background" />
                    <div className="cover-overlay">
                      <a href="#" className="btn btn-update-cover">
                        <i className='bx bxs-camera'></i> Update Cover Photo
                      </a>
                    </div>
                  </a>
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
                        <p className="profile-username mb-3 text-muted">@{formData.username || 'username'}</p>
                      </div>
                      <div className="intro mt-4">
                        <div className="d-flex">
                          <button type="button" className="btn btn-follow mr-3">
                            <i className='bx bx-plus'></i> Follow
                          </button>
                          <button type="button" className="btn btn-start-chat" data-toggle="modal" data-target="#newMessageModal">
                            <i className='bx bxs-message-rounded'></i>
                            <span className="fs-8">Message</span>
                          </button>
                          <button type="button" className="btn btn-follow" id="moreMobile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className='bx bx-dots-horizontal-rounded'></i>
                            <span className="fs-8">More</span>
                          </button>
                          <div className="dropdown-menu dropdown-menu-right profile-ql-dropdown" aria-labelledby="moreMobile">
                            <a href="/profile" className="dropdown-item">Timeline</a>
                            <a href="/about" className="dropdown-item">About</a>
                            <a href="followers.html" className="dropdown-item">Followers</a>
                            <a href="following.html" className="dropdown-item">Following</a>
                            <a href="photos.html" className="dropdown-item">Photos</a>
                            <a href="videos.html" className="dropdown-item">Videos</a>
                            <a href="check-ins.html" className="dropdown-item">Check-Ins</a>
                            <a href="events.html" className="dropdown-item">Events</a>
                            <a href="likes.html" className="dropdown-item">Likes</a>
                          </div>
                        </div>
                      </div>
                      <div className="intro mt-5 mv-hidden">
                        <div className="intro-item d-flex justify-content-between align-items-center">
                          <h3 className="intro-about">Intro</h3>
                        </div>
                        <Intro />
                        <div className="intro-item d-flex justify-content-between align-items-center">
                          <a href="/about" className="btn btn-quick-link join-group-btn border w-100">Edit Details</a>
                        </div>
                      </div>
                      <div className="intro mt-5 row mv-hidden">
                        <div className="col-md-4">
                          <img src="assets/images/users/album/album-1.jpg" width="95" alt="" />
                        </div>
                        <div className="col-md-4">
                          <img src="assets/images/users/album/album-2.jpg" width="95" alt="" />
                        </div>
                        <div className="col-md-4">
                          <img src="assets/images/users/album/album-3.jpg" width="95" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9 p-0">
                    <div className="profile-info-right">

                      <div className="row px-2">
                        <div className="col-md-9 profile-center">
                          <ul className="list-inline profile-links d-flex justify-content-between shadow-sm rounded">
                            <li className="list-inline-item">
                              <a href="/profile">Timeline</a>
                            </li>
                            <li className="list-inline-item">
                              <a href="/about">About</a></li>
                            <li className="list-inline-item profile-active">
                              <a href="/friends">Friends</a>
                            </li>
                            <li className="list-inline-item">
                              <a href="/photo">Photos</a>
                            </li>
                            <li className="list-inline-item dropdown">
                              <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className='bx bx-dots-vertical-rounded'></i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right profile-ql-dropdown">
                                <a href="#" className="dropdown-item">Activity Log</a>
                                <a href="#" className="dropdown-item">Videos</a>
                                <a href="#" className="dropdown-item">Check-Ins</a>
                                <a href="#" className="dropdown-item">Events</a>
                                <a href="#" className="dropdown-item">Likes</a>
                              </div>
                            </li>
                          </ul>
                          <ul className="list-group list-group-horizontal types-list fs-8">
                            <form className="list-group-item d-flex w-100 align-items-center p-0 form-inline dropdown search-form">
                              <div className="input-group w-95" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="searchDropdown">
                                <input type="text" className="form-control search-input" placeholder="Search for people, companies, events and more..." aria-label="Search" aria-describedby="search-addon" />
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
                              <h5 className="mb-4">Latest Active Friends</h5>
                              <a href="#" className="btn btn-link">See All</a>
                            </div>
                            <div className="row">
                              <div className="col-md-4 col-sm-6">
                                <div className="card group-card shadow-sm">
                                  <img src="assets/images/groups/group-1.png" className="card-img-top group-card-image" alt="Group image" />
                                  <div className="card-body">
                                    <h5 className="card-title">Ruth D. Greene
                                      <img src="assets/images/theme/verify.png" width="10px" className="verify" alt="Group verified" />
                                    </h5>
                                    <p className="card-text">10k Members 20+ post a week</p>
                                    <div className="btn-group w-100" role="group">
                                      <a href="#" className="btn btn-quick-link join-group-btn border w-100">Message</a>
                                      <div className="btn-group" role="group">
                                        <button id="friendsMore" type="button" className="btn btn-quick-link join-group-btn border btn-group-drop" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          <i className='bx bx-dots-horizontal-rounded'></i>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="friendsMore">
                                          <a className="dropdown-item" href="#">Dropdown link</a>
                                          <a className="dropdown-item" href="#">Dropdown link</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4 col-sm-6">
                                <div className="card group-card shadow-sm">
                                  <img src="assets/images/groups/group-2.jpg" className="card-img-top group-card-image" alt="Group image" />
                                  <div className="card-body">
                                    <h5 className="card-title">Tourism</h5>
                                    <p className="card-text">2.5k Members 35+ post a week</p>
                                    <a href="#" className="btn btn-quick-link join-group-btn border w-100">Join</a>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4 col-sm-6">
                                <div className="card group-card shadow-sm">
                                  <img src="assets/images/groups/group-3.jpg" className="card-img-top group-card-image" alt="Group image" />
                                  <div className="card-body">
                                    <h5 className="card-title">Reading Books</h5>
                                    <p className="card-text">1.3k Members 10+ post a day</p>
                                    <a href="#" className="btn btn-quick-link join-group-btn border w-100">Join</a>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4 col-sm-6">
                                <div className="card group-card shadow-sm">
                                  <img src="assets/images/groups/group-4.jpg" className="card-img-top group-card-image" alt="Group image" />
                                  <div className="card-body">
                                    <h5 className="card-title">Capture The Best</h5>
                                    <p className="card-text">2.8k Members 8+ post a day</p>
                                    <a href="#" className="btn btn-quick-link join-group-btn border w-100">Join</a>
                                  </div>
                                </div>
                              </div>
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
    </div>
  );
}

export default Friends;