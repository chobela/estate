import Breadcrum from "./breadcrum";
import { Link, Navigate } from "react-router-dom";
import { xContext } from "../context/userContext";
import React, { useContext, useState, useEffect } from "react";

const Submitproperty = () => {
  const ctx = useContext(xContext);
  console.log(ctx.loggedin);

  // if (ctx.loggedin == "0") {
  //   return <></>;
  // }
  return (
    <div>
      <div className="dashboard submit-property">
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
                  <li className="active">
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
                    <h4>Submit Property</h4>
                  </div>
                  <div className="col-sm-12 col-md-7">
                    <Breadcrum />
                  </div>
                </div>
              </div>
              <div className="submit-address dashboard-list">
                <form method="GET">
                  <h4 className="bg-grea-3">Basic Information</h4>
                  <div className="search-contents-sidebar">
                    <div className="row pad-20">
                      <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="form-group propertytitle">
                          <label
                            htmlFor="inputpropertytitle1"
                            className="form-label"
                          >
                            Property Title
                          </label>
                          <input
                            type="text"
                            name="propertytitle"
                            className="form-control"
                            id="inputpropertytitle1"
                            placeholder="Property Title"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="form-group">
                          <label>Status</label>
                          <select
                            className="selectpicker search-fields"
                            name="for-sale"
                          >
                            <option>For Sale</option>
                            <option>For Rent</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="form-group price">
                          <label htmlFor="inputpprice1" className="form-label">
                            Price
                          </label>
                          <input
                            type="text"
                            name="price"
                            className="form-control"
                            id="inputpprice1"
                            placeholder="Price"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="form-group area">
                          <label htmlFor="inputarea1" className="form-label">
                            Area/Location
                          </label>
                          <input
                            type="text"
                            name="area"
                            className="form-control"
                            id="inputarea1"
                            placeholder="SqFt"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="form-group">
                          <label>Rooms</label>
                          <select
                            className="selectpicker search-fields"
                            name={1}
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="form-group">
                          <label>Bathroom</label>
                          <select
                            className="selectpicker search-fields"
                            name={1}
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4 className="bg-grea-3">Location</h4>
                  <div className="row pad-20">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <div className="form-group address">
                        <label htmlFor="inputAddress1" className="form-label">
                          Address
                        </label>
                        <input
                          type="text"
                          name="address"
                          className="form-control"
                          id="inputAddress1"
                          placeholder="Address"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <div className="form-group">
                        <label>State</label>
                        <select
                          className="selectpicker search-fields"
                          name="choose-state"
                        >
                          <option>Choose State</option>
                          <option>Alabama</option>
                          <option>California</option>
                          <option>Florida</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <div className="form-group phone">
                        <label
                          htmlFor="inputpostalcode1"
                          className="form-label"
                        >
                          Postal Code
                        </label>
                        <input
                          type="text"
                          name="postalcode"
                          className="form-control"
                          id="inputpostalcode1"
                          placeholder="Postal Code"
                        />
                      </div>
                    </div>
                  </div>
                  <h4 className="bg-grea-3">Property Gallery</h4>
                  <div className="row pad-20">
                    <div className="col-lg-12">
                      <div id="myDropZone" className="dropzone dropzone-design">
                        <div className="dz-default dz-message">
                          <span>Drop files here to upload</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4 className="bg-grea-3">Detailed Information</h4>
                  <div className="row pad-20">
                    <div className="col-lg-12">
                      <div className="form-group message">
                        <textarea
                          name="message"
                          className="form-control"
                          rows={3}
                          placeholder="Detailed Information"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <h4 className="bg-grea-3">Features (optional)</h4>
                  <div className="row pad-20">
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                      <div className="checkbox checkbox-theme checkbox-circle">
                        <input id="checkbox1" type="checkbox" />
                        <label htmlFor="checkbox1">Free Parking</label>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                      <div className="checkbox checkbox-theme checkbox-circle">
                        <input id="checkbox2" type="checkbox" />
                        <label htmlFor="checkbox2">Air Condition</label>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                      <div className="checkbox checkbox-theme checkbox-circle">
                        <input id="checkbox4" type="checkbox" />
                        <label htmlFor="checkbox4">Swimming Pool</label>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                      <div className="checkbox checkbox-theme checkbox-circle">
                        <input id="checkbox5" type="checkbox" />
                        <label htmlFor="checkbox5">Laundry Room</label>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                      <div className="checkbox checkbox-theme checkbox-circle">
                        <input id="checkbox7" type="checkbox" />
                        <label htmlFor="checkbox7">Central Heating</label>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                      <div className="checkbox checkbox-theme checkbox-circle">
                        <input id="checkbox8" type="checkbox" />
                        <label htmlFor="checkbox8">Alarm</label>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                      <div className="checkbox checkbox-theme checkbox-circle">
                        <input id="checkbox3" type="checkbox" />
                        <label htmlFor="checkbox3">Places to seat</label>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                      <div className="checkbox checkbox-theme checkbox-circle">
                        <input id="checkbox6" type="checkbox" />
                        <label htmlFor="checkbox6">Window Covering</label>
                      </div>
                    </div>
                  </div>
                  <h4 className="bg-grea-3">Contact Details</h4>
                  <div className="row pad-20">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <div className="form-group title">
                        <label htmlFor="inputname1" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="inputname1"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <div className="form-group email">
                        <label htmlFor="inputEmail1" className="form-label">
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
                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <div className="form-group phone">
                        <label htmlFor="inputphone1" className="form-label">
                          Phone (optional)
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
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <button type="submit" className="btn-6">
                        Submit Property
                      </button>
                    </div>
                  </div>
                </form>
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
    </div>
  );
};

export default Submitproperty;
