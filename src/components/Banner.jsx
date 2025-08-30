import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";   
import chair from "../assets/images/chair.png"
import chair2 from "../assets/images/chair2.png"
import btnarrow from "../assets/images/btn-arrow.png"
import { Link, NavLink } from 'react-router'

// ✅ Import EffectFade also
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

const Banner = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center">
          {/* Left (Static Text) */}
          <div className="col-lg-6">
            <div className="banner-text">
              <h1>Experience Unmatched Comfort and Style Today</h1>
              <p>
                Transform your living space with our exquisite furniture
                collection. Discover the perfect blend of comfort and elegance
                that suits your lifestyle.
              </p>
              <div className="banner-btn-wrap">
                <Link to="/shop"  className="btn btn-orange">
                  <div className="d-flex align-items-center">
                    <span>SHOP NOW</span>
                    <img src={btnarrow} alt="Arrow" />
                  </div>
                </Link>
                <Link  to="/shop"  className="btn explore-btn">
                  EXPLORE
                </Link>
              </div>
            </div>
          </div>

          {/* Right (Swiper Slider) */}
          <div className="col-lg-6">
            <Swiper
              modules={[Pagination, Autoplay, EffectFade]}  // ✅ include EffectFade
              effect="fade"                                // ✅ enable fade
              fadeEffect={{ crossFade: true }}             // ✅ smooth crossfade
              slidesPerView={1}
              pagination={{
                clickable: true,
                el: ".hero-pagination",
              }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              className="swiper image-swiper"
            >
              <SwiperSlide>
                <img
                  src={chair}
                  className="img-fluid"
                  alt="Chair 1"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={chair2}
                  className="img-fluid"
                  alt="Chair 2"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* Swiper Pagination outside slider */}
        <div className="swiper-pagination centered-pagination hero-pagination"></div>
      </div>
    </section>
  )
}

export default Banner
