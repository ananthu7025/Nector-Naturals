import React from 'react'
import { Link } from 'react-router-dom'

const HomeAbout = () => {
  return (
    <section className="organic-farm sec-space-top light-bg">
  <img alt='img' src="img/extra/sec-img-1.png" className="left-bg-img" />
  <img alt='img' src="img/extra/sec-img-2.png" className="center-bg-img" />
  <div className="container rel-div">
    <div className="title-wrap">
      <h2 className="section-title">
        {" "}
        <span style={{color:"black"}} className="light-font">we are </span>{" "}
        <strong style={{color:"black"}}>
          organic Honey Makers <img src="img/icons/logo-icon.png" alt="logo" />{" "}
        </strong>{" "}
      </h2>
      <h4 className="sub-title">
        {" "}
        <span> ABOUT Nectar Naturals </span>{" "}
      </h4>
      <p>
      "Our honey shop offers the finest quality, pure and natural honey, sourced from local beekeepers. Each jar is carefully hand-selected to ensure its unique flavor and richness. From rich and creamy wildflower honey to tangy and zesty citrus honey, we have a variety of options to suit every taste bud. Visit us today to taste the difference and take home a jar of the purest honey nature has to offer."
      </p>
    </div>
    <div className="row">
      <div className="col-md-3 col-sm-6 text-center">
        <div className="feature-wrap">
          <img src="img/extra/feature-1.png" alt='img' />
          <h3 className="title-1 ptb-15">
            {" "}
            <span className="light-font">fresh from </span>{" "}
            <strong>farm</strong>{" "}
          </h3>
          <p>
          Emphasize on offering the finest quality, pure and natural honey.
          </p>
          <Link to="/"  className="sm-bnt-wht">
            Read More
          </Link>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 text-center">
        <div className="feature-wrap">
          <img src="img/extra/feature-2.png" alt='img' />
          <h3 className="title-1 ptb-15">
            {" "}
            <span className="light-font"> Sourced</span>{" "}
            <strong>Locally</strong>{" "}
          </h3>
          <p>
          Highlight that the honey is sourced from local beekeepers, promoting sustainability and supporting local communities.
          </p>
          <Link to="/"  className="sm-bnt-wht">
            Read More
          </Link>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 text-center">
        <div className="feature-wrap">
          <img src="img/extra/feature-3.png" alt='img' />
          <h3 className="title-1 ptb-15">
            {" "}
            <span className="light-font">Hand</span>{" "}
            <strong>Selected</strong>{" "}
          </h3>
          <p>
          Mention that each jar is carefully hand-selected to ensure its unique flavor and richness.
          </p>
          <Link to="/"  className="sm-bnt-wht">
            Read More
          </Link>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 text-center">
        <div className="feature-wrap">
          <img src="img/extra/feature-4.png" alt='img' />
          <h3 className="title-1 ptb-15">
            {" "}
            <span className="light-font">Variety  </span> <strong>of Options</strong>
          </h3>
          <p>
          Offer a range of honey options, from wildflower to citrus, to cater to different taste preferences
          </p>
          <Link to="/"  className="sm-bnt-wht">
            Read More
          </Link>
        </div>
      </div>
    </div>
    <div className="rel-div feature-img">
      <img src="img/about.png" alt='img' />
    </div>
  </div>
</section>

  )
}

export default HomeAbout