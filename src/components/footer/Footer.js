import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="page-footer">
            <section className="sec-space light-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 footer-widget">
                            <div className="main-logo">
                                <Link to="/" >
                                    {" "}
                                    <img alt='img' src="assets/img/logo/main-logo.png" />{" "}
                                </Link>
                                <span className="medium-font">ORGANIC STORE</span>
                            </div>
                            <span className="divider-2" />
                            <div className="text-widget">
                                <p>
                                    Our honey is sourced directly from local beekeepers who take great care in nurturing their hives and producing only the finest quality honey.
                                </p>
                                <ul>
                                    <li>
                                        {" "}
                                        <i className="fa fa-map-marker" />{" "}
                                        <span>
                                            {" "}
                                            <strong>Trivandrum,</strong>Kerala, India
                                        </span>{" "}
                                    </li>
                                    <li>
                                        {" "}
                                        <i className="fa fa-envelope-square" />{" "}
                                        <span>
                                            <Link to="/" >
                                                NectorNaturals@gmail.com
                                            </Link>
                                        </span>{" "}
                                    </li>
                                    <li>
                                        {" "}
                                        <i className="fa fa-phone-square" />{" "}
                                        <span>
                                            <Link to="/" >
                                                Nector Naturals
                                            </Link>
                                        </span>{" "}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4 footer-widget">
                            <h2 className="title-1">
                                {" "}
                                <span className="light-font">Nectar Naturals </span>{" "}
                                <strong>information </strong>
                            </h2>
                            <span className="divider-2" />
                            <ul className="list">
                                <li>
                                    {" "}
                                    <Link to="/"> about our shop </Link>{" "}
                                </li>
                                <li>
                                    {" "}
                                    <Link to="/"> top sellers </Link>{" "}
                                </li>
                                <li>
                                    {" "}
                                    <Link to="/"> our blog </Link>{" "}
                                </li>
                                <li>
                                    {" "}
                                    <Link to="/"> new products </Link>{" "}
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-4 footer-widget">
                            <h2 className="title-1">
                                {" "}
                                <span className="light-font">my </span> <strong>account </strong>{" "}
                            </h2>
                            <span className="divider-2" />
                            <ul className="list">
                                <li>
                                    {" "}
                                    <Link to="/" > my account </Link>{" "}
                                </li>
                                <li>
                                    <Link to="/" > Account Information </Link>
                                </li>
                                <li>
                                    <Link to="/"> Address Books</Link>
                                </li>
                                <li>
                                    <Link to="/" > Reviews and Ratings</Link>
                                </li>
                                <li>
                                    <Link to="/" > Newsletter</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-4 footer-widget">
                            <h2 className="title-1">
                                {" "}
                                <span className="light-font">photo </span>{" "}
                                <strong>instagram </strong>
                            </h2>
                            <span className="divider-2" />
                            <ul className="instagram-widget">
                                <li>
                                    {" "}
                                    <Link to="/">
                                        {" "}
                                        <img src="assets/img/extra/80x80-1.jpg" alt='img' />{" "}
                                    </Link>{" "}
                                </li>
                                <li>
                                    {" "}
                                    <Link to="/">
                                        {" "}
                                        <img src="assets/img/extra/80x80-2.jpg" alt='img' />{" "}
                                    </Link>{" "}
                                </li>
                                <li>
                                    {" "}
                                    <Link to="/">
                                        {" "}
                                        <img src="assets/img/extra/80x80-3.jpg" alt='img' />{" "}
                                    </Link>{" "}
                                </li>
                                <li>
                                    {" "}
                                    <Link to="/">
                                        {" "}
                                        <img src="assets/img/extra/80x80-4.jpg" alt='img' />{" "}
                                    </Link>{" "}
                                </li>
                                <li>
                                    {" "}
                                    <Link to="/">
                                        {" "}
                                        <img src="assets/img/extra/80x80-5.jpg" alt='img' />{" "}
                                    </Link>{" "}
                                </li>
                                <li>
                                    {" "}
                                    <Link to="/">
                                        {" "}
                                        <img src="assets/img/extra/80x80-6.jpg" alt='img' />{" "}
                                    </Link>{" "}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="footer-bottom">
                <div className="pattern">
                    <img alt='img' src="assets/img/icons/white-pattern.png" />
                </div>
                <div id="to-top" className="to-top">
                    {" "}
                    <i className="fa fa-arrow-circle-o-up" />{" "}
                </div>
                <div className="container ptb-50">
                    <div className="row">
                        <div className="col-md-6 col-sm-5">
                            <p>
                                ©2022{" "}
                                <Link to="/" >
                                    {" "}
                                    <strong> NectorNaturals</strong>
                                </Link>
                                all right reserved
                            </p>
                        </div>
                        <div className="col-md-6 col-sm-7">
                            <ul className="primary-navbar footer-menu">
                                <li>
                                    {" "}
                                    <Link to="/">contact us </Link>{" "}
                                </li>
                                <li>
                                    {" "}
                                    <Link to="/">term of use </Link>{" "}
                                </li>
                                <li>
                                    {" "}
                                    <Link to="/">site map </Link>{" "}
                                </li>
                                <li>
                                    {" "}
                                    <Link to="/">privacy policy</Link>{" "}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </footer>

    )
}

export default Footer