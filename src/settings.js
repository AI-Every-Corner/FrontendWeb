import React, { useEffect, useState } from 'react'

function Settings() {

  // State to manage the visibility of the dropdown menu
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [settingDropdownVisible, setSettingDropdownVisible] = useState(false);
  const [notificationDropdownVisible, setNotificationDropdownVisible] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Function to toggle dropdown visibility
  const toggleSettingDropdown = () => {
    setSettingDropdownVisible(!settingDropdownVisible);
  };

  // Function to toggle notification dropdown visibility
  const toggleNotificationDropdown = () => {
    setNotificationDropdownVisible(!notificationDropdownVisible);
  };

  return (
    <div className="Settings">
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
              
              <div className="row message-right-side-content">
                <div className="col-md-12">
                  <div id="message-frame">
                    <div className="message-sidepanel">
                      <div className="message-contacts settings-sidebar">
                        <ul className="conversations">
                          <h6 className="p-3">General Settings</h6>
                          <li className="contact setting-active">
                            <a
                              href="/settings"
                              className="wrap d-flex align-items-center"
                            >
                              <img
                                src="assets/images/icons/settings/account.png"
                                className="settings-icon"
                                alt="Settings left sidebar"
                              />
                              <div className="meta">
                                <p>Personal Information</p>
                              </div>
                            </a>
                          </li>

                          <h6 className="p-3">Security &amp; Login</h6>
                          <li className="contact">
                            <a href="#" className="wrap d-flex align-items-center">
                              <img
                                src="assets/images/icons/settings/security-question.png"
                                className="settings-icon"
                                alt="Settings left sidebar"
                              />
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
                                <img
                                  src="assets/images/icons/settings/fingerprint.png"
                                  className="settings-icon"
                                  alt="Settings left sidebar"
                                />{" "}
                                Fingerprint Lock
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
                                <img
                                  src="assets/images/icons/settings/location.png"
                                  className="settings-icon"
                                  alt="Settings left sidebar"
                                />{" "}
                                Location
                              </p>
                            </a>
                          </li>
                          <h6 className="p-3">Billing &amp; Payment</h6>
                          <li className="contact">
                            <a
                              href="settings-billing-method.html"
                              className="wrap d-flex align-items-center"
                            >
                              <div className="meta" />
                              <p>
                                <img
                                  src="assets/images/icons/settings/wallet.png"
                                  className="settings-icon"
                                  alt="Settings left sidebar"
                                />{" "}
                                Billing Method
                              </p>
                            </a>
                          </li>
                          <li className="contact">
                            <a href="#" className="wrap d-flex align-items-center">
                              <div className="meta" />
                              <p>
                                <img
                                  src="assets/images/icons/settings/credit-card.png"
                                  className="settings-icon"
                                  alt="Settings left sidebar"
                                />{" "}
                                Automatic Payments
                              </p>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="content">
                      <div className="settings-form p-4">
                        <h2>Personal Information</h2>
                        <form action="" method="" className="mt-4 settings-form">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-row mb-3 align-items-center">
                                <div className="col">
                                  <label htmlFor="settingsUsername">Username</label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="settingsUsername"
                                    aria-describedby="usernameHelp"
                                    placeholder="Username"
                                  />
                                  <small
                                    id="usernameHelp"
                                    className="form-text text-muted"
                                  >
                                    Your public username is the same as your timeline
                                    address.
                                  </small>
                                </div>
                                <div className="col check-username">
                                  <span>
                                    <i className="bx bx-check success" /> Username is
                                    available
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-group">
                                <label htmlFor="settingsGender">Gender</label>
                                <select
                                  className="form-control"
                                  id="settingsGender"
                                >
                                  <option value="male">Male</option>
                                  <option value="female">Female</option>
                                  <option value="other">Other</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-group">
                                <label htmlFor="settingsBirth">Birth</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="settingsBirth"
                                  placeholder="1900-01-01"
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-row mb-3 align-items-center">
                                <div className="col">
                                  <label htmlFor="settingsAge">Age</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="settingsAge"
                                    placeholder="18"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-group">
                                <label htmlFor="settingsCurrentPassword">
                                  Current Password
                                </label>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="settingsCurrentPassword"
                                  placeholder="Current Password"
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-group">
                                <label htmlFor="settingsNewPassword">
                                  New Password
                                </label>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="settingsNewPassword"
                                  aria-describedby="passwordHelp"
                                  placeholder="New Password"
                                />
                                <small
                                  id="passwordHelp"
                                  className="form-text text-muted"
                                >
                                  It's a good idea to use a strong password that
                                  you're not using elsewhere.
                                </small>

                                <div className="progress w-100 mt-2">
                                  <div className="progress w-25">
                                    <div
                                      className="progress-bar bg-success"
                                      role="progressbar"
                                      style={{ width: '75%' }}
                                      aria-valuenow={50}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-group">
                                <label htmlFor="settingsRetypePassword">
                                  Re-type New Password
                                </label>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="settingsRetypePassword"
                                  placeholder="Re-type New Password"
                                />
                                <div className="progress w-100 mt-2">
                                  <small className="text-danger">
                                    <i className="bx bx-x error" /> Passwords do not
                                    match
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-group">
                                <label htmlFor="settingsPhoneNumber">
                                  Phone Number
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="settingsPhoneNumber"
                                  placeholder="Phone Number"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-row mb-3 align-items-center">
                                <div className="col">
                                  <label htmlFor="settingsEmailAddress">
                                    Email Address
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="settingsEmailAddress"
                                    aria-describedby="emailHelp"
                                    defaultValue="emailaddress@gmail.com"
                                    placeholder="Email Address"
                                  />
                                  <small
                                    id="emailHelp"
                                    className="form-text text-muted"
                                  >
                                    Updating this email will only change where you
                                    receive notifications.
                                  </small>
                                </div>
                                <div className="col check-username">
                                  <span>
                                    <i className="bx bx-check success" /> Email
                                    Address is available
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12 d-flex justify-content-end" style={{ position: "fixed", bottom: "20px", right: "20px" }}>
                            <button type="submit" className="btn btn-primary btn-sm">
                              Save Changes
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
        {/* Core */}
        {/* Optional */}
      </>

    </div>
  );
}

export default Settings;