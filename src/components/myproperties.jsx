import Breadcrum from "./breadcrum";

const Myproperties = () => {
  return (
    <>
      <div />
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
                  <li className="active">
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
                  <li>
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
                    <h4>My Properties</h4>
                  </div>
                  <div className="col-sm-12 col-md-7">
                    <Breadcrum />
                  </div>
                </div>
              </div>
              <div className="dashboard-list">
                <h3>My Properties List</h3>
                <table className="manage-table">
                  <tbody>
                    <tr className="responsive-table">
                      <td className="listing-photoo">
                        <img
                          src="img/properties/properties-1.png"
                          alt="listing-photo"
                          className="img-fluid"
                        />
                      </td>
                      <td className="title-container">
                        <h2>
                          <a href="#">Travel To England</a>
                        </h2>
                        <h5>
                          <i className="flaticon-pin" /> 123 Kathal St. Tampa
                          City,{" "}
                        </h5>
                        <h6 className="table-property-price">$900 / monthly</h6>
                      </td>
                      <td className="expire-date">4.01.2021</td>
                      <td className="action">
                        <a href="#">
                          <i className="fa fa-pencil" /> Edit
                        </a>
                        <a href="#">
                          <i className="fa  fa-eye-slash" /> Hide
                        </a>
                        <a href="#" className="delete">
                          <i className="fa fa-remove" /> Delete
                        </a>
                      </td>
                    </tr>
                    <tr className="responsive-table">
                      <td className="listing-photoo">
                        <img
                          src="img/properties/properties-2.png"
                          alt="listing-photo"
                          className="img-fluid"
                        />
                      </td>
                      <td className="title-container">
                        <h2>
                          <a href="#">Amazing Hotel</a>
                        </h2>
                        <h5>
                          <i className="flaticon-pin" /> 123 Kathal St. Tampa
                          City,{" "}
                        </h5>
                        <h6 className="table-property-price">$900 / monthly</h6>
                      </td>
                      <td className="expire-date">4.01.2021</td>
                      <td className="action">
                        <a href="#">
                          <i className="fa fa-pencil" /> Edit
                        </a>
                        <a href="#">
                          <i className="fa  fa-eye-slash" /> Hide
                        </a>
                        <a href="#" className="delete">
                          <i className="fa fa-remove" /> Delete
                        </a>
                      </td>
                    </tr>
                    <tr className="responsive-table">
                      <td className="listing-photoo">
                        <img
                          src="img/properties/properties-3.png"
                          alt="listing-photo"
                          className="img-fluid"
                        />
                      </td>
                      <td className="title-container">
                        <h2>
                          <a href="#">Royal Botanic Gardens Sydney</a>
                        </h2>
                        <h5>
                          <i className="flaticon-pin" /> 123 Kathal St. Tampa
                          City,{" "}
                        </h5>
                        <h6 className="table-property-price">$900 / monthly</h6>
                      </td>
                      <td className="expire-date">4.01.2021</td>
                      <td className="action ">
                        <a href="#">
                          <i className="fa fa-pencil" /> Edit
                        </a>
                        <a href="#">
                          <i className="fa  fa-eye-slash" /> Hide
                        </a>
                        <a href="#" className="delete">
                          <i className="fa fa-remove" /> Delete
                        </a>
                      </td>
                    </tr>
                    <tr className="responsive-table">
                      <td className="listing-photoo">
                        <img
                          src="img/properties/properties-1.png"
                          alt="listing-photo"
                          className="img-fluid"
                        />
                      </td>
                      <td className="title-container">
                        <h2>
                          <a href="#">Radisson hotel</a>
                        </h2>
                        <h5>
                          <i className="flaticon-pin" /> 123 Kathal St. Tampa
                          City,{" "}
                        </h5>
                        <h6 className="table-property-price">$900 / monthly</h6>
                      </td>
                      <td className="expire-date">4.01.2021</td>
                      <td className="action">
                        <a href="#">
                          <i className="fa fa-pencil" /> Edit
                        </a>
                        <a href="#">
                          <i className="fa  fa-eye-slash" /> Hide
                        </a>
                        <a href="#" className="delete">
                          <i className="fa fa-remove" /> Delete
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="sub-banner-2 text-center">
                © 2021 Theme Vessel. Trademarks and brands are the property of
                their respective owners.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Dashboard end */}
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

export default Myproperties;
