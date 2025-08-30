import React from 'react'
import { Link, NavLink } from 'react-router'
import aboutImage from "../assets/images/about-img.png"
import abouticonOne from "../assets/images/abt-icon1.png"
import abouticonTwo from "../assets/images/abt-icon2.png"
import btnarrow from "../assets/images/btn-arrow.png"

const AboutSection = () => {
  return (
   <section className="about-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about-img">
              <img src={aboutImage} className="img-fluid" alt="About furniture" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="abt-text">
              <div className="abt-hdr">
                <h4>Transform Your Space with Our Furniture</h4>
                <p>Discover how our carefully curated pieces can enhance your home. Experience the perfect blend of comfort and style.</p>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="abt-wrap">
                    <div className="abt-icon">
                      <img src={abouticonOne} alt="Living room icon" />
                    </div>
                    <div className="abt-txt">
                      <h5>Living Room</h5>
                      <p>Create a cozy atmosphere with our stunning living room furniture selections.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="abt-wrap">
                    <div className="abt-icon">
                      <img src={abouticonTwo} alt="Bedroom icon" />
                    </div>
                    <div className="abt-txt">
                      <h5>Bedroom Bliss</h5>
                      <p>Elevate your sleep experience with our luxurious beds and bedding.</p>
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/shop" className="btn btn-orange">
               <div className="d-flex align-items-center">
                                    <span>SHOP NOW</span>
                                    <img src={btnarrow} alt="Arrow" />
                                  </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection