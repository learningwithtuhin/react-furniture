import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import DealCard from "./DealCard";
import products from "../data/products.js";

const DealsList = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={2}
      spaceBetween={20}
      loop={true}
      autoplay={{
        delay: 3000,                // 3s per slide
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{ clickable: true }}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
      }}
      className="mySwiper"
    >
      {products.slice(4,7).map((product, index) => (
        <SwiperSlide key={index}>
          <DealCard
            image={product.image}
            title={product.title}
            price={product.price}
            oldPrice={product.oldPrice}
            starImage={product.starImage}
            hours={product.hours}
            minutes={product.minutes}
            seconds={product.seconds}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DealsList;
