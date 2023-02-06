import React from 'react'
import HomeSlider from '../../components/sliders/HomeSlider'
import ProductSlider from '../../components/sliders/ProductSlider'
import './Home.css'
import HomeAbout from './HomeAbout'
import HomeCategorey from './HomeCategorey'
import HomeDeals from './HomeDeals'
import HomeNewsletter from './HomeNewsletter'
import Testimonial from './Testimonial'
const Home = () => {
  return (
    <>
      <HomeSlider />
      <section className="organic-all sec-space-bottom">
        <div className="pattern">
          <img alt='img' src="img/icons/white-pattern.png" />
        </div>
        <div className="section-icon">
          <img alt='img' src="img/bg.jpg" />
        </div>
        <div className="container">
          <div className="organic-wrap">
            <img className="logo-img" alt='img' src="img/logo/logo-1.png" />
            <div className="tabs-box">
              <ul className="theme-tabs">
                <li className="">
                  <a href="#product-tab-1" data-toggle="tab">
                    {" "}
                    <span className="light-font">organic</span>{" "}
                    <strong>honey </strong>{" "}
                  </a>
                </li>
                <li className="active">
                  <a href="#product-tab-2" data-toggle="tab">
                    {" "}
                    <span className="light-font">Raw </span>{" "}
                    <strong>Honey </strong>{" "}
                  </a>
                </li>
                <li className="">
                  <a href="#product-tab-3" data-toggle="tab">
                    {" "}
                    <span className="light-font">Fresh</span>{" "}
                    <strong>Honey-bees </strong>{" "}
                  </a>
                </li>
                <li className="">
                  <a href="#product-tab-4" data-toggle="tab">
                    {" "}
                    <span className="light-font">Honey-</span>{" "}
                    <strong>Accessories</strong>{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <ProductSlider />
        </div>
      </section>
      <HomeAbout />
      <HomeCategorey />
      <section className="deals sec-space light-bg">
        <img alt='img' src="img/extra/sec-img-3.png" className="right-bg-img" />
        <img alt='img' src="img/extra/sec-img-4.png" className="left-bg-img" />
        <div className="container">
          <div className="row">
            <div className="col-sm-5 text-right">
              <h4 className="sub-title"> Nector Naturals DEAL OF THE DAY </h4>
              <h2 className="section-title">
                {" "}
                <span style={{ color: "black" }} className="">organic goods </span>{" "}
                <strong style={{ color: "green" }} >50% </strong>
                <span style={{ color: "black" }} className="">off</span>{" "}
              </h2>
            </div>
            <div className="col-sm-2 text-center no-padding">
              <img alt='img' src="img/deal.png" />
            </div>
            <div className="col-sm-5">
              <p>
                "Honey lovers rejoice! For a limited time only, enjoy 20% off on all our raw honey varieties.
              </p>
            </div>
          </div>
        </div>
      </section>
      <HomeDeals />
      <HomeNewsletter />
      <main>
        <section className="container">
          <div children="title">
            <h2>Our Reviews</h2>
            <div className="underline"></div>
          </div>
          <Testimonial />
        </section>
      </main>
    </>
  )
}

export default Home