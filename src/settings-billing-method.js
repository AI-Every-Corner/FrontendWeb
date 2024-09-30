import logo from './logo.svg';
import './App.css';

function SettingsBillingMethod() {
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
  <link href="assets/css/settings.css" rel="stylesheet" />
  <link href="assets/css/forms.css" rel="stylesheet" />
  <link href="assets/css/media.css" rel="stylesheet" />
  <div className="container-fluid newsfeed d-flex" id="wrapper">
    <div className="row newsfeed-size f-width">
      <div className="col-md-12 message-right-side">
        <nav
          id="navbar-main"
          className="navbar navbar-expand-lg navbar-light bg-light sticky-top"
        >
          {/* Brand and toggle get grouped for better mobile display */}
          <div
            className="dropdown nav-item nav-quick-links"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Quick Links"
          >
            <a
              href="#"
              className="nav-link nav-links"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="bx bx-align-middle" />
            </a>
            <div className="dropdown-menu nav-drop">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <a href="index.html" className="sidebar-item">
                    <i className="bx bx-news text-primary" /> News Feed
                  </a>
                  <a href="#" className="newsfeedListicon">
                    <i className="bx bx-dots-horizontal-rounded" />
                  </a>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <a href="messages.html" className="sidebar-item">
                    <i className="bx bx-envelope text-primary" /> Messages
                  </a>
                  <span className="badge badge-primary badge-pill">2</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <a href="groups.html" className="sidebar-item">
                    <i className="bx bx-group text-primary" /> Groups
                  </a>
                  <span className="badge badge-primary badge-pill">17</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <a href="events.html" className="sidebar-item">
                    <i className="bx bx-calendar text-primary" /> Events
                  </a>
                  <span className="badge badge-primary badge-pill">3</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <a href="saved.html" className="sidebar-item">
                    <i className="bx bx-bookmarks text-primary" /> Saved
                  </a>
                  <span className="badge badge-primary badge-pill">8</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <a href="find-friends.html" className="sidebar-item">
                    <i className="bx bxs-user-detail text-primary" /> Find
                    Friends
                  </a>
                  <span className="badge badge-primary badge-pill">
                    <i className="bx bx-chevron-right" />
                  </span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <a href="matches.html" className="sidebar-item">
                    <i className="bx bx-carousel text-primary" /> Matches
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
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <a href="news.html" className="sidebar-item">
                    <i className="bx bx-file text-primary" /> News
                  </a>
                  <span className="badge badge-primary badge-pill">
                    <i className="bx bx-chevron-right" />
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <a className="navbar-brand mr-lg-5" href="index.html">
            <img
              src="assets/images/logo-32x32.png"
              className="mr-3"
              alt="Logo"
            />{" "}
            Argon
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#main_menu"
            aria-controls="main_menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse" id="main_menu">
            <form className="w-50 mx-2 my-auto d-inline form-inline ml-5">
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
            <ul className="navbar-nav mr-auto" />
            <ul className="navbar-nav mr-5">
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link nav-links"
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
                          Ruth D. Greene
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
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link nav-links"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pages
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
                  <span className="ml-2">Arthur</span>
                </a>
                <div className="dropdown-menu dropdown-menu-right nav-drop">
                  <a className="dropdown-item" href="profile.html">
                    <i className="bx bx-user mr-2" /> Account
                  </a>
                  <a className="dropdown-item" href="settings.html">
                    <i className="bx bx-cog mr-2" /> Settings
                  </a>
                  <div role="separator" className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    <i className="bx bx-undo mr-2" /> Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
          {/* /.navbar-collapse */}
        </nav>
        <div className="row message-right-side-content">
          <div className="col-md-12">
            <div id="message-frame">
              <div className="message-sidepanel">
                <div className="message-contacts">
                  <ul className="conversations">
                    <h6 className="p-3">General Settings</h6>
                    <li className="contact">
                      <a
                        href="settings.html"
                        className="wrap d-flex align-items-center"
                      >
                        <i className="bx bxs-user" />
                        <div className="meta">
                          <p>Your Account</p>
                        </div>
                      </a>
                    </li>
                    <li className="contact">
                      <a
                        href="settings-contact.html"
                        className="wrap d-flex align-items-center"
                      >
                        <i className="bx bx-id-card" />
                        <div className="meta">
                          <p>Contact Info</p>
                        </div>
                      </a>
                    </li>
                    <li className="contact">
                      <a href="#" className="wrap d-flex align-items-center">
                        <i className="bx bx-block" />
                        <div className="meta">
                          <p>Privacy</p>
                        </div>
                      </a>
                    </li>
                    <h6 className="p-3">Security &amp; Login</h6>
                    <li className="contact">
                      <a
                        href="settings-password.html"
                        className="wrap d-flex align-items-center"
                      >
                        <i className="bx bxs-lock" />
                        <div className="meta">
                          <p>Password</p>
                        </div>
                      </a>
                    </li>
                    <li className="contact">
                      <a href="#" className="wrap d-flex align-items-center">
                        <i className="bx bxs-help-circle" />
                        <div className="meta">
                          <p>Security Question</p>
                        </div>
                      </a>
                    </li>
                    <li className="contact">
                      <a
                        href="settings-fingerprint.html"
                        className="wrap d-flex align-items-center"
                      >
                        <div className="meta" />
                        <p>
                          <i className="bx bx-fingerprint" /> Fingerprint Lock
                        </p>
                      </a>
                    </li>
                    <li className="contact">
                      <a
                        href="settings-location.html"
                        className="wrap d-flex align-items-center"
                      >
                        <div className="meta" />
                        <p>
                          <i className="bx bxs-navigation" /> Location
                        </p>
                      </a>
                    </li>
                    <h6 className="p-3">Billing &amp; Payment</h6>
                    <li className="contact setting-active">
                      <a
                        href="settings-billing-method.html"
                        className="wrap d-flex align-items-center"
                      >
                        <div className="meta" />
                        <p>
                          <i className="bx bxs-wallet" /> Billing Method
                        </p>
                      </a>
                    </li>
                    <li className="contact">
                      <a href="#" className="wrap d-flex align-items-center">
                        <div className="meta" />
                        <p>
                          <i className="bx bx-credit-card" /> Automatic Payments
                        </p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="content" style={{ overflow: "auto" }}>
                <div className="settings-form p-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <h2 className="mb-4">Billing Method</h2>
                    <a href="#" className="btn btn-primary">
                      Add New Billing Method
                    </a>
                  </div>
                  <div className="login-sessions">
                    <h5 className="mb-3 mt-4 text-muted">
                      Primary Account Billing Method
                    </h5>
                    <p className="text-muted">
                      This is the primary billing method for your account. Iy'll
                      be the default we use to charge you for future
                      transactions.
                    </p>
                    <div className="location-card">
                      <div className="row">
                        <div className="col-md-5">
                          <img
                            className="mr-4 float-left"
                            src="assets/images/icons/visa.png"
                            alt="Paymant image"
                          />
                          <div>
                            <h5 className="mt-0 fs-1">411111******1111</h5>
                            <span className="text-muted">Expire 12/2013</span>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="billing-address">
                            <span className="d-block">Billing address</span>
                            <span>Address line 1, Address line 2, 2700...</span>
                          </div>
                        </div>
                        <div className="col-md-3 text-right">
                          <a href="#" className="btn">
                            <i className="bx bxs-trash-alt" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <h5 className="mb-3 mt-4 text-muted">
                      All Other Billing Methods
                    </h5>
                    <p className="text-muted">
                      These are all of the other billing methods you have added.
                    </p>
                    <div className="location-card">
                      <div className="row">
                        <div className="col-md-5">
                          <img
                            className="mr-4 float-left"
                            src="assets/images/icons/paypal.png"
                            alt="Paymant image"
                          />
                          <div>
                            <h5 className="fs-1">Pay Pal</h5>
                            <span className="text-muted">
                              bt_buyer_us@paypal.com
                            </span>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="billing-address">
                            <span className="d-block">Billing address</span>
                            <span>Address line 1, Address line 2, 2700...</span>
                          </div>
                        </div>
                        <div className="col-md-3 text-right">
                          <a href="#" className="btn btn-light">
                            Set as Primary
                          </a>
                          <a href="#" className="btn">
                            <i className="bx bxs-trash-alt" />
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
    </div>
  </div>
  {/* Core */}
  {/* Optional */}
</>

    </div>
  );
}

export default SettingsBillingMethod;