import React from 'react'
import { Link } from "react-router-dom";
import miniBanner from "../assets/images/mini-banner.png";

const MiniOffer = () => {
  return (
    <section
      className="mini-offer-sec"
    >
      <div className="container-fluid p-0">
        <div className="mini-wrap d-flex">
          <div className="mini-left"></div>
          <div className="mini-right">
            <div className="mini-ban-text">
              <p>Buy Luxury Furniture</p>
              <h2>Get Instant Rs. 10,000 off</h2>
              <div className="min-content-wrap">
                <p>On Orders Above Rs. 1,50,000</p>
                <p>|</p>
                <p>
                  Use Code: <span>HEXA10K</span>
                </p>
              </div>
              <Link to="/shop" className="mini-ban-btn">
                Explore
              </Link>
              <p className="tc-text">*T & C Apply</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MiniOffer