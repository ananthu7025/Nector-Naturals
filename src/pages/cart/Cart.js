import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb'

const Cart = () => {
  return (

  <>
    <Breadcrumb/>
  <section className="shop-wrap sec-space">
    <div className="container">
      <div className="cart-table">
        <form className="cart-form">
          <table className="product-table">
            <thead className="">
              <tr>
                <th>product detail</th>
                <th />
                <th>Product price</th>
                <th>quantity</th>
                <th>total price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="image">
                  <div className="white-bg">
                    <Link to="/" className="media-link" >
                      <img src="img/extra/cart-1.png" alt='img' />
                    </Link>
                  </div>
                </td>
                <td className="description">
                  <div className="rating">
                    <span className="star active" />
                    <span className="star active" />
                    <span className="star active" />
                    <span className="star active" />
                    <span className="star active" />
                  </div>
                  <h6 className="fsz-12 gray-color"> Overall Rating : 5/5 </h6>
                  <div className="divider-2" />
                  <h3 className="product-title no-margin">
                    {" "}
                    <Link to="/" >
                      {" "}
                      <span className="light-font">organic </span>{" "}
                      <strong>almonds </strong>{" "}
                    </Link>{" "}
                  </h3>
                  <h6>DRY FRUITS</h6>
                </td>
                <td>
                  <div className="price fontbold-2">
                    <strong className="fsz-20">$50.00 </strong>{" "}
                    <del className="light-font">
                      {" "}
                      <b>$65.00</b>{" "}
                    </del>
                  </div>
                </td>
                <td>
                  <div className="prod-btns fontbold-2">
                    <div className="quantity">
                      <button className="btn minus">
                        <i className="fa fa-minus-circle" />
                      </button>
                      <input
                        title="Qty"
                        placeholder="03"
                        className="form-control qty"
                        type="text"
                      />
                      <button className="btn plus">
                        <i className="fa fa-plus-circle" />
                      </button>
                    </div>
                    <div className="sort-dropdown">
                      <div className="search-selectpicker selectpicker-wrapper">
                        <select
                          className="selectpicker input-price"
                          data-width="100%"
                          data-toggle="tooltip"
                        >
                          <option>Kilo</option>
                          <option>2 Kilo</option>
                          <option>3 Kilo</option>
                          <option>4 Kilo</option>
                          <option>5 Kilo</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <strong className="clr-txt fsz-20 fontbold-2">$50.00</strong>{" "}
                  <Link to="/"  className="remove fa fa-close clr-txt" />
                </td>
              </tr>
              <tr>
                <td className="image">
                  <div className="white-bg">
                    <Link to="/" className="media-link" >
                      <img src="img/extra/cart-2.png" alt='img' />
                    </Link>
                  </div>
                </td>
                <td className="description">
                  <div className="rating">
                    <span className="star active" />
                    <span className="star active" />
                    <span className="star active" />
                    <span className="star active" />
                    <span className="star active" />
                  </div>
                  <h6 className="fsz-12 gray-color"> Overall Rating : 5/5 </h6>
                  <div className="divider-2" />
                  <h3 className="product-title no-margin">
                    {" "}
                    <Link to="/" >
                      {" "}
                      <span className="light-font">organic </span>{" "}
                      <strong>pepper </strong>{" "}
                    </Link>{" "}
                  </h3>
                  <h6>VEGETABLE</h6>
                </td>
                <td>
                  <div className="price fontbold-2">
                    <strong className="fsz-20">$50.00 </strong>{" "}
                    <del className="light-font">
                      {" "}
                      <b>$65.00</b>{" "}
                    </del>
                  </div>
                </td>
                <td>
                  <div className="prod-btns fontbold-2">
                    <div className="quantity">
                      <button className="btn minus">
                        <i className="fa fa-minus-circle" />
                      </button>
                      <input
                        title="Qty"
                        placeholder="03"
                        className="form-control qty"
                        type="text"
                      />
                      <button className="btn plus">
                        <i className="fa fa-plus-circle" />
                      </button>
                    </div>
                    <div className="sort-dropdown">
                      <div className="search-selectpicker selectpicker-wrapper">
                        <select
                          className="selectpicker input-price"
                          data-width="100%"
                          data-toggle="tooltip"
                        >
                          <option>Kilo</option>
                          <option>2 Kilo</option>
                          <option>3 Kilo</option>
                          <option>4 Kilo</option>
                          <option>5 Kilo</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <strong className="clr-txt fsz-20 fontbold-2">$50.00</strong>{" "}
                  <Link to="/"  className="remove fa fa-close clr-txt" />
                </td>
              </tr>
              <tr>
                <td className="image">
                  <div className="white-bg">
                    <Link to="/" className="media-link" >
                      <img src="img/extra/cart-3.png" alt='img' />
                    </Link>
                  </div>
                </td>
                <td className="description">
                  <div className="rating">
                    <span className="star active" />
                    <span className="star active" />
                    <span className="star active" />
                    <span className="star active" />
                    <span className="star active" />
                  </div>
                  <h6 className="fsz-12 gray-color"> Overall Rating : 5/5 </h6>
                  <div className="divider-2" />
                  <h3 className="product-title no-margin">
                    {" "}
                    <Link to="/" >
                      {" "}
                      <span className="light-font">organic </span>{" "}
                      <strong>onion </strong>{" "}
                    </Link>{" "}
                  </h3>
                  <h6>VEGETABLE</h6>
                </td>
                <td>
                  <div className="price fontbold-2">
                    <strong className="fsz-20">$50.00 </strong>{" "}
                    <del className="light-font">
                      {" "}
                      <b>$65.00</b>{" "}
                    </del>
                  </div>
                </td>
                <td>
                  <div className="prod-btns fontbold-2">
                    <div className="quantity">
                      <button className="btn minus">
                        <i className="fa fa-minus-circle" />
                      </button>
                      <input
                        title="Qty"
                        placeholder="03"
                        className="form-control qty"
                        type="text"
                      />
                      <button className="btn plus">
                        <i className="fa fa-plus-circle" />
                      </button>
                    </div>
                    <div className="sort-dropdown">
                      <div className="search-selectpicker selectpicker-wrapper">
                        <select
                          className="selectpicker input-price"
                          data-width="100%"
                          data-toggle="tooltip"
                        >
                          <option>Kilo</option>
                          <option>2 Kilo</option>
                          <option>3 Kilo</option>
                          <option>4 Kilo</option>
                          <option>5 Kilo</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <strong className="clr-txt fsz-20 fontbold-2">$50.00</strong>{" "}
                  <Link to="/"  className="remove fa fa-close clr-txt" />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="continue-shopping">
            <div className="left">
              <h6>
                ENTER VOUCHER CODE IF YOU HAVE ONE.{" "}
                <span className="clr-txt-2"> APPLY HERE </span>{" "}
              </h6>
              <div className="coupan-form">
                <input className="form-control" />
                <button className="btn" type="submit">
                  {" "}
                  APPLY CODE{" "}
                </button>
              </div>
            </div>
            <div className="right">
              {" "}
              <strong className="fsz-20 fontbold-2">
                Subtotal : <span className="clr-txt"> $150.00 </span>{" "}
              </strong>{" "}
            </div>
          </div>
          <div className="shp-btn col-sm-12 text-center">
            <button className="theme-btn-2 btn">
              {" "}
              <b> CONTINUE SHOPPING </b>{" "}
            </button>
            <button className="theme-btn-3 btn">
              {" "}
              <b> CHECKOUT NOW </b>{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
 </>

  )
}

export default Cart