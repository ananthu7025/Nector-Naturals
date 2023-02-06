import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = () => {
  return (
   <div className="container-fluid">
                <div className="col-md-12">
                    <div className="tab-content organic-content row">
                        <div id="product-tab-1" className="tab-pane fade active in">
                            <div className="product-slider-1 dots-1">
                                <div className="item">
                                    <div className="product-box">
                                        <div className="product-media">
                                            <img className="prod-img" alt="" src="assets/img/products/1.png" />
                                            <img className="shape" alt="" src="assets/img/icons/shap-small.png" />
                                            <div className="prod-icons">
                                                <Link to="/"  className="fa fa-heart"></Link>
                                                <Link to="/"  className="fa fa-shopping-basket"></Link>
                                                <Link to="/"  data-toggle="modal" className="fa fa-expand"></Link>
                                            </div>
                                        </div>
                                        <div className="product-caption">
                                            <h3 className="product-title">
                                                <Link to="/" > <span className="light-font"> organic </span>
                                                    <strong>tomato</strong></Link>
                                            </h3>
                                            <div className="price">
                                                <strong className="clr-txt">$50.00 </strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                      
                    </div>
                </div>
            </div>
  )
}

export default ProductCard