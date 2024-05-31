import { FaPlay } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import SocialsContainer from "../common/header/SocialsContainer";

const Section1 = () => {
  const typewriter = new Typewriter("#typewriter", {
    strings: ["Explore a 14 day free trial"],
    autoStart: true,
  });
  return (
    <section className="w-full py-10 md:pt-[80px] flex md:flex-row flex-col-reverse gap-10 justify-between z-50">
      <div className="w-full md:w-[45%] flex flex-col gap-5 md:gap-8">
        {/* <div className="md:hidden flex items-center gap-6 text-sm">
          <SocialsContainer />
        </div> */}
        {/* <div className="font-light uppercase flex gap-2 items-center">
          <div className="bg-secondary w-3 h-4"></div>
          <Typewriter
            words={["Explore a 14 day free trial"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div> */}
        <h2 className="text-[#663881] uppercase">
          TCI: The Chronicles of an Immigrant
        </h2>
        <div className="w-full lg:w-2/3 font-medium text-lg">
          Stories That Inspire, Voices That Resonate: Capturing Moments, Evoking
          Emotions.
          <br />
          <div className="flex gap-2 items-center mt-4">
            <div className="bg-secondary w-3 h-4"></div>
            <Typewriter
              words={["By Mo Mebude"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={4000}
            />
          </div>
        </div>
        <button className="btn-secondary mt-5 w-fit">
          Start listening <FaPlay color="#2a354e" size={"13"} />
        </button>

        <div className="w-full flex flex-col md:flex-row gap-5">
          <div></div>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <img alt="hero" src="/images/podcast.jpg" className="w-full h-auto" />
      </div>
    </section>
  );
};

export default Section1;
