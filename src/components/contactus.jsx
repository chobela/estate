const Contactus = () => {
  return (
    <>
      {/* Sub banner start */}
      <div className="sub-banner">
        <div className="container">
          <div className="breadcrumb-area">
            <h1>Contact us</h1>
            <ul className="breadcrumbs">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="active">Contact us</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Sub Banner end */}
      {/* Contact 2 start */}
      <div className="contact-2 content-area-17">
        <div className="container">
          {/* Main title */}
          <div className="main-title text-center">
            <h1>Contact Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod.
            </p>
          </div>
          <form action="#" method="GET" encType="multipart/form-data">
            <div className="row g-0 contact-innner">
              <div className="col-lg-7">
                <div className="contact-form">
                  <h3 className="mb-20">Send us a Message</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group name">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Name"
                          aria-label="Full Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group email">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email Address"
                          aria-label="Email Address"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group subject">
                        <input
                          type="text"
                          name="subject"
                          className="form-control"
                          placeholder="Subject"
                          aria-label="Subject"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group number">
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                          placeholder="Phone"
                          aria-label="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group message">
                        <textarea
                          className="form-control"
                          name="message"
                          placeholder="Write message"
                          aria-label="Write message"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="send-btn text-center">
                        <button type="submit" className="btn-6">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="contact-info">
                  <h3 className="mb-20">Contact Info</h3>
                  <div className="ca-box d-flex mb-30">
                    <i className="flaticon-pin me-3" />
                    <div className="detail">
                      <h5>Address</h5>
                      <p>
                        Moonshine St. 14/05 Light City, London, United Kingdom
                      </p>
                    </div>
                  </div>
                  <div className="ca-box d-flex mb-30">
                    <i className="flaticon-phone me-3" />
                    <div className="detail">
                      <h5>Phone Number</h5>
                      <p>
                        <a href="tel:0477-0477-8556-552">+0477 8556 552</a>
                      </p>
                      <p>
                        <a href="tel:0477-0477-8556-552">+0488 8556 640</a>
                      </p>
                    </div>
                  </div>
                  <div className="ca-box d-flex mb-30">
                    <i className="flaticon-mail me-3" />
                    <div className="detail">
                      <h5>Email Address</h5>
                      <p>
                        <a href="mailto:info@themevessel.com">
                          info@themevessel.com
                        </a>
                      </p>
                      <p>
                        <a href="mailto:info@themevessel.com">
                          mdsobuzvaddro@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="ca-box d-flex">
                    <i className="flaticon-fax me-3" />
                    <div className="detail">
                      <h5>Fax</h5>
                      <p>
                        <a href="tel:0477-0477-8556-552">+0477 8556 552</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Contact 2 end */}
      {/* Google map start */}
      <div className="section contact-2-map">
        <div className="map">
          <div id="map" className="contact-map" />
        </div>
      </div>
      {/* Google map end */}
      {/* Footer start */}
      <footer className="main-footer-3">
        <div className="lines">
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
        <div className="subscribe-newsletter">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <h3>Subscribe Newsletter</h3>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="Subscribe-box">
                  <div className="newsletter-content-wrap">
                    <form className="newsletter-form d-flex" action="#">
                      <input
                        className="form-control"
                        type="email"
                        id="email"
                        placeholder="Email Address..."
                      />
                      <button className="btn btn-theme" type="submit">
                        <i className="fa fa-paper-plane" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
        <div className="footer-inner">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-3 col-md-6 col-sm-6">
                <div className="footer-item clearfix">
                  <img src="img/logos/logo.png" alt="logo" className="f-logo" />
                  <div className="s-border" />
                  <div className="m-border" />
                  <div className="text">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas in pulvinar neque. Nulla finibus lobortis
                      pulvinar. Donec a consectetur nulla. Nulla posuere sapien
                      vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam
                      erat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="footer-item clearfix">
                  <h4>Contact Info</h4>
                  <div className="s-border" />
                  <div className="m-border" />
                  <ul className="contact-info">
                    <li>
                      <i className="flaticon-pin" />
                      Address: 44 New Design Street,
                    </li>
                    <li>
                      <i className="flaticon-mail" />
                      <a href="mailto:sales@hotelempire.com">
                        info@themevessel.com
                      </a>
                    </li>
                    <li>
                      <i className="flaticon-phone" />
                      <a href="tel:+55-417-634-7071">+0477 85X6 552</a>
                    </li>
                    <li className="mb-0">
                      <i className="flaticon-fax" />
                      +0477 85X6 552
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                <div className="footer-item">
                  <h4>Useful Links</h4>
                  <div className="s-border" />
                  <div className="m-border" />
                  <ul className="links">
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" />
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="about.html">
                        <i className="fa fa-angle-right" />
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="services.html">
                        <i className="fa fa-angle-right" />
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="blog-classic-sidebar-right.html">
                        <i className="fa fa-angle-right" />
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="dashboard.html">
                        <i className="fa fa-angle-right" />
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="contact.html">
                        <i className="fa fa-angle-right" />
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="elements.html">
                        <i className="fa fa-angle-right" />
                        Elements
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="footer-item fi-2 clearfix">
                  <div className="footer-gallery clearfix">
                    <h4>Our Gallery</h4>
                    <div className="s-border" />
                    <div className="m-border" />
                    <ul>
                      <li>
                        <img
                          src="img/properties/small-properties-1.png"
                          alt="small-img"
                        />
                      </li>
                      <li>
                        <img
                          src="img/properties/small-properties-2.png"
                          alt="small-img"
                        />
                      </li>
                      <li>
                        <img
                          src="img/properties/small-properties-3.png"
                          alt="small-img"
                        />
                      </li>
                      <li>
                        <img
                          src="img/properties/small-properties-4.png"
                          alt="small-img"
                        />
                      </li>
                      <li>
                        <img
                          src="img/properties/small-properties-5.png"
                          alt="small-img"
                        />
                      </li>
                      <li>
                        <img
                          src="img/properties/small-properties-6.png"
                          alt="small-img"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sub-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <p className="copy">
                  © 2022 <a href="#">Theme Vessel.</a> All Rights Reserved.
                </p>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="social-media clearfix">
                  <div className="social-list">
                    <div className="icon facebook">
                      <div className="tooltip">Facebook</div>
                      <span>
                        <i className="fa fa-facebook" />
                      </span>
                    </div>
                    <div className="icon twitter">
                      <div className="tooltip">Twitter</div>
                      <span>
                        <i className="fa fa-twitter" />
                      </span>
                    </div>
                    <div className="icon instagram">
                      <div className="tooltip">Instagram</div>
                      <span>
                        <i className="fa fa-instagram" />
                      </span>
                    </div>
                    <div className="icon github">
                      <div className="tooltip">Github</div>
                      <span>
                        <i className="fa fa-github" />
                      </span>
                    </div>
                    <div className="icon youtube mr-0">
                      <div className="tooltip">Youtube</div>
                      <span>
                        <i className="fa fa-youtube" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer end */}
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
    </>
  );
};

export default Contactus;
