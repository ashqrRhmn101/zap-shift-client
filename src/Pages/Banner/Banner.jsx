import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import bannerImg1 from "../../assets/banner/banner1.png";
import bannerImg2 from "../../assets/banner/banner2.png";
import bannerImg3 from "../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <div className="relative py-8">
      <Carousel autoPlay={true} infiniteLoop={true}>
        <div>
          <img src={bannerImg1} alt="" />
        </div>
        <div>
          <img src={bannerImg2} alt="" />
        </div>
        <div>
          <img src={bannerImg3} alt="" />
        </div>
      </Carousel>

      <div className="absolute bottom-20 left-5 md:bottom-40 md:left-20 flex gap-3">
        <a className="btn text-center bg-primary rounded-2xl text-[10px] h-7 md:text-lg font-semibold md:h-12">Track Your Parcel</a>
        <a className="btn rounded-2xl text-[10px] h-7 md:text-lg font-semibold md:h-12">Be A Rider</a>
      </div>
    </div>
  );
};

export default Banner;
