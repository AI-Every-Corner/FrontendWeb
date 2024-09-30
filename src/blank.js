function Blank() {
  return (
    <div>
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
  <link href="assets/css/media.css" rel="stylesheet" />
  <link href="https://vjs.zencdn.net/7.4.1/video-js.css" rel="stylesheet" />
  <div className="container-fluid" id="wrapper">
    <div className="row newsfeed-size">
      <div className="col-md-12 newsfeed-right-side">
        <nav
          id="navbar-main"
          className="navbar navbar-expand-lg shadow-sm sticky-top"
        >
          <ul className="navbar-nav mr-5" id="main_menu">
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
            <li className="nav-item btn-group d-mobile">
              <a
                href="#"
                className="nav-link nav-icon nav-links"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="bx bx-plus" />
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
                      <small id="createGroup" className="form-text text-muted">
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
                      <small id="createEvent" className="form-text text-muted">
                        bring people together with a public or private event
                      </small>
                    </div>
                  </div>
                </a>
              </div>
            </li>
            <li className="nav-item dropdown message-drop-li">
              <a
                href="#"
                className="nav-link nav-links message-drop"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="bx bxs-message-rounded message-dropdown" />{" "}
                <span className="badge badge-pill badge-primary">1</span>
              </a>
              <ul className="dropdown-menu notify-drop dropdown-menu-right nav-drop">
                <div className="notify-drop-title">
                  <div className="fs-8">
                    Messages | <a href="#">Requests</a>
                  </div>
                  <div>
                    <a href="#" className="notify-right-icon">
                      Mark All as Read
                    </a>
                  </div>
                </div>
                {/* end notify title */}
                {/* notify content */}
                <div className="drop-content">
                  <li>
                    <div className="col-md-3 col-sm-3 col-xs-3">
                      <div className="notify-img">
                        <img
                          src="assets/images/users/user-6.png"
                          alt="notification user image"
                        />
                      </div>
                    </div>
                    <div className="col-md-9 col-sm-9 col-xs-9 pd-l0">
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
                    <div className="col-md-3 col-sm-3 col-xs-3">
                      <div className="notify-img">
                        <img
                          src="assets/images/users/user-5.png"
                          alt="notification user image"
                        />
                      </div>
                    </div>
                    <div className="col-md-9 col-sm-9 col-xs-9 pd-l0">
                      <a href="#" className="notification-user">
                        Ruth D. Greene{" "}
                        <span className="badge badge-pill badge-primary ml-1">
                          1
                        </span>
                      </a>
                      <a href="#" className="notify-right-icon">
                        <i className="bx bx-radio-circle-marked" />
                      </a>
                      <p className="time">Great, I’ll see you tomorrow!.</p>
                    </div>
                  </li>
                  <li>
                    <div className="col-md-3 col-sm-3 col-xs-3">
                      <div className="notify-img">
                        <img
                          src="assets/images/users/user-7.png"
                          alt="notification user image"
                        />
                      </div>
                    </div>
                    <div className="col-md-9 col-sm-9 col-xs-9 pd-l0">
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
                    <div className="col-md-3 col-sm-3 col-xs-3">
                      <div className="notify-img">
                        <img
                          src="assets/images/users/user-8.png"
                          alt="notification user image"
                        />
                      </div>
                    </div>
                    <div className="col-md-9 col-sm-9 col-xs-9 pd-l0">
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
                    <div className="col-md-3 col-sm-3 col-xs-3">
                      <div className="notify-img">
                        <img
                          src="assets/images/users/user-9.png"
                          alt="notification user image"
                        />
                      </div>
                    </div>
                    <div className="col-md-9 col-sm-9 col-xs-9 pd-l0">
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
                    <div className="col-md-3 col-sm-3 col-xs-3">
                      <div className="notify-img">
                        <img
                          src="assets/images/users/user-10.png"
                          alt="notification user image"
                        />
                      </div>
                    </div>
                    <div className="col-md-9 col-sm-9 col-xs-9 pd-l0">
                      <a href="#" className="notification-user">
                        Sean S. Smith
                      </a>
                      <a href="#" className="notify-right-icon">
                        <i className="bx bx-radio-circle-marked" />
                      </a>
                      <p className="time">Which of those two is best?</p>
                    </div>
                  </li>
                  <li>
                    <div className="col-md-3 col-sm-3 col-xs-3">
                      <div className="notify-img">
                        <img
                          src="assets/images/users/user-10.png"
                          alt="notification user image"
                        />
                      </div>
                    </div>
                    <div className="col-md-9 col-sm-9 col-xs-9 pd-l0">
                      <a href="#" className="notification-user">
                        Sean S. Smith
                      </a>
                      <a href="#" className="notify-right-icon">
                        <i className="bx bx-radio-circle-marked" />
                      </a>
                      <p className="time">Which of those two is best?</p>
                    </div>
                  </li>
                  <li>
                    <div className="col-md-3 col-sm-3 col-xs-3">
                      <div className="notify-img">
                        <img
                          src="assets/images/users/user-10.png"
                          alt="notification user image"
                        />
                      </div>
                    </div>
                    <div className="col-md-9 col-sm-9 col-xs-9 pd-l0">
                      <a href="#" className="notification-user">
                        Test S. Smith
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
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link nav-links"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="bx bxs-bell notification-bell" />{" "}
                <span className="badge badge-pill badge-primary">3</span>
              </a>
              <ul className="dropdown-menu notify-drop notify-mobile dropdown-menu-right nav-drop">
                <div className="notify-drop-title">
                  <div className="fs-8">
                    Notifications{" "}
                    <span className="badge badge-pill badge-primary ml-2">
                      3
                    </span>
                  </div>
                  <div>
                    <a href="#" className="notify-right-icon">
                      Mark All as Read
                    </a>
                  </div>
                </div>
                {/* end notify title */}
                {/* notify content */}
                <div className="drop-content">
                  <li>
                    <div className="col-md-3 col-sm-3 col-xs-3">
                      <div className="notify-img">
                        <img
                          src="assets/images/users/user-10.png"
                          alt="notification user image"
                        />
                      </div>
                    </div>
                    <div className="col-md-9 col-sm-9 col-xs-9 pd-l0">
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
                    <div className="col-md-3 col-sm-3 col-xs-3">
                      <div className="notify-img">
                        <img
                          src="assets/images/users/user-7.png"
                          alt="notification user image"
                        />
                      </div>
                    </div>
                    <div className="col-md-9 col-sm-9 col-xs-9 pd-l0">
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
                    <div className="col-md-3 col-sm-3 col-xs-3">
                      <div className="notify-img">
                        <img
                          src="assets/images/users/user-8.png"
                          alt="notification user image"
                        />
                      </div>
                    </div>
                    <div className="col-md-9 col-sm-9 col-xs-9 pd-l0">
                      <span className="notification-type">
                        10 people saw your story before it disappeared. See who
                        saw it.
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
                    <div className="col-md-3 col-sm-3 col-xs-3">
                      <div className="notify-img">
                        <img
                          src="assets/images/users/user-11.png"
                          alt="notification user image"
                        />
                      </div>
                    </div>
                    <div className="col-md-9 col-sm-9 col-xs-9 pd-l0">
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
                    <div className="col-md-3 col-sm-3 col-xs-3">
                      <div className="notify-img">
                        <img
                          src="assets/images/users/user-5.png"
                          alt="notification user image"
                        />
                      </div>
                    </div>
                    <div className="col-md-9 col-sm-9 col-xs-9 pd-l0">
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
                    <div className="col-md-3 col-sm-3 col-xs-3">
                      <div className="notify-img">
                        <img
                          src="assets/images/users/user-12.png"
                          alt="notification user image"
                        />
                      </div>
                    </div>
                    <div className="col-md-9 col-sm-9 col-xs-9 pd-l0">
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
            <li className="nav-item dropdown d-mobile">
              <a
                href="#"
                className="nav-link nav-links nav-icon"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="bx bx-flag" />
              </a>
              <div className="dropdown-menu dropdown-menu-right nav-drop">
                <a className="dropdown-item" href="sign-in.html">
                  Sign in
                </a>
                <a className="dropdown-item" href="sign-up.html">
                  Sign up
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link nav-links"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div className="menu-user-image">
                  <img
                    src="assets/images/users/user-4.jpg"
                    className="menu-user-img ml-1"
                    alt="Menu Image"
                  />
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-right nav-drop">
                <a className="dropdown-item" href="profile.html">
                  <i className="bx bx-user mr-2" /> Account
                </a>
                <div role="separator" className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  <i className="bx bx-undo mr-2" /> Logout
                </a>
              </div>
            </li>
            <li className="nav-item nav-icon">
              <a href="settings.html" className="nav-link">
                <i className="bx bx-cog" />
              </a>
            </li>
          </ul>
          <button
            type="button"
            className="btn btn-primary mr-3"
            id="menu-toggle"
          >
            <i className="bx bx-align-left" />
          </button>
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
                    <i className="bx bxl-slack-old text-primary" /> Argon For
                    Teams
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
                    <i className="bx bx-file text-primary" /> News
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
                  <i className="bx bx-microphone mr-2" />
                  <span className="fs-8">Speech</span>
                </a>
                <a href="messages.html" className="btn btn-quick-links mr-3">
                  <i className="bx bx-pulse mr-2" />
                  <span className="fs-8">Listen</span>
                </a>
                <a href="watch.html" className="btn btn-quick-links">
                  <i className="bx bx-play-circle mr-2" />
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
                        <i className="bx bx-images" /> <span>Photo/Video</span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-link post-form-btn btn-sm"
                      >
                        <i className="bx bxs-group" /> <span>Tag Friends</span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-link post-form-btn btn-sm"
                      >
                        <i className="bx bxs-map" /> <span>Check In</span>
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
              <div className="post border-bottom p-3 bg-white w-shadow">
                <div className="media text-muted pt-3">
                  <img
                    src="assets/images/users/user-2.jpg"
                    alt="Online user"
                    className="mr-3 post-user-image"
                  />
                  <div className="media-body pb-3 mb-0 small lh-125">
                    <div className="d-flex justify-content-between align-items-center w-100">
                      <a href="#" className="text-gray-dark post-user-name">
                        Karen Minas
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
                                  Snooze Karen for 30 days
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
                  <video
                    id="my_video_1"
                    className="video-js vjs-default-skin post-content"
                    width="640px"
                    height="400px"
                    controls=""
                    preload="none"
                    poster="https://scontent.fevn1-2.fna.fbcdn.net/v/t1.0-9/53323455_587990788367325_4529827897430507520_n.jpg?_nc_cat=100&_nc_eui2=AeF-F6s-7bevnyjZs6JbGj3WPqHUIRKQ4uJ2vH8L-OD-3KZPZFJ7GVOVSYewqLB1928c3NeJ-OWQgN9et1oxB4kpONH0rFMSpp1H-lfjwH2tzA&_nc_ht=scontent.fevn1-2.fna&oh=ab0d869caefae1260b3ff755e2e031ba&oe=5D07FF32"
                    data-setup='{ "aspectRatio":"640:400", "playbackRates": [1, 1.5, 2] }'
                  >
                    <source
                      src="https://vjs.zencdn.net/v/oceans.mp4"
                      type="video/mp4"
                    />
                    <source
                      src="https://vjs.zencdn.net/v/oceans.webm"
                      type="video/webm"
                    />
                  </video>
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
              <div className="post border-bottom p-3 bg-white w-shadow">
                <div className="media text-muted pt-3">
                  <img
                    src="assets/images/users/user-4.jpg"
                    alt="Online user"
                    className="mr-3 post-user-image"
                  />
                  <div className="media-body pb-3 mb-0 small lh-125">
                    <div className="d-flex justify-content-between align-items-center w-100">
                      <a href="#" className="text-gray-dark post-user-name">
                        Arthur Minasyan
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
                                  Snooze Arthur for 30 days
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
                    src="https://scontent.fevn1-2.fna.fbcdn.net/v/t1.0-9/54799225_2011170049005317_4866978526609276928_o.jpg?_nc_cat=107&_nc_eui2=AeEHQnVZPRAGrFMwQkvn9nKuaYZc2vCQIEISZzVqaGn3SkHJcmP_KHM2GGNG1UMbyL-HjX03GFyI0Rf3Ft1k0zlGmfGCEeuckyqHUN-a0JRe7A&_nc_ht=scontent.fevn1-2.fna&oh=d3a637e08353d870a8125f69c0b2b9ff&oe=5D4E5770"
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
            </div>
          </div>
          <div className="col-md-2 third-section">
            <div className="p-3 bg-white rounded w-shadow">
              <h6 className="card-title border-bottom border-gray pb-2 mb-0">
                Online Users
              </h6>
              <div className="media text-muted pt-3">
                <img
                  src="assets/images/users/user-2.jpg"
                  alt="Online user"
                  className="mr-2 online-user-image"
                />
                <div className="media-body pb-3 mb-0 small lh-125">
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <strong className="text-gray-dark">
                      <a href="#" className="smFLname">
                        Karen Minas
                      </a>
                    </strong>
                    <span className="online-status bg-success" />
                  </div>
                  <span className="d-block online-username">@karen_minas</span>
                </div>
              </div>
              <div className="media text-muted pt-3">
                <img
                  src="assets/images/users/user-3.jpg"
                  alt="Online user"
                  className="mr-2 online-user-image"
                />
                <div className="media-body pb-3 mb-0 small lh-125">
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <strong className="text-gray-dark">
                      <a href="#" className="smFLname">
                        Hakob Minasyan
                      </a>
                    </strong>
                    <span className="online-status bg-success" />
                  </div>
                  <span className="d-block online-username">
                    @hakob_minasyan
                  </span>
                </div>
              </div>
              <div className="media text-muted pt-3">
                <img
                  src="assets/images/users/user-1.jpg"
                  alt="Online user"
                  className="mr-2 online-user-image"
                />
                <div className="media-body pb-3 mb-0 small lh-125">
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <strong className="text-gray-dark">
                      <a href="#" className="smFLname">
                        John Michael
                      </a>
                    </strong>
                    <span className="online-status bg-success" />
                  </div>
                  <span className="d-block online-username">@john_michael</span>
                </div>
              </div>
              <small className="d-block text-right mt-3">
                <a href="#">See More</a>
              </small>
            </div>
            {/* Suggestions */}
            <div className="mt-4 p-3 bg-white rounded w-shadow">
              <h6 className="card-title border-bottom border-gray pb-2 mb-0">
                People You May Know
              </h6>
              <div className="media text-muted pt-3">
                <img
                  src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg"
                  alt="Online user"
                  className="mr-2 online-user-image"
                />
                <div className="media-body pb-3 mb-0 small lh-125">
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <strong
                      className="text-gray-dark"
                      style={{ lineHeight: 0 }}
                    >
                      <a href="#" className="smFLname">
                        John Michael
                      </a>
                    </strong>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Follow"
                    >
                      <i
                        className="bx bxs-plus-circle"
                        style={{ fontSize: "2.5em", color: "#969696" }}
                      />
                    </a>
                  </div>
                  <span className="d-block" style={{ lineHeight: 8 }}>
                    4 mutual friends
                  </span>
                </div>
              </div>
              <div className="media text-muted pt-3">
                <img
                  src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-3.jpg"
                  alt="Online user"
                  className="mr-2 online-user-image"
                />
                <div className="media-body pb-3 mb-0 small lh-125">
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <strong
                      className="text-gray-dark"
                      style={{ lineHeight: 0 }}
                    >
                      <a href="#" className="smFLname">
                        Samantha Ivy
                      </a>
                    </strong>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Follow"
                    >
                      <i
                        className="bx bxs-plus-circle"
                        style={{ fontSize: "2.5em", color: "#969696" }}
                      />
                    </a>
                  </div>
                  <span className="d-block" style={{ lineHeight: 8 }}>
                    1 mutual friends
                  </span>
                </div>
              </div>
              <small className="d-block text-right mt-3">
                <a href="#">See More</a>
              </small>
            </div>
            {/* Suggestions */}
            <div className="mt-4 p-3 bg-white rounded w-shadow">
              <h6 className="card-title border-bottom border-gray pb-2 mb-0">
                Popular Tags
              </h6>
              <div className="media text-muted pt-3">
                <div className="media-body pb-3 mb-0 small lh-125 popular-tags">
                  <span className="badge badge-primary">love</span>
                  <span className="badge badge-primary">instagood</span>
                  <span className="badge badge-primary">photooftheday</span>
                  <span className="badge badge-primary">fashion</span>
                  <span className="badge badge-primary">beautiful</span>
                  <span className="badge badge-primary">happy</span>
                  <span className="badge badge-primary">summer</span>
                  <span className="badge badge-primary">nature</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 four-section">
            <div className="card w-shadow">
              <div className="card-body">
                <h5 className="card-title card-title">Dashboard</h5>
                <hr />
                <p>Likes count</p>
                <canvas id="likesChart" />
                <p className="mt-3">Follow count</p>
                <canvas id="followersChart" />
              </div>
            </div>
            <div className="card mt-4">
              <div className="card-body">
                <h5 className="card-title card-title">Sponsored</h5>
                <hr />
                <img
                  className="card-img-top"
                  src="http://blog.creative-tim.com/wp-content/uploads/2015/08/how-we-started1-730x410.jpg"
                  alt="Card image cap"
                />
                <a href="#" className="card-title mt-2 d-block">
                  Creative Tim
                </a>
                <small className="card-text">
                  Speed up your projects! Get the Premium version of our
                  products. They come with a huge num...
                </small>
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
  {/* Core */}
  {/* Optional */}
</>

    </div>
  );
}

export default Blank;