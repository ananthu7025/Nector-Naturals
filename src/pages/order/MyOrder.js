import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb'

const MyOrder = () => {
  return (
    <div>
        <Breadcrumb/>
    <section className="account-page ptb-50">
  <div className="container">
    {/* Shopping Cart Starts */}
    <div className="cart-table">
      <form className="cart-form">
        <table className="product-table">
          <thead className>
            <tr>
              <th>product detail</th>
              <th />
              <th>Product price</th>
              <th>date</th>
              <th>quantity</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="image">
                <div className="white-bg">
                  <Link to="/" className="media-link" href="#">
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
                  <Link to="/" href="#">
                    {" "}
                    <span className="light-font">organic </span>{" "}
                    <strong>almonds </strong>{" "}
                  </Link>{" "}
                </h3>
                <h6>DRY FRUITS</h6>
              </td>
              <td>
                <div className="price fontbold-2">
                  <strong className="fsz-20">$50.00 </strong>
                </div>
              </td>
              <td>
                <div className="text-center pt-20">
                  {" "}
                  <b className="fsz-16"> 12th Dec'15 </b>{" "}
                </div>
              </td>
              <td>
                <div className="prod-btns fontbold-2">
                  <b className="fsz-16"> 1 </b>
                </div>
              </td>
              <td>
                <div className="order-status pt-15">
                  <Link to="/" href="#" className="theme-btn-sm-2 btn">
                    Return Order
                  </Link>
                  <Link to="/" href="#" className="theme-btn-sm-3 btn">
                    {" "}
                    Re Order{" "}
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="continue-shopping text-center">
          <Link to="/" href="my-account.html" className="theme-btn btn">
            {" "}
            Back to account{" "}
          </Link>
        </div>
      </form>
    </div>
    {/* / Shopping Cart Ends */}
  </div>
</section>

    </div>
  )
}

export default MyOrder