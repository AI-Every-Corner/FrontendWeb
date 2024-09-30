

function Widgets() {
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
              <form className="w-30 mx-2 my-auto d-inline form-inline mr-5 dropdown search-form">
                <div
                  className="input-group"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  id="searchDropdown"
                >
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
                        <p className="time">2.5k Members 35+ post a week</p>
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
                        <p className="time">10k Members 20+ post a week</p>
                      </div>
                    </li>
                  </div>
                  <div className="notify-drop-footer text-center">
                    <a href="#">See More</a>
                  </div>
                </ul>
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
              <li className="nav-item s-nav d-mobile">
                <a
                  href="marketplace.html"
                  className="nav-link nav-links nav-icon drop-w-tooltip"
                  data-placement="bottom"
                  data-title="Marketplace"
                >
                  <img
                    src="assets/images/icons/navbar/market.png"
                    alt="navbar icon"
                  />
                </a>
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
            className="col-md-3 newsfeed-left-side sticky-top shadow-sm"
            id="sidebar-wrapper"
          >
            <div className="card newsfeed-user-card h-100">
              <ul className="list-group list-group-flush newsfeed-left-sidebar">
                <li className="list-group-item">
                  <h6>Home</h6>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center sd-active">
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
                <li className="list-group-item d-flex justify-content-between align-items-center">
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
          <div className="col-md-6 second-section" id="page-content-wrapper">
            <div className="mb-3">
              <div className="btn-group d-flex">
                <a
                  href="index.html"
                  className="btn btn-quick-links mr-3 ql-active"
                >
                  <img
                    src="assets/images/icons/theme/speech.png"
                    className="mr-2"
                    alt="quick links icon"
                  />
                  <span className="fs-8">Speech</span>
                </a>
                <a href="messages.html" className="btn btn-quick-links mr-3">
                  <img
                    src="assets/images/icons/theme/listen.png"
                    className="mr-2"
                    alt="quick links icon"
                  />
                  <span className="fs-8">Listen</span>
                </a>
                <a href="watch.html" className="btn btn-quick-links">
                  <img
                    src="assets/images/icons/theme/watch.png"
                    className="mr-2"
                    alt="quick links icon"
                  />
                  <span className="fs-8">Watch</span>
                </a>
              </div>
            </div>
            <ul className="list-unstyled" style={{ marginBottom: 0 }}>
              <li className="media post-form w-shadow">
                <div className="media-body">
                  <div className="form-group post-input">
                    <textarea
                      className="form-control"
                      id="postForm"
                      rows={2}
                      placeholder="What's on your mind, Arthur?"
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
                          src="assets/images/icons/theme/tag-friend.png"
                          alt="post form icon"
                        />{" "}
                        <span>Tag Friends</span>
                      </button>
                      <button
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
              </li>
            </ul>
            {/* Posts */}
            <div className="posts-section mb-5">
              <div className="post border-bottom p-3 bg-white w-shadow">
                <div className="media text-muted pt-3">
                  <img
                    src="assets/images/users/user-1.jpg"
                    alt="Online user"
                    className="mr-3 post-user-image"
                  />
                  <div className="media-body pb-3 mb-0 small lh-125">
                    <div className="d-flex justify-content-between align-items-center w-100">
                      <a href="#" className="text-gray-dark post-user-name">
                        John Michael
                      </a>
                      <div className="dropdown">
                        <a
                          href="#"
                          className="post-more-settings"
                          role="button"
                          data-toggle="dropdown"
                          id="postOptions"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="bx bx-dots-horizontal-rounded" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-left post-dropdown-menu">
                          <a
                            href="#"
                            className="dropdown-item"
                            aria-describedby="savePost"
                          >
                            <div className="row">
                              <div className="col-md-2">
                                <i className="bx bx-bookmark-plus post-option-icon" />
                              </div>
                              <div className="col-md-10">
                                <span className="fs-9">Save post</span>
                                <small
                                  id="savePost"
                                  className="form-text text-muted"
                                >
                                  Add this to your saved items
                                </small>
                              </div>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="dropdown-item"
                            aria-describedby="hidePost"
                          >
                            <div className="row">
                              <div className="col-md-2">
                                <i className="bx bx-hide post-option-icon" />
                              </div>
                              <div className="col-md-10">
                                <span className="fs-9">Hide post</span>
                                <small
                                  id="hidePost"
                                  className="form-text text-muted"
                                >
                                  See fewer posts like this
                                </small>
                              </div>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="dropdown-item"
                            aria-describedby="snoozePost"
                          >
                            <div className="row">
                              <div className="col-md-2">
                                <i className="bx bx-time post-option-icon" />
                              </div>
                              <div className="col-md-10">
                                <span className="fs-9">
                                  Snooze Lina for 30 days
                                </span>
                                <small
                                  id="snoozePost"
                                  className="form-text text-muted"
                                >
                                  Temporarily stop seeing posts
                                </small>
                              </div>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="dropdown-item"
                            aria-describedby="reportPost"
                          >
                            <div className="row">
                              <div className="col-md-2">
                                <i className="bx bx-block post-option-icon" />
                              </div>
                              <div className="col-md-10">
                                <span className="fs-9">Report</span>
                                <small
                                  id="reportPost"
                                  className="form-text text-muted"
                                >
                                  I'm concerned about this post
                                </small>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <span className="d-block">
                      3 hours ago <i className="bx bx-globe ml-3" />
                    </span>
                  </div>
                </div>
                <div className="mt-3">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quis voluptatem veritatis harum, tenetur, quibusdam
                    voluptatum, incidunt saepe minus maiores ea atque sequi illo
                    veniam sint quaerat corporis totam et. Culpa?
                  </p>
                </div>
                <div className="d-block mt-3">
                  <img
                    src="https://scontent.fevn1-2.fna.fbcdn.net/v/t1.0-9/56161887_588993861570433_2896723195090436096_n.jpg?_nc_cat=103&_nc_eui2=AeFI0UuTq3uUF_TLEbnZwM-qSRtgOu0HE2JPwW6b4hIki73-2OWYhc7L1MPsYl9cYy-w122CCak-Fxj0TE1a-kjsd-KXzh5QsuvxbW_mg9qqtg&_nc_ht=scontent.fevn1-2.fna&oh=ea44bffa38f368f98f0553c5cef8e455&oe=5D050B05"
                    className="post-content"
                    alt="post image"
                  />
                </div>
                <div className="mb-3">
                  {/* Reactions */}
                  <div className="argon-reaction">
                    <span className="like-btn">
                      <a href="#" className="post-card-buttons" id="reactions">
                        <i className="bx bxs-like mr-2" /> 67
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
                  <a
                    href="javascript:void(0)"
                    className="post-card-buttons"
                    id="show-comments"
                  >
                    <i className="bx bx-message-rounded mr-2" /> 5
                  </a>
                  <div className="dropdown dropup share-dropup">
                    <a
                      href="#"
                      className="post-card-buttons"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="bx bx-share-alt mr-2" /> Share
                    </a>
                    <div className="dropdown-menu post-dropdown-menu">
                      <a href="#" className="dropdown-item">
                        <div className="row">
                          <div className="col-md-2">
                            <i className="bx bx-share-alt" />
                          </div>
                          <div className="col-md-10">
                            <span>Share Now (Public)</span>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="dropdown-item">
                        <div className="row">
                          <div className="col-md-2">
                            <i className="bx bx-share-alt" />
                          </div>
                          <div className="col-md-10">
                            <span>Share...</span>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="dropdown-item">
                        <div className="row">
                          <div className="col-md-2">
                            <i className="bx bx-message" />
                          </div>
                          <div className="col-md-10">
                            <span>Send as Message</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="border-top pt-3 hide-comments"
                  style={{ display: "none" }}
                >
                  <div className="row bootstrap snippets">
                    <div className="col-md-12">
                      <div className="comment-wrapper">
                        <div className="panel panel-info">
                          <div className="panel-body">
                            <ul className="media-list comments-list">
                              <li className="media comment-form">
                                <a href="#" className="pull-left">
                                  <img
                                    src="assets/images/users/user-4.jpg"
                                    alt=""
                                    className="img-circle"
                                  />
                                </a>
                                <div className="media-body">
                                  <form action="" method="" role="form">
                                    <div className="row">
                                      <div className="col-md-12">
                                        <div className="input-group">
                                          <input
                                            type="text"
                                            className="form-control comment-input"
                                            placeholder="Write a comment..."
                                          />
                                          <div className="input-group-btn">
                                            <button
                                              type="button"
                                              className="btn comment-form-btn"
                                              data-toggle="tooltip"
                                              data-placement="top"
                                              title="Tooltip on top"
                                            >
                                              <i className="bx bxs-smiley-happy" />
                                            </button>
                                            <button
                                              type="button"
                                              className="btn comment-form-btn comment-form-btn"
                                              data-toggle="tooltip"
                                              data-placement="top"
                                              title="Tooltip on top"
                                            >
                                              <i className="bx bx-camera" />
                                            </button>
                                            <button
                                              type="button"
                                              className="btn comment-form-btn comment-form-btn"
                                              data-toggle="tooltip"
                                              data-placement="top"
                                              title="Tooltip on top"
                                            >
                                              <i className="bx bx-microphone" />
                                            </button>
                                            <button
                                              type="button"
                                              className="btn comment-form-btn"
                                              data-toggle="tooltip"
                                              data-placement="top"
                                              title="Tooltip on top"
                                            >
                                              <i className="bx bx-file-blank" />
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </li>
                              <li className="media">
                                <a href="#" className="pull-left">
                                  <img
                                    src="assets/images/users/user-2.jpg"
                                    alt=""
                                    className="img-circle"
                                  />
                                </a>
                                <div className="media-body">
                                  <div className="d-flex justify-content-between align-items-center w-100">
                                    <strong className="text-gray-dark">
                                      <a href="#" className="fs-8">
                                        Karen Minas
                                      </a>
                                    </strong>
                                    <a href="#">
                                      <i className="bx bx-dots-horizontal-rounded" />
                                    </a>
                                  </div>
                                  <span className="d-block comment-created-time">
                                    30 min ago
                                  </span>
                                  <p className="fs-8 pt-2">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Lorem ipsum dolor sit amet,{" "}
                                    <a href="#">#consecteturadipiscing </a>.
                                  </p>
                                  <div className="commentLR">
                                    <button
                                      type="button"
                                      className="btn btn-link fs-8"
                                    >
                                      Like
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-link fs-8"
                                    >
                                      Reply
                                    </button>
                                  </div>
                                </div>
                              </li>
                              <li className="media">
                                <a href="#" className="pull-left">
                                  <img
                                    src="https://bootdey.com/img/Content/user_2.jpg"
                                    alt=""
                                    className="img-circle"
                                  />
                                </a>
                                <div className="media-body">
                                  <div className="d-flex justify-content-between align-items-center w-100">
                                    <strong className="text-gray-dark">
                                      <a href="#" className="fs-8">
                                        Lia Earnest
                                      </a>
                                    </strong>
                                    <a href="#">
                                      <i className="bx bx-dots-horizontal-rounded" />
                                    </a>
                                  </div>
                                  <span className="d-block comment-created-time">
                                    2 hours ago
                                  </span>
                                  <p className="fs-8 pt-2">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Lorem ipsum dolor sit amet,{" "}
                                    <a href="#">#consecteturadipiscing </a>.
                                  </p>
                                  <div className="commentLR">
                                    <button
                                      type="button"
                                      className="btn btn-link fs-8"
                                    >
                                      Like
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-link fs-8"
                                    >
                                      Reply
                                    </button>
                                  </div>
                                </div>
                              </li>
                              <li className="media">
                                <a href="#" className="pull-left">
                                  <img
                                    src="https://bootdey.com/img/Content/user_3.jpg"
                                    alt=""
                                    className="img-circle"
                                  />
                                </a>
                                <div className="media-body">
                                  <div className="d-flex justify-content-between align-items-center w-100">
                                    <strong className="text-gray-dark">
                                      <a href="#" className="fs-8">
                                        Rusty Mickelsen
                                      </a>
                                    </strong>
                                    <a href="#">
                                      <i className="bx bx-dots-horizontal-rounded" />
                                    </a>
                                  </div>
                                  <span className="d-block comment-created-time">
                                    17 hours ago
                                  </span>
                                  <p className="fs-8 pt-2">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Lorem ipsum dolor sit amet,{" "}
                                    <a href="#">#consecteturadipiscing </a>.
                                  </p>
                                  <div className="commentLR">
                                    <button
                                      type="button"
                                      className="btn btn-link fs-8"
                                    >
                                      Like
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-link fs-8"
                                    >
                                      Reply
                                    </button>
                                  </div>
                                </div>
                              </li>
                              <li className="media">
                                <div className="media-body">
                                  <div className="comment-see-more text-center">
                                    <button
                                      type="button"
                                      className="btn btn-link fs-8"
                                    >
                                      See More
                                    </button>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center my-5 load-post">
                <button
                  type="button"
                  className="btn btn-quick-link join-group-btn border shadow"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-title="Load More Post"
                >
                  <i className="bx bx-dots-horizontal-rounded" />
                </button>
              </div>
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
                <div className="weather-quick d-flex justify-content-center align-items-center my-4">
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
                <div className="weather-forecast">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="forecast-day text-center">
                        <span className="text-muted d-block fs-8">Fri</span>
                        <img
                          src="assets/images/icons/weather/sun.png"
                          className="my-1"
                          width={30}
                          alt="Weather icon"
                        />
                        <div className="forecast-between d-flex justify-content-between">
                          <span className="text-primary">28°</span>
                          <span className="text-muted">15°</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="forecast-day text-center">
                        <span className="text-muted d-block fs-8">Sat</span>
                        <img
                          src="assets/images/icons/weather/cloudy-sunny-winds.png"
                          className="my-1"
                          width={30}
                          alt="Weather icon"
                        />
                        <div className="forecast-between d-flex justify-content-between">
                          <span className="text-primary">19°</span>
                          <span className="text-muted">10°</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="forecast-day text-center">
                        <span className="text-muted d-block fs-8">Sun</span>
                        <img
                          src="assets/images/icons/weather/cloud-bolt.png"
                          className="my-1"
                          width={30}
                          alt="Weather icon"
                        />
                        <div className="forecast-between d-flex justify-content-between">
                          <span className="text-primary">22°</span>
                          <span className="text-muted">17°</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="forecast-day text-center">
                        <span className="text-muted d-block fs-8">Mon</span>
                        <img
                          src="assets/images/icons/weather/rainy-day.png"
                          className="my-1"
                          width={30}
                          alt="Weather icon"
                        />
                        <div className="forecast-between d-flex justify-content-between">
                          <span className="text-primary">25°</span>
                          <span className="text-muted">18°</span>
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
                      <a href="profile.html">
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
</>

    </div>
  );
}

export default Widgets;