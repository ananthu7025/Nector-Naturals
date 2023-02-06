import React from 'react'

const HomeNewsletter = () => {
  return (
    
    <section className="subscribe-wrap sec-space light-bg">
  <img alt="" src="img/extra/sec-img-5.png" className="right-bg-img" />

  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <h4 className="sub-title"> JOIN OUR NEWSLETTER </h4>
        <h2 className="fsz-35">
          {" "}
          <span className="light-font">subscribe </span>{" "}
          <strong> newsletter</strong>
        </h2>
      </div>
      <div className="col-md-8">
        <form className="newsletter-form row">
          <div className="form-group col-sm-8">
            <input
              className="form-control"
              placeholder="enter your email address"
              required=""
              type="text"
            />
          </div>
          <div className="form-group col-sm-4">
            <button className="theme-btn btn-block" type="submit">
              {" "}
              subscribe <i className="fa fa-long-arrow-right" />{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

  )
}

export default HomeNewsletter