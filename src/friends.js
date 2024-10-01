import logo from './logo.svg';


function Friends() {
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
  <link href="assets/css/profile.css" rel="stylesheet" />
  <link href="assets/css/media.css" rel="stylesheet" />
  <link href="assets/css/update.css" rel="stylesheet" />
  <div className="container-fluid newsfeed d-flex" id="wrapper">
    <div className="row newsfeed-size">
      <div className="col-md-12 p-0">
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
                <ul className="dropdown-menu notify-drop dropdown-menu-right nav-drop">
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
                        <p className="time">Great, I�耱l see you tomorrow!.</p>
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
                <ul className="dropdown-menu notify-drop dropdown-menu-right nav-drop">
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
                        src="assets/images/users/user-4.jpg"
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
                    <p className="profile-fullname mt-3">Arthur Minasyan</p>
                    <p className="profile-username mb-3 text-muted">
                      @arthur_minasyan
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
                        <a href="about.html" className="dropdown-item">
                          About
                        </a>
                        <a href="followers.html" className="dropdown-item">
                          Followers
                        </a>
                        <a href="following.html" className="dropdown-item">
                          Following
                        </a>
                        <a href="photos.html" className="dropdown-item">
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
                  {/* Friends section */}
                  <div className="row px-2">
                    <div className="col-md-9 profile-center">
                      <ul className="list-inline profile-links d-flex justify-content-between shadow-sm rounded">
                        <li className="list-inline-item">
                          <a href="profile.html">Timeline</a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">About</a>
                        </li>
                        <li className="list-inline-item profile-active">
                          <a href="friends.html">Friends</a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">Photos</a>
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
                        <a href="#" className="list-group-item">
                          Recently Added
                        </a>
                        <a href="#" className="list-group-item">
                          Current City
                        </a>
                        <a href="#" className="list-group-item">
                          Work
                        </a>
                        <a href="#" className="list-group-item">
                          Family
                        </a>
                        <form className="list-group-item d-flex w-100 align-items-center p-0 form-inline dropdown search-form">
                          <div
                            className="input-group w-95"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            id="searchDropdown"
                          >
                            <input
                              type="text"
                              className="form-control search-input"
                              placeholder="Search for people, companies, events and more..."
                              aria-label="Search"
                              aria-describedby="search-addon"
                            />
                            <div className="input-group-append">
                              <button
                                className="btn search-button"
                                type="button"
                              >
                                <i className="bx bx-search" />
                              </button>
                            </div>
                          </div>
                          <ul
                            className="dropdown-menu notify-drop nav-drop shadow-sm"
                            aria-labelledby="searchDropdown"
                          >
                            <div className="notify-drop-title">
                              <div className="row">
                                <div className="col-md-6 col-sm-6 col-xs-6 fs-8">
                                  Search Results{" "}
                                  <span className="badge badge-pill badge-primary ml-2">
                                    29
                                  </span>
                                </div>
                              </div>
                            </div>
                            {/* end notify title */}
                            {/* notify content */}
                            <div className="drop-content">
                              <h6 className="dropdown-header">Peoples</h6>
                              <li className="dropdown-item">
                                <div className="col-md-2 col-sm-2 col-xs-2">
                                  <div className="notify-img">
                                    <img
                                      src="assets/images/users/user-6.png"
                                      alt="Search result"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-10 col-sm-10 col-xs-10">
                                  <a href="#" className="notification-user">
                                    Susan P. Jarvis
                                  </a>
                                  <a
                                    href="#"
                                    className="btn btn-quick-link join-group-btn border text-right float-right"
                                  >
                                    Add Friend
                                  </a>
                                  <p className="time">6 Mutual friends</p>
                                </div>
                              </li>
                              <li className="dropdown-item">
                                <div className="col-md-2 col-sm-2 col-xs-2">
                                  <div className="notify-img">
                                    <img
                                      src="assets/images/users/user-5.png"
                                      alt="Search result"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-10 col-sm-10 col-xs-10">
                                  <a href="#" className="notification-user">
                                    Ruth D. Greene
                                  </a>
                                  <a
                                    href="#"
                                    className="btn btn-quick-link join-group-btn border text-right float-right"
                                  >
                                    Add Friend
                                  </a>
                                </div>
                              </li>
                              <h6 className="dropdown-header">Groups</h6>
                              <li className="dropdown-item">
                                <div className="col-md-2 col-sm-2 col-xs-2">
                                  <div className="notify-img">
                                    <img
                                      src="assets/images/groups/group-2.jpg"
                                      alt="Search result"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-10 col-sm-10 col-xs-10">
                                  <a href="#" className="notification-user">
                                    Tourism
                                  </a>
                                  <a
                                    href="#"
                                    className="btn btn-quick-link join-group-btn border text-right float-right"
                                  >
                                    Join
                                  </a>
                                  <p className="time">
                                    2.5k Members 35+ post a week
                                  </p>
                                </div>
                              </li>
                              <li className="dropdown-item">
                                <div className="col-md-2 col-sm-2 col-xs-2">
                                  <div className="notify-img">
                                    <img
                                      src="assets/images/groups/group-1.png"
                                      alt="Search result"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-10 col-sm-10 col-xs-10">
                                  <a href="#" className="notification-user">
                                    Argon Social Network{" "}
                                    <img
                                      src="assets/images/theme/verify.png"
                                      width="10px"
                                      className="verify"
                                      alt="Group verified"
                                    />
                                  </a>
                                  <a
                                    href="#"
                                    className="btn btn-quick-link join-group-btn border text-right float-right"
                                  >
                                    Join
                                  </a>
                                  <p className="time">
                                    10k Members 20+ post a week
                                  </p>
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
                          <a href="#" className="btn btn-link">
                            See All
                          </a>
                        </div>
                        <div className="row">
                          <div className="col-md-4 col-sm-6">
                            <div className="card group-card shadow-sm">
                              <img
                                src="assets/images/groups/group-1.png"
                                className="card-img-top group-card-image"
                                alt="Group image"
                              />
                              <div className="card-body">
                                <h5 className="card-title">
                                  Ruth D. Greene{" "}
                                  <img
                                    src="assets/images/theme/verify.png"
                                    width="10px"
                                    className="verify"
                                    alt="Group verified"
                                  />
                                </h5>
                                <p className="card-text">
                                  10k Members 20+ post a week
                                </p>
                                <div className="btn-group w-100" role="group">
                                  <a
                                    href="#"
                                    className="btn btn-quick-link join-group-btn border w-100"
                                  >
                                    Message
                                  </a>
                                  <div className="btn-group" role="group">
                                    <button
                                      id="friendsMore"
                                      type="button"
                                      className="btn btn-quick-link join-group-btn border btn-group-drop"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    >
                                      <i className="bx bx-dots-horizontal-rounded" />
                                    </button>
                                    <div
                                      className="dropdown-menu"
                                      aria-labelledby="friendsMore"
                                    >
                                      <a className="dropdown-item" href="#">
                                        Dropdown link
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        Dropdown link
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <div className="card group-card shadow-sm">
                              <img
                                src="assets/images/groups/group-2.jpg"
                                className="card-img-top group-card-image"
                                alt="Group image"
                              />
                              <div className="card-body">
                                <h5 className="card-title">Tourism</h5>
                                <p className="card-text">
                                  2.5k Members 35+ post a week
                                </p>
                                <a
                                  href="#"
                                  className="btn btn-quick-link join-group-btn border w-100"
                                >
                                  Join
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <div className="card group-card shadow-sm">
                              <img
                                src="assets/images/groups/group-3.jpg"
                                className="card-img-top group-card-image"
                                alt="Group image"
                              />
                              <div className="card-body">
                                <h5 className="card-title">Reading Books</h5>
                                <p className="card-text">
                                  1.3k Members 10+ post a day
                                </p>
                                <a
                                  href="#"
                                  className="btn btn-quick-link join-group-btn border w-100"
                                >
                                  Join
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <div className="card group-card shadow-sm">
                              <img
                                src="assets/images/groups/group-4.jpg"
                                className="card-img-top group-card-image"
                                alt="Group image"
                              />
                              <div className="card-body">
                                <h5 className="card-title">Capture The Best</h5>
                                <p className="card-text">
                                  2.8k Members 8+ post a day
                                </p>
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
            <span aria-hidden="true">�</span>
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

export default Friends;