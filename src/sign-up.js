

function SignUp() {
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
        <form action="" method="" className="pt-5">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name=""
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name=""
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name=""
                  placeholder="Email Address"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name=""
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <select name="" id="" className="form-control">
                  <option value="">- Select Day -</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <select name="" id="" className="form-control">
                  <option value="">- Select Month -</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <select name="" id="" className="form-control">
                  <option value="">- Select Year -</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  name=""
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  name=""
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <div className="col-md-12">
              <p className="agree-privacy">
                By clicking the Sign Up button below you agreed to our privacy
                policy and terms of use of our website.
              </p>
            </div>
            <div className="col-md-6">
              <span className="go-login">
                Already a member? <a href="sign-in.html">Sign In</a>
              </span>
            </div>
            <div className="col-md-6 text-right">
              <div className="form-group">
                <button type="button" className="btn btn-primary sign-up">
                  Sign Up
                </button>
              </div>
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
          <h2 className="create-account mb-3">Create Account</h2>
          <p>Enter your personal details and start journey with us.</p>
        </div>
        <div className="auth-quick-links">
          <a href="#" className="btn btn-outline-primary">
            Purchase template
          </a>
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

export default SignUp;