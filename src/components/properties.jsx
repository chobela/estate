const Properties = () => {
  return (
    <div>
      <div className="sub-banner">
        <div className="container">
          <div className="breadcrumb-area">
            <h1>Properties Fullwidth</h1>
            <ul className="breadcrumbs">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="active">Properties Fullwidth</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Sub Banner end */}
      {/* Properties section body start */}
      <div className="properties-section-body content-area">
        <div className="container">
          <div className="row">
            <div className="offset-lg-1 col-lg-10">
              {/* Option bar start */}
              <div className="option-bar">
                <div className="row">
                  <div className="col-lg-6 col-8">
                    <div className="sorting-options2">
                      <span className="sort">Sort by:</span>
                      <select
                        className="selectpicker search-fields"
                        name="default-order"
                      >
                        <option>Default Order</option>
                        <option>Price High to Low</option>
                        <option>Price: Low to High</option>
                        <option>Newest Properties</option>
                        <option>Oldest Properties</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-4">
                    <div className="sorting-options">
                      <a
                        href="properties-list-fullwidth.html"
                        className="change-view-btn active-view-btn"
                      >
                        <i className="fa fa-th-list" />
                      </a>
                      <a
                        href="properties-grid-fullwidth.html"
                        className="change-view-btn"
                      >
                        <i className="fa fa-th-large" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Property box 2 start */}
              <div className="property-box-2">
                <div className="row g-0">
                  <div className="col-lg-4 col-md-5">
                    <div className="property-photo">
                      <a
                        href="properties-details.html"
                        className="property-img"
                      >
                        <img
                          src="img/properties/properties-list-1.png"
                          alt="big-properties"
                          className="img-fluid"
                        />
                        <div className="tag">For Sale</div>
                        <div className="price-box">
                          <span>$850.00</span> Per month
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-7">
                    <div className="detail">
                      <div className="hdg">
                        <h3 className="title">
                          <a href="properties-details.html">
                            Relaxing Apartment
                          </a>
                        </h3>
                        <h5 className="location">
                          <a href="properties-details.html">
                            <i className="flaticon-pin" />
                            20-21 Kathal St. Tampa City, FL
                          </a>
                        </h5>
                      </div>
                      <ul className="facilities-list clearfix">
                        <li>
                          <span>Area</span>3600 Sqft
                        </li>
                        <li>
                          <span>Beds</span> 3
                        </li>
                        <li>
                          <span>Baths</span> 2
                        </li>
                        <li>
                          <span>Garage</span> 1
                        </li>
                      </ul>
                      <div className="footer">
                        <a href="#" tabIndex={0}>
                          <i className="flaticon-male" />
                          Jhon Doe
                        </a>
                        <span>
                          <i className="flaticon-calendar" />5 Days ago
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="property-box-2">
                <div className="row g-0">
                  <div className="col-lg-4 col-md-5">
                    <div className="property-photo">
                      <a
                        href="properties-details.html"
                        className="property-img"
                      >
                        <img
                          src="img/properties/properties-list-2.png"
                          alt="big-properties"
                          className="img-fluid"
                        />
                        <div className="listing-badges">
                          <span className="featured">Featured</span>
                        </div>
                        <div className="price-box">
                          <span>$850.00</span> Per month
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-7">
                    <div className="detail">
                      <div className="hdg">
                        <h3 className="title">
                          <a href="properties-details.html">Park avenue</a>
                        </h3>
                        <h5 className="location">
                          <a href="properties-details.html">
                            <i className="flaticon-pin" />
                            20-21 Kathal St. Tampa City, FL
                          </a>
                        </h5>
                      </div>
                      <ul className="facilities-list clearfix">
                        <li>
                          <span>Area</span>3600 Sqft
                        </li>
                        <li>
                          <span>Beds</span> 3
                        </li>
                        <li>
                          <span>Baths</span> 2
                        </li>
                        <li>
                          <span>Garage</span> 1
                        </li>
                      </ul>
                      <div className="footer">
                        <a href="#" tabIndex={0}>
                          <i className="flaticon-male" />
                          Jhon Doe
                        </a>
                        <span>
                          <i className="flaticon-calendar" />5 Days ago
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="property-box-2">
                <div className="row g-0">
                  <div className="col-lg-4 col-md-5">
                    <div className="property-photo">
                      <a
                        href="properties-details.html"
                        className="property-img"
                      >
                        <img
                          src="img/properties/properties-list-3.png"
                          alt="big-properties"
                          className="img-fluid"
                        />
                        <div className="tag">For Rent</div>
                        <div className="price-box">
                          <span>$850.00</span> Per month
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-7">
                    <div className="detail">
                      <div className="hdg">
                        <h3 className="title">
                          <a href="properties-details.html">
                            Modern Family Home
                          </a>
                        </h3>
                        <h5 className="location">
                          <a href="properties-details.html">
                            <i className="flaticon-pin" />
                            20-21 Kathal St. Tampa City, FL
                          </a>
                        </h5>
                      </div>
                      <ul className="facilities-list clearfix">
                        <li>
                          <span>Area</span>3600 Sqft
                        </li>
                        <li>
                          <span>Beds</span> 3
                        </li>
                        <li>
                          <span>Baths</span> 2
                        </li>
                        <li>
                          <span>Garage</span> 1
                        </li>
                      </ul>
                      <div className="footer">
                        <a href="#" tabIndex={0}>
                          <i className="flaticon-male" />
                          Jhon Doe
                        </a>
                        <span>
                          <i className="flaticon-calendar" />5 Days ago
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="property-box-2">
                <div className="row g-0">
                  <div className="col-lg-4 col-md-5">
                    <div className="property-photo">
                      <a
                        href="properties-details.html"
                        className="property-img"
                      >
                        <img
                          src="img/properties/properties-list-4.png"
                          alt="big-properties"
                          className="img-fluid"
                        />
                        <div className="listing-badges">
                          <span className="featured">Featured</span>
                        </div>
                        <div className="price-box">
                          <span>$850.00</span> Per month
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-7">
                    <div className="detail">
                      <div className="hdg">
                        <h3 className="title">
                          <a href="properties-details.html">
                            Relaxing Apartment
                          </a>
                        </h3>
                        <h5 className="location">
                          <a href="properties-details.html">
                            <i className="flaticon-pin" />
                            20-21 Kathal St. Tampa City, FL
                          </a>
                        </h5>
                      </div>
                      <ul className="facilities-list clearfix">
                        <li>
                          <span>Area</span>3600 Sqft
                        </li>
                        <li>
                          <span>Beds</span> 3
                        </li>
                        <li>
                          <span>Baths</span> 2
                        </li>
                        <li>
                          <span>Garage</span> 1
                        </li>
                      </ul>
                      <div className="footer">
                        <a href="#" tabIndex={0}>
                          <i className="flaticon-male" />
                          Jhon Doe
                        </a>
                        <span>
                          <i className="flaticon-calendar" />5 Days ago
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="property-box-2">
                <div className="row g-0">
                  <div className="col-lg-4 col-md-5 col-pad">
                    <div className="property-photo">
                      <a
                        href="properties-details.html"
                        className="property-img"
                      >
                        <img
                          src="img/properties/properties-list-5.png"
                          alt="big-properties"
                          className="img-fluid"
                        />
                        <div className="tag">For Sale</div>
                        <div className="price-box">
                          <span>$850.00</span> Per month
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-7 col-pad">
                    <div className="detail">
                      <div className="hdg">
                        <h3 className="title">
                          <a href="properties-details.html">Park avenue</a>
                        </h3>
                        <h5 className="location">
                          <a href="properties-details.html">
                            <i className="flaticon-pin" />
                            20-21 Kathal St. Tampa City, FL
                          </a>
                        </h5>
                      </div>
                      <ul className="facilities-list clearfix">
                        <li>
                          <span>Area</span>3600 Sqft
                        </li>
                        <li>
                          <span>Beds</span> 3
                        </li>
                        <li>
                          <span>Baths</span> 2
                        </li>
                        <li>
                          <span>Garage</span> 1
                        </li>
                      </ul>
                      <div className="footer">
                        <a href="#" tabIndex={0}>
                          <i className="flaticon-male" />
                          Jhon Doe
                        </a>
                        <span>
                          <i className="flaticon-calendar" />5 Days ago
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="property-box-2">
                <div className="row g-0">
                  <div className="col-lg-4 col-md-5 col-pad">
                    <div className="property-photo">
                      <a
                        href="properties-details.html"
                        className="property-img"
                      >
                        <img
                          src="img/properties/properties-list-1.png"
                          alt="big-properties"
                          className="img-fluid"
                        />
                        <div className="listing-badges">
                          <span className="featured">Featured</span>
                        </div>
                        <div className="price-box">
                          <span>$850.00</span> Per month
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-7 col-pad">
                    <div className="detail">
                      <div className="hdg">
                        <h3 className="title">
                          <a href="properties-details.html">
                            Relaxing Apartment
                          </a>
                        </h3>
                        <h5 className="location">
                          <a href="properties-details.html">
                            <i className="flaticon-pin" />
                            20-21 Kathal St. Tampa City, FL
                          </a>
                        </h5>
                      </div>
                      <ul className="facilities-list clearfix">
                        <li>
                          <span>Area</span>3600 Sqft
                        </li>
                        <li>
                          <span>Beds</span> 3
                        </li>
                        <li>
                          <span>Baths</span> 2
                        </li>
                        <li>
                          <span>Garage</span> 1
                        </li>
                      </ul>
                      <div className="footer">
                        <a href="#" tabIndex={0}>
                          <i className="flaticon-male" />
                          Jhon Doe
                        </a>
                        <span>
                          <i className="flaticon-calendar" />5 Days ago
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Page navigation start */}
              <div className="pagination-box hidden-mb-45 text-center">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Prev
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link"
                        href="properties-list-rightside.html"
                      >
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link"
                        href="properties-list-leftsidebar.html"
                      >
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link active"
                        href="properties-list-fullwidth.html"
                      >
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link"
                        href="properties-list-rightside.html"
                      >
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Properties section body end */}
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
    </div>
  );
};

export default Properties;
