const Navbar = () => {
  return (
    <nav id="sidebar" className="nav-sidebar">
      {/* Close btn*/}
      <div id="dismiss">
        <i className="fa fa-close" />
      </div>
      <div className="sidebar-inner">
        <div className="sidebar-logo">
          <img src="img/logos/black-logo.png" alt="sidebarlogo" />
        </div>
        <div className="sidebar-navigation">
          <h3 className="heading">Pages</h3>
          <ul className="menu-list">
            <li>
              <a href="#" className="active pt0">
                Home <em className="fa fa-chevron" />
              </a>
            </li>
            <li>
              <a href="#">
                Properties <em className="fa fa-chevron" />
              </a>
            </li>
            <li>
              <a href="#">
                Contact Us <em className="fa fa-chevron" />
              </a>
            </li>
            <li>
              <a href="#">
                My Account <em className="fa fa-chevron-down" />
              </a>
              <ul>
                <li>
                  <a href="login.html">Login</a>
                </li>
                <li>
                  <a href="signup.html">Register</a>
                </li>
                <li>
                  <a href="forgot-password.html">Forgot Password</a>
                </li>
                <li>
                  <a href="my-profile.html">My Profile</a>
                </li>
                <li>
                  <a href="my-properties.html">My Properties</a>
                </li>
                <li>
                  <a href="my-invoices.html">My Invoices</a>
                </li>
                <li>
                  <a href="messages.html">Messages</a>
                </li>
                <li>
                  <a href="submit-property.html">Submit Property</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="get-in-touch">
          <h3 className="heading">Get in Touch</h3>
          <div className="get-in-touch-box d-flex">
            <i className="flaticon-phone" />
            <div className="detalis">
              <a href="tel:0477-0477-8556-552">0477 8556 552</a>
            </div>
          </div>
          <div className="get-in-touch-box d-flex">
            <i className="flaticon-mail" />
            <div className="detalis">
              <a href="#">info@themevessel.com</a>
            </div>
          </div>
          <div className="get-in-touch-box d-flex  mb-0">
            <i className="flaticon-internet" />
            <div className="detalis">
              <a href="#">info@themevessel.com</a>
            </div>
          </div>
        </div>
        <div className="get-social">
          <h3 className="heading">Get Social</h3>
          <a href="#" className="facebook-bg">
            <i className="fa fa-facebook" />
          </a>
          <a href="#" className="twitter-bg">
            <i className="fa fa-twitter" />
          </a>
          <a href="#" className="google-bg">
            <i className="fa fa-google" />
          </a>
          <a href="#" className="linkedin-bg">
            <i className="fa fa-linkedin" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
<nav id="sidebar" className="nav-sidebar">
  {/* Close btn*/}
  <div id="dismiss">
    <i className="fa fa-close" />
  </div>
  <div className="sidebar-inner">
    <div className="sidebar-logo">
      <img src="img/logos/black-logo.png" alt="sidebarlogo" />
    </div>
    <div className="sidebar-navigation">
      <h3 className="heading">Pages</h3>
      <ul className="menu-list">
        <li>
          <a href="#" className="active pt0">
            Home <em className="fa fa-chevron" />
          </a>
        </li>
        <li>
          <a href="#">
            Properties <em className="fa fa-chevron" />
          </a>
        </li>
        <li>
          <a href="#">
            Contact Us <em className="fa fa-chevron" />
          </a>
        </li>
        <li>
          <a href="#">
            My Account <em className="fa fa-chevron-down" />
          </a>
          <ul>
            <li>
              <a href="login.html">Login</a>
            </li>
            <li>
              <a href="signup.html">Register</a>
            </li>
            <li>
              <a href="forgot-password.html">Forgot Password</a>
            </li>
            <li>
              <a href="my-profile.html">My Profile</a>
            </li>
            <li>
              <a href="my-properties.html">My Properties</a>
            </li>
            <li>
              <a href="my-invoices.html">My Invoices</a>
            </li>
            <li>
              <a href="messages.html">Messages</a>
            </li>
            <li>
              <a href="submit-property.html">Submit Property</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="submit-property.html">Submit Property</a>
        </li>
      </ul>
    </div>
    <div className="get-in-touch">
      <h3 className="heading">Get in Touch</h3>
      <div className="get-in-touch-box d-flex">
        <i className="flaticon-phone" />
        <div className="detalis">
          <a href="tel:0477-0477-8556-552">0477 8556 552</a>
        </div>
      </div>
      <div className="get-in-touch-box d-flex">
        <i className="flaticon-mail" />
        <div className="detalis">
          <a href="#">info@themevessel.com</a>
        </div>
      </div>
      <div className="get-in-touch-box d-flex  mb-0">
        <i className="flaticon-internet" />
        <div className="detalis">
          <a href="#">info@themevessel.com</a>
        </div>
      </div>
    </div>
    <div className="get-social">
      <h3 className="heading">Get Social</h3>
      <a href="#" className="facebook-bg">
        <i className="fa fa-facebook" />
      </a>
      <a href="#" className="twitter-bg">
        <i className="fa fa-twitter" />
      </a>
      <a href="#" className="google-bg">
        <i className="fa fa-google" />
      </a>
      <a href="#" className="linkedin-bg">
        <i className="fa fa-linkedin" />
      </a>
    </div>
  </div>
</nav>;
