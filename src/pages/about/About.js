import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb'

const About = () => {
    return (
        <>
            <Breadcrumb />
            <section className="organic-farm-2 sec-space-bottom">
                <img
                    alt='img'
                    src="img/extra/sec-img-7.png"
                    className="left-bottom-img"
                />
                <img alt='img' src="img/extra/sec-img-8.png" className="right-top-img" />
                <div className="pattern">
                    <img alt='img' src="img/icons/white-pattern.png" />
                </div>
                <div className="section-icon">
                    <img alt='img' src="img/bg.jpg" />
                    <div className="ptb-15 icon">
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
                <div className="container rel-div">
                    <div className="row">
                        <div className=" text-center xs-text">
                            <h2 className="section-title">
                                {" "}
                                <span className="light-font">we are </span>{" "}
                                <strong>
                                    organic farmfood <img src="img/icons/logo-icon.png" alt='img' />{" "}
                                </strong>{" "}
                            </h2>
                            <h4 className="sub-title"> ABOUT Nector Naturals </h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-6 text-center">
                            <div className="feature-wrap">
                                <img src="img/extra/feature-1.png" alt='img' />
                                <h3 className="title-1 ptb-15">
                                    {" "}
                                    <span className="light-font">fresh from </span>{" "}
                                    <strong> Farm</strong>{" "}
                                </h3>
                                <p>
                                    Emphasize on offering the finest quality, pure and natural honey.

                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 text-center">
                            <div className="feature-wrap">
                                <img src="img/extra/feature-2.png" alt='img' />
                                <h3 className="title-1 ptb-15">
                                    {" "}
                                    <span className="light-font"> Sourced</span>{" "}
                                    <strong> Locally</strong>{" "}
                                </h3>
                                <p>
                                    Highlight that the honey is sourced from local beekeepers, promoting sustainability and supporting local communities.

                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 text-center">
                            <div className="feature-wrap">
                                <img src="img/extra/feature-3.png" alt='img' />
                                <h3 className="title-1 ptb-15">
                                    {" "}
                                    <span className="light-font">Hand </span>{" "}
                                    <strong> Selected</strong>{" "}
                                </h3>
                                <p>
                                    Mention that each jar is carefully hand-selected to ensure its unique flavor and richness.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 text-center">
                            <div className="feature-wrap">
                                <img src="img/extra/feature-4.png" alt='img' />
                                <h3 className="title-1 ptb-15">
                                    {" "}
                                    <span className="light-font">
                                        Variety
                                    </span> <strong>of options</strong>{" "}
                                </h3>
                                <p>
                                    Offer a range of honey options, from wildflower to citrus, to cater to different taste preferences

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="rel-div feature-img">
                        <img src="img/about.png" alt='img' />
                    </div>
                </div>
            </section>
            <section className="short-about sec-space light-bg">
                <img alt='img' src="img/extra/sec-img-1.png" className="left-top-img" />
                <img alt='img' src="img/extra/sec-img-3.png" className="center-bg-img" />
                <img
                    alt='img'
                    src="img/extra/sec-img-4.png"
                    className="left-bottom-img"
                />
                <div className="container rel-div">
                    <div className="title-wrap pt-15">
                        <h4 className="fsz-20">
                            {" "}
                            <strong>Nector Naturals</strong>{" "}
                            <span className="light-font">  </span>{" "}
                        </h4>
                        <h2 className="fsz-50 over-txt-title">
                            <span className="light-font">
                                {" "}
                                WE DO{" "}
                                <span className="over-txt light-bg">100% ORGANIC GUARANTEE</span>{" "}
                            </span>
                            <strong>Nector</strong>
                        </h2>
                        <p>
                            "Our honey shop offers the finest quality, pure and natural honey, sourced from local beekeepers. Each jar is carefully hand-selected to ensure its unique flavor and richness. From rich and creamy wildflower honey to tangy and zesty citrus honey, we have a variety of options to suit every taste bud. Visit us today to taste the difference and take home a jar of the purest honey nature has to offer."

                        </p>
                    </div>
                </div>
            </section>
            <section className="organic-product sec-space">
                <div className="container">
                    <div className="row sec-space-top">
                        <div className="col-lg-6 col-sm-12">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="organic-prod">
                                        <img src="img/extra/organic-1.png" alt='img' />
                                        <span className="divider" />
                                        <h3 className="title-1">
                                            {" "}
                                            <Link to="/" >
                                                {" "}
                                                <span className="light-font">Honey </span>{" "}
                                                <strong>Raw</strong>{" "}
                                            </Link>{" "}
                                        </h3>
                                        <Link to="/" className="clr-txt font-2" >
                                            {" "}
                                            <i> 10+ items </i>{" "}
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="organic-prod">
                                        <img src="img/extra/organic-2.png" alt='img' />
                                        <span className="divider" />
                                        <h3 className="title-1">
                                            {" "}
                                            <Link to="/" >
                                                {" "}
                                                <span className="light-font">Honey  </span>{" "}
                                                <strong>Accessories</strong>{" "}
                                            </Link>{" "}
                                        </h3>
                                        <Link to="/" className="clr-txt font-2" >
                                            {" "}
                                            <i> 15 items </i>{" "}
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="organic-prod">
                                        <img src="img/extra/organic-3.png" alt='img' />
                                        <span className="divider" />
                                        <h3 className="title-1">
                                            {" "}
                                            <Link to="/" >
                                                {" "}
                                                <span className="light-font">Honey </span>{" "}
                                                <strong>bee's</strong>{" "}
                                            </Link>{" "}
                                        </h3>
                                        <Link to="/" className="clr-txt font-2" >
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
                                        <img src="img/extra/organic-4.png" alt='img' />
                                        <span className="divider" />
                                        <h3 className="title-1">
                                            {" "}
                                            <Link to="/" >
                                                {" "}
                                                <span className="light-font">HONEY</span>{" "}
                                                <strong> HAMPERS</strong>{" "}
                                            </Link>{" "}
                                        </h3>
                                        <Link to="/" className="clr-txt font-2" >
                                            {" "}
                                            <i> 6+ items </i>{" "}
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="organic-prod">
                                        <img src="img/extra/organic-5.png" alt='img' />
                                        <span className="divider" />
                                        <h3 className="title-1">
                                            {" "}
                                            <Link to="/" >
                                                {" "}
                                                <span className="light-font">VALUE </span>{" "}
                                                <strong>COMBOS</strong>{" "}
                                            </Link>{" "}
                                        </h3>
                                        <Link to="/" className="clr-txt font-2" >
                                            {" "}
                                            <i> 20+ items </i>{" "}
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="organic-prod">
                                        <img src="img/extra/organic-6.png" alt='img' />
                                        <span className="divider" />
                                        <h3 className="title-1">
                                            {" "}
                                            <Link to="/" >
                                                {" "}
                                                <span className="light-font">Honey</span>{" "}
                                                <strong>Medicines</strong>{" "}
                                            </Link>{" "}
                                        </h3>
                                        <Link to="/" className="clr-txt font-2" >
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
        </>
    )
}

export default About