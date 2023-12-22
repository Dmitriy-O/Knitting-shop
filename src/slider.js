// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./slider.css"
export const Slider = ({ slider }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >

      {slider.map((slide) => (
       <div className="w-full h-{300px}">
          <SwiperSlide key={slide.image}>
            <img src={slide.image} alt={slide.title} className="image_main_page_slide_photo" />
          </SwiperSlide>
       </div>
      ))}
    </Swiper>
  );
};

{
  /* {slides?.map((slide)=>(
        <SwiperSlide key={slide.image}>
            <img src={slide.image} alt={slide.title}></img>
        </SwiperSlide>
    ))} */
}
