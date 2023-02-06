import React from 'react'
import { Link } from 'react-router-dom'

const HomeDeals = () => {
  return (
    <section className=" sec-space-bottom ">
  <div className="pattern">
    <img alt='img' src="img/icons/white-pattern.png" />
  </div>
  <div className="section-icon">
    <img alt='img' src="img/bg.jpg" />
    <div className="pt-15 icon">
      <i className="fa fa-star" />
      <i className="fa fa-star" />
      <i className="fa fa-star" />
      <span className="light-font"> a taste of </span>{" "}
      <strong>real honey</strong>
      <i className="fa fa-star" />
      <i className="fa fa-star" />
      <i className="fa fa-star" />
    </div>
  </div>
  <div className="container">
    {/* Random Products */}
  
    {/* Banner */}
    <div className="row">
      <div className="col-md-6">
        <div className="prod-banner green-banner">
          <h4 className="title">
            {" "}
            <span className="light-font"> FRESH FROM OUR FARM : </span>{" "}
            <strong> Raw Honey </strong>{" "}
          </h4>
          <div className="banner-box">
            <div className="banner-content">
              <h3 className="title-sec">Honey</h3>
              <h2 className="section-title">
                {" "}
                <span className="light-font">Raw</span>{" "}
                <strong>Honey</strong>{" "}
              </h2>
              <h4 className="sub-title"> 35% OFF IN JUNE-JULY </h4>
              <Link to="/"  className="btn">
                {" "}
                <span>
                  {" "}
                  shop now{" "}
                </span> <i className="fa fa-long-arrow-right" />{" "}
              </Link>
            </div>
          </div>
          <img src="" alt='img' className="top-img" />
          <img
            src="img/promo2.png"
            alt='img'
            className="bottom-img"
          />
        </div>
      </div>
      <div className="col-md-6">
        <div className="prod-banner orange-banner">
          <h4 className="title">
            {" "}
            <span className="light-font"> Honey Bees</span>{" "}
            <strong>Bees </strong>
          </h4>
          <div className="banner-box">
            <div className="banner-content">
              <h3 className="title-sec">Bee-Wax</h3>
              <h2 className="section-title">
                {" "}
                <span className="light-font">
                  ALL{" "}
                </span> <strong>Honey</strong>{" "}
              </h2>
              <h4 className="sub-title"> 35% OFF IN JUNE-JULY </h4>
              <Link to="/"  className="btn">
                {" "}
                <span>
                  {" "}
                  shop now{" "}
                </span> <i className="fa fa-long-arrow-right" />{" "}
              </Link>
            </div>
          </div>
          <img
            src="img/b1.png"
            alt='img'
            className="bottom-img"
          />
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default HomeDeals