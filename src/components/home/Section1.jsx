import { FaPlay } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import SocialsContainer from "../common/header/SocialsContainer";
import { useAppContext } from "../../contexts/AppContext";
import Header from "../common/header/Header";

const Section1 = () => {
  function scrollToEpisodes() {
    const episodesSection = document.getElementById("episodes");
    if (episodesSection) {
      episodesSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="w-full h-screen relative bg-[#ff4402] pb-[100px] md:pb-[200px] lg:pb-[300px]">
      <Header />
      <div className="w-full">
        <section className="w-full py-10 md:pb-0 flex md:flex-row flex-col-reverse gap-10 justify-between z-50 text-white">
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-5 md:gap-8">
            <h2 className="text-white">
              TCI: The Chronicles of an{" "}
              <span className="text-secondary">Immigrant</span>
            </h2>
            <div className="w-full lg:w-2/3 font-medium text-sm lg:text-lg">
              Stories That Inspire, Voices That Resonate: Capturing Moments,
              Evoking Emotions.
            </div>
            <button
              onClick={scrollToEpisodes}
              className="btn-secondary mt-5 w-fit"
            >
              Start listening <FaPlay color="#2a354e" size={"13"} />
            </button>
          </div>

          {/* <div className="w-full sm:w-[70%] mx-auto md:w-1/2 relative">
            <img alt="hero" src="/images/hero1.png" className="w-full h-auto" />
          </div> */}

          <div className="w-[45%] h-full min-h-[500px] absolute top-0 right-0">
            <div className="relative w-full h-full bg-hero2 bg-no-repeat bg-cover bg-center">
              <div className="w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col">
                <p>ddrdrtrdxghfjfc</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="w-full absolute bottom-0 left-0">
        <img alt="wave" src="/images/wave2.png" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Section1;
