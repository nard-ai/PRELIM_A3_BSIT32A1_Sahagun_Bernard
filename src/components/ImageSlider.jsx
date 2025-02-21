import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png"; // Add more images as needed
import Image4 from "../assets/image4.png"; // Add more images as needed
import Image5 from "../assets/image5.png"; // Add more images as needed

const ImageSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop
      className="w-full h-screen"
    >
      <SwiperSlide>
        <img src={Image1} alt="Slide 1" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Image2} alt="Slide 2" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Image3} alt="Slide 3" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Image4} alt="Slide 4" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Image5} alt="Slide 5" className="w-full h-full object-cover" />
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageSlider;
