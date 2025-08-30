import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import testimonials from "../data/testimonials";
import TestimonialCard from "./TestimonialCard";

const TestimonialList = () => {
  return (
    <div className="col-md-8 mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <TestimonialCard
              starImage={testimonial.starImage}
              customerImage={testimonial.customerImage}
              text={testimonial.text}
              customerName={testimonial.customerName}
              role={testimonial.role}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialList;
