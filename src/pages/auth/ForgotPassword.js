import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'

const ForgotPassword = () => {
  return (
    <div>
        <Breadcrumb/>
    <section className="sec-space">
  <div className="container">
    <div className="col-sm-6 col-sm-offset-3 text-center">
      <div className="login-wrap">
        <h3 className="fsz-30">
          <span className="light-font">forgot </span> <strong>password </strong>
        </h3>
        <span className="divider-1" />
        <form className="login-form row pt-50">
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
              title
            />
          </div>
          <div className="form-group col-sm-12 pt-15">
            <button type="submit" className="theme-btn btn submit-btn">
              {" "}
              <b> Reset My Password </b>{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default ForgotPassword