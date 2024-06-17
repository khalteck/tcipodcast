import { GiSplash } from "react-icons/gi";

const Section1 = () => {
  return (
    <div className="relative">
      <section className="w-full relative bg-primary1 pb-[100px] md:pb-[200px] lg:pb-[300px] text-secondary">
        <div data-aos="fade-down" data-aos-duration="1000">
          <h1 className="mt-5 text-[2.5rem] md:text-[5rem] lg:text-[8rem] text-center font-bold leading-[3rem] md:leading-[5rem] lg:leading-[10rem] font-gluten">
            IMMIGRANTS CORNER
          </h1>
        </div>
      </section>
      <div className="w-full absolute bottom-0 left-0">
        <img alt="wave" src="/images/waves2.png" className="w-full h-auto" />
      </div>

      {/* decor */}
      <GiSplash
        size={"80px"}
        color="#481297"
        className="absolute -bottom-[150px] -left-1 rotate-90"
      />
    </div>
  );
};

export default Section1;
