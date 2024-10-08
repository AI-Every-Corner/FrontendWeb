import { Link, useNavigate } from 'react-router-dom';
import PostList from './postlist';
import PostForm from './postform';
// import Widgets from './widgets';
import { UserContext } from './context';
import { useContext, useState } from 'react';

function MainPage() {

  const { avatarUrl } = useContext(UserContext);

  return (
  <div className="App">
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
  <link href="assets/css/boxicons.min.css" rel="stylesheet" />
  {/* Styles */}
  <link href="assets/css/bootstrap/bootstrap.min.css" rel="stylesheet" />
  <link href="assets/css/style.css" rel="stylesheet" />
  <link href="assets/css/components.css" rel="stylesheet" />
  <link href="assets/css/media.css" rel="stylesheet" />
  <link href="assets/css/chat.css" rel="stylesheet" />
  <link href="https://vjs.zencdn.net/7.4.1/video-js.css" rel="stylesheet" />
  <div className="container-fluid" id="wrapper">
  <div className="row newsfeed-size">
    <div className="col-md-12 newsfeed-right-side">
    
    <div className="row newsfeed-right-side-content mt-3">
      <div
      className="col-md-3 newsfeed-left-side sticky-top shadow-sm"
      id="sidebar-wrapper"
      >
      <div className="card newsfeed-user-card h-100">
        <ul className="list-group list-group-flush newsfeed-left-sidebar">
        <li className="list-group-item">
          <h6>Home</h6>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center sd-active">
          <Link to="/" className="sidebar-item">
          <img
            src="assets/images/icons/left-sidebar/newsfeed.png"
            alt="newsfeed"
          />{" "}
          News Feed
          </Link>
          <Link to="/" className="newsfeedListicon">
          <i className="bx bx-dots-horizontal-rounded" />
          </Link>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link to="/messages" className="sidebar-item">
          <img
            src="assets/images/icons/left-sidebar/message.png"
            alt="message"
          />{" "}
          Messages
          </Link>
          <span className="badge badge-primary badge-pill">2</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link to="/groups" className="sidebar-item">
          <img
            src="assets/images/icons/left-sidebar/group.png"
            alt="group"
          />{" "}
          Groups
          </Link>
          <span className="badge badge-primary badge-pill">17</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link to="/events" className="sidebar-item">
          <img
            src="assets/images/icons/left-sidebar/event.png"
            alt="event"
          />{" "}
          Events
          </Link>
          <span className="badge badge-primary badge-pill">3</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link to="/saved" className="sidebar-item">
          <img
            src="assets/images/icons/left-sidebar/saved.png"
            alt="saved"
          />{" "}
          Saved
          </Link>
          <span className="badge badge-primary badge-pill">8</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link to="/find-friends" className="sidebar-item">
          <img
            src="assets/images/icons/left-sidebar/find-friends.png"
            alt="find-friends"
          />{" "}
          Find Friends
          </Link>
          <span className="badge badge-primary badge-pill">
          <i className="bx bx-chevron-right" />
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link to="/matches" className="sidebar-item">
          <img
            src="assets/images/icons/left-sidebar/matches.png"
            alt="matches"
          />{" "}
          Matches
          </Link>
          <span className="badge badge-primary badge-pill">
          <i className="bx bx-chevron-right" />
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link to="/teams" className="sidebar-item">
          <img
            src="assets/images/icons/left-sidebar/team.png"
            alt="find-friends"
          />{" "}
          Argon For Teams
          </Link>
          <span className="badge badge-primary badge-pill">
          <i className="bx bx-chevron-right" />
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center newsLink">
          <a
          href="https://github.com/ArtMin96/argon-social"
          target="_blank"
          className="sidebar-item"
          >
          <img
            src="assets/images/icons/left-sidebar/news.png"
            alt="find-friends"
          />{" "}
          News
          </a>
          <span className="badge badge-primary badge-pill">
          <i className="bx bx-chevron-right" />
          </span>
        </li>
        </ul>
      </div>
      </div>
      <div className="col-md-6 second-section" id="page-content-wrapper">
      {/* <div className="mb-3">
        <div className="btn-group d-flex">
        <Link
          to="/"
          className="btn btn-quick-links mr-3 ql-active"
        >
          <img
          src="assets/images/icons/theme/speech.png"
          className="mr-2"
          alt="quick links icon"
          />
          <span className="fs-8">Speech</span>
        </Link>
        <Link to="/messages" className="btn btn-quick-links mr-3">
          <img
          src="assets/images/icons/theme/listen.png"
          className="mr-2"
          alt="quick links icon"
          />
          <span className="fs-8">Listen</span>
        </Link>
        <Link to="/watch" className="btn btn-quick-links">
          <img
          src="assets/images/icons/theme/watch.png"
          className="mr-2"
          alt="quick links icon"
          />
          <span className="fs-8">Watch</span>
        </Link>
        </div>
      </div> */}
      <ul className="list-unstyled mt-3" style={{ marginBottom: 0 }}>
        <PostForm />
        {/* <li className="media post-form w-shadow">
        <div className="media-body">
          <div className="form-group post-input">
          <textarea
            className="form-control"
            id="postForm"
            rows={2}
            placeholder="What's on your mind, username?"
            defaultValue={""}
          />
          </div>
          <div className="row post-form-group">
          <div className="col-md-9">
            <button
            type="button"
            className="btn btn-link post-form-btn btn-sm"
            >
            <img
              src="assets/images/icons/theme/post-image.png"
              alt="post form icon"
            />{" "}
            <span>Photo/Video</span>
            </button>
            <button
            type="button"
            className="btn btn-link post-form-btn btn-sm"
            >
            <img
              src="assets/images/icons/theme/smile.png"
              alt="post form icon"
            />{" "}
            <span>Moods</span>
            </button>
            {/* <button
            type="button"
            className="btn btn-link post-form-btn btn-sm"
            >
            <img
              src="assets/images/icons/theme/check-in.png"
              alt="post form icon"
            />{" "}
            <span>Check In</span>
            </button> 
          </div>
          <div className="col-md-3 text-right">
            <button type="button" className="btn btn-primary btn-sm">
            Publish
            </button>
          </div>
          </div>
        </div>
        </li> */}
      </ul>
      {/* Posts */}
      <div className="posts-section mb-5">
        <PostList />
      </div>
      </div>
      <div className="col-md-3 third-section">
      <div className="card shadow-sm">
        <div className="card-body">
        <div className="weather-card-header d-flex justify-content-between align-items-center">
          <p className="fs-1 mb-0">11:37 PM</p>
          <a href="#" className="btn text-primary">
          California, CA <i className="bx bx-chevron-down" />
          </a>
        </div>
        <div className="weather-quick align-items-center mt-4">
          <div className="row">
          <div className="col-md-8">
            <img
            src="assets/images/icons/weather/sun.png"
            width={40}
            height={40}
            alt="Weather icon"
            />
            <h1 className="weather-card display-4 ml-3">
            28<span className="text-muted">°</span>
            </h1>
          </div>
          <div className="col-md-4">
            <p className="mb-0 fs-1">
            <i className="bx bx-droplet" /> 15%
            </p>
            <p className="mb-0 fs-1">
            <i className="bx bx-flag" /> 10km/h
            </p>
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
  {/* Modals */}
  <div
  className="modal fade bd-example-modal-lg"
  tabIndex={-1}
  role="dialog"
  id="postModal"
  aria-labelledby="postModal"
  aria-hidden="true"
  >
  <div className="modal-dialog modal-lg" role="document">
    <div className="modal-content">
    <div className="modal-body post-body">
      <div className="container-fluid">
      <div className="row">
        <div className="col-md-7 post-content">
        <img
          src="https://scontent.fevn1-2.fna.fbcdn.net/v/t1.0-9/56161887_588993861570433_2896723195090436096_n.jpg?_nc_cat=103&_nc_eui2=AeFI0UuTq3uUF_TLEbnZwM-qSRtgOu0HE2JPwW6b4hIki73-2OWYhc7L1MPsYl9cYy-w122CCak-Fxj0TE1a-kjsd-KXzh5QsuvxbW_mg9qqtg&_nc_ht=scontent.fevn1-2.fna&oh=ea44bffa38f368f98f0553c5cef8e455&oe=5D050B05"
          alt="post-image"
        />
        </div>
        <div className="col-md-5 pr-3">
        <div className="media text-muted pr-3 pt-3">
          <img
          src="assets/images/users/user-1.jpg"
          alt="user image"
          className="mr-3 post-modal-user-img"
          />
          <div className="media-body">
          <div className="d-flex justify-content-between align-items-center w-100 post-modal-top-user fs-9">
            <a href="#" className="text-gray-dark">
            John Michael
            </a>
            <div className="dropdown">
            <a
              href="#"
              className="postMoreSettings"
              role="button"
              data-toggle="dropdown"
              id="postOptions"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="bx bx-dots-horizontal-rounded" />
            </a>
            <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-left postDropdownMenu">
              <a
              href="#"
              className="dropdown-item"
              aria-describedby="savePost"
              >
              <div className="row">
                <div className="col-md-2">
                <i className="bx bx-bookmark-plus postOptionIcon" />
                </div>
                <div className="col-md-10">
                <span className="postOptionTitle">
                  Save post
                </span>
                <small
                  id="savePost"
                  className="form-text text-muted"
                >
                  Add this to your saved items
                </small>
                </div>
              </div>
              </a>
            </div>
            </div>
          </div>
          <span className="d-block fs-8">
            3 hours ago <i className="bx bx-globe ml-3" />
          </span>
          </div>
        </div>
        <div className="mt-3 post-modal-caption fs-9">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quis voluptatem veritatis harum, tenetur, quibusdam
          voluptatum, incidunt saepe minus maiores ea atque sequi illo
          veniam sint quaerat corporis totam et. Culpa?
          </p>
        </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  </div>
  </div>
  {/* Chat Popup */}
  {/*
  <div class="chat-popup shadow" id="hide-in-mobile">
  <div class="row chat-window col-xs-5 col-md-3">
    <div class="col-md-12">
      <div class="card">
        <div class="top-bar shadow-sm d-flex align-items-center">
          <div class="col-md-6 col-xs-6">
            <a href="profile.html" onClick={</>}>
              <img src="assets/images/users/user-2.jpg" class="mr-2 chatbox-user-img" alt="Chat user image">
              <span class="panel-title">Karen Minas</span>
            </a>
          </div>
          <div class="col-md-6 col-xs-6 d-flex align-items-center justify-content-between">
            <a href="#">
              <img src="assets/images/icons/messenger/video-call.png" class="chatbox-call" alt="Chatbox contact types">
            </a>
            <a href="#" data-toggle="modal" data-target="#callModal">
              <img src="assets/images/icons/messenger/call.png" class="chatbox-call" alt="Chatbox contact types">
            </a>
            <a href="javascript:void(0)"><i id="minimize-chat-window" class="bx bx-minus icon_minim"></i></a>
            <a href="javascript:void(0)" id="close-chatbox"><i class="bx bx-x"></i></a>
          </div>
        </div>
        <div id="messagebody" class="msg_container_base">
          <div class="row msg_container base_sent">
            <div class="col-md-10 col-xs-10">
              <div class="messages message-reply bg-primary shadow-sm">
                <p>Are you going to the party on Saturday?</p>
              </div>
            </div>
          </div>
          <div class="row msg_container base_receive">
            <div class="col-md-10 col-xs-10">
              <div class="messages message-receive shadow-sm">
                <p>I was thinking about it. Are you?</p>
              </div>
            </div>
          </div>
          <div class="row msg_container base_receive">
            <div class="col-xs-10 col-md-10">
              <div class="messages message-receive shadow-sm">
                <p>Really? Well, what time does it start?</p>
              </div>
            </div>
          </div>
          <div class="row msg_container base_sent">
            <div class="col-xs-10 col-md-10">
              <div class="messages message-reply bg-primary shadow-sm">
                <p>It starts at 8:00 pm, and I really think you should go.</p>
              </div>
            </div>
          </div>
          <div class="row msg_container base_receive">
            <div class="col-xs-10 col-md-10">
              <div class="messages message-receive shadow-sm">
                <p>Well, who else is going to be there?</p>
              </div>
            </div>
          </div>
          <div class="row msg_container base_sent">
            <div class="col-md-10 col-xs-10">
              <div class="messages message-reply bg-primary shadow-sm">
                <p>Everybody from school.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer chat-inputs">
          <div class="col-md-12 message-box">
            <input type="text" class="w-100 search-input type-message" placeholder="Type a message..." />
            <div class="chat-tools">
              <a href="#" class="chatbox-tools">
                <img src="assets/images/icons/theme/post-image.png" class="chatbox-tools-img" alt="Chatbox tool">
              </a>
              <a href="#" class="chatbox-tools">
                <img src="assets/images/icons/messenger/gif.png" class="chatbox-tools-img" alt="Chatbox tool">
              </a>
              <a href="#" class="chatbox-tools">
                <img src="assets/images/icons/messenger/smile.png" class="chatbox-tools-img" alt="Chatbox tool">
              </a>
              <a href="#" class="chatbox-tools">
                <img src="assets/images/icons/messenger/console.png" class="chatbox-tools-img" alt="Chatbox tool">
              </a>
              <a href="#" class="chatbox-tools">
                <img src="assets/images/icons/messenger/attach-file.png" class="chatbox-tools-img" alt="Chatbox tool">
              </a>
              <a href="#" class="chatbox-tools">
                <img src="assets/images/icons/messenger/photo-camera.png" class="chatbox-tools-img" alt="Chatbox tool">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
*/}
  {/* END Chat Popup */}
  {/* Call modal */}
  <div
  id="callModal"
  className="modal fade call-modal"
  tabIndex={-1}
  role="dialog"
  aria-labelledby="callModalLabel"
  aria-hidden="true"
  >
  <div className="modal-dialog call-modal-dialog" role="document">
    <div className="modal-content">
    <div className="modal-header align-items-center">
      <div className="call-status">
      <h1 id="callModalLabel" className="modal-title mr-3">
        Connected
      </h1>
      <span className="online-status bg-success" />
      </div>
      <div className="modal-options d-flex align-items-center">
      <button
        type="button"
        className="btn btn-quick-link"
        id="minimize-call-window"
      >
        <i className="bx bx-minus" />
      </button>
      </div>
    </div>
    <div className="modal-body">
      <div className="row h-100">
      <div className="col-md-12 d-flex align-items-center justify-content-center">
        <div className="call-user text-center">
        <div className="call-user-img-anim">
          <img
          src="assets/images/users/user-1.jpg"
          className="call-user-img"
          alt="Call user image"
          />
        </div>
        <p className="call-user-name">Name Surename</p>
        <p className="text-muted call-time">05:28</p>
        </div>
      </div>
      <div className="col-md-4 offset-md-4 d-flex align-items-center justify-content-between call-btn-list">
        <a
        href="#"
        className="btn call-btn"
        data-toggle="tooltip"
        data-placement="top"
        data-title="Disable microphone"
        >
        <i className="bx bxs-microphone" />
        </a>
        <a
        href="#"
        className="btn call-btn"
        data-toggle="tooltip"
        data-placement="top"
        data-title="Enable camera"
        >
        <i className="bx bxs-video-off" />
        </a>
        <a
        href="#"
        className="btn call-btn drop-call"
        data-toggle="tooltip"
        data-placement="top"
        data-title="End call"
        data-dismiss="modal"
        aria-label="Close"
        >
        <i className="bx bxs-phone" />
        </a>
        <a
        href="#"
        className="btn call-btn"
        data-toggle="tooltip"
        data-placement="top"
        data-title="Share Screen"
        >
        <i className="bx bx-laptop" />
        </a>
        <a
        href="#"
        className="btn call-btn"
        data-toggle="tooltip"
        data-placement="top"
        data-title="Dark mode"
        >
        <i className="bx bx-moon" />
        </a>
      </div>
      </div>
    </div>
    </div>
  </div>
  </div>
  {/* END call modal */}
  {/* Core */}
  {/* Optional */}

  </div>
  );
}

export default MainPage;