import { MdMessage } from "react-icons/md";

const Section22 = () => {
  return (
    <div className="w-full bg-primary1/90 pb-[100px] md:pb-[200px] lg:pb-[300px] xxl:pb-[100px] relative">
      <section className="w-full py-[80px] md:py-[100px] flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2">
          <img alt="hero" src="/images/hero1.jpg" className="w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <h3 className="text-white">Help us Help You</h3>
          <h3 className="text-white">We offer the best for you</h3>

          <p className="text-lg leading-relaxed mt-5 text-white">
            Send your migration dilemmas- you don't have to go through your
            migration journey alone. If you have a challenge, question or some
            exciting news we want to hear it.{" "}
          </p>

          <button className="btn-secondary mt-5 w-fit">
            Get in Touch <MdMessage color="#2a354e" size={"15"} />
          </button>
        </div>
      </section>

      {/* sharp edge bottom */}
      <svg
        className="w-full absolute bottom-[-1px] left-0 z-0 hidden md:block xxl:hidden"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,192L288,288L576,128L864,288L1152,0L1440,160L1440,320L1152,320L864,320L576,320L288,320L0,320Z"
        ></path>
      </svg>

      {/* mobile wave */}
      <svg
        className="w-full absolute bottom-[-1px] left-0 z-0 block md:hidden"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,192L288,288L576,128L864,288L1152,0L1440,160L1440,320L1152,320L864,320L576,320L288,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Section22;
