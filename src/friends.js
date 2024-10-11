import React, { useState, useEffect, useContext } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import axios from 'axios';
import { UserContext } from './context';

function Friends() {

  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const { avatar, setAvatar } = useContext(UserContext);
  const [formData, setFormData] = useState({
    nickName: '',
    username: ''
  });
  const urlUserId = params.get('userId');
  const storedUserId = localStorage.getItem('userId');
  const userId = urlUserId || storedUserId;
  const [isCurrentUser, setIsCurrentUser] = useState(false);
  const [friends, setFriends] = useState([]);
  const baseUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080';  // 使用環境變量或默認值


  useEffect(() => {
    const currentUserId = localStorage.getItem('userId');
    setIsCurrentUser(userId === currentUserId);

    console.log('Fetched userId:', userId);

    const token = localStorage.getItem('token');

    // 獲取用戶資料
    axios.get(`http://localhost:8080/api/auth/${userId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        const userData = response.data;
        setFormData({
          nickName: userData.nickName,
          username: userData.username
        });
      })
      .catch(error => {
        console.error("獲取用戶資料時發生錯誤:", error);
      });

    // 獲取好友列表
    axios.get(`http://localhost:8080/friends/${userId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        setFriends(response.data);
      })
      .catch(error => {
        console.error("獲取好友數據時發生錯誤:", error);
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
      <link href="assets/css/friends.css" rel="stylesheet" />
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
                            src={avatar}
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
                        <div className="intro-item d-flex justify-content-between align-items-center">
                          <p className="intro-title text-muted">
                            <i className='bx bx-briefcase text-primary'></i> Web Developer at
                            <a href="#">Company Name</a>
                          </p>
                        </div>
                        <div className="intro-item d-flex justify-content-between align-items-center">
                          <p className="intro-title text-muted">
                            <i className='bx bx-map text-primary'></i> Lives in <a href="#">City, Country</a>
                          </p>
                        </div>
                        <div className="intro-item d-flex justify-content-between align-items-center">
                          <p className="intro-title text-muted">
                            <i className='bx bx-time text-primary'></i> Last Login
                            <a href="#">Online
                              <span className="ml-1 online-status bg-success"></span>
                            </a>
                          </p>
                        </div>
                        <div className="intro-item d-flex justify-content-between align-items-center">
                          <a href="#" className="btn btn-quick-link join-group-btn border w-100">Edit Details</a>
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
                      <div className="intro mt-5 mv-hidden">
                        <div className="intro-item d-flex justify-content-between align-items-center">
                          <h3 className="intro-about">Other Social Accounts</h3>
                        </div>
                        <div className="intro-item d-flex justify-content-between align-items-center">
                          <p className="intro-title text-muted">
                            <i className='bx bxl-facebook-square facebook-color'></i>
                            <a href="#" target="_blank">facebook.com/username</a>
                          </p>
                        </div>
                        <div className="intro-item d-flex justify-content-between align-items-center">
                          <p className="intro-title text-muted">
                            <i className='bx bxl-twitter twitter-color'></i>
                            <a href="#" target="_blank">twitter.com/username</a>
                          </p>
                        </div>
                        <div className="intro-item d-flex justify-content-between align-items-center">
                          <p className="intro-title text-muted">
                            <i className='bx bxl-instagram instagram-color'></i>
                            <a href="#" target="_blank">instagram.com/username</a>
                          </p>
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
                            <div className="friend-card">
                              {friends.map(friend => (
                                <div key={friend.friendId} className="friend-card-item">
                                  <img
                                    src={`${baseUrl}${friend.imagePath}`}
                                    alt={`${friend.nickname || 'Friend'}'s avatar`}
                                    className="friend-card-image"
                                  />
                                  <div className="friend-card-body">
                                    <h5 className="friend-card-title"><Link to={`/profile?userId=${friend.friendId}`}>{friend.nickname}</Link></h5>
                                    <p className="card-text text-muted"></p>
                                    <div className="friend-card-buttons" role="group">
                                      <a href="#" className="btn btn-light border w-100">發送訊息</a>
                                      <div className="btn-group" role="group">
                                        <button 
                                          type="button" 
                                          className="btn btn-light border friend-card-options-btn" 
                                          data-toggle="dropdown" 
                                          aria-haspopup="true" 
                                          aria-expanded="false"
                                        >
                                          <i className='bx bx-dots-horizontal-rounded'></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                          <a className="dropdown-item" href="#">查看個人資料</a>
                                          <a className="dropdown-item" href="#">取消好友</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 profile-quick-media">
                          <h6 className="text-muted timeline-title">Recent Media</h6>
                          <div className="quick-media">
                            <div className="media-overlay"></div>
                            <a href="#" className="quick-media-img">
                              <img src="assets/images/users/album/album-1.jpg" alt="Quick media" />
                            </a>
                            <div className="media-overlay-content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="media-overlay-owner">
                                  <img src="assets/images/users/user-12.png" alt="Media owner image" />
                                  <span className="overlay-owner-name fs-9">Irwin M. Spelle</span>
                                </div>
                                <div className="dropdown">
                                  <a href="#" className="overlay-more" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                    <i className='bx bx-dots-horizontal-rounded'></i>
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-right nav-drop dropdown-shadow">
                                    <a className="dropdown-item" href="#">Save post</a>
                                    <a className="dropdown-item" href="#">Turn on notifications</a>
                                  </div>
                                </div>
                              </div>

                              <div className="overlay-bottom d-flex justify-content-between align-items-center">
                                <div className="argon-reaction">
                                  <span className="like-btn">
                                    <a href="#" className="post-card-buttons" id="reactions"><i className='bx bxs-like mr-1'></i> 67</a>
                                    <ul className="reactions-box dropdown-shadow">
                                      <li className="reaction reaction-like" data-reaction="Like"></li>
                                      <li className="reaction reaction-love" data-reaction="Love"></li>
                                      <li className="reaction reaction-haha" data-reaction="HaHa"></li>
                                      <li className="reaction reaction-wow" data-reaction="Wow"></li>
                                      <li className="reaction reaction-sad" data-reaction="Sad"></li>
                                      <li className="reaction reaction-angry" data-reaction="Angry"></li>
                                    </ul>
                                  </span>
                                </div>
                                <div className="liked-users">
                                  <img src="assets/images/users/user-9.png" alt="Liked users" />
                                  <img src="assets/images/users/user-6.png" alt="Liked users" />
                                  <img src="assets/images/users/user-12.png" alt="Liked users" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="quick-media">
                            <div className="media-overlay"></div>
                            <a href="#" className="quick-media-img">
                              <img src="assets/images/users/album/album-2.jpg" alt="Quick media" />
                            </a>
                            <div className="media-overlay-content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="media-overlay-owner">
                                  <img src="assets/images/users/user-12.png" alt="Media owner image" />
                                  <span className="overlay-owner-name fs-9">Irwin M. Spelle</span>
                                </div>
                                <div className="dropdown">
                                  <a href="#" className="overlay-more" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                    <i className='bx bx-dots-horizontal-rounded'></i>
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-right nav-drop dropdown-shadow">
                                    <a className="dropdown-item" href="#">Save post</a>
                                    <a className="dropdown-item" href="#">Turn on notifications</a>
                                  </div>
                                </div>
                              </div>

                              <div className="overlay-bottom d-flex justify-content-between align-items-center">
                                <div className="argon-reaction">
                                  <span className="like-btn">
                                    <a href="#" className="post-card-buttons" id="reactions">
                                      <i className='bx bxs-like mr-1'></i> 67
                                    </a>
                                    <ul className="reactions-box dropdown-shadow">
                                      <li className="reaction reaction-like" data-reaction="Like"></li>
                                      <li className="reaction reaction-love" data-reaction="Love"></li>
                                      <li className="reaction reaction-haha" data-reaction="HaHa"></li>
                                      <li className="reaction reaction-wow" data-reaction="Wow"></li>
                                      <li className="reaction reaction-sad" data-reaction="Sad"></li>
                                      <li className="reaction reaction-angry" data-reaction="Angry"></li>
                                    </ul>
                                  </span>
                                </div>
                                <div className="liked-users">
                                  <img src="assets/images/users/user-9.png" alt="Liked users" />
                                  <img src="assets/images/users/user-6.png" alt="Liked users" />
                                  <img src="assets/images/users/user-12.png" alt="Liked users" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="quick-media">
                            <div className="media-overlay"></div>
                            <a href="#" className="quick-media-img">
                              <img src="assets/images/users/album/album-3.jpg" alt="Quick media" />
                            </a>
                            <div className="media-overlay-content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="media-overlay-owner">
                                  <img src="assets/images/users/user-12.png" alt="Media owner image" />
                                  <span className="overlay-owner-name fs-9">Irwin M. Spelle</span>
                                </div>
                                <div className="dropdown">
                                  <a href="#" className="overlay-more" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                    <i className='bx bx-dots-horizontal-rounded'></i>
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-right nav-drop dropdown-shadow">
                                    <a className="dropdown-item" href="#">Save post</a>
                                    <a className="dropdown-item" href="#">Turn on notifications</a>
                                  </div>
                                </div>
                              </div>

                              <div className="overlay-bottom d-flex justify-content-between align-items-center">
                                <div className="argon-reaction">
                                  <span className="like-btn">
                                    <a href="#" className="post-card-buttons" id="reactions">
                                      <i className='bx bxs-like mr-1'></i> 67
                                    </a>
                                    <ul className="reactions-box dropdown-shadow">
                                      <li className="reaction reaction-like" data-reaction="Like"></li>
                                      <li className="reaction reaction-love" data-reaction="Love"></li>
                                      <li className="reaction reaction-haha" data-reaction="HaHa"></li>
                                      <li className="reaction reaction-wow" data-reaction="Wow"></li>
                                      <li className="reaction reaction-sad" data-reaction="Sad"></li>
                                      <li className="reaction reaction-angry" data-reaction="Angry"></li>
                                    </ul>
                                  </span>
                                </div>
                                <div className="liked-users">
                                  <img src="assets/images/users/user-9.png" alt="Liked users" />
                                  <img src="assets/images/users/user-6.png" alt="Liked users" />
                                  <img src="assets/images/users/user-12.png" alt="Liked users" />
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
    </div>
  );
}

export default Friends;