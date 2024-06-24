import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper";
import "swiper/css/effect-fade";
// import "../../homeSlider.css";
import "swiper/css/navigation";

const Slider = ({ slides, isOdd }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };

  const slideNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const slidePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <>
      <Swiper
        effect={"fade"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 4000, // Set the initial delay
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        ref={swiperRef}
        className=""
      >
        {slides?.map((item, index) => (
          <SwiperSlide key={index} className="">
            <div
              data-aos={`${isOdd ? "fade-right" : "fade-left"}`}
              data-aos-duration="1000"
              data-aos-delay="200"
              className={`w-full border-x-[15px] md:border-y-[15px] px-2 pt-2 pb-0 md:p-2 border-primary1 ${
                isOdd
                  ? "md:rounded-l-full md:border-l-[15px] md:rounded-r-none md:border-r-0 rounded-t-full border-t-[15px]"
                  : "md:rounded-r-full md:border-r-[15px] md:rounded-l-none md:border-l-0 rounded-t-full border-t-[15px]"
              }`}
            >
              {" "}
              <img
                alt="hero"
                src={item}
                className={`w-full h-[300px] md:h-[605px] object-cover object-top-center ${
                  isOdd
                    ? "md:rounded-r-lg md:rounded-l-full rounded-t-full "
                    : "md:rounded-l-lg md:rounded-r-full rounded-t-full"
                }`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
