import React from 'react'
import { Link } from 'react-router-dom'

const HomeCategorey = () => {
  return (
    <section className="organic-product sec-space">
  <div className="container">
    <div className="row sec-space-top">
      <div className="col-lg-6 col-sm-12">
        <div className="row">
          <div className="col-sm-4">
            <div className="organic-prod">
              <img src="img/extra/organic-1.png" alt="" />
              <span className="divider" />
              <h3 className="title-1">
                {" "}
                <Link to="/">
                  {" "}
                  <span className="light-font">Honey </span>{" "}
                  <strong>Raw</strong>{" "}
                </Link>{" "}
              </h3>
              <Link to="/" className="clr-txt font-2">
                {" "}
                <i> 10+ items </i>{" "}
              </Link>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="organic-prod">
              <img src="img/extra/organic-2.png" alt="" />
              <span className="divider" />
              <h3 className="title-1">
                {" "}
                <Link to="/">
                  {" "}
                  <span className="light-font">Honey  </span>{" "}
                  <strong>Accessories</strong>{" "}
                </Link>{" "}
              </h3>
              <Link to="/" className="clr-txt font-2">
                {" "}
                <i> 15 items </i>{" "}
              </Link>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="organic-prod">
              <img src="img/extra/organic-3.png" alt="" />
              <span className="divider" />
              <h3 className="title-1">
                {" "}
                <Link to="/">
                  {" "}
                  <span className="light-font">Honey </span>{" "}
                  <strong>bee's</strong>{" "}
                </Link>{" "}
              </h3>
              <Link to="/" className="clr-txt font-2">
                {" "}
                <i> 5+ varieties </i>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-sm-12">
        <div className="organic-prod-info">
          <h4 className="sub-title"> FRESH FROM OUR FARM </h4>
          <h2 className="section-title ptb-15">
            {" "}
            <span className="light-font">20+ </span>{" "}
            <strong>Raw Honey </strong>{" "}
            <span className="light-font"> &amp; </span>{" "}
            <strong> lot more</strong>
          </h2>
          <p className="fsz-16">
          At our honey shop, we believe in bringing the freshest and purest honey straight from the farm to your table. Our honey is sourced directly from local beekeepers who take great care in nurturing their hives and producing only the finest quality honey. Our carefully selected selection of honey includes unique varieties such as wildflower, clover, and orange blossom, each with its own distinct flavor and health benefits. So, come visit us today and taste the difference that fresh from the farm honey can make in your life!
          </p>
        </div>
      </div>
    </div>
    <div className="row sec-space-top">
      <div className="col-lg-6 col-sm-12">
        <div className="organic-prod-info">
          <h4 className="sub-title"> "The Hive's Essential Collection" </h4>
          <h2 className="section-title ptb-15">
            {" "}
            <span className="light-font">115+ </span>{" "}
            <strong>organic juices </strong>{" "}
            <span className="light-font"> and </span>{" "}
            <strong> organic tea</strong>
          </h2>
          <p className="fsz-16">
          "At Nectar Naturals, we are passionate about honey and its many health benefits. We believe that everyone deserves access to pure, unprocessed honey, which is why we source our honey directly from local beekeepers. Our mission is to bring the best quality honey to your table and help you live a healthier life."
          </p>
        </div>
      </div>
      <div className="col-lg-6 col-sm-12">
        <div className="row">
          <div className="col-sm-4">
            <div className="organic-prod">
              <img src="img/extra/organic-4.png" alt="" />
              <span className="divider" />
              <h3 className="title-1">
                {" "}
                <Link to="/">
                  {" "}
                  <span className="light-font">HONEY</span>{" "}
                  <strong> HAMPERS</strong>{" "}
                </Link>{" "}
              </h3>
              <Link to="/" className="clr-txt font-2">
                {" "}
                <i> 6+ items </i>{" "}
              </Link>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="organic-prod">
              <img src="img/extra/organic-5.png" alt="" />
              <span className="divider" />
              <h3 className="title-1">
                {" "}
                <Link to="/">
                  {" "}
                  <span className="light-font">VALUE </span>{" "}
                  <strong>COMBOS</strong>{" "}
                </Link>{" "}
              </h3>
              <Link to="/" className="clr-txt font-2">
                {" "}
                <i> 20+ items </i>{" "}
              </Link>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="organic-prod">
              <img src="img/extra/organic-6.png" alt="" />
              <span className="divider" />
              <h3 className="title-1">
                {" "}
                <Link to="/">
                  {" "}
                  <span className="light-font">Honey</span>{" "}
                  <strong>Medicines</strong>{" "}
                </Link>{" "}
              </h3>
              <Link to="/" className="clr-txt font-2">
                {" "}
                <i> 5+ items </i>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default HomeCategorey