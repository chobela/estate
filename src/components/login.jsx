const Login = () => {
  return (
    <div>
      {/* Contact section start */}
      <div className="contact-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 col-md-12 bg-login-ing">
              <div className="informeson">
                <div className="typing">
                  <h1>Welcome To Neer</h1>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled
                </p>
                <div className="social-list">
                  <div className="buttons">
                    <a href="#" className="facebook-bg">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#" className="twitter-bg">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#" className="google-bg">
                      <i className="fa fa-google" />
                    </a>
                    <a href="#" className="dribbble-bg">
                      <i className="fa fa-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 form-section">
              <div className="login-inner-form">
                <div className="details">
                  <a href="index.html">
                    <img src="img/logos/black-logo.png" alt="logo" />
                  </a>
                  <h3>Sign Into Your Account</h3>
                  <form action="#" method="GET">
                    <div className="form-group form-box">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email Address"
                        aria-label="Email Address"
                      />
                    </div>
                    <div className="form-group form-box">
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        autoComplete="off"
                        placeholder="Password"
                        aria-label="Password"
                      />
                    </div>
                    <div className="form-group form-box checkbox clearfix">
                      <div className="form-check checkbox-theme">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="rememberMe"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="rememberMe"
                        >
                          Remember me
                        </label>
                      </div>
                      <a href="forgot-password.html">Forgot Password</a>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn-md btn-theme w-100">
                        Login
                      </button>
                    </div>
                    <p>
                      Don't have an account?
                      <a href="signup.html"> Register here</a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact section end */}
      {/* Full Page Search */}
      <div id="full-page-search">
        <button type="button" className="close">
          ×
        </button>
        <form action="index.html#">
          <input
            type="search"
            defaultValue=""
            placeholder="type keyword(s) here"
          />
          <button type="submit" className="btn btn-sm button-theme">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
