import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb'

const ConfirmPassword = () => {
  return (
    <><Breadcrumb /><section className="account-page ptb-50">
          <div className="container">
              <div className="row">
                  <aside className="col-md-9 col-sm-8 ptb-15">
                      <div className="account-wrap">
                          <form className>
                              <div className="row">
                                  <div className="form-group col-sm-6">
                                      <label> * Password </label>
                                      <input type="password" className="form-control" required />
                                  </div>
                                  <div className="form-group col-sm-6">
                                      <label> * Password Confirm </label>
                                      <input type="password" className="form-control" required />
                                  </div>
                                  <div className="pt-15 col-sm-12">
                                      <button type="submit" className="theme-btn btn-black">
                                          {" "}
                                          <b> Update </b>{" "}
                                      </button>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </aside>
                  {/* Sidebar Starts */}
                  <aside className="col-md-3 col-sm-4">
                      <div className="widget-wrap">
                          <h2 className="widget-title">
                              {" "}
                              <span className="light-font">My</span> <strong>Account</strong>{" "}
                          </h2>
                          <div className="divider-full-1" />
                          <ul className="cate-widget">
                              <li className="active">
                                  {" "}
                                  <i className="fa fa-arrow-circle-o-right clr-txt" />{" "}
                                  <Link to="/" > My Account</Link>
                              </li>
                              <li>
                                  {" "}
                                  <i className="fa fa-arrow-circle-o-right clr-txt" />{" "}
                                  <Link to="/" > Change Password</Link>
                              </li>
                              <li>
                                  {" "}
                                  <i className="fa fa-arrow-circle-o-right clr-txt" />{" "}
                                  <Link to="/" href="order-history.html"> Order History</Link>
                              </li>
                              <li>
                                  {" "}
                                  <i className="fa fa-arrow-circle-o-right clr-txt" />{" "}
                                  <Link to="/" href="newsletter.html"> Newsletter</Link>
                              </li>
                          </ul>
                      </div>
                  </aside>
                  {/* Sidebar Ends */}
              </div>
          </div>
      </section></>


  )
}

export default ConfirmPassword