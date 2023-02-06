import React from 'react' 
import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb'

const Contact = () => {
  return (
    <div>
        <Breadcrumb/>
    <section className="contact-wrap sec-space-bottom">
  <div className="container rel-div pt-50">
    <div className="row">
      <div className="col-md-8">
        <div className="contact-map">
          {" "}
          <img style={{width:"789px",height:"530px"}} alt='img' src='img/logo.png'/>
        </div>
      </div>
      <div className="col-md-4">
        <div className="contact-details">
          <h3 className="fsz-25">
            <span className="light-font">Nector Naturals</span>{" "}
            <strong>Address </strong>
          </h3>
          <h6 className="sub-title-1 pb-15">ORGANIC STORE</h6>
          <h5 className="clr-txt fsz-12 pt-15">Nectot Naturals STORE</h5>
          <p>Trivandrum, Kerala , India</p>
          <ul>
            <li>
              {" "}
              <strong>Call:</strong> <i>+91 7994377987</i>{" "}
            </li>
            <li>
              {" "}
              <strong>Email: </strong>{" "}
              <i>
                {" "}
                <Link to="/" >nector_naturals@gmail.com</Link>{" "}
              </i>{" "}
            </li>
            <li>
              {" "}
              <strong>Facebook: </strong>{" "}
              <i>
                {" "}
                <Link to="/" >
                  {" "}
                    nector_naturals
                </Link>{" "}
              </i>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="divider-full-1" />
    <div className="pt-50 col-md-8 col-md-offset-2">
      <h3 className="fsz-25 text-center">
        <span className="light-font">Contact </span> <strong>Nector Naturals </strong>
      </h3>
      <h6 className="sub-title-1 text-center">ORGANIC HONEY STORE</h6>
      <div className="contact-form pt-50">
        <form className="contact-form row" id="contact-form">
          <div className="form-group col-sm-4">
            <input
              className="form-control"
              placeholder="Name"
              name="Name"
              id="Name"
              required
              type="text"
            />
          </div>
          <div className="form-group col-sm-4">
            <input
              className="form-control"
              placeholder="Email"
              name="Email"
              id="Email"
              required
              type="email"
            />
          </div>
          <div className="form-group col-sm-4">
            <input
              className="form-control"
              placeholder="Phone"
              name="Phone"
              id="Phone"
              type="text"
            />
          </div>
          <div className="form-group col-sm-12">
            <textarea
              className="form-control"
              placeholder="Message"
              name="Message"
              id="Message"
              cols={12}
              rows={4}
              defaultValue={""}
            />
          </div>
          <div className="form-group col-sm-12 text-center pt-15">
            <button className="theme-btn" type="submit">
              {" "}
              <strong> SEND EMAIL </strong>{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Contact