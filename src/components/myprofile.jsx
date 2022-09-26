import Breadcrum from "./breadcrum";
const Myprofile = () => {
  return (
    <div>
      <div className="dashboard">
        <div className="container-fluid">
          <div className="row">
            <div className="dashboard-nav">
              <div className="dashboard-inner">
                <h4>Main</h4>
                <ul>
                  <li>
                    <a href="dashboard.html">
                      <i className="flaticon-dashboard" /> Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="messages.html">
                      <i className="flaticon-mail" /> Messages{" "}
                      <span className="nav-tag">6</span>
                    </a>
                  </li>
                  <li>
                    <a href="bookings.html">
                      <i className="flaticon-calendar" /> Bookings
                    </a>
                  </li>
                </ul>
                <h4>Listings</h4>
                <ul>
                  <li>
                    <a href="my-properties.html">
                      <i className="flaticon-empire-state-building" />
                      My Properties
                    </a>
                  </li>
                  <li>
                    <a href="my-invoices.html">
                      <i className="flaticon-bill" />
                      My Invoices
                    </a>
                  </li>
                  <li>
                    <a href="favorited-properties.html">
                      <i className="flaticon-heart" />
                      Favorited Properties
                    </a>
                  </li>
                  <li>
                    <a href="submit-property.html">
                      <i className="flaticon-plus" />
                      Submit Property
                    </a>
                  </li>
                </ul>
                <h4>Account</h4>
                <ul>
                  <li className="active">
                    <a href="my-profile.html">
                      <i className="flaticon-male" />
                      My Profile
                    </a>
                  </li>
                  <li>
                    <a href="index.html">
                      <i className="flaticon-logout" />
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="dashboard-content">
              <div className="dashboard-header clearfix">
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <h4>My Profile</h4>
                  </div>
                  <div className="col-sm-12 col-md-7">
                    <Breadcrum />
                  </div>
                </div>
              </div>
              <div className="dashboard-list">
                <h3 className="heading">Profile Details</h3>
                <div className="dashboard-message contact-2 bdr clearfix">
                  <div className="row">
                    <div className="col-lg-3 col-md-3">
                      {/* Edit profile photo */}
                      <div className="edit-profile-photo">
                        <img
                          src="img/avatar/avatar-6.png"
                          alt="profile-photo"
                          className="img-fluid"
                        />
                        <div className="change-photo-btn">
                          <div className="photoUpload clip-home">
                            <span>
                              <i className="fa fa-upload" />
                            </span>
                            <input type="file" className="upload" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-9">
                      <form
                        action="#"
                        method="GET"
                        encType="multipart/form-data"
                      >
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group phone">
                              <label
                                htmlFor="inputname1"
                                className="form-label"
                              >
                                Your Name
                              </label>
                              <input
                                type="text"
                                name="name"
                                className="form-control"
                                id="inputname1"
                                placeholder="John Deo"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group title">
                              <label
                                htmlFor="inputtitle1"
                                className="form-label"
                              >
                                Your title
                              </label>
                              <input
                                type="text"
                                name="title"
                                className="form-control"
                                id="inputtitle1"
                                placeholder="Your Title"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group phone">
                              <label
                                htmlFor="inputphone1"
                                className="form-label"
                              >
                                Phone
                              </label>
                              <input
                                type="text"
                                name="phone"
                                className="form-control"
                                id="inputphone1"
                                placeholder="Phone"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group email">
                              <label
                                htmlFor="inputEmail1"
                                className="form-label"
                              >
                                Email
                              </label>
                              <input
                                type="email"
                                name="email"
                                className="form-control"
                                id="inputEmail1"
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="form-group message">
                              <label
                                htmlFor="exampleFormControlTextarea1"
                                className="form-label"
                              >
                                Personal info
                              </label>
                              <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows={3}
                                placeholder="Personal info"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="dashboard-list">
                    <h3 className="heading">Change Password</h3>
                    <div className="dashboard-message contact-2">
                      <form
                        action="#"
                        method="GET"
                        encType="multipart/form-data"
                      >
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-group password">
                              <label
                                htmlFor="exampleInputPassword1"
                                className="form-label"
                              >
                                Current Password
                              </label>
                              <input
                                type="password"
                                name="current-password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Current Password"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group password">
                              <label
                                htmlFor="exampleInputPassword2"
                                className="form-label"
                              >
                                New Password
                              </label>
                              <input
                                type="password"
                                name="new-password"
                                className="form-control"
                                id="exampleInputPassword2"
                                placeholder="New Password"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group password">
                              <label
                                htmlFor="exampleInputPassword3"
                                className="form-label"
                              >
                                Confirm New Password
                              </label>
                              <input
                                type="password"
                                name="confirm-new-password"
                                className="form-control"
                                id="exampleInputPassword3"
                                placeholder="Confirm New Password"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="send-btn">
                              <button type="submit" className="btn-6">
                                Change Password
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="dashboard-list">
                    <h3 className="heading">Socials</h3>
                    <div className="dashboard-message contact-2">
                      <form
                        action="#"
                        method="GET"
                        encType="multipart/form-data"
                      >
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-group facebook">
                              <label
                                htmlFor="exampleInputfacebook1"
                                className="form-label"
                              >
                                Facebook
                              </label>
                              <input
                                type="text"
                                name="facebook"
                                className="form-control"
                                id="exampleInputfacebook1"
                                placeholder="https://www.facebook.com"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group twitter">
                              <label
                                htmlFor="exampleInputtwitter1"
                                className="form-label"
                              >
                                Twitter
                              </label>
                              <input
                                type="text"
                                name="twitter"
                                className="form-control"
                                id="exampleInputtwitter1"
                                placeholder="https://twitter.com"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group vkontakte">
                              <label
                                htmlFor="exampleInputvkontakte1"
                                className="form-label"
                              >
                                Vkontakte
                              </label>
                              <input
                                type="text"
                                name="vkontakte"
                                className="form-control"
                                id="exampleInputvkontakte1"
                                placeholder="vk.com"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group whatsapp">
                              <label
                                htmlFor="exampleInputwhatsapp1"
                                className="form-label"
                              >
                                Whatsapp
                              </label>
                              <input
                                type="text"
                                name="vkontakte"
                                className="form-control"
                                id="exampleInputwhatsapp1"
                                placeholder="https://www.whatsapp.com"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="send-btn">
                              <button type="submit" className="btn-6">
                                Send Changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <p className="sub-banner-2 text-center">
                © 2021 Theme Vessel. Trademarks and brands are the property of
                their respective owners.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Dashbord end */}
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

export default Myprofile;
