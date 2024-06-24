import { FaMicrophoneAlt } from "react-icons/fa";

const Section1 = () => {
  return (
    <div className="relative">
      <section className="w-full relative bg-primary1 py-[100px] md:pb-[200px] lg:pb-[300px] text-white">
        <div data-aos="fade-down" data-aos-duration="1000">
          <h1 className="mt-5 text-[2.5rem] md:text-[5rem] text-center font-bold leading-[3rem] md:leading-[5rem] lg:leading-[10rem] font-sfpro">
            ABOUT US
          </h1>
        </div>
      </section>
      <div className="w-full absolute bottom-0 left-0">
        <img alt="wave" src="/images/waves2.png" className="w-full h-auto" />
      </div>
      {/* deocr */}
      <FaMicrophoneAlt
        size={"60px"}
        color="#fcea10"
        className="absolute bottom-10 md:bottom-[100px] left-10 md:left-[100px] swing hidden md:flex"
      />
      {/* deocr */}
      <FaMicrophoneAlt
        size={"40px"}
        color="#fcea10"
        className="absolute bottom-10 md:bottom-[100px] left-10 md:left-[100px] swing md:hidden"
      />
    </div>
  );
};

export default Section1;
