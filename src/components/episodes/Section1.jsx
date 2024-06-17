import { FaHeadset } from "react-icons/fa";

const Section1 = () => {
  return (
    <div className="relative">
      <section className="w-full relative bg-primary1 pb-[100px] md:pb-[200px] lg:pb-[300px] text-secondary">
        <div data-aos="fade-down" data-aos-duration="1000">
          <h1 className="mt-5 text-[2.5rem] md:text-[5rem] lg:text-[8rem] text-center font-bold leading-[3rem] md:leading-[5rem] lg:leading-[10rem] font-gluten relative">
            EPISODES
            {/* deocr */}
            <FaHeadset
              size={"80px"}
              color="#fcea10"
              className="absolute -bottom-8 md:bottom-[-100px] right-14 swing md:flex hidden"
            />
            <FaHeadset
              size={"40px"}
              color="#fcea10"
              className="absolute -bottom-8 md:bottom-[-100px] right-10 swing md:hidden"
            />
          </h1>
        </div>
      </section>
      <div className="w-full absolute bottom-0 left-0">
        <img alt="wave" src="/images/waves2.png" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Section1;
