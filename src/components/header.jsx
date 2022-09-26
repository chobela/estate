import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const location = useLocation();
  const active = location.pathname;

  return (
    <header
      className="main-header sticky-header header-with-top"
      id="main-header-2"
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand logos" href="index.html">
            <img src="img/logos/black-logo.png" alt="logo" />
          </a>
          <button className="navbar-toggler" id="drawer" type="button">
            <span className="fa fa-bars" />
          </button>
          <div
            className="navbar-collapse collapse w-100 justify-content-end"
            id="navbar"
          >
            <ul className="navbar-nav ml-auto">
              <li className={active === "/" ? "nav-item active" : "nav-item"}>
                <Link
                  className="nav-link"
                  to="/"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Home
                </Link>
              </li>
              <li
                className={
                  active === "/properties" ? "nav-item active" : "nav-item"
                }
              >
                <Link
                  className="nav-link"
                  to="/properties"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Properties
                </Link>
              </li>
              <li
                className={
                  active === "/contact" ? "nav-item active" : "nav-item"
                }
              >
                <Link
                  className="nav-link"
                  to="/contact"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Contact Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink7"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  My Account
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="/login">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/register">
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/forgot">
                      Forgot Password
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/myprofile">
                      My Profile
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/myproperties">
                      My Properties
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item sp">
                <Link to="/submitproperty" className="nav-link link-color">
                  <i className="fa fa-plus" /> Submit Property
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
