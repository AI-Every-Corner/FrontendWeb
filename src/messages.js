import logo from './logo.svg';
import './App.css';

function Messages() {
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
    href="https://cdn.jsdelivr.net/npm/boxicons@1.9.2/css/boxicons.min.css"
    rel="stylesheet"
  />
  {/* Styles */}
  <link href="assets/css/bootstrap/bootstrap.min.css" rel="stylesheet" />
  <link href="assets/css/style.css" rel="stylesheet" />
  <link href="assets/css/components.css" rel="stylesheet" />
  <link href="assets/css/messenger.css" rel="stylesheet" />
  <link href="assets/css/media.css" rel="stylesheet" />
  <div className="container-fluid newsfeed d-flex" id="wrapper">
    <div className="row newsfeed-size">
      <div className="col-md-12 message-right-side">
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
            </ul>
          </div>
        </nav>
        <div className="row message-right-side-content">
          <div className="col-md-12">
            <div id="message-frame">
              <div className="message-sidepanel">
                <div className="message-profile">
                  <div className="wrap">
                    <img
                      src="assets/images/users/user-4.jpg"
                      className="online conv-img"
                      alt="Conversation user"
                    />
                    <p>Arthur Minasyan</p>
                    <i className="bx bx-chevron-down expand-button" />
                    <div id="status-options">
                      <ul id="set-online-status">
                        <li
                          id="status-online"
                          className="messenger-user-active"
                        >
                          <span className="status-circle" />
                          <p>Online</p>
                        </li>
                        <li id="status-away">
                          <span className="status-circle" />
                          <p>Away</p>
                        </li>
                        <li id="status-busy">
                          <span className="status-circle" />
                          <p>Busy</p>
                        </li>
                        <li id="status-offline">
                          <span className="status-circle" />
                          <p>Offline</p>
                        </li>
                      </ul>
                    </div>
                    <div id="expanded">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <a
                            href="javascript:void(0)"
                            className="text-dark fs-9"
                          >
                            <i className="bx bx-search text-primary mr-3" />{" "}
                            Search in Conversation
                          </a>
                        </li>
                        <li className="list-group-item">
                          <a
                            href="javascript:void(0)"
                            className="text-dark fs-9"
                          >
                            <i className="bx bx-pencil text-primary mr-3" />{" "}
                            Edit Nicknames
                          </a>
                        </li>
                        <li className="list-group-item">
                          <a
                            href="javascript:void(0)"
                            className="text-dark fs-9"
                          >
                            <i className="bx bxs-color-fill text-primary mr-3" />{" "}
                            Change Color
                          </a>
                        </li>
                        <li className="list-group-item">
                          <a
                            href="javascript:void(0)"
                            className="text-dark fs-9"
                          >
                            <i className="bx bx-bell text-primary mr-3" />{" "}
                            Notifications
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="message-search position-relative d-flex">
                  <label htmlFor="">
                    <i className="bx bx-search" />
                  </label>
                  <input
                    type="text"
                    className="form-control search-input"
                    placeholder="Search for conversations..."
                  />
                  <button
                    type="button"
                    className="btn btn-create-conversation"
                    data-toggle="modal"
                    data-target="#newConversation"
                  >
                    <i className="bx bx-pencil" />
                  </button>
                </div>
                <div className="message-contacts">
                  <ul className="conversations">
                    <li className="contact">
                      <div className="wrap">
                        <span className="contact-status online" />
                        <img
                          src="assets/images/users/user-5.png"
                          alt="Conversation user"
                        />
                        <span className="unread-messages">3</span>
                        <div className="meta">
                          <p className="name">Ruth D. Greene</p>
                          <p className="preview">
                            Great, I’ll see you tomorrow!.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="contact messenger-user-active">
                      <div className="wrap">
                        <span className="contact-status busy" />
                        <img
                          src="assets/images/users/user-6.png"
                          alt="Conversation user"
                        />
                        <div className="meta">
                          <p className="name">Susan P. Jarvis</p>
                          <p className="preview">
                            This party is going to have a DJ, food, and drinks.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="contact">
                      <div className="wrap">
                        <span className="contact-status away" />
                        <img
                          src="assets/images/users/user-7.png"
                          alt="Conversation user"
                        />
                        <div className="meta">
                          <p className="name">Kimberly R. Hatfield</p>
                          <p className="preview">
                            <span>You:</span> Yeah, I will be there.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="contact">
                      <div className="wrap">
                        <span className="contact-status online" />
                        <img
                          src="assets/images/users/user-8.png"
                          alt="Conversation user"
                        />
                        <span className="unread-messages">1</span>
                        <div className="meta">
                          <p className="name">Joe S. Feeney</p>
                          <p className="preview">
                            I would really like to bring my friend Jake, if that
                            would be OK.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="contact">
                      <div className="wrap">
                        <span className="contact-status busy" />
                        <img
                          src="assets/images/users/user-9.png"
                          alt="Conversation user"
                        />
                        <div className="meta">
                          <p className="name">William S. Willmon</p>
                          <p className="preview">
                            <span>You:</span> Sure, what can I help you with?
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="contact">
                      <div className="wrap">
                        <span className="contact-status" />
                        <img
                          src="assets/images/users/user-10.png"
                          alt="Conversation user"
                        />
                        <span className="unread-messages">4</span>
                        <div className="meta">
                          <p className="name">Sean S. Smith</p>
                          <p className="preview">Which of those two is best?</p>
                        </div>
                      </div>
                    </li>
                    <li className="contact">
                      <div className="wrap">
                        <span className="contact-status" />
                        <img
                          src="assets/images/users/user-11.png"
                          alt="Conversation user"
                        />
                        <span className="unread-messages">1</span>
                        <div className="meta">
                          <p className="name">Michelle R. Alvarado</p>
                          <p className="preview">
                            You'll need to make an appointment.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="contact">
                      <div className="wrap">
                        <span className="contact-status busy" />
                        <img
                          src="assets/images/users/user-12.png"
                          alt="Conversation user"
                        />
                        <span className="unread-messages">2</span>
                        <div className="meta">
                          <p className="name">Irwin M. Speller</p>
                          <p className="preview">Sure. Here you go.</p>
                        </div>
                      </div>
                    </li>
                    <li className="contact">
                      <div className="wrap">
                        <span className="contact-status" />
                        <img
                          src="assets/images/users/user-5.png"
                          alt="Conversation user"
                        />
                        <span className="unread-messages">1</span>
                        <div className="meta">
                          <p className="name">Karen E. Nagata</p>
                          <p className="preview">
                            Would you like to exchange it?
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="contact">
                      <div className="wrap">
                        <span className="contact-status" />
                        <img
                          src="assets/images/users/user-8.png"
                          alt="Conversation user"
                        />
                        <div className="meta">
                          <p className="name">Jonathan Sidwell</p>
                          <p className="preview">
                            <span>You:</span> Certainly. This will take only a
                            few seconds.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="content">
                <div className="row">
                  <div className="col-md-12 messenger-top-section">
                    <div className="contact-profile d-flex align-items-center justify-content-between">
                      <div className="messenger-top-luser df-aic">
                        <img
                          src="assets/images/users/user-6.png"
                          className="messenger-user"
                          alt="Convarsation user image"
                        />
                        <a href="#" className="message-profile-name">
                          Susan P. Jarvis
                        </a>
                      </div>
                      <div className="social-media messenger-top-ricon df-aic">
                        <img
                          src="assets/images/icons/messenger/phone.png"
                          data-toggle="modal"
                          data-target="#callModal"
                          className="msg-top-more-info"
                          alt="Messenger icons"
                        />
                        <img
                          src="assets/images/icons/messenger/videocam.png"
                          className="msg-top-more-info"
                          alt="Messenger icons"
                        />
                        <img
                          src="assets/images/icons/messenger/info.png"
                          className="msg-top-more-info"
                          alt="Messenger icons"
                        />
                        <span className="dropdown">
                          <a
                            href="#"
                            role="button"
                            id="message-options"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="bx bx-dots-vertical-rounded" />
                          </a>
                          <div
                            className="dropdown-menu dropdown-menu-right fs-9"
                            aria-labelledby="message-options"
                          >
                            <a href="#" className="dropdown-item">
                              Mute
                            </a>
                            <div className="dropdown-divider" />
                            <a href="#" className="dropdown-item">
                              Delete
                            </a>
                            <div className="dropdown-divider" />
                            <a href="#" className="dropdown-item">
                              Mark as Unread
                            </a>
                            <a href="#" className="dropdown-item">
                              Something's wrong
                            </a>
                            <a href="#" className="dropdown-item">
                              Ignore Messages
                            </a>
                            <a href="#" className="dropdown-item">
                              Block Messages
                            </a>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12" style={{ maxHeight: 532 }}>
                    <div className="messages">
                      <ul className="messages-content">
                        <li className="message-receive">
                          <img
                            src="assets/images/users/user-6.png"
                            alt="Conversation user image"
                          />
                          <p>Are you going to the party on Saturday?</p>
                        </li>
                        <li className="message-reply">
                          <p>I was thinking about it. Are you?</p>
                        </li>
                        <li className="message-receive">
                          <img
                            src="assets/images/users/user-6.png"
                            alt="Conversation user image"
                          />
                          <p>Yeah, I heard it's going to be a lot of fun.</p>
                        </li>
                        <li className="message-reply">
                          <p>Really? Well, what time does it start?</p>
                        </li>
                        <li className="message-receive">
                          <img
                            src="assets/images/users/user-6.png"
                            alt="Conversation user image"
                          />
                          <p>
                            It starts at 8:00 pm, and I really think you should
                            go.
                          </p>
                        </li>
                        <li className="message-reply">
                          <p>Well, who else is going to be there?</p>
                        </li>
                        <li className="message-receive">
                          <img
                            src="assets/images/users/user-6.png"
                            alt="Conversation user image"
                          />
                          <p>Everybody from school.</p>
                        </li>
                        <li className="message-reply">
                          <p>How do you know it's going to be so fun?</p>
                        </li>
                        <li className="message-receive">
                          <img
                            src="assets/images/users/user-6.png"
                            alt="Conversation user image"
                          />
                          <p>
                            This party is going to have a DJ, food, and drinks.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="message-input">
                      <div className="wrap">
                        <form className="d-inline form-inline">
                          <div className="d-flex align-items-center justify-content-between messenger-icons">
                            <button type="button" className="btn search-button">
                              <img
                                src="assets/images/icons/messenger/m-camera.png"
                                alt="Messenger icons"
                              />
                            </button>
                            <button type="button" className="btn search-button">
                              <img
                                src="assets/images/icons/messenger/m-photo.png"
                                alt="Messenger icons"
                              />
                            </button>
                            <button type="button" className="btn search-button">
                              <img
                                src="assets/images/icons/messenger/m-gamepad.png"
                                alt="Messenger icons"
                              />
                            </button>
                            <button type="button" className="btn search-button">
                              <img
                                src="assets/images/icons/messenger/m-microphone.png"
                                alt="Messenger icons"
                              />
                            </button>
                            <div className="input-group messenger-input">
                              <input
                                type="text"
                                className="form-control search-input"
                                placeholder="Type a message..."
                                aria-label="Type a message..."
                                aria-describedby="button-addon2"
                              />
                              <div className="input-group-append">
                                <button
                                  className="btn search-button"
                                  type="button"
                                  id="button-addon2 send-message"
                                >
                                  <img
                                    src="assets/images/icons/messenger/m-smile.png"
                                    alt="Messenger icons"
                                  />
                                </button>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn search-button"
                              id="send-message"
                            >
                              <img
                                src="assets/images/icons/messenger/m-send.png"
                                alt="Messenger icons"
                              />
                            </button>
                          </div>
                        </form>
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
  {/* New Conversation Modal */}
  <div
    className="modal fade"
    id="newConversation"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="newConversationLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header new-msg-header">
          <h5 className="modal-title" id="newConversationLabel">
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
              <label htmlFor="recipient-name" className="col-form-label">
                Recipient:
              </label>
              <input
                type="text"
                className="form-control search-input"
                id="recipient-name"
                placeholder="Add recipient..."
              />
            </div>
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
</>

    </div>
  );
}

export default Messages;