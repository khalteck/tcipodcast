import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper";
import "swiper/css/effect-fade";
import "../../swiperFounder.css";
import "swiper/css/navigation";
import slides from "../../data/founders.json";

const SwiperFounder = () => {
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
          delay: 5000, // Set the initial delay
          disableOnInteraction: false,
        }}
        ref={swiperRef}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        className="md:min-h-[400px] md:h-[650px] h-[500px]"
      >
        {slides?.map((item, index) => (
          <SwiperSlide key={index} className="pt-[100px]">
            {index === currentSlide && (
              <div className="w-full md:h-[350px] bg-secondary/80 md:border-2 border-primary md:rounded-lg flex md:flex-row flex-col-reverse justify-center">
                <div className="w-full md:w-[55%] md:border-r border-primary flex flex-col gap-2 md:gap-5 p-4 lg:p-8">
                  <h3 className="mt-[130px] md:mt-0">{item?.name}</h3>
                  <p className="w-full leading-relaxed md:text-[.9rem] lg:text-[1rem]">
                    {item?.bio}
                  </p>
                </div>

                <div className="w-full md:w-[45%] bg-primary/10 relative">
                  <div className="w-[250px] h-[250px] md:w-[100%] md:h-[100%] lg:w-[450px] lg:h-[450px] bg-white absolute top-[-120px] md:top-[50%] left-[50%] translate-x-[-50%] md:translate-y-[-50%] rounded-sm shadow-custom md:shadow-none lg:shadow-custom flex">
                    <img
                      alt=""
                      src={item?.image}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="w-full h-[200px] px-[100px] hidden md:flex items-center justify-center gap-10 absolute bottom-0 lg:-bottom-[50px] z-[100]">
        <div
          onClick={slidePrev}
          className={`p-6 bg-primary1 cursor-pointer ${
            currentSlide === 0 && "opacity-50 cursor-not-allowed"
          }`}
        >
          <FaChevronLeft size="30px" color="#f9a815" />
        </div>

        <div
          onClick={slideNext}
          className={`p-6 bg-primary1 cursor-pointer ${
            currentSlide === slides.length - 1 &&
            "opacity-50 cursor-not-allowed"
          }`}
        >
          <FaChevronRight size="30px" color="#f9a815" />
        </div>
      </div>
      <div className="w-full h-[200px] md:hidden flex items-center justify-center gap-5 absolute -bottom-[130px] z-[100]">
        <div
          onClick={slidePrev}
          className={`p-3 bg-primary1 cursor-pointer ${
            currentSlide === 0 && "opacity-50 cursor-not-allowed"
          }`}
        >
          <FaChevronLeft size="20px" color="#f9a815" />
        </div>
        <div
          onClick={slideNext}
          className={`p-3 bg-primary1 cursor-pointer ${
            currentSlide === slides.length - 1 &&
            "opacity-50 cursor-not-allowed"
          }`}
        >
          <FaChevronRight size="20px" color="#f9a815" />
        </div>
      </div>
    </>
  );
};

export default SwiperFounder;
