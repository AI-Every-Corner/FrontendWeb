import { useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function SignIn() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', { username, password });
      console.log(response.data);
      // 處理登錄成功,例如保存token到localStorage
      localStorage.setItem('token', response.data.token);
      alert('登錄成功');
      // 重定向到主頁或儀表板
      navigate('/');
    } catch (error) {
      setError('登入失敗: ' + (error.response?.data || error.message));
      // 處理錯誤,例如顯示錯誤消息
    }
  };

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
  <link href="assets/css/auth.css" rel="stylesheet" />
  <link href="assets/css/forms.css" rel="stylesheet" />
  <link href="assets/css/media.css" rel="stylesheet" />
  <div className="row ht-100v flex-row-reverse no-gutters">
    <div className="col-md-6 d-flex justify-content-center align-items-center">
      <div className="signup-form">
        <div className="auth-logo text-center mb-5">
          <div className="row">
            <div className="col-md-2">
              <img
                src="assets/images/logo-64x64.png"
                className="logo-img"
                alt="Logo"
              />
            </div>
            <div className="col-md-10">
              <p>Argon Social Network</p>
              <span>Design System</span>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name=""
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  name=""
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-12 mb-3">
              <a href="forgot-password.html">Forgot password?</a>
            </div>
            <div className="col-md-6">
              <label className="custom-control material-checkbox">
                <input type="checkbox" className="material-control-input" />
                <span className="material-control-indicator" />
                <span className="material-control-description">
                  Remember Me
                </span>
              </label>
            </div>
            <div className="col-md-6 text-right">
              <div className="form-group">
                <button type="submit" className="btn btn-primary sign-up">
                  Sign In
                </button>
              </div>
            </div>
            <div className="col-md-12 text-center mt-4">
              <p className="text-muted">Start using your fingerprint</p>
              <a
                href="#"
                className="btn btn-outline-primary btn-sm sign-up"
                data-toggle="modal"
                data-target="#fingerprintModal"
              >
                Use Fingerprint
              </a>
            </div>
            <div className="col-md-12 text-center mt-5">
              <span className="go-login">
                Not yet a member? <Link to="/sign-up">Sign Up</Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div className="col-md-6 auth-bg-image d-flex justify-content-center align-items-center">
      <div className="auth-left-content mt-5 mb-5 text-center">
        <div className="weather-small text-white">
          <p className="current-weather">
            <i className="bx bx-sun" /> <span>14°</span>
          </p>
          <p className="weather-city">Gyumri</p>
        </div>
        <div className="text-white mt-5 mb-5">
          <h2 className="create-account mb-3">Welcome Back</h2>
          <p>
            Thank you for joining. Updates and new features are released daily.
          </p>
        </div>
        <div className="auth-quick-links">
          <a href="#" className="btn btn-outline-primary">
            Purchase template
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Modal */}
  <div
    className="modal fade fingerprint-modal"
    id="fingerprintModal"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="fingerprintModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-body text-center">
          <h3 className="text-muted display-5">
            Place your Finger on the Device Now
          </h3>
          <img
            src="assets/images/icons/auth-fingerprint.png"
            alt="Fingerprint"
          />
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

export default SignIn;