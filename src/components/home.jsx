const Home = () => {
  return (
    <div>
      <div className="banner" id="banner">
        <div
          id="bannerCarousole"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item banner-max-height active item-bg">
              <div
                id="boxgallery"
                className="boxgallery"
                data-effect="effect-1"
              >
                <div className="panel">
                  <img src="img/banner/img-3.png" alt="Image 1" />
                </div>
                <div className="panel">
                  <img src="img/banner/img-2.png" alt="Image 1" />
                </div>
                <div className="panel">
                  <img src="img/banner/img-1.png" alt="Image 1" />
                </div>
                <div className="panel">
                  <img src="img/banner/img-5.png" alt="Image 1" />
                </div>
              </div>
            </div>
            <div className="carousel-caption d-flex h-100">
              <div className="carousel-content container">
                <div className="text-center bi-3">
                  <div className="clearfix">
                    <h3>Find Your Amazing Home</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod
                    </p>
                  </div>
                  <div className="clearfix" />
                  <div className="inline-search-area isa-4 clearfix">
                    <div className="row">
                      <div className="col-xl-2 col-lg-2 col-sm-4 col-6 search-col">
                        <select
                          className="selectpicker search-fields"
                          name="any-status"
                        >
                          <option>Any Status</option>
                          <option>For Rent</option>
                          <option>For Sale</option>
                        </select>
                      </div>
                      <div className="col-xl-2 col-lg-2 col-sm-4 col-6 search-col">
                        <select
                          className="selectpicker search-fields"
                          name="all-type"
                        >
                          <option>All Type</option>
                          <option>Apartments</option>
                          <option>Shop</option>
                          <option>Restaurant</option>
                          <option>Villa</option>
                        </select>
                      </div>
                      <div className="col-xl-2 col-lg-2 col-sm-4 col-6 search-col">
                        <select
                          className="selectpicker search-fields"
                          name="bedrooms"
                        >
                          <option>Bedrooms</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>
                      <div className="col-xl-2 col-lg-2 col-sm-4 col-6 search-col">
                        <select
                          className="selectpicker search-fields"
                          name="bathrooms"
                        >
                          <option>Bathrooms</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>
                      <div className="col-xl-2 col-lg-2 col-sm-4 col-6 search-col">
                        <select
                          className="selectpicker search-fields"
                          name="location"
                        >
                          <option>location</option>
                          <option>United States</option>
                          <option>American Samoa</option>
                          <option>Belgium</option>
                          <option>Canada</option>
                        </select>
                      </div>
                      <div className="col-xl-2 col-lg-2 col-sm-4 col-6 search-col">
                        <button className="btn button-theme btn-search w-100">
                          <strong>Search</strong>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="inline-search-area isa-3 clearfix">
                    <div className="row clearfix">
                      <div className="col-md-6 col-sm-6 col-6">
                        <select
                          className="selectpicker search-fields"
                          name="any-status"
                        >
                          <option>Any Status</option>
                          <option>For Rent</option>
                          <option>For Sale</option>
                        </select>
                      </div>
                      <div className="col-md-6 col-sm-6 col-6">
                        <select
                          className="selectpicker search-fields"
                          name="all-type"
                        >
                          <option>All Type</option>
                          <option>Apartments</option>
                          <option>Shop</option>
                          <option>Restaurant</option>
                          <option>Villa</option>
                        </select>
                      </div>
                      <div className="col-md-6 col-sm-6 col-6">
                        <select
                          className="selectpicker search-fields"
                          name="bedrooms"
                        >
                          <option>Bedrooms</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>
                      <div className="col-md-6 col-sm-6 col-6">
                        <select
                          className="selectpicker search-fields"
                          name="bathrooms"
                        >
                          <option>Bathrooms</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>
                      <div className="col-md-6 col-sm-6 col-6">
                        <select
                          className="selectpicker search-fields mb-0"
                          name="location"
                        >
                          <option>location</option>
                          <option>United States</option>
                          <option>American Samoa</option>
                          <option>Belgium</option>
                          <option>Canada</option>
                        </select>
                      </div>
                      <div className="col-md-6 col-sm-6 col-6">
                        <button className="btn button-theme btn-search w-100 mb-0">
                          <strong>Search</strong>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Banner end */}
      {/* Search Section start */}
      <div
        className="search-section search-area pb-hediin-12 bg-grea animated fadeInDown"
        id="search-style-1"
      >
        <div className="container">
          <div className="search-section-area">
            <div className="search-area-inner">
              <div className="search-contents">
                <form method="GET">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                      <div className="form-group">
                        <select
                          className="selectpicker search-fields"
                          name="any-status"
                        >
                          <option>Any Status</option>
                          <option>For Rent</option>
                          <option>For Sale</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                      <div className="form-group">
                        <select
                          className="selectpicker search-fields"
                          name="all-type"
                        >
                          <option>All Type</option>
                          <option>Apartments</option>
                          <option>Shop</option>
                          <option>Restaurant</option>
                          <option>Villa</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                      <div className="form-group">
                        <select
                          className="selectpicker search-fields"
                          name="bedrooms"
                        >
                          <option>Bedrooms</option>
                          <option>Bedrooms 1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                      <div className="form-group">
                        <select
                          className="selectpicker search-fields"
                          name="bathrooms"
                        >
                          <option>Bathrooms</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                      <div className="form-group">
                        <select
                          className="selectpicker search-fields"
                          name="location"
                        >
                          <option>location</option>
                          <option>United States</option>
                          <option>American Samoa</option>
                          <option>Belgium</option>
                          <option>Canada</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                      <div className="form-group">
                        <button className="search-button">Search</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Search Section end */}
      {/* Featured Properties start */}
      <div className="featured-properties content-area-12">
        <div className="container">
          {/* Main title */}
          <div className="main-title-3">
            <p>Best Rent Properties</p>
            <h1>
              Featured <span>Properties</span>
            </h1>
          </div>
          {/* Slick slider area start */}
          <div className="slick-slider-area">
            <div
              className="row slick-carousel"
              data-slick='{"slidesToShow": 3, "responsive":[{"breakpoint": 1024,"settings":{"slidesToShow": 2}}, {"breakpoint": 768,"settings":{"slidesToShow": 1}}]}'
            >
              <div className="slick-slide-item">
                <div className="property-box-6">
                  <div className="property-photo">
                    <img
                      src="img/properties/properties-11.png"
                      alt="photo"
                      className="img-fluid w-100"
                    />
                    <div className="tag">For Sale</div>
                  </div>
                  <div className="property-inner">
                    <div className="property-info">
                      <h4 className="properties-name">
                        <a href="properties-details.html">Relaxing Apartment</a>
                      </h4>
                      <p className="location">
                        <a href="properties-details.html">
                          <i className="fa fa-map-marker" /> 123 Kathal St.
                          Tampa City
                        </a>
                      </p>
                      <ul className="facilities-list clearfix">
                        <li>
                          <i className="flaticon-bed" /> 4800 sq ft
                        </li>
                        <li>
                          <i className="flaticon-bathroom" /> 3 Beds
                        </li>
                        <li>
                          <i className="flaticon-area" /> 2 Baths
                        </li>
                        <li>
                          <i className="flaticon-car" /> 1 Garage
                        </li>
                        <li>
                          <i className="flaticon-car" /> 3 Balcony
                        </li>
                        <li>
                          <i className="flaticon-sell" /> security
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-hover-content">
                    <div className="property-photo">
                      <img
                        src="img/properties/properties-11.png"
                        alt="photo"
                        className="img-fluid w-100"
                      />
                    </div>
                    <div className="property-info">
                      <h4 className="properties-name">
                        <a href="properties-details.html">Relaxing Apartment</a>
                      </h4>
                      <p className="location">
                        <a href="properties-details.html">
                          <i className="fa fa-map-marker" /> 123 Kathal St.
                          Tampa City
                        </a>
                      </p>
                    </div>
                    <ul className="member-socials clearfix">
                      <li>
                        <i className="flaticon-bed" /> 4800 sq ft
                      </li>
                      <li>
                        <i className="flaticon-bathroom" /> 3 Beds
                      </li>
                      <li>
                        <i className="flaticon-area" /> 2 Baths
                      </li>
                      <li>
                        <i className="flaticon-car" /> 1 Garage
                      </li>
                      <li>
                        <i className="flaticon-car" /> 3 Balcony
                      </li>
                      <li>
                        <i className="flaticon-sell" /> security
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="slick-slide-item">
                <div className="property-box-6">
                  <div className="property-photo">
                    <img
                      src="img/properties/properties-14.png"
                      alt="photo"
                      className="img-fluid w-100"
                    />
                    <div className="tag">For Rent</div>
                  </div>
                  <div className="property-inner">
                    <div className="property-info">
                      <h4 className="properties-name">
                        <a href="properties-details.html">
                          Two storey modern flat
                        </a>
                      </h4>
                      <p className="location">
                        <a href="properties-details.html">
                          <i className="fa fa-map-marker" /> 123 Kathal St.
                          Tampa City
                        </a>
                      </p>
                      <ul className="facilities-list clearfix">
                        <li>
                          <i className="flaticon-bed" /> 4800 sq ft
                        </li>
                        <li>
                          <i className="flaticon-bathroom" /> 3 Beds
                        </li>
                        <li>
                          <i className="flaticon-area" /> 2 Baths
                        </li>
                        <li>
                          <i className="flaticon-car" /> 1 Garage
                        </li>
                        <li>
                          <i className="flaticon-car" /> 3 Balcony
                        </li>
                        <li>
                          <i className="flaticon-sell" /> security
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-hover-content">
                    <div className="property-photo">
                      <img
                        src="img/properties/properties-14.png"
                        alt="photo"
                        className="img-fluid w-100"
                      />
                    </div>
                    <div className="property-info">
                      <h4 className="properties-name">
                        <a href="properties-details.html">
                          Two storey modern flat
                        </a>
                      </h4>
                      <p className="location">
                        <a href="properties-details.html">
                          <i className="fa fa-map-marker" /> 123 Kathal St.
                          Tampa City
                        </a>
                      </p>
                    </div>
                    <ul className="member-socials clearfix">
                      <li>
                        <i className="flaticon-bed" /> 4800 sq ft
                      </li>
                      <li>
                        <i className="flaticon-bathroom" /> 3 Beds
                      </li>
                      <li>
                        <i className="flaticon-area" /> 2 Baths
                      </li>
                      <li>
                        <i className="flaticon-car" /> 1 Garage
                      </li>
                      <li>
                        <i className="flaticon-car" /> 3 Balcony
                      </li>
                      <li>
                        <i className="flaticon-sell" /> security
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="slick-slide-item">
                <div className="property-box-6">
                  <div className="property-photo">
                    <img
                      src="img/properties/properties-13.png"
                      alt="photo"
                      className="img-fluid w-100"
                    />
                    <div className="tag">For Sale</div>
                  </div>
                  <div className="property-inner">
                    <div className="property-info">
                      <h4 className="properties-name">
                        <a href="properties-details.html">Office Apartment</a>
                      </h4>
                      <p className="location">
                        <a href="properties-details.html">
                          <i className="fa fa-map-marker" /> 123 Kathal St.
                          Tampa City
                        </a>
                      </p>
                      <ul className="facilities-list clearfix">
                        <li>
                          <i className="flaticon-bed" /> 4800 sq ft
                        </li>
                        <li>
                          <i className="flaticon-bathroom" /> 3 Beds
                        </li>
                        <li>
                          <i className="flaticon-area" /> 2 Baths
                        </li>
                        <li>
                          <i className="flaticon-car" /> 1 Garage
                        </li>
                        <li>
                          <i className="flaticon-car" /> 3 Balcony
                        </li>
                        <li>
                          <i className="flaticon-sell" /> security
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-hover-content">
                    <div className="property-photo">
                      <img
                        src="img/properties/properties-13.png"
                        alt="photo"
                        className="img-fluid w-100"
                      />
                    </div>
                    <div className="property-info">
                      <h4 className="properties-name">
                        <a href="properties-details.html">Office Apartment</a>
                      </h4>
                      <p className="location">
                        <a href="properties-details.html">
                          <i className="fa fa-map-marker" /> 123 Kathal St.
                          Tampa City
                        </a>
                      </p>
                    </div>
                    <ul className="member-socials clearfix">
                      <li>
                        <i className="flaticon-bed" /> 4800 sq ft
                      </li>
                      <li>
                        <i className="flaticon-bathroom" /> 3 Beds
                      </li>
                      <li>
                        <i className="flaticon-area" /> 2 Baths
                      </li>
                      <li>
                        <i className="flaticon-car" /> 1 Garage
                      </li>
                      <li>
                        <i className="flaticon-car" /> 3 Balcony
                      </li>
                      <li>
                        <i className="flaticon-sell" /> security
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="slick-slide-item">
                <div className="property-box-6">
                  <div className="property-photo">
                    <img
                      src="img/properties/properties-12.png"
                      alt="photo"
                      className="img-fluid w-100"
                    />
                    <div className="tag">For Rent</div>
                  </div>
                  <div className="property-inner">
                    <div className="property-info">
                      <h4 className="properties-name">
                        <a href="properties-details.html">Modern Family Home</a>
                      </h4>
                      <p className="location">
                        <a href="properties-details.html">
                          <i className="fa fa-map-marker" /> 123 Kathal St.
                          Tampa City
                        </a>
                      </p>
                      <ul className="facilities-list clearfix">
                        <li>
                          <i className="flaticon-bed" /> 4800 sq ft
                        </li>
                        <li>
                          <i className="flaticon-bathroom" /> 3 Beds
                        </li>
                        <li>
                          <i className="flaticon-area" /> 2 Baths
                        </li>
                        <li>
                          <i className="flaticon-car" /> 1 Garage
                        </li>
                        <li>
                          <i className="flaticon-car" /> 3 Balcony
                        </li>
                        <li>
                          <i className="flaticon-sell" /> security
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-hover-content">
                    <div className="property-photo">
                      <img
                        src="img/properties/properties-12.png"
                        alt="photo"
                        className="img-fluid w-100"
                      />
                    </div>
                    <div className="property-info">
                      <h4 className="properties-name">
                        <a href="properties-details.html">Modern Family Home</a>
                      </h4>
                      <p className="location">
                        <a href="properties-details.html">
                          <i className="fa fa-map-marker" /> 123 Kathal St.
                          Tampa City
                        </a>
                      </p>
                    </div>
                    <ul className="member-socials clearfix">
                      <li>
                        <i className="flaticon-bed" /> 4800 sq ft
                      </li>
                      <li>
                        <i className="flaticon-bathroom" /> 3 Beds
                      </li>
                      <li>
                        <i className="flaticon-area" /> 2 Baths
                      </li>
                      <li>
                        <i className="flaticon-car" /> 1 Garage
                      </li>
                      <li>
                        <i className="flaticon-car" /> 3 Balcony
                      </li>
                      <li>
                        <i className="flaticon-sell" /> security
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="slick-slide-item">
                <div className="property-box-6">
                  <div className="property-photo">
                    <img
                      src="img/properties/properties-15.png"
                      alt="photo"
                      className="img-fluid w-100"
                    />
                    <div className="tag">For Sale</div>
                  </div>
                  <div className="property-inner">
                    <div className="property-info">
                      <h4 className="properties-name">
                        <a href="properties-details.html">Relaxing Apartment</a>
                      </h4>
                      <p className="location">
                        <a href="properties-details.html">
                          <i className="fa fa-map-marker" /> 123 Kathal St.
                          Tampa City
                        </a>
                      </p>
                      <ul className="facilities-list clearfix">
                        <li>
                          <i className="flaticon-bed" /> 4800 sq ft
                        </li>
                        <li>
                          <i className="flaticon-bathroom" /> 3 Beds
                        </li>
                        <li>
                          <i className="flaticon-area" /> 2 Baths
                        </li>
                        <li>
                          <i className="flaticon-car" /> 1 Garage
                        </li>
                        <li>
                          <i className="flaticon-car" /> 3 Balcony
                        </li>
                        <li>
                          <i className="flaticon-sell" /> security
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-hover-content">
                    <div className="property-photo">
                      <img
                        src="img/properties/properties-15.png"
                        alt="photo"
                        className="img-fluid w-100"
                      />
                    </div>
                    <div className="property-info">
                      <h4 className="properties-name">
                        <a href="properties-details.html">Relaxing Apartment</a>
                      </h4>
                      <p className="location">
                        <a href="properties-details.html">
                          <i className="fa fa-map-marker" /> 123 Kathal St.
                          Tampa City
                        </a>
                      </p>
                    </div>
                    <ul className="member-socials clearfix">
                      <li>
                        <i className="flaticon-bed" /> 4800 sq ft
                      </li>
                      <li>
                        <i className="flaticon-bathroom" /> 3 Beds
                      </li>
                      <li>
                        <i className="flaticon-area" /> 2 Baths
                      </li>
                      <li>
                        <i className="flaticon-car" /> 1 Garage
                      </li>
                      <li>
                        <i className="flaticon-car" /> 3 Balcony
                      </li>
                      <li>
                        <i className="flaticon-sell" /> security
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="slick-slide-item">
                <div className="property-box-6">
                  <div className="property-photo">
                    <img
                      src="img/properties/properties-10.png"
                      alt="photo"
                      className="img-fluid w-100"
                    />
                    <div className="tag">For Rent</div>
                  </div>
                  <div className="property-inner">
                    <div className="property-info">
                      <h4 className="properties-name">
                        <a href="properties-details.html">Luxury Villa</a>
                      </h4>
                      <p className="location">
                        <a href="properties-details.html">
                          <i className="fa fa-map-marker" /> 123 Kathal St.
                          Tampa City
                        </a>
                      </p>
                      <ul className="facilities-list clearfix">
                        <li>
                          <i className="flaticon-bed" /> 4800 sq ft
                        </li>
                        <li>
                          <i className="flaticon-bathroom" /> 3 Beds
                        </li>
                        <li>
                          <i className="flaticon-area" /> 2 Baths
                        </li>
                        <li>
                          <i className="flaticon-car" /> 1 Garage
                        </li>
                        <li>
                          <i className="flaticon-car" /> 3 Balcony
                        </li>
                        <li>
                          <i className="flaticon-sell" /> security
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-hover-content">
                    <div className="property-photo">
                      <img
                        src="img/properties/properties-10.png"
                        alt="photo"
                        className="img-fluid w-100"
                      />
                    </div>
                    <div className="property-info">
                      <h4 className="properties-name">
                        <a href="properties-details.html">Luxury Villa</a>
                      </h4>
                      <p className="location">
                        <a href="properties-details.html">
                          <i className="fa fa-map-marker" /> 123 Kathal St.
                          Tampa City
                        </a>
                      </p>
                    </div>
                    <ul className="member-socials clearfix">
                      <li>
                        <i className="flaticon-bed" /> 4800 sq ft
                      </li>
                      <li>
                        <i className="flaticon-bathroom" /> 3 Beds
                      </li>
                      <li>
                        <i className="flaticon-area" /> 2 Baths
                      </li>
                      <li>
                        <i className="flaticon-car" /> 1 Garage
                      </li>
                      <li>
                        <i className="flaticon-car" /> 3 Balcony
                      </li>
                      <li>
                        <i className="flaticon-sell" /> security
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="slick-btn">
              <div className="slick-prev slick-arrow-buton-2 sab-4">
                <i className="fa fa-angle-left" />
              </div>
              <div className="slick-next slick-arrow-buton-2 sab-3">
                <i className="fa fa-angle-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Featured Properties end */}
      {/* Services start */}
      <div className="services content-area bg-grea-3">
        <div className="container">
          {/* Main title */}
          <div className="main-title-3">
            <p>Our Expertise</p>
            <h1>
              Why Choose <span>Us</span>
            </h1>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="service-info-3 d-flex">
                <div className="icon">
                  <i className="flaticon-user" />
                </div>
                <div className="detail align-self-center">
                  <h3>Personalized Service Possible</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever
                  </p>
                  <a className="read-more" href="services.html">
                    Read more...
                  </a>
                  <h4>01</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="service-info-3 d-flex">
                <div className="icon">
                  <i className="flaticon-empire-state-building" />
                </div>
                <div className="detail align-self-center">
                  <h3>Luxury Real Estate Experts</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever standard dummy text ever
                  </p>
                  <a className="read-more" href="services.html">
                    Read more...
                  </a>
                  <h4>01</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="service-info-3 d-flex">
                <div className="icon">
                  <i className="flaticon-discount" />
                </div>
                <div className="detail align-self-center">
                  <h3>Modern Building For Rent $ Sell</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever
                  </p>
                  <a className="read-more" href="services.html">
                    Read more...
                  </a>
                  <h4>01</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services end */}
      {/* Popular places section strat */}
      <div className="popular-places-section content-area-7">
        <div className="container">
          {/* Main title */}
          <div className="main-title-3">
            <p>Find Your City</p>
            <h1>
              Most Popular <span>Places</span>
            </h1>
          </div>
          <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12">
              <div className="popular-places">
                <div className="popular-places-inner">
                  <div className="popular-places-overflow">
                    <div className="popular-places-photo">
                      <div className="popular-places-photodd">
                        <img
                          className="img-fluid big-img w-100"
                          src="img/popular-places/popular-places-6.png"
                          alt="properties"
                        />
                      </div>
                    </div>
                    <div className="info">
                      <h3>
                        <a href="properties-details.html">United States</a>
                      </h3>
                      <p>84 Properties</p>
                    </div>
                    <div className="new">New</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="row">
                <div className="col-sm-6">
                  <div className="popular-places">
                    <div className="popular-places-inner">
                      <div className="popular-places-overflow">
                        <div className="popular-places-photo">
                          <img
                            className="img-fluid w-100"
                            src="img/popular-places/popular-places-3.png"
                            alt="properties"
                          />
                        </div>
                        <div className="info">
                          <h3>
                            <a href="properties-details.html">United States</a>
                          </h3>
                          <p>84 Properties</p>
                        </div>
                        <div className="new">New</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="popular-places">
                    <div className="popular-places-inner">
                      <div className="popular-places-overflow">
                        <div className="popular-places-photo">
                          <img
                            className="img-fluid w-100"
                            src="img/popular-places/popular-places-4.png"
                            alt="properties"
                          />
                        </div>
                        <div className="info">
                          <h3>
                            <a href="properties-details.html">California</a>
                          </h3>
                          <p>57 Properties</p>
                        </div>
                        <div className="new">New</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="popular-places">
                    <div className="popular-places-inner">
                      <div className="popular-places-overflow">
                        <div className="popular-places-photo w-100">
                          <img
                            className="img-fluid"
                            src="img/popular-places/popular-places-1.png"
                            alt="properties"
                          />
                        </div>
                        <div className="info">
                          <h3>
                            <a href="properties-details.html">Rome</a>
                          </h3>
                          <p>84 Properties</p>
                        </div>
                        <div className="new">New</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="popular-places">
                    <div className="popular-places-inner">
                      <div className="popular-places-overflow">
                        <div className="popular-places-photo w-100">
                          <img
                            className="img-fluid"
                            src="img/popular-places/popular-places-2.png"
                            alt="properties"
                          />
                        </div>
                        <div className="info">
                          <h3>
                            <a href="#">London</a>
                          </h3>
                          <p>96 Properties</p>
                        </div>
                        <div className="new">New</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Popular places section end */}
      {/* Counters strat */}
      <div className="counters-1">
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-3 col-md-6 col-sm-6 border-l border-r">
              <div className="counter-box-1">
                <div className="icon">
                  <i className="flaticon-sale" />
                </div>
                <h1 className="counter">967</h1>
                <p>Listings For Sale</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 border-r">
              <div className="counter-box-1">
                <div className="icon">
                  <i className="flaticon-rent" />
                </div>
                <h1 className="counter">1276</h1>
                <p>Listings For Rent</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 border-r">
              <div className="counter-box-1">
                <div className="icon">
                  <i className="flaticon-user" />
                </div>
                <h1 className="counter">396</h1>
                <p>Agents</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 border-r">
              <div className="counter-box-1">
                <div className="icon">
                  <i className="flaticon-broker" />
                </div>
                <h1 className="counter">177</h1>
                <p>Brokers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Counters end */}
      {/* Our team start */}
      <div className="our-team comon-slick content-area">
        <div className="container">
          {/* Main title */}
          <div className="main-title-3">
            <p>Our Professionals</p>
            <h1>
              Meet Our <span>Team</span>
            </h1>
          </div>
          <div
            className="slick row comon-slick-inner"
            data-slick='{"slidesToShow": 4, "responsive":[{"breakpoint": 1024,"settings":{"slidesToShow": 2}}, {"breakpoint": 768,"settings":{"slidesToShow": 1}}]}'
          >
            <div className="item slide-box">
              <div className="team-3">
                <div className="member-thumb">
                  <img
                    src="img/avatar/avatar-11.png"
                    alt="team-3"
                    className="img-fluid"
                  />
                </div>
                <div className="member-content-wrap">
                  <div className="member-name-designation">
                    <h4 className="member-name">
                      <a href="agent-detail.html">Michelle Nelson</a>
                    </h4>
                    <p className="member-designation">Support Manager</p>
                  </div>
                </div>
                <div className="team-hover-content">
                  <div className="member-thumb">
                    <img
                      src="img/avatar/avatar-11.png"
                      alt="team-3"
                      className="img-fluid"
                    />
                  </div>
                  <div className="member-name-designation">
                    <h4 className="member-name">
                      <a href="agent-detail.html">Michelle Nelson</a>
                    </h4>
                    <p className="member-designation">Support Manager</p>
                  </div>
                  <div className="member-socials">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-google-plus" />
                    </a>
                    <a href="#">
                      <i className="fa fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="item slide-box">
              <div className="team-3">
                <div className="member-thumb">
                  <img
                    src="img/avatar/avatar-12.png"
                    alt="team-3"
                    className="img-fluid"
                  />
                </div>
                <div className="member-content-wrap">
                  <div className="member-name-designation">
                    <h4 className="member-name">
                      <a href="agent-detail.html">Michelle Nelson</a>
                    </h4>
                    <p className="member-designation">Support Manager</p>
                  </div>
                </div>
                <div className="team-hover-content">
                  <div className="member-thumb">
                    <img
                      src="img/avatar/avatar-12.png"
                      alt="team-3"
                      className="img-fluid"
                    />
                  </div>
                  <div className="member-name-designation">
                    <h4 className="member-name">
                      <a href="agent-detail.html">Michelle Nelson</a>
                    </h4>
                    <p className="member-designation">Support Manager</p>
                  </div>
                  <div className="member-socials">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-google-plus" />
                    </a>
                    <a href="#">
                      <i className="fa fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="item slide-box">
              <div className="team-3">
                <div className="member-thumb">
                  <img
                    src="img/avatar/avatar-14.png"
                    alt="team-3"
                    className="img-fluid"
                  />
                </div>
                <div className="member-content-wrap">
                  <div className="member-name-designation">
                    <h4 className="member-name">
                      <a href="agent-detail.html">Martin Smith</a>
                    </h4>
                    <p className="member-designation">Office Manager</p>
                  </div>
                </div>
                <div className="team-hover-content">
                  <div className="member-thumb">
                    <img
                      src="img/avatar/avatar-14.png"
                      alt="team-3"
                      className="img-fluid"
                    />
                  </div>
                  <div className="member-name-designation">
                    <h4 className="member-name">
                      <a href="agent-detail.html">Martin Smith</a>
                    </h4>
                    <p className="member-designation">Office Manager</p>
                  </div>
                  <div className="member-socials">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-google-plus" />
                    </a>
                    <a href="#">
                      <i className="fa fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="item slide-box">
              <div className="team-3">
                <div className="member-thumb">
                  <img
                    src="img/avatar/avatar-13.png"
                    alt="team-3"
                    className="img-fluid"
                  />
                </div>
                <div className="member-content-wrap">
                  <div className="member-name-designation">
                    <h4 className="member-name">
                      <a href="agent-detail.html">Karen Paran</a>
                    </h4>
                    <p className="member-designation">Web Developer</p>
                  </div>
                </div>
                <div className="team-hover-content">
                  <div className="member-thumb">
                    <img
                      src="img/avatar/avatar-13.png"
                      alt="team-3"
                      className="img-fluid"
                    />
                  </div>
                  <div className="member-name-designation">
                    <h4 className="member-name">
                      <a href="agent-detail.html">Karen Paran</a>
                    </h4>
                    <p className="member-designation">Web Developer</p>
                  </div>
                  <div className="member-socials">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-google-plus" />
                    </a>
                    <a href="#">
                      <i className="fa fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="item slide-box">
              <div className="team-3">
                <div className="member-thumb">
                  <img
                    src="img/avatar/avatar-14.png"
                    alt="team-3"
                    className="img-fluid"
                  />
                </div>
                <div className="member-content-wrap">
                  <div className="member-name-designation">
                    <h4 className="member-name">
                      <a href="agent-detail.html">Martin Smith</a>
                    </h4>
                    <p className="member-designation">Office Manager</p>
                  </div>
                </div>
                <div className="team-hover-content">
                  <div className="member-thumb">
                    <img
                      src="img/avatar/avatar-14.png"
                      alt="team-3"
                      className="img-fluid"
                    />
                  </div>
                  <div className="member-name-designation">
                    <h4 className="member-name">
                      <a href="agent-detail.html">Martin Smith</a>
                    </h4>
                    <p className="member-designation">Office Manager</p>
                  </div>
                  <div className="member-socials">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-google-plus" />
                    </a>
                    <a href="#">
                      <i className="fa fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our team end */}
      {/* Testimonial 4 start */}
      <div className="testimonial-4 comon-slick content-area-5">
        <div className="container">
          {/* Main title */}
          <div className="main-title-3">
            <p>Testimonials</p>
            <h1>
              Customer <span>Reviews</span>
            </h1>
          </div>
          <div
            className="slick row comon-slick-inner"
            data-slick='{"slidesToShow": 2, "responsive":[{"breakpoint": 1024,"settings":{"slidesToShow": 2}}, {"breakpoint": 768,"settings":{"slidesToShow": 1}}]}'
          >
            <div className="item slide-box">
              <div className="testimonial-info">
                <div className="user-section">
                  <div className="user-thumb">
                    <img src="img/avatar/avatar-1.png" alt="testimonial" />
                    <div className="icon">
                      <i className="fa fa-quote-right" />
                    </div>
                  </div>
                  <div className="user-name">
                    <h5>Michelle Nelson</h5>
                    <p>Consultant</p>
                  </div>
                </div>
                <div className="text">
                  <p>
                    "Bitcoin is one of the most important inventions in all of
                    human history. For the first time ever, anyone can send or
                    receive any amount of money .Lorem ipsum dolor sit amet
                    consectetur adipisicing elit."
                  </p>
                </div>
              </div>
            </div>
            <div className="item slide-box">
              <div className="testimonial-info">
                <div className="user-section">
                  <div className="user-thumb">
                    <img src="img/avatar/avatar-2.png" alt="testimonial" />
                    <div className="icon">
                      <i className="fa fa-quote-right" />
                    </div>
                  </div>
                  <div className="user-name">
                    <h5>Anne Brady</h5>
                    <p>Web Designer, Uk</p>
                  </div>
                </div>
                <div className="text">
                  <p>
                    "Bitcoin is one of the most important inventions in all of
                    human history. For the first time ever, anyone can send or
                    receive any amount of money .Lorem ipsum dolor sit amet
                    consectetur adipisicing elit."
                  </p>
                </div>
              </div>
            </div>
            <div className="item slide-box">
              <div className="testimonial-info">
                <div className="user-section">
                  <div className="user-thumb">
                    <img src="img/avatar/avatar-3.png" alt="testimonial" />
                    <div className="icon">
                      <i className="fa fa-quote-right" />
                    </div>
                  </div>
                  <div className="user-name">
                    <h5>Carolyn Stone</h5>
                    <p>Designer</p>
                  </div>
                </div>
                <div className="text">
                  <p>
                    "Bitcoin is one of the most important inventions in all of
                    human history. For the first time ever, anyone can send or
                    receive any amount of money .Lorem ipsum dolor sit amet
                    consectetur adipisicing elit."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial 4 end */}
      {/* Blog start */}
      <div className="blog comon-slick content-area">
        <div className="container">
          {/* Main title */}
          <div className="main-title-3">
            <p>Our Blog</p>
            <h1>
              Latest <span>News</span>
            </h1>
          </div>
          <div
            className="slick row comon-slick-inner"
            data-slick='{"slidesToShow": 3, "responsive":[{"breakpoint": 1024,"settings":{"slidesToShow": 2}}, {"breakpoint": 768,"settings":{"slidesToShow": 1}}]}'
          >
            <div className="item slide-box">
              <div className="blog-2">
                <div className="blog-image">
                  <img
                    src="img/blog/blog-1.png"
                    alt="blog"
                    className="img-fluid bp"
                  />
                  <div className="date-box">
                    <span>21</span>Feb
                  </div>
                  <div className="profile-user">
                    <img src="img/avatar/avatar-1.png" alt="user" />
                  </div>
                </div>
                <div className="detail">
                  <div className="post-meta clearfix">
                    <ul>
                      <li>
                        <strong>
                          <a href="#">Maria Blank</a>
                        </strong>
                      </li>
                      <li className="float-right mr-0">
                        <a href="#">
                          <i className="flaticon-comment" />
                        </a>
                        17K
                      </li>
                      <li className="float-right">
                        <a href="#">
                          <i className="flaticon-calendar" />
                        </a>
                        73k
                      </li>
                    </ul>
                  </div>
                  <h4>
                    <a href="blog-single-sidebar-right.html">
                      Selling Your Real House
                    </a>
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                  </p>
                </div>
              </div>
            </div>
            <div className="item slide-box">
              <div className="blog-2">
                <div className="blog-image">
                  <img
                    src="img/blog/blog-2.png"
                    alt="blog"
                    className="img-fluid bp"
                  />
                  <div className="date-box">
                    <span>21</span>Feb
                  </div>
                  <div className="profile-user">
                    <img src="img/avatar/avatar-2.png" alt="user" />
                  </div>
                </div>
                <div className="detail">
                  <div className="post-meta clearfix">
                    <ul>
                      <li>
                        <strong>
                          <a href="#">Karen Paran</a>
                        </strong>
                      </li>
                      <li className="float-right mr-0">
                        <a href="#">
                          <i className="flaticon-comment" />
                        </a>
                        17K
                      </li>
                      <li className="float-right">
                        <a href="#">
                          <i className="flaticon-calendar" />
                        </a>
                        73k
                      </li>
                    </ul>
                  </div>
                  <h4>
                    <a href="blog-single-sidebar-right.html">
                      Buying a Best House
                    </a>
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                  </p>
                </div>
              </div>
            </div>
            <div className="item slide-box">
              <div className="blog-2">
                <div className="blog-image">
                  <img
                    src="img/blog/blog-3.png"
                    alt="blog"
                    className="img-fluid bp"
                  />
                  <div className="date-box">
                    <span>21</span>Feb
                  </div>
                  <div className="profile-user">
                    <img src="img/avatar/avatar-3.png" alt="user" />
                  </div>
                </div>
                <div className="detail">
                  <div className="post-meta clearfix">
                    <ul>
                      <li>
                        <strong>
                          <a href="#">Brandon Miller</a>
                        </strong>
                      </li>
                      <li className="float-right mr-0">
                        <a href="#">
                          <i className="flaticon-comment" />
                        </a>
                        17K
                      </li>
                      <li className="float-right">
                        <a href="#">
                          <i className="flaticon-calendar" />
                        </a>
                        73k
                      </li>
                    </ul>
                  </div>
                  <h4>
                    <a href="blog-single-sidebar-right.html">
                      Selling Your Real House
                    </a>
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                  </p>
                </div>
              </div>
            </div>
            <div className="item slide-box">
              <div className="blog-2">
                <div className="blog-image">
                  <img
                    src="img/blog/blog-3.png"
                    alt="blog"
                    className="img-fluid bp"
                  />
                  <div className="date-box">
                    <span>21</span>Feb
                  </div>
                  <div className="profile-user">
                    <img src="img/avatar/avatar-3.png" alt="user" />
                  </div>
                </div>
                <div className="detail">
                  <div className="post-meta clearfix">
                    <ul>
                      <li>
                        <strong>
                          <a href="#">Brandon Miller</a>
                        </strong>
                      </li>
                      <li className="float-right mr-0">
                        <a href="#">
                          <i className="flaticon-comment" />
                        </a>
                        17K
                      </li>
                      <li className="float-right">
                        <a href="#">
                          <i className="flaticon-calendar" />
                        </a>
                        73k
                      </li>
                    </ul>
                  </div>
                  <h4>
                    <a href="blog-single-sidebar-right.html">
                      Find Your Best Real Estate
                    </a>
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog end */}
      {/* Intro section start */}
      <div className="intro-section">
        <div className="intro-section-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-md-7 col-sm-12">
                <h3>Do You Have Questions ?</h3>
              </div>
              <div className="col-lg-3 col-md-5 col-sm-12">
                <a href="contact.html" className="btn-7">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Intro section end */}
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

export default Home;

<div>
  <div className="banner" id="banner">
    <div id="bannerCarousole" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item banner-max-height active item-bg">
          <div id="boxgallery" className="boxgallery" data-effect="effect-1">
            <div className="panel">
              <img src="img/banner/img-3.png" alt="Image 1" />
            </div>
            <div className="panel">
              <img src="img/banner/img-2.png" alt="Image 1" />
            </div>
            <div className="panel">
              <img src="img/banner/img-1.png" alt="Image 1" />
            </div>
            <div className="panel">
              <img src="img/banner/img-5.png" alt="Image 1" />
            </div>
          </div>
        </div>
        <div className="carousel-caption d-flex h-100">
          <div className="carousel-content container">
            <div className="text-center bi-3">
              <div className="clearfix">
                <h3>Find Your Amazing Home</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod
                </p>
              </div>
              <div className="clearfix" />
              <div className="inline-search-area isa-4 clearfix">
                <div className="row">
                  <div className="col-xl-2 col-lg-2 col-sm-4 col-6 search-col">
                    <select
                      className="selectpicker search-fields"
                      name="any-status"
                    >
                      <option>Any Status</option>
                      <option>For Rent</option>
                      <option>For Sale</option>
                    </select>
                  </div>
                  <div className="col-xl-2 col-lg-2 col-sm-4 col-6 search-col">
                    <select
                      className="selectpicker search-fields"
                      name="all-type"
                    >
                      <option>All Type</option>
                      <option>Apartments</option>
                      <option>Shop</option>
                      <option>Restaurant</option>
                      <option>Villa</option>
                    </select>
                  </div>
                  <div className="col-xl-2 col-lg-2 col-sm-4 col-6 search-col">
                    <select
                      className="selectpicker search-fields"
                      name="bedrooms"
                    >
                      <option>Bedrooms</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                  <div className="col-xl-2 col-lg-2 col-sm-4 col-6 search-col">
                    <select
                      className="selectpicker search-fields"
                      name="bathrooms"
                    >
                      <option>Bathrooms</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                  <div className="col-xl-2 col-lg-2 col-sm-4 col-6 search-col">
                    <select
                      className="selectpicker search-fields"
                      name="location"
                    >
                      <option>location</option>
                      <option>United States</option>
                      <option>American Samoa</option>
                      <option>Belgium</option>
                      <option>Canada</option>
                    </select>
                  </div>
                  <div className="col-xl-2 col-lg-2 col-sm-4 col-6 search-col">
                    <button className="btn button-theme btn-search w-100">
                      <strong>Search</strong>
                    </button>
                  </div>
                </div>
              </div>
              <div className="inline-search-area isa-3 clearfix">
                <div className="row clearfix">
                  <div className="col-md-6 col-sm-6 col-6">
                    <select
                      className="selectpicker search-fields"
                      name="any-status"
                    >
                      <option>Any Status</option>
                      <option>For Rent</option>
                      <option>For Sale</option>
                    </select>
                  </div>
                  <div className="col-md-6 col-sm-6 col-6">
                    <select
                      className="selectpicker search-fields"
                      name="all-type"
                    >
                      <option>All Type</option>
                      <option>Apartments</option>
                      <option>Shop</option>
                      <option>Restaurant</option>
                      <option>Villa</option>
                    </select>
                  </div>
                  <div className="col-md-6 col-sm-6 col-6">
                    <select
                      className="selectpicker search-fields"
                      name="bedrooms"
                    >
                      <option>Bedrooms</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                  <div className="col-md-6 col-sm-6 col-6">
                    <select
                      className="selectpicker search-fields"
                      name="bathrooms"
                    >
                      <option>Bathrooms</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                  <div className="col-md-6 col-sm-6 col-6">
                    <select
                      className="selectpicker search-fields mb-0"
                      name="location"
                    >
                      <option>location</option>
                      <option>United States</option>
                      <option>American Samoa</option>
                      <option>Belgium</option>
                      <option>Canada</option>
                    </select>
                  </div>
                  <div className="col-md-6 col-sm-6 col-6">
                    <button className="btn button-theme btn-search w-100 mb-0">
                      <strong>Search</strong>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Banner end */}
  {/* Search Section start */}
  <div
    className="search-section search-area pb-hediin-12 bg-grea animated fadeInDown"
    id="search-style-1"
  >
    <div className="container">
      <div className="search-section-area">
        <div className="search-area-inner">
          <div className="search-contents">
            <form method="GET">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                  <div className="form-group">
                    <select
                      className="selectpicker search-fields"
                      name="any-status"
                    >
                      <option>Any Status</option>
                      <option>For Rent</option>
                      <option>For Sale</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                  <div className="form-group">
                    <select
                      className="selectpicker search-fields"
                      name="all-type"
                    >
                      <option>All Type</option>
                      <option>Apartments</option>
                      <option>Shop</option>
                      <option>Restaurant</option>
                      <option>Villa</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                  <div className="form-group">
                    <select
                      className="selectpicker search-fields"
                      name="bedrooms"
                    >
                      <option>Bedrooms</option>
                      <option>Bedrooms 1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                  <div className="form-group">
                    <select
                      className="selectpicker search-fields"
                      name="bathrooms"
                    >
                      <option>Bathrooms</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                  <div className="form-group">
                    <select
                      className="selectpicker search-fields"
                      name="location"
                    >
                      <option>location</option>
                      <option>United States</option>
                      <option>American Samoa</option>
                      <option>Belgium</option>
                      <option>Canada</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                  <div className="form-group">
                    <button className="search-button">Search</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Search Section end */}
  {/* Featured Properties start */}
  <div className="featured-properties content-area-12">
    <div className="container">
      {/* Main title */}
      <div className="main-title-3">
        <p>Best Rent Properties</p>
        <h1>
          Featured <span>Properties</span>
        </h1>
      </div>
      {/* Slick slider area start */}
      <div className="slick-slider-area">
        <div
          className="row slick-carousel"
          data-slick='{"slidesToShow": 3, "responsive":[{"breakpoint": 1024,"settings":{"slidesToShow": 2}}, {"breakpoint": 768,"settings":{"slidesToShow": 1}}]}'
        >
          <div className="slick-slide-item">
            <div className="property-box-6">
              <div className="property-photo">
                <img
                  src="img/properties/properties-11.png"
                  alt="photo"
                  className="img-fluid w-100"
                />
                <div className="tag">For Sale</div>
              </div>
              <div className="property-inner">
                <div className="property-info">
                  <h4 className="properties-name">
                    <a href="properties-details.html">Relaxing Apartment</a>
                  </h4>
                  <p className="location">
                    <a href="properties-details.html">
                      <i className="fa fa-map-marker" /> 123 Kathal St. Tampa
                      City
                    </a>
                  </p>
                  <ul className="facilities-list clearfix">
                    <li>
                      <i className="flaticon-bed" /> 4800 sq ft
                    </li>
                    <li>
                      <i className="flaticon-bathroom" /> 3 Beds
                    </li>
                    <li>
                      <i className="flaticon-area" /> 2 Baths
                    </li>
                    <li>
                      <i className="flaticon-car" /> 1 Garage
                    </li>
                    <li>
                      <i className="flaticon-car" /> 3 Balcony
                    </li>
                    <li>
                      <i className="flaticon-sell" /> security
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team-hover-content">
                <div className="property-photo">
                  <img
                    src="img/properties/properties-11.png"
                    alt="photo"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="property-info">
                  <h4 className="properties-name">
                    <a href="properties-details.html">Relaxing Apartment</a>
                  </h4>
                  <p className="location">
                    <a href="properties-details.html">
                      <i className="fa fa-map-marker" /> 123 Kathal St. Tampa
                      City
                    </a>
                  </p>
                </div>
                <ul className="member-socials clearfix">
                  <li>
                    <i className="flaticon-bed" /> 4800 sq ft
                  </li>
                  <li>
                    <i className="flaticon-bathroom" /> 3 Beds
                  </li>
                  <li>
                    <i className="flaticon-area" /> 2 Baths
                  </li>
                  <li>
                    <i className="flaticon-car" /> 1 Garage
                  </li>
                  <li>
                    <i className="flaticon-car" /> 3 Balcony
                  </li>
                  <li>
                    <i className="flaticon-sell" /> security
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="slick-slide-item">
            <div className="property-box-6">
              <div className="property-photo">
                <img
                  src="img/properties/properties-14.png"
                  alt="photo"
                  className="img-fluid w-100"
                />
                <div className="tag">For Rent</div>
              </div>
              <div className="property-inner">
                <div className="property-info">
                  <h4 className="properties-name">
                    <a href="properties-details.html">Two storey modern flat</a>
                  </h4>
                  <p className="location">
                    <a href="properties-details.html">
                      <i className="fa fa-map-marker" /> 123 Kathal St. Tampa
                      City
                    </a>
                  </p>
                  <ul className="facilities-list clearfix">
                    <li>
                      <i className="flaticon-bed" /> 4800 sq ft
                    </li>
                    <li>
                      <i className="flaticon-bathroom" /> 3 Beds
                    </li>
                    <li>
                      <i className="flaticon-area" /> 2 Baths
                    </li>
                    <li>
                      <i className="flaticon-car" /> 1 Garage
                    </li>
                    <li>
                      <i className="flaticon-car" /> 3 Balcony
                    </li>
                    <li>
                      <i className="flaticon-sell" /> security
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team-hover-content">
                <div className="property-photo">
                  <img
                    src="img/properties/properties-14.png"
                    alt="photo"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="property-info">
                  <h4 className="properties-name">
                    <a href="properties-details.html">Two storey modern flat</a>
                  </h4>
                  <p className="location">
                    <a href="properties-details.html">
                      <i className="fa fa-map-marker" /> 123 Kathal St. Tampa
                      City
                    </a>
                  </p>
                </div>
                <ul className="member-socials clearfix">
                  <li>
                    <i className="flaticon-bed" /> 4800 sq ft
                  </li>
                  <li>
                    <i className="flaticon-bathroom" /> 3 Beds
                  </li>
                  <li>
                    <i className="flaticon-area" /> 2 Baths
                  </li>
                  <li>
                    <i className="flaticon-car" /> 1 Garage
                  </li>
                  <li>
                    <i className="flaticon-car" /> 3 Balcony
                  </li>
                  <li>
                    <i className="flaticon-sell" /> security
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="slick-slide-item">
            <div className="property-box-6">
              <div className="property-photo">
                <img
                  src="img/properties/properties-13.png"
                  alt="photo"
                  className="img-fluid w-100"
                />
                <div className="tag">For Sale</div>
              </div>
              <div className="property-inner">
                <div className="property-info">
                  <h4 className="properties-name">
                    <a href="properties-details.html">Office Apartment</a>
                  </h4>
                  <p className="location">
                    <a href="properties-details.html">
                      <i className="fa fa-map-marker" /> 123 Kathal St. Tampa
                      City
                    </a>
                  </p>
                  <ul className="facilities-list clearfix">
                    <li>
                      <i className="flaticon-bed" /> 4800 sq ft
                    </li>
                    <li>
                      <i className="flaticon-bathroom" /> 3 Beds
                    </li>
                    <li>
                      <i className="flaticon-area" /> 2 Baths
                    </li>
                    <li>
                      <i className="flaticon-car" /> 1 Garage
                    </li>
                    <li>
                      <i className="flaticon-car" /> 3 Balcony
                    </li>
                    <li>
                      <i className="flaticon-sell" /> security
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team-hover-content">
                <div className="property-photo">
                  <img
                    src="img/properties/properties-13.png"
                    alt="photo"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="property-info">
                  <h4 className="properties-name">
                    <a href="properties-details.html">Office Apartment</a>
                  </h4>
                  <p className="location">
                    <a href="properties-details.html">
                      <i className="fa fa-map-marker" /> 123 Kathal St. Tampa
                      City
                    </a>
                  </p>
                </div>
                <ul className="member-socials clearfix">
                  <li>
                    <i className="flaticon-bed" /> 4800 sq ft
                  </li>
                  <li>
                    <i className="flaticon-bathroom" /> 3 Beds
                  </li>
                  <li>
                    <i className="flaticon-area" /> 2 Baths
                  </li>
                  <li>
                    <i className="flaticon-car" /> 1 Garage
                  </li>
                  <li>
                    <i className="flaticon-car" /> 3 Balcony
                  </li>
                  <li>
                    <i className="flaticon-sell" /> security
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="slick-slide-item">
            <div className="property-box-6">
              <div className="property-photo">
                <img
                  src="img/properties/properties-12.png"
                  alt="photo"
                  className="img-fluid w-100"
                />
                <div className="tag">For Rent</div>
              </div>
              <div className="property-inner">
                <div className="property-info">
                  <h4 className="properties-name">
                    <a href="properties-details.html">Modern Family Home</a>
                  </h4>
                  <p className="location">
                    <a href="properties-details.html">
                      <i className="fa fa-map-marker" /> 123 Kathal St. Tampa
                      City
                    </a>
                  </p>
                  <ul className="facilities-list clearfix">
                    <li>
                      <i className="flaticon-bed" /> 4800 sq ft
                    </li>
                    <li>
                      <i className="flaticon-bathroom" /> 3 Beds
                    </li>
                    <li>
                      <i className="flaticon-area" /> 2 Baths
                    </li>
                    <li>
                      <i className="flaticon-car" /> 1 Garage
                    </li>
                    <li>
                      <i className="flaticon-car" /> 3 Balcony
                    </li>
                    <li>
                      <i className="flaticon-sell" /> security
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team-hover-content">
                <div className="property-photo">
                  <img
                    src="img/properties/properties-12.png"
                    alt="photo"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="property-info">
                  <h4 className="properties-name">
                    <a href="properties-details.html">Modern Family Home</a>
                  </h4>
                  <p className="location">
                    <a href="properties-details.html">
                      <i className="fa fa-map-marker" /> 123 Kathal St. Tampa
                      City
                    </a>
                  </p>
                </div>
                <ul className="member-socials clearfix">
                  <li>
                    <i className="flaticon-bed" /> 4800 sq ft
                  </li>
                  <li>
                    <i className="flaticon-bathroom" /> 3 Beds
                  </li>
                  <li>
                    <i className="flaticon-area" /> 2 Baths
                  </li>
                  <li>
                    <i className="flaticon-car" /> 1 Garage
                  </li>
                  <li>
                    <i className="flaticon-car" /> 3 Balcony
                  </li>
                  <li>
                    <i className="flaticon-sell" /> security
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="slick-slide-item">
            <div className="property-box-6">
              <div className="property-photo">
                <img
                  src="img/properties/properties-15.png"
                  alt="photo"
                  className="img-fluid w-100"
                />
                <div className="tag">For Sale</div>
              </div>
              <div className="property-inner">
                <div className="property-info">
                  <h4 className="properties-name">
                    <a href="properties-details.html">Relaxing Apartment</a>
                  </h4>
                  <p className="location">
                    <a href="properties-details.html">
                      <i className="fa fa-map-marker" /> 123 Kathal St. Tampa
                      City
                    </a>
                  </p>
                  <ul className="facilities-list clearfix">
                    <li>
                      <i className="flaticon-bed" /> 4800 sq ft
                    </li>
                    <li>
                      <i className="flaticon-bathroom" /> 3 Beds
                    </li>
                    <li>
                      <i className="flaticon-area" /> 2 Baths
                    </li>
                    <li>
                      <i className="flaticon-car" /> 1 Garage
                    </li>
                    <li>
                      <i className="flaticon-car" /> 3 Balcony
                    </li>
                    <li>
                      <i className="flaticon-sell" /> security
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team-hover-content">
                <div className="property-photo">
                  <img
                    src="img/properties/properties-15.png"
                    alt="photo"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="property-info">
                  <h4 className="properties-name">
                    <a href="properties-details.html">Relaxing Apartment</a>
                  </h4>
                  <p className="location">
                    <a href="properties-details.html">
                      <i className="fa fa-map-marker" /> 123 Kathal St. Tampa
                      City
                    </a>
                  </p>
                </div>
                <ul className="member-socials clearfix">
                  <li>
                    <i className="flaticon-bed" /> 4800 sq ft
                  </li>
                  <li>
                    <i className="flaticon-bathroom" /> 3 Beds
                  </li>
                  <li>
                    <i className="flaticon-area" /> 2 Baths
                  </li>
                  <li>
                    <i className="flaticon-car" /> 1 Garage
                  </li>
                  <li>
                    <i className="flaticon-car" /> 3 Balcony
                  </li>
                  <li>
                    <i className="flaticon-sell" /> security
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="slick-slide-item">
            <div className="property-box-6">
              <div className="property-photo">
                <img
                  src="img/properties/properties-10.png"
                  alt="photo"
                  className="img-fluid w-100"
                />
                <div className="tag">For Rent</div>
              </div>
              <div className="property-inner">
                <div className="property-info">
                  <h4 className="properties-name">
                    <a href="properties-details.html">Luxury Villa</a>
                  </h4>
                  <p className="location">
                    <a href="properties-details.html">
                      <i className="fa fa-map-marker" /> 123 Kathal St. Tampa
                      City
                    </a>
                  </p>
                  <ul className="facilities-list clearfix">
                    <li>
                      <i className="flaticon-bed" /> 4800 sq ft
                    </li>
                    <li>
                      <i className="flaticon-bathroom" /> 3 Beds
                    </li>
                    <li>
                      <i className="flaticon-area" /> 2 Baths
                    </li>
                    <li>
                      <i className="flaticon-car" /> 1 Garage
                    </li>
                    <li>
                      <i className="flaticon-car" /> 3 Balcony
                    </li>
                    <li>
                      <i className="flaticon-sell" /> security
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team-hover-content">
                <div className="property-photo">
                  <img
                    src="img/properties/properties-10.png"
                    alt="photo"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="property-info">
                  <h4 className="properties-name">
                    <a href="properties-details.html">Luxury Villa</a>
                  </h4>
                  <p className="location">
                    <a href="properties-details.html">
                      <i className="fa fa-map-marker" /> 123 Kathal St. Tampa
                      City
                    </a>
                  </p>
                </div>
                <ul className="member-socials clearfix">
                  <li>
                    <i className="flaticon-bed" /> 4800 sq ft
                  </li>
                  <li>
                    <i className="flaticon-bathroom" /> 3 Beds
                  </li>
                  <li>
                    <i className="flaticon-area" /> 2 Baths
                  </li>
                  <li>
                    <i className="flaticon-car" /> 1 Garage
                  </li>
                  <li>
                    <i className="flaticon-car" /> 3 Balcony
                  </li>
                  <li>
                    <i className="flaticon-sell" /> security
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="slick-btn">
          <div className="slick-prev slick-arrow-buton-2 sab-4">
            <i className="fa fa-angle-left" />
          </div>
          <div className="slick-next slick-arrow-buton-2 sab-3">
            <i className="fa fa-angle-right" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Featured Properties end */}
  {/* Services start */}
  <div className="services content-area bg-grea-3">
    <div className="container">
      {/* Main title */}
      <div className="main-title-3">
        <p>Our Expertise</p>
        <h1>
          Why Choose <span>Us</span>
        </h1>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-12">
          <div className="service-info-3 d-flex">
            <div className="icon">
              <i className="flaticon-user" />
            </div>
            <div className="detail align-self-center">
              <h3>Personalized Service Possible</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <a className="read-more" href="services.html">
                Read more...
              </a>
              <h4>01</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="service-info-3 d-flex">
            <div className="icon">
              <i className="flaticon-empire-state-building" />
            </div>
            <div className="detail align-self-center">
              <h3>Luxury Real Estate Experts</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever standard dummy text ever
              </p>
              <a className="read-more" href="services.html">
                Read more...
              </a>
              <h4>01</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="service-info-3 d-flex">
            <div className="icon">
              <i className="flaticon-discount" />
            </div>
            <div className="detail align-self-center">
              <h3>Modern Building For Rent $ Sell</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <a className="read-more" href="services.html">
                Read more...
              </a>
              <h4>01</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Services end */}
  {/* Popular places section strat */}
  <div className="popular-places-section content-area-7">
    <div className="container">
      {/* Main title */}
      <div className="main-title-3">
        <p>Find Your City</p>
        <h1>
          Most Popular <span>Places</span>
        </h1>
      </div>
      <div className="row">
        <div className="col-lg-5 col-md-12 col-sm-12">
          <div className="popular-places">
            <div className="popular-places-inner">
              <div className="popular-places-overflow">
                <div className="popular-places-photo">
                  <div className="popular-places-photodd">
                    <img
                      className="img-fluid big-img w-100"
                      src="img/popular-places/popular-places-6.png"
                      alt="properties"
                    />
                  </div>
                </div>
                <div className="info">
                  <h3>
                    <a href="properties-details.html">United States</a>
                  </h3>
                  <p>84 Properties</p>
                </div>
                <div className="new">New</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-md-12 col-sm-12">
          <div className="row">
            <div className="col-sm-6">
              <div className="popular-places">
                <div className="popular-places-inner">
                  <div className="popular-places-overflow">
                    <div className="popular-places-photo">
                      <img
                        className="img-fluid w-100"
                        src="img/popular-places/popular-places-3.png"
                        alt="properties"
                      />
                    </div>
                    <div className="info">
                      <h3>
                        <a href="properties-details.html">United States</a>
                      </h3>
                      <p>84 Properties</p>
                    </div>
                    <div className="new">New</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="popular-places">
                <div className="popular-places-inner">
                  <div className="popular-places-overflow">
                    <div className="popular-places-photo">
                      <img
                        className="img-fluid w-100"
                        src="img/popular-places/popular-places-4.png"
                        alt="properties"
                      />
                    </div>
                    <div className="info">
                      <h3>
                        <a href="properties-details.html">California</a>
                      </h3>
                      <p>57 Properties</p>
                    </div>
                    <div className="new">New</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="popular-places">
                <div className="popular-places-inner">
                  <div className="popular-places-overflow">
                    <div className="popular-places-photo w-100">
                      <img
                        className="img-fluid"
                        src="img/popular-places/popular-places-1.png"
                        alt="properties"
                      />
                    </div>
                    <div className="info">
                      <h3>
                        <a href="properties-details.html">Rome</a>
                      </h3>
                      <p>84 Properties</p>
                    </div>
                    <div className="new">New</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="popular-places">
                <div className="popular-places-inner">
                  <div className="popular-places-overflow">
                    <div className="popular-places-photo w-100">
                      <img
                        className="img-fluid"
                        src="img/popular-places/popular-places-2.png"
                        alt="properties"
                      />
                    </div>
                    <div className="info">
                      <h3>
                        <a href="#">London</a>
                      </h3>
                      <p>96 Properties</p>
                    </div>
                    <div className="new">New</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Popular places section end */}
  {/* Counters strat */}
  <div className="counters-1">
    <div className="container">
      <div className="row g-0">
        <div className="col-lg-3 col-md-6 col-sm-6 border-l border-r">
          <div className="counter-box-1">
            <div className="icon">
              <i className="flaticon-sale" />
            </div>
            <h1 className="counter">967</h1>
            <p>Listings For Sale</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 border-r">
          <div className="counter-box-1">
            <div className="icon">
              <i className="flaticon-rent" />
            </div>
            <h1 className="counter">1276</h1>
            <p>Listings For Rent</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 border-r">
          <div className="counter-box-1">
            <div className="icon">
              <i className="flaticon-user" />
            </div>
            <h1 className="counter">396</h1>
            <p>Agents</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 border-r">
          <div className="counter-box-1">
            <div className="icon">
              <i className="flaticon-broker" />
            </div>
            <h1 className="counter">177</h1>
            <p>Brokers</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Counters end */}
  {/* Our team start */}
  <div className="our-team comon-slick content-area">
    <div className="container">
      {/* Main title */}
      <div className="main-title-3">
        <p>Our Professionals</p>
        <h1>
          Meet Our <span>Team</span>
        </h1>
      </div>
      <div
        className="slick row comon-slick-inner"
        data-slick='{"slidesToShow": 4, "responsive":[{"breakpoint": 1024,"settings":{"slidesToShow": 2}}, {"breakpoint": 768,"settings":{"slidesToShow": 1}}]}'
      >
        <div className="item slide-box">
          <div className="team-3">
            <div className="member-thumb">
              <img
                src="img/avatar/avatar-11.png"
                alt="team-3"
                className="img-fluid"
              />
            </div>
            <div className="member-content-wrap">
              <div className="member-name-designation">
                <h4 className="member-name">
                  <a href="agent-detail.html">Michelle Nelson</a>
                </h4>
                <p className="member-designation">Support Manager</p>
              </div>
            </div>
            <div className="team-hover-content">
              <div className="member-thumb">
                <img
                  src="img/avatar/avatar-11.png"
                  alt="team-3"
                  className="img-fluid"
                />
              </div>
              <div className="member-name-designation">
                <h4 className="member-name">
                  <a href="agent-detail.html">Michelle Nelson</a>
                </h4>
                <p className="member-designation">Support Manager</p>
              </div>
              <div className="member-socials">
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa fa-google-plus" />
                </a>
                <a href="#">
                  <i className="fa fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="item slide-box">
          <div className="team-3">
            <div className="member-thumb">
              <img
                src="img/avatar/avatar-12.png"
                alt="team-3"
                className="img-fluid"
              />
            </div>
            <div className="member-content-wrap">
              <div className="member-name-designation">
                <h4 className="member-name">
                  <a href="agent-detail.html">Michelle Nelson</a>
                </h4>
                <p className="member-designation">Support Manager</p>
              </div>
            </div>
            <div className="team-hover-content">
              <div className="member-thumb">
                <img
                  src="img/avatar/avatar-12.png"
                  alt="team-3"
                  className="img-fluid"
                />
              </div>
              <div className="member-name-designation">
                <h4 className="member-name">
                  <a href="agent-detail.html">Michelle Nelson</a>
                </h4>
                <p className="member-designation">Support Manager</p>
              </div>
              <div className="member-socials">
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa fa-google-plus" />
                </a>
                <a href="#">
                  <i className="fa fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="item slide-box">
          <div className="team-3">
            <div className="member-thumb">
              <img
                src="img/avatar/avatar-14.png"
                alt="team-3"
                className="img-fluid"
              />
            </div>
            <div className="member-content-wrap">
              <div className="member-name-designation">
                <h4 className="member-name">
                  <a href="agent-detail.html">Martin Smith</a>
                </h4>
                <p className="member-designation">Office Manager</p>
              </div>
            </div>
            <div className="team-hover-content">
              <div className="member-thumb">
                <img
                  src="img/avatar/avatar-14.png"
                  alt="team-3"
                  className="img-fluid"
                />
              </div>
              <div className="member-name-designation">
                <h4 className="member-name">
                  <a href="agent-detail.html">Martin Smith</a>
                </h4>
                <p className="member-designation">Office Manager</p>
              </div>
              <div className="member-socials">
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa fa-google-plus" />
                </a>
                <a href="#">
                  <i className="fa fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="item slide-box">
          <div className="team-3">
            <div className="member-thumb">
              <img
                src="img/avatar/avatar-13.png"
                alt="team-3"
                className="img-fluid"
              />
            </div>
            <div className="member-content-wrap">
              <div className="member-name-designation">
                <h4 className="member-name">
                  <a href="agent-detail.html">Karen Paran</a>
                </h4>
                <p className="member-designation">Web Developer</p>
              </div>
            </div>
            <div className="team-hover-content">
              <div className="member-thumb">
                <img
                  src="img/avatar/avatar-13.png"
                  alt="team-3"
                  className="img-fluid"
                />
              </div>
              <div className="member-name-designation">
                <h4 className="member-name">
                  <a href="agent-detail.html">Karen Paran</a>
                </h4>
                <p className="member-designation">Web Developer</p>
              </div>
              <div className="member-socials">
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa fa-google-plus" />
                </a>
                <a href="#">
                  <i className="fa fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="item slide-box">
          <div className="team-3">
            <div className="member-thumb">
              <img
                src="img/avatar/avatar-14.png"
                alt="team-3"
                className="img-fluid"
              />
            </div>
            <div className="member-content-wrap">
              <div className="member-name-designation">
                <h4 className="member-name">
                  <a href="agent-detail.html">Martin Smith</a>
                </h4>
                <p className="member-designation">Office Manager</p>
              </div>
            </div>
            <div className="team-hover-content">
              <div className="member-thumb">
                <img
                  src="img/avatar/avatar-14.png"
                  alt="team-3"
                  className="img-fluid"
                />
              </div>
              <div className="member-name-designation">
                <h4 className="member-name">
                  <a href="agent-detail.html">Martin Smith</a>
                </h4>
                <p className="member-designation">Office Manager</p>
              </div>
              <div className="member-socials">
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa fa-google-plus" />
                </a>
                <a href="#">
                  <i className="fa fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Our team end */}
  {/* Testimonial 4 start */}
  <div className="testimonial-4 comon-slick content-area-5">
    <div className="container">
      {/* Main title */}
      <div className="main-title-3">
        <p>Testimonials</p>
        <h1>
          Customer <span>Reviews</span>
        </h1>
      </div>
      <div
        className="slick row comon-slick-inner"
        data-slick='{"slidesToShow": 2, "responsive":[{"breakpoint": 1024,"settings":{"slidesToShow": 2}}, {"breakpoint": 768,"settings":{"slidesToShow": 1}}]}'
      >
        <div className="item slide-box">
          <div className="testimonial-info">
            <div className="user-section">
              <div className="user-thumb">
                <img src="img/avatar/avatar-1.png" alt="testimonial" />
                <div className="icon">
                  <i className="fa fa-quote-right" />
                </div>
              </div>
              <div className="user-name">
                <h5>Michelle Nelson</h5>
                <p>Consultant</p>
              </div>
            </div>
            <div className="text">
              <p>
                "Bitcoin is one of the most important inventions in all of human
                history. For the first time ever, anyone can send or receive any
                amount of money .Lorem ipsum dolor sit amet consectetur
                adipisicing elit."
              </p>
            </div>
          </div>
        </div>
        <div className="item slide-box">
          <div className="testimonial-info">
            <div className="user-section">
              <div className="user-thumb">
                <img src="img/avatar/avatar-2.png" alt="testimonial" />
                <div className="icon">
                  <i className="fa fa-quote-right" />
                </div>
              </div>
              <div className="user-name">
                <h5>Anne Brady</h5>
                <p>Web Designer, Uk</p>
              </div>
            </div>
            <div className="text">
              <p>
                "Bitcoin is one of the most important inventions in all of human
                history. For the first time ever, anyone can send or receive any
                amount of money .Lorem ipsum dolor sit amet consectetur
                adipisicing elit."
              </p>
            </div>
          </div>
        </div>
        <div className="item slide-box">
          <div className="testimonial-info">
            <div className="user-section">
              <div className="user-thumb">
                <img src="img/avatar/avatar-3.png" alt="testimonial" />
                <div className="icon">
                  <i className="fa fa-quote-right" />
                </div>
              </div>
              <div className="user-name">
                <h5>Carolyn Stone</h5>
                <p>Designer</p>
              </div>
            </div>
            <div className="text">
              <p>
                "Bitcoin is one of the most important inventions in all of human
                history. For the first time ever, anyone can send or receive any
                amount of money .Lorem ipsum dolor sit amet consectetur
                adipisicing elit."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial 4 end */}
  {/* Blog start */}
  <div className="blog comon-slick content-area">
    <div className="container">
      {/* Main title */}
      <div className="main-title-3">
        <p>Our Blog</p>
        <h1>
          Latest <span>News</span>
        </h1>
      </div>
      <div
        className="slick row comon-slick-inner"
        data-slick='{"slidesToShow": 3, "responsive":[{"breakpoint": 1024,"settings":{"slidesToShow": 2}}, {"breakpoint": 768,"settings":{"slidesToShow": 1}}]}'
      >
        <div className="item slide-box">
          <div className="blog-2">
            <div className="blog-image">
              <img
                src="img/blog/blog-1.png"
                alt="blog"
                className="img-fluid bp"
              />
              <div className="date-box">
                <span>21</span>Feb
              </div>
              <div className="profile-user">
                <img src="img/avatar/avatar-1.png" alt="user" />
              </div>
            </div>
            <div className="detail">
              <div className="post-meta clearfix">
                <ul>
                  <li>
                    <strong>
                      <a href="#">Maria Blank</a>
                    </strong>
                  </li>
                  <li className="float-right mr-0">
                    <a href="#">
                      <i className="flaticon-comment" />
                    </a>
                    17K
                  </li>
                  <li className="float-right">
                    <a href="#">
                      <i className="flaticon-calendar" />
                    </a>
                    73k
                  </li>
                </ul>
              </div>
              <h4>
                <a href="blog-single-sidebar-right.html">
                  Selling Your Real House
                </a>
              </h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the
              </p>
            </div>
          </div>
        </div>
        <div className="item slide-box">
          <div className="blog-2">
            <div className="blog-image">
              <img
                src="img/blog/blog-2.png"
                alt="blog"
                className="img-fluid bp"
              />
              <div className="date-box">
                <span>21</span>Feb
              </div>
              <div className="profile-user">
                <img src="img/avatar/avatar-2.png" alt="user" />
              </div>
            </div>
            <div className="detail">
              <div className="post-meta clearfix">
                <ul>
                  <li>
                    <strong>
                      <a href="#">Karen Paran</a>
                    </strong>
                  </li>
                  <li className="float-right mr-0">
                    <a href="#">
                      <i className="flaticon-comment" />
                    </a>
                    17K
                  </li>
                  <li className="float-right">
                    <a href="#">
                      <i className="flaticon-calendar" />
                    </a>
                    73k
                  </li>
                </ul>
              </div>
              <h4>
                <a href="blog-single-sidebar-right.html">Buying a Best House</a>
              </h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the
              </p>
            </div>
          </div>
        </div>
        <div className="item slide-box">
          <div className="blog-2">
            <div className="blog-image">
              <img
                src="img/blog/blog-3.png"
                alt="blog"
                className="img-fluid bp"
              />
              <div className="date-box">
                <span>21</span>Feb
              </div>
              <div className="profile-user">
                <img src="img/avatar/avatar-3.png" alt="user" />
              </div>
            </div>
            <div className="detail">
              <div className="post-meta clearfix">
                <ul>
                  <li>
                    <strong>
                      <a href="#">Brandon Miller</a>
                    </strong>
                  </li>
                  <li className="float-right mr-0">
                    <a href="#">
                      <i className="flaticon-comment" />
                    </a>
                    17K
                  </li>
                  <li className="float-right">
                    <a href="#">
                      <i className="flaticon-calendar" />
                    </a>
                    73k
                  </li>
                </ul>
              </div>
              <h4>
                <a href="blog-single-sidebar-right.html">
                  Selling Your Real House
                </a>
              </h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the
              </p>
            </div>
          </div>
        </div>
        <div className="item slide-box">
          <div className="blog-2">
            <div className="blog-image">
              <img
                src="img/blog/blog-3.png"
                alt="blog"
                className="img-fluid bp"
              />
              <div className="date-box">
                <span>21</span>Feb
              </div>
              <div className="profile-user">
                <img src="img/avatar/avatar-3.png" alt="user" />
              </div>
            </div>
            <div className="detail">
              <div className="post-meta clearfix">
                <ul>
                  <li>
                    <strong>
                      <a href="#">Brandon Miller</a>
                    </strong>
                  </li>
                  <li className="float-right mr-0">
                    <a href="#">
                      <i className="flaticon-comment" />
                    </a>
                    17K
                  </li>
                  <li className="float-right">
                    <a href="#">
                      <i className="flaticon-calendar" />
                    </a>
                    73k
                  </li>
                </ul>
              </div>
              <h4>
                <a href="blog-single-sidebar-right.html">
                  Find Your Best Real Estate
                </a>
              </h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Blog end */}
  {/* Intro section start */}
  <div className="intro-section">
    <div className="intro-section-inner">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-7 col-sm-12">
            <h3>Do You Have Questions ?</h3>
          </div>
          <div className="col-lg-3 col-md-5 col-sm-12">
            <a href="contact.html" className="btn-7">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Intro section end */}
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
                  Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.
                  Donec a consectetur nulla. Nulla posuere sapien vitae lectus
                  suscipit, et pulvinar nisi tincidunt. Aliquam erat.
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
      <input type="search" defaultValue="" placeholder="type keyword(s) here" />
      <button type="submit" className="btn btn-sm button-theme">
        Search
      </button>
    </form>
  </div>
</div>;
