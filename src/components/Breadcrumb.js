import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = () => {
  return (
    <section className="breadcrumb-bg">
    <div className="theme-container container ">
      <div className="site-breadcumb">
        <h2 className="section-title">
          {" "}
          <span className="">my </span>{" "}
          <strong className="clr-txt">account </strong>{" "}
        </h2>
        <ol className="breadcrumb breadcrumb-menubar">
          <li>
            {" "}
            <Link to="/"> Home </Link> Change Your Details
          </li>
        </ol>
      </div>
    </div>
  </section>
  )
}

export default Breadcrumb