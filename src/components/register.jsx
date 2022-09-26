import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://ankh-realestate.com/app/api/", {
        request: "storeuser",
        name: name,
        email: email,
        password: password,
      })
      .then((res) => {
        // console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
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
                  <a href="login.html">
                    <img src="img/logos/black-logo.png" alt="logo" />
                  </a>
                  <h3>Create An Cccount</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group form-box">
                      <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Full Name"
                        aria-label="Full Name"
                      />
                    </div>
                    <div className="form-group form-box">
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email Address"
                        aria-label="Email Address"
                      />
                    </div>
                    <div className="form-group form-box">
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
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
                          id="termsOfService"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="termsOfService"
                        >
                          I agree to the
                          <a href="#" className="terms">
                            terms of service
                          </a>
                        </label>
                      </div>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn-md btn-theme w-100">
                        Register
                      </button>
                    </div>
                    <p>
                      Already a member?<a href="login.html"> Login here</a>
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

export default Register;
