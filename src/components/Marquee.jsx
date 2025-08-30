import React from 'react'
import dots from "../assets/images/dots.png"

const Marquee = () => {
  return (
   <section className="marquee-wrapper">
      <div className="marquee">
       
        <div className="marquee-group">
          <span>EXCLUSIVE DEALS</span>
          <img src={dots} alt="dots" />
          <span>UPTO 50% OFF</span>
          <img src={dots} alt="dots" />
          <span>LIMITED STOCK</span>
          <img src={dots} alt="dots" />
          <span>SALE IS LIVE</span>
          <img src={dots} alt="dots" />
          <span>FREE DELIVERY</span>
          <img src={dots} alt="dots" />
          <span>STOCK CLEARANCE</span>
          <img src={dots} alt="dots" />
        </div>

       
        <div className="marquee-group">
          <span>EXCLUSIVE DEALS</span>
          <img src={dots} alt="dots" />
          <span>UPTO 50% OFF</span>
          <img src={dots} alt="dots" />
          <span>LIMITED STOCK</span>
          <img src={dots} alt="dots" />
          <span>SALE IS LIVE</span>
          <img src={dots} alt="dots" />
          <span>FREE DELIVERY</span>
          <img src={dots} alt="dots" />
          <span>STOCK CLEARANCE</span>
          <img src={dots} alt="dots" />
        </div>
      </div>
    </section>
  )
}

export default Marquee