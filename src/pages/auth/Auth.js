import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb'

const Auth = () => {
  return (
    <><Breadcrumb /><section className="sec-space">
          <div className="container">
              {/* Login Starts */}
              <div className="row">
                  <div className="col-md-4 col-sm-5">
                      <div className="login-wrap">
                          <h3 className="fsz-25 ptb-15">
                              <span className="light-font">log in </span>{" "}
                              <strong>your account </strong>
                          </h3>
                          <p>
                              Log in to your account to discovery all great features in this
                              template.
                          </p>
                          <form className="login-form row pt-50">
                              <div className="form-group col-sm-12">
                                  <input
                                      required
                                      type="text"
                                      data-original-title="Name is required"
                                      className="form-control name input-your-name"
                                      placeholder="Username"
                                      name="cf_name"
                                      defaultValue
                                      data-toggle="tooltip"
                                      data-placement="bottom"
                                      title />
                              </div>
                              <div className="form-group col-sm-12">
                                  <input
                                      required
                                      type="text"
                                      data-original-title="Email is required"
                                      className="form-control email input-email"
                                      placeholder="Password"
                                      name="cf_email"
                                      defaultValue
                                      data-toggle="tooltip"
                                      data-placement="bottom"
                                      title />
                              </div>
                              <div className="form-group col-sm-12">
                                  <label className="checkbox-inline fsz-12">
                                      <input type="checkbox" defaultValue />{" "}
                                      <span> Keep me logged in </span>
                                  </label>
                                  <label className="forgot-pw fsz-12">
                                      {" "}
                                      <Link to="/" href="#" className="clr-txt-2 pw">
                                          {" "}
                                          Forgot your password ?{" "}
                                      </Link>{" "}
                                  </label>
                              </div>
                              <div className="form-group col-sm-12 pt-15">
                                  <button type="submit" className="theme-btn btn submit-btn">
                                      {" "}
                                      <b> LOGIN </b>{" "}
                                  </button>
                              </div>
                          </form>
                      </div>
                  </div>
                  <div className="col-md-8 col-sm-7">
                      <div className="register-wrap">
                          <h3 className="fsz-25 ptb-15">
                              <span className="light-font">Don't have an Account? </span>{" "}
                              <strong>Register Now </strong>
                          </h3>
                          <p>
                              By creating an account with our store, you will be able to move
                              through the checkout process faster, store multiple shipping
                              addresses, view and track your orders in your account and more.
                          </p>
                          <form className="register-form row  pt-50">
                              <div className="form-group col-md-6">
                                  <input
                                      required
                                      type="text"
                                      data-original-title="Login"
                                      className="form-control name input-your-name"
                                      placeholder="Name"
                                      name="cf_name"
                                      defaultValue
                                      data-toggle="tooltip"
                                      data-placement="bottom"
                                      title />
                              </div>
                              <div className="form-group col-md-6">
                                  <input
                                      required
                                      type="text"
                                      data-original-title="Email is required"
                                      className="form-control email input-email"
                                      placeholder="Email Address"
                                      name="cf_email"
                                      defaultValue
                                      data-toggle="tooltip"
                                      data-placement="bottom"
                                      title />
                              </div>
                              <div className="form-group col-md-6">
                                  <input
                                      required
                                      type="text"
                                      className="form-control website input-website"
                                      placeholder="Username"
                                      name="cf_website"
                                      defaultValue
                                      data-toggle="tooltip"
                                      data-placement="bottom"
                                      title />
                              </div>
                              <div className="form-group col-md-6">
                                  <input
                                      type="text"
                                      className="form-control website input-website"
                                      placeholder="Phone"
                                      name="cf_website"
                                      defaultValue
                                      data-toggle="tooltip"
                                      data-placement="bottom"
                                      title />
                              </div>
                              <div className="form-group col-md-6">
                                  <input
                                      required
                                      type="text"
                                      className="form-control website input-website"
                                      placeholder="Password"
                                      name="cf_website"
                                      defaultValue
                                      data-toggle="tooltip"
                                      data-placement="bottom"
                                      title />
                              </div>
                              <div className="form-group col-md-6">
                                  <input
                                      required
                                      type="text"
                                      className="form-control website input-website"
                                      placeholder="Re - Password"
                                      name="cf_website"
                                      defaultValue
                                      data-toggle="tooltip"
                                      data-placement="bottom"
                                      title />
                              </div>
                              <div className="form-group col-md-12 pt-15">
                                  <button type="submit" className="btn theme-btn-2">
                                      {" "}
                                      <b> REGISTER NOW </b>{" "}
                                  </button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
              {/* / Login Ends */}
          </div>
      </section></>

  )
}

export default Auth