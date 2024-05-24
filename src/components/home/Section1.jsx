import { FaPlay } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Section1 = () => {
  const typewriter = new Typewriter("#typewriter", {
    strings: ["Explore a 14 day free trial"],
    autoStart: true,
  });
  return (
    <section className="w-full py-10 md:pt-[80px] flex md:flex-row flex-col-reverse gap-10 justify-between z-20">
      <div className="w-full md:w-[45%] flex flex-col gap-5 md:gap-8">
        <div className="font-light uppercase flex gap-2 items-center">
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
        </div>
        <h2>
          TCI: The Chronicles of an{" "}
          <span className="text-secondary">Immigrant</span>
        </h2>
        <p className="font-medium text-lg">
          Stories That Inspire, Voices that Resonate.
          <br />
          By Mo Mebude
        </p>
        <button className="btn-secondary mt-5 w-fit">
          Start listening <FaPlay color="#e5e5e5" size={"13"} />
        </button>
      </div>

      <div className="w-full md:w-1/2">
        <img alt="hero" src="/images/hero.png" className="w-full h-auto" />
      </div>
    </section>
  );
};

export default Section1;
