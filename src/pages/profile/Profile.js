import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'

const Profile = () => {
  return (
    <>
    <Breadcrumb/>
  <section className="account-page ptb-50">
    <div className="container">
      <div className="row">
        <aside className="col-md-9 col-sm-8 ptb-15">
          <div className="account-wrap cart-box">
            <form className="gray-control">
              <div className="row">
                <div className="form-group col-sm-6">
                  <label> * First Name </label>
                  <input type="text" className="form-control" required="" />
                </div>
                <div className="form-group col-sm-6">
                  <label> * Last Name </label>
                  <input type="text" className="form-control" required="" />
                </div>
                <div className="form-group col-sm-6">
                  <label> * Email </label>
                  <input type="text" className="form-control" required="" />
                </div>
                <div className="form-group col-sm-6">
                  <label> Phone Number </label>
                  <input type="text" className="form-control" required="" />
                </div>
                <div className="form-group col-sm-6">
                  <label> Fax</label>
                  <input type="text" className="form-control" />
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
        <aside className="col-md-3 col-sm-4">
          <div className="widget-wrap">
            <h2 className="widget-title">
              {" "}
              <span className="light-font">
                My
              </span> <strong>Account</strong>{" "}
            </h2>
            <div className="divider-full-1" />
            <ul className="cate-widget">
              <li>
                {" "}
                <i className="fa fa-arrow-circle-o-right clr-txt" />{" "}
                <a href="account-information.html"> Account Information </a>
              </li>
              <li>
                {" "}
                <i className="fa fa-arrow-circle-o-right clr-txt" />{" "}
                <a href="cng-pw.html"> Change Password</a>
              </li>
              <li>
                {" "}
                <i className="fa fa-arrow-circle-o-right clr-txt" />{" "}
                <a href="order-history.html"> Order History</a>
              </li>
              <li>
                {" "}
                <i className="fa fa-arrow-circle-o-right clr-txt" />{" "}
                <a href="newsletter.html"> Newsletter</a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </section>
</>

  )
}

export default Profile