import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="main-header">
  <div className="container-fluid rel-div">
    <div className="col-lg-4 col-sm-8">
      <div className="main-logo">
        <Link to="/" >
          {" "}
          <img style={{height:"10vh",width:"4.5em"}} alt='img' src="img/logo.png" />{" "}
        </Link>
      </div>
    </div>
    <div className="col-lg-6 responsive-menu">
      <div className="responsive-toggle fa fa-bars"> </div>
      <nav className="fix-navbar" id="primary-navigation">
        <ul className="primary-navbar">
          <li className="dropdown active">
            <Link to="/"
              className="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li className="dropdown">
            <Link to="/shop"
              className="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link to="/contact" >Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
    <div className="col-lg-2 col-sm-4 cart-megamenu">
      <div className="cart-hover">
        <Link to="/" href="#">
          {" "}
          <img alt='img' src="img/icons/cart-icon.png" />{" "}
        </Link>
        <span className="cnt crl-bg">2</span>{" "}
        <ul className="pop-up-box cart-popup">
          <li className="cart-list">
            <div className="cart-img">
              {" "}
              <img src="./img/products/p1.png" alt='img' />{" "}
            </div>
            <div className="cart-title">
              <div className="fsz-16">
                <Link to="/" href="#">
                  {" "}
                  <span className="light-font"> organic </span>
                  <strong>honey</strong>
                </Link>
                <h6 className="sub-title-1">Raw-Honey</h6>
              </div>
              <div className="price">
                <strong className="clr-txt">350 </strong>{" "}
                <del className="light-font">390 </del>
              </div>
            </div>
            <div className="close-icon">
              {" "}
              <i className="fa fa-close clr-txt" />{" "}
            </div>
          </li>
          <li className="cart-list sub-total">
            <div className="pull-left">
              <strong>Subtotal</strong>
            </div>
            <div className="pull-right">
              <strong className="clr-txt">390.00</strong>
            </div>
          </li>
          <li className="cart-list buttons">
            <div className="pull-left">
              <Link to="/cart"  className="theme-btn-sm-2">
                View Cart
              </Link>
            </div>
            <div className="pull-right">
              <Link to="/checkout"  className="theme-btn-sm-3">
                {" "}
                Checkout{" "}
              </Link>
            </div>
          </li>
        </ul>
      </div>
      <div className="responsive-toggle fa fa-bars"> </div>
    </div>
  </div>
</header>

  )
}

export default Navbar