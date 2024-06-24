import { GiSplash } from "react-icons/gi";

const Section1 = () => {
  return (
    <div className="relative">
      <section className="w-full relative bg-primary1 py-[100px] md:pb-[200px] lg:pb-[300px] text-white">
        <div data-aos="fade-down" data-aos-duration="1000">
          <h1 className="mt-5 text-[2.5rem] md:text-[5rem] text-center font-bold leading-tight font-sfpro">
            IMMIGRANTS <br />
            CORNER
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
