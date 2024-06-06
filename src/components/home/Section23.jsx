import { useState } from "react";
import SwiperFounder from "./SwiperFounder";

const Section23 = () => {
  return (
    <div className="w-full md:pb-[100px] pt-10 md:pt-[100px]">
      <section className="w-full px-5 pb-[80px] md:px-[100px]">
        <h3 className="mb-[30px] text-center">Meet the founders</h3>

        <div className="relative">
          <SwiperFounder />
        </div>
      </section>
    </div>
  );
};

export default Section23;
