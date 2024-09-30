import logo from './logo.svg';
import './App.css';

function Groups() {
  return (
    <div className="App">
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
    href="https://cdn.jsdelivr.net/npm/boxicons@2.0.1/css/boxicons.min.css"
    rel="stylesheet"
  />
  {/* Styles */}
  <link href="assets/css/bootstrap/bootstrap.min.css" rel="stylesheet" />
  <link href="assets/css/style.css" rel="stylesheet" />
  <link href="assets/css/components.css" rel="stylesheet" />
  <link href="assets/css/media.css" rel="stylesheet" />
  <div className="container-fluid" id="wrapper">
    <div className="row newsfeed-size">
      <div className="col-md-12 newsfeed-right-side">
        <nav
          id="navbar-main"
          className="navbar navbar-expand-lg shadow-sm sticky-top"
        >
          <div className="w-100 justify-content-md-center">
            <ul className="nav navbar-nav enable-mobile px-2">
              <li className="nav-item">
                <button type="button" className="btn nav-link p-0">
                  <img
                    src="assets/images/icons/theme/post-image.png"
                    className="f-nav-icon"
                    alt="Quick make post"
                  />
                </button>
              </li>
              <li className="nav-item w-100 py-2">
                <form className="d-inline form-inline w-100 px-4">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control search-input"
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
              </li>
              <li className="nav-item">
                <a
                  href="messages.html"
                  className="nav-link nav-icon nav-links message-drop drop-w-tooltip"
                  data-placement="bottom"
                  data-title="Messages"
                >
                  <img
                    src="assets/images/icons/navbar/message.png"
                    className="message-dropdown f-nav-icon"
                    alt="navbar icon"
                  />
                </a>
              </li>
            </ul>
            <ul className="navbar-nav mr-5 flex-row" id="main_menu">
              <a className="navbar-brand nav-item mr-lg-5" href="index.html">
                <img
                  src="assets/images/logo-64x64.png"
                  width={40}
                  height={40}
                  className="mr-3"
                  alt="Logo"
                />
              </a>
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
              <li className="nav-item s-nav dropdown d-mobile">
                <a
                  href="#"
                  className="nav-link nav-icon nav-links drop-w-tooltip"
                  data-toggle="dropdown"
                  data-placement="bottom"
                  data-title="Create"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src="assets/images/icons/navbar/create.png"
                    alt="navbar icon"
                  />
                </a>
                <div className="dropdown-menu dropdown-menu-right nav-dropdown-menu">
                  <a
                    href="#"
                    className="dropdown-item"
                    aria-describedby="createGroup"
                  >
                    <div className="row">
                      <div className="col-md-2">
                        <i className="bx bx-group post-option-icon" />
                      </div>
                      <div className="col-md-10">
                        <span className="fs-9">Group</span>
                        <small
                          id="createGroup"
                          className="form-text text-muted"
                        >
                          Find people with shared interests
                        </small>
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="dropdown-item"
                    aria-describedby="createEvent"
                  >
                    <div className="row">
                      <div className="col-md-2">
                        <i className="bx bx-calendar post-option-icon" />
                      </div>
                      <div className="col-md-10">
                        <span className="fs-9">Event</span>
                        <small
                          id="createEvent"
                          className="form-text text-muted"
                        >
                          bring people together with a public or private event
                        </small>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
              <li className="nav-item s-nav dropdown message-drop-li">
                <a
                  href="#"
                  className="nav-link nav-links message-drop drop-w-tooltip"
                  data-toggle="dropdown"
                  data-placement="bottom"
                  data-title="Messages"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src="assets/images/icons/navbar/message.png"
                    className="message-dropdown"
                    alt="navbar icon"
                  />{" "}
                  <span className="badge badge-pill badge-primary">1</span>
                </a>
                <ul className="dropdown-menu notify-drop dropdown-menu-right nav-drop shadow-sm">
                  <div className="notify-drop-title">
                    <div className="row">
                      <div className="col-md-6 col-sm-6 col-xs-6 fs-8">
                        Messages | <a href="#">Requests</a>
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
                            src="assets/images/users/user-6.png"
                            alt="notification user image"
                          />
                        </div>
                      </div>
                      <div className="col-md-10 col-sm-10 col-xs-10">
                        <a href="#" className="notification-user">
                          Susan P. Jarvis
                        </a>
                        <a href="#" className="notify-right-icon">
                          <i className="bx bx-radio-circle-marked" />
                        </a>
                        <p className="time">
                          <i className="bx bx-check" /> This party is going to
                          have a DJ, food, and drinks.
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
                          Ruth D. Greene
                        </a>
                        <a href="#" className="notify-right-icon">
                          <i className="bx bx-radio-circle-marked" />
                        </a>
                        <p className="time">Great, I’ll see you tomorrow!.</p>
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
                          Kimberly R. Hatfield
                        </a>
                        <a href="#" className="notify-right-icon">
                          <i className="bx bx-radio-circle-marked" />
                        </a>
                        <p className="time">yeah, I will be there.</p>
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
                        <a href="#" className="notification-user">
                          Joe S. Feeney
                        </a>
                        <a href="#" className="notify-right-icon">
                          <i className="bx bx-radio-circle-marked" />
                        </a>
                        <p className="time">
                          I would really like to bring my friend Jake, if...
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="col-md-2 col-sm-2 col-xs-2">
                        <div className="notify-img">
                          <img
                            src="assets/images/users/user-9.png"
                            alt="notification user image"
                          />
                        </div>
                      </div>
                      <div className="col-md-10 col-sm-10 col-xs-10">
                        <a href="#" className="notification-user">
                          William S. Willmon
                        </a>
                        <a href="#" className="notify-right-icon">
                          <i className="bx bx-radio-circle-marked" />
                        </a>
                        <p className="time">Sure, what can I help you with?</p>
                      </div>
                    </li>
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
                          Sean S. Smith
                        </a>
                        <a href="#" className="notify-right-icon">
                          <i className="bx bx-radio-circle-marked" />
                        </a>
                        <p className="time">Which of those two is best?</p>
                      </div>
                    </li>
                  </div>
                  <div className="notify-drop-footer text-center">
                    <a href="#">See More</a>
                  </div>
                </ul>
              </li>
              <li className="nav-item s-nav dropdown notification">
                <a
                  href="#"
                  className="nav-link nav-links rm-drop-mobile drop-w-tooltip"
                  data-toggle="dropdown"
                  data-placement="bottom"
                  data-title="Notifications"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src="assets/images/icons/navbar/notification.png"
                    className="notification-bell"
                    alt="navbar icon"
                  />{" "}
                  <span className="badge badge-pill badge-primary">3</span>
                </a>
                <ul className="dropdown-menu notify-drop dropdown-menu-right nav-drop shadow-sm">
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
              <li className="nav-item s-nav dropdown d-mobile">
                <a
                  href="#"
                  className="nav-link nav-links nav-icon drop-w-tooltip"
                  data-toggle="dropdown"
                  data-placement="bottom"
                  data-title="Pages"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src="assets/images/icons/navbar/flag.png"
                    alt="navbar icon"
                  />
                </a>
                <div className="dropdown-menu dropdown-menu-right nav-drop">
                  <a className="dropdown-item" href="newsfeed-2.html">
                    Newsfeed 2
                  </a>
                  <a className="dropdown-item" href="sign-in.html">
                    Sign in
                  </a>
                  <a className="dropdown-item" href="sign-up.html">
                    Sign up
                  </a>
                </div>
              </li>
              <li className="nav-item s-nav">
                <a href="profile.html" className="nav-link nav-links">
                  <div className="menu-user-image">
                    <img
                      src="assets/images/users/user-4.jpg"
                      className="menu-user-img ml-1"
                      alt="Menu Image"
                    />
                  </div>
                </a>
              </li>
              <li className="nav-item s-nav nav-icon dropdown">
                <a
                  href="settings.html"
                  data-toggle="dropdown"
                  data-placement="bottom"
                  data-title="Settings"
                  className="nav-link settings-link rm-drop-mobile drop-w-tooltip"
                  id="settings-dropdown"
                >
                  <img
                    src="assets/images/icons/navbar/settings.png"
                    className="nav-settings"
                    alt="navbar icon"
                  />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right settings-dropdown shadow-sm"
                  aria-labelledby="settings-dropdown"
                >
                  <a className="dropdown-item" href="#">
                    <img
                      src="assets/images/icons/navbar/help.png"
                      alt="Navbar icon"
                    />{" "}
                    Help Center
                  </a>
                  <a
                    className="dropdown-item d-flex align-items-center dark-mode"
                    onclick="event.stopPropagation();"
                    href="#"
                  >
                    <img
                      src="assets/images/icons/navbar/moon.png"
                      alt="Navbar icon"
                    />{" "}
                    Dark Mode
                    <button
                      type="button"
                      className="btn btn-lg btn-toggle ml-auto"
                      data-toggle="button"
                      aria-pressed="false"
                      autoComplete="off"
                    >
                      <div className="handle" />
                    </button>
                  </a>
                  <a className="dropdown-item" href="#">
                    <img
                      src="assets/images/icons/navbar/gear-1.png"
                      alt="Navbar icon"
                    />{" "}
                    Settings
                  </a>
                  <a className="dropdown-item logout-btn" href="#">
                    <img
                      src="assets/images/icons/navbar/logout.png"
                      alt="Navbar icon"
                    />{" "}
                    Log Out
                  </a>
                </div>
              </li>
              <button type="button" className="btn nav-link" id="menu-toggle">
                <img
                  src="assets/images/icons/theme/navs.png"
                  alt="Navbar navs"
                />
              </button>
            </ul>
          </div>
        </nav>
        <div className="row newsfeed-right-side-content mt-3">
          <div
            className="col-md-2 newsfeed-left-side sticky-top shadow-sm"
            id="sidebar-wrapper"
          >
            <div className="card newsfeed-user-card h-100">
              <ul className="list-group list-group-flush newsfeed-left-sidebar">
                <li className="list-group-item">
                  <h6>Home</h6>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <a href="index.html" className="sidebar-item">
                    <img
                      src="assets/images/icons/left-sidebar/newsfeed.png"
                      alt="newsfeed"
                    />{" "}
                    News Feed
                  </a>
                  <a href="#" className="newsfeedListicon">
                    <i className="bx bx-dots-horizontal-rounded" />
                  </a>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <a href="messages.html" className="sidebar-item">
                    <img
                      src="assets/images/icons/left-sidebar/message.png"
                      alt="message"
                    />{" "}
                    Messages
                  </a>
                  <span className="badge badge-primary badge-pill">2</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center sd-active">
                  <a href="groups.html" className="sidebar-item">
                    <img
                      src="assets/images/icons/left-sidebar/group.png"
                      alt="group"
                    />{" "}
                    Groups
                  </a>
                  <span className="badge badge-primary badge-pill">17</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <a href="events.html" className="sidebar-item">
                    <img
                      src="assets/images/icons/left-sidebar/event.png"
                      alt="event"
                    />{" "}
                    Events
                  </a>
                  <span className="badge badge-primary badge-pill">3</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <a href="saved.html" className="sidebar-item">
                    <img
                      src="assets/images/icons/left-sidebar/saved.png"
                      alt="saved"
                    />{" "}
                    Saved
                  </a>
                  <span className="badge badge-primary badge-pill">8</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <a href="find-friends.html" className="sidebar-item">
                    <img
                      src="assets/images/icons/left-sidebar/find-friends.png"
                      alt="find-friends"
                    />{" "}
                    Find Friends
                  </a>
                  <span className="badge badge-primary badge-pill">
                    <i className="bx bx-chevron-right" />
                  </span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <a href="matches.html" className="sidebar-item">
                    <img
                      src="assets/images/icons/left-sidebar/matches.png"
                      alt="matches"
                    />{" "}
                    Matches
                  </a>
                  <span className="badge badge-primary badge-pill">
                    <i className="bx bx-chevron-right" />
                  </span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <a href="teams.html" className="sidebar-item">
                    <img
                      src="assets/images/icons/left-sidebar/team.png"
                      alt="find-friends"
                    />{" "}
                    Argon For Teams
                  </a>
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
          <div className="col-md-10 second-section" id="page-content-wrapper">
            <div className="mb-3">
              <div className="btn-group d-flex top-links-fg">
                <a
                  href="index.html"
                  className="btn btn-quick-links mr-3 ql-active"
                >
                  <img
                    src="assets/images/icons/theme/group-white.png"
                    className="mr-2"
                    alt="quick links icon"
                  />
                  <span className="fs-8">Your Groups</span>
                </a>
                <a href="messages.html" className="btn btn-quick-links mr-3">
                  <img
                    src="assets/images/icons/theme/rocket.png"
                    className="mr-2"
                    alt="quick links icon"
                  />
                  <span className="fs-8">Discover</span>
                </a>
                <a href="watch.html" className="btn btn-quick-links">
                  <img
                    src="assets/images/icons/theme/create.png"
                    className="mr-2"
                    alt="quick links icon"
                  />
                  <span className="fs-8">Create</span>
                </a>
              </div>
            </div>
            <div className="jumbotron groups-banner">
              <div className="container group-banner-content">
                <h1 className="jumbotron-heading mt-auto">
                  <img
                    src="assets/images/icons/theme/group-white.png"
                    className="mr-3"
                    alt="Welcome to groups"
                  />{" "}
                  Groups
                </h1>
                <p>Get latest active from your groups.</p>
              </div>
            </div>
            {/* Groups */}
            <div className="groups bg-white py-3 px-4 shadow-sm">
              <div className="card-head d-flex justify-content-between">
                <h5 className="mb-4">Suggested Groups</h5>
                <a href="#" className="btn btn-link">
                  See All
                </a>
              </div>
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="card group-card shadow-sm">
                    <img
                      src="assets/images/groups/group-1.png"
                      className="card-img-top group-card-image"
                      alt="Group image"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Argon Social Network{" "}
                        <img
                          src="assets/images/theme/verify.png"
                          width="15px"
                          className="verify"
                          alt="Group verified"
                        />
                      </h5>
                      <p className="card-text">10k Members 20+ post a week</p>
                      <a
                        href="#"
                        className="btn btn-quick-link join-group-btn border w-100"
                      >
                        Join
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="card group-card shadow-sm">
                    <img
                      src="assets/images/groups/group-2.jpg"
                      className="card-img-top group-card-image"
                      alt="Group image"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Tourism</h5>
                      <p className="card-text">2.5k Members 35+ post a week</p>
                      <a
                        href="#"
                        className="btn btn-quick-link join-group-btn border w-100"
                      >
                        Join
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="card group-card shadow-sm">
                    <img
                      src="assets/images/groups/group-3.jpg"
                      className="card-img-top group-card-image"
                      alt="Group image"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Reading Books</h5>
                      <p className="card-text">1.3k Members 10+ post a day</p>
                      <a
                        href="#"
                        className="btn btn-quick-link join-group-btn border w-100"
                      >
                        Join
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="card group-card shadow-sm">
                    <img
                      src="assets/images/groups/group-4.jpg"
                      className="card-img-top group-card-image"
                      alt="Group image"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Capture The Best</h5>
                      <p className="card-text">2.8k Members 8+ post a day</p>
                      <a
                        href="#"
                        className="btn btn-quick-link join-group-btn border w-100"
                      >
                        Join
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-5" />
            <div className="groups py-3 px-4 mt-3">
              <div className="card-head d-flex justify-content-between">
                <h5 className="mb-4">Friends Groups</h5>
                <a href="#" className="btn btn-link">
                  See All
                </a>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <div className="card group-card bg-transparent group-card-inline mb-3">
                    <div className="row no-gutters  d-flex align-items-center">
                      <div className="col-md-4">
                        <img
                          src="assets/images/groups/group-5.jpg"
                          className="card-img group-card-inline-img"
                          alt="Group image"
                        />
                      </div>
                      <div className="col-md-6">
                        <div className="card-body">
                          <h5 className="card-title">Source Code Viewer</h5>
                          <p className="card-text">
                            8.6k Members 29+ post a day
                          </p>
                          <div className="like-user-img">
                            <ul className="list-unstyled liked-users">
                              <li>
                                <a href="#">
                                  <img
                                    src="assets/images/users/user-7.png"
                                    alt="Like user image"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <img
                                    src="assets/images/users/user-6.png"
                                    alt="Like user image"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <img
                                    src="assets/images/users/user-5.png"
                                    alt="Like user image"
                                  />
                                </a>
                              </li>
                              <li>
                                <span className="liked-info fs-8">
                                  9 friends are members
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <a href="#" className="btn btn-quick-link bg-white">
                          Join
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="card group-card bg-transparent group-card-inline mb-3">
                    <div className="row no-gutters  d-flex align-items-center">
                      <div className="col-md-4">
                        <img
                          src="assets/images/groups/group-6.jpg"
                          className="card-img group-card-inline-img"
                          alt="Group image"
                        />
                      </div>
                      <div className="col-md-6">
                        <div className="card-body">
                          <h5 className="card-title">T-Shirt</h5>
                          <p className="card-text">
                            2.4k Members 5+ post a day
                          </p>
                          <div className="like-user-img">
                            <ul className="list-unstyled liked-users">
                              <li>
                                <a href="#">
                                  <img
                                    src="assets/images/users/user-7.png"
                                    alt="Like user image"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <img
                                    src="assets/images/users/user-6.png"
                                    alt="Like user image"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <img
                                    src="assets/images/users/user-5.png"
                                    alt="Like user image"
                                  />
                                </a>
                              </li>
                              <li>
                                <span className="liked-info fs-8">
                                  4 friends are members
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <a href="#" className="btn btn-quick-link bg-white">
                          Join
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-5" />
            <div className="groups py-3 px-4 mt-3 mb-4">
              <div className="card-head d-flex justify-content-between">
                <h5 className="mb-4">Find By Categories</h5>
                <button
                  className="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target=".multi-collapse"
                  aria-expanded="false"
                  aria-controls="group-category-1 group-category-2"
                >
                  Open
                </button>
              </div>
              <div className="row">
                <div className="col-md-2 col-sm-4">
                  <div
                    className="collapse multi-collapse group-collapse"
                    id="group-category-1"
                  >
                    <div className="card group-card shadow-sm text-white">
                      <a href="#" className="group-category">
                        <img
                          src="assets/images/groups/category-1.png"
                          className="card-img group-category-img"
                          alt="Category type"
                        />
                        <div className="card-img-overlay group-cat-overlay d-flex align-items-end">
                          <h5 className="card-title">Arts &amp; Culture</h5>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-sm-4">
                  <div
                    className="collapse multi-collapse group-collapse"
                    id="group-category-1"
                  >
                    <div className="card group-card shadow-sm text-white">
                      <a href="#" className="group-category">
                        <img
                          src="assets/images/groups/category-2.jpg"
                          className="card-img group-category-img"
                          alt="Category type"
                        />
                        <div className="card-img-overlay group-cat-overlay d-flex align-items-end">
                          <h5 className="card-title">School &amp; Education</h5>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-sm-4">
                  <div
                    className="collapse multi-collapse group-collapse"
                    id="group-category-1"
                  >
                    <div className="card group-card shadow-sm text-white">
                      <a href="#" className="group-category">
                        <img
                          src="assets/images/groups/category-3.jpg"
                          className="card-img group-category-img"
                          alt="Category type"
                        />
                        <div className="card-img-overlay group-cat-overlay d-flex align-items-end">
                          <h5 className="card-title">Music &amp; TV</h5>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-sm-4">
                  <div
                    className="collapse multi-collapse group-collapse"
                    id="group-category-1"
                  >
                    <div className="card group-card shadow-sm text-white">
                      <a href="#" className="group-category">
                        <img
                          src="assets/images/groups/category-4.jpg"
                          className="card-img group-category-img"
                          alt="Category type"
                        />
                        <div className="card-img-overlay group-cat-overlay d-flex align-items-end">
                          <h5 className="card-title">Sport &amp; Health</h5>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-sm-4">
                  <div
                    className="collapse multi-collapse group-collapse"
                    id="group-category-1"
                  >
                    <div className="card group-card shadow-sm text-white">
                      <a href="#" className="group-category">
                        <img
                          src="assets/images/groups/category-5.jpg"
                          className="card-img group-category-img"
                          alt="Category type"
                        />
                        <div className="card-img-overlay group-cat-overlay d-flex align-items-end">
                          <h5 className="card-title">Dating</h5>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-sm-4">
                  <div
                    className="collapse multi-collapse group-collapse"
                    id="group-category-1"
                  >
                    <div className="card group-card shadow-sm text-white">
                      <a href="#" className="group-category">
                        <img
                          src="assets/images/groups/category-6.jpg"
                          className="card-img group-category-img"
                          alt="Category type"
                        />
                        <div className="card-img-overlay group-cat-overlay d-flex align-items-end">
                          <h5 className="card-title">Business</h5>
                        </div>
                      </a>
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
  {/* Core */}
  {/* Optional */}
</>

    </div>
  );
}

export default Groups;