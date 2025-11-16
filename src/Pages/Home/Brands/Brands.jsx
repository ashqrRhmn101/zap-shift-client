import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import amazon from "../../../assets/brands/amazon.png";
import amazon_v from "../../../assets/brands/amazon_vector.png";
import caiso from "../../../assets/brands/casio.png";
import moonster from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import ster from "../../../assets/brands/star.png";
import start_p from "../../../assets/brands/start_people.png";
import { Autoplay, Pagination } from "swiper/modules";

const brandsLogos = [
  amazon,
  amazon_v,
  caiso,
  moonster,
  randstad,
  ster,
  start_p,
];

const Brands = () => {
  return (
    <div className="text-center p-12">
      <h2 className="text-2xl text-secondary font-bold mb-8">
        We've helped thousands of sales teams
      </h2>
      <Swiper
        loop={true}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={20}
        grabCursor={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {brandsLogos.map((logo, i) => (
          <SwiperSlide key={i}>
            <img src={logo} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
