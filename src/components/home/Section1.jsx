import { FaPlay } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import SocialsContainer from "../common/header/SocialsContainer";
import { useAppContext } from "../../contexts/AppContext";
import { IoPlay } from "react-icons/io5";

const Section1 = () => {
  function scrollToEpisodes() {
    const episodesSection = document.getElementById("episodes");
    if (episodesSection) {
      episodesSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="w-full relative bg-primary1 pb-[100px] md:pb-[200px] lg:pb-[300px]">
      <section className="md:pt-[50px]">
        <div className="w-full text-secondary">
          <div>
            <h1 className="text-[3rem] md:text-[5rem] lg:text-[9rem] font-bold leading-[3rem] md:leading-[5rem] lg:leading-[10rem]">
              MY DREAMS ARE
            </h1>
          </div>
          <div className="w-full flex md:flex-row flex-col md:gap-[100px] items-center">
            <h1 className="w-full md:w-fit text-[3rem] md:text-[5rem] lg:text-[9rem] font-bold leading-[3rem] md:leading-[5rem] lg:leading-[10rem]">
              VALID
            </h1>
            <div className="w-full md:w-[500px] md:text-[1.25rem] font-medium">
              <p className="text-white">
                Stories That Inspire, Voices That Resonate: Capturing Moments,
                Evoking Emotions.
              </p>
              <p className="mt-7 font-bold">
                Hosted by Mo & Produced by Folawe
              </p>
              <button className="btn-custom3 mt-3">
                Start Listening <IoPlay color="white" />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full mt-10 flex gap-10">
          <img
            alt="hero"
            src="/images/podcast.jpg"
            className="w-full md:w-[60%] h-[300px] md:h-[500px] xl:h-[700px] object-cover rounded-[50px]"
          />
          <div className="w-full md:w-[40%] h-[300px] md:h-[500px] xl:h-[700px] bg-hero3 bg-no-repeat bg-cover rounded-[50px] flex flex-col">
            <div className="w-full h-full bg-secondary2/80 rounded-[50px]"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
