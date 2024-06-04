import { FaPlay } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import SocialsContainer from "../common/header/SocialsContainer";
import { useAppContext } from "../../contexts/AppContext";

const Section1 = () => {
  function scrollToEpisodes() {
    const episodesSection = document.getElementById("episodes");
    if (episodesSection) {
      episodesSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div>
      <div className="w-full md:min-h-[450px] bg-primary1/90">
        <section className="w-full py-10 md:pb-0 flex md:flex-row flex-col-reverse gap-10 justify-between z-50 text-white">
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-5 md:gap-8">
            <h2 className="text-white">
              TCI: The Chronicles of an{" "}
              <span className="text-secondary">Immigrant</span>
            </h2>
            <div className="w-full lg:w-2/3 font-medium text-sm lg:text-lg">
              Stories That Inspire, Voices That Resonate: Capturing Moments,
              Evoking Emotions.
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
            <button
              onClick={scrollToEpisodes}
              className="btn-secondary mt-5 w-fit"
            >
              Start listening <FaPlay color="#2a354e" size={"13"} />
            </button>
          </div>

          <div className="w-full md:w-1/2 relative">
            <img
              alt="hero"
              src="/images/podcast.jpg"
              className="w-full h-auto"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Section1;
