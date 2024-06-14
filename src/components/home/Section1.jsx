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
    <div className="w-full h-screen relative bg-primary1 pb-[100px] md:pb-[200px] lg:pb-[300px]">
      <section className="pt-[50px]">
        <div className="w-full text-secondary">
          <div>
            <h1 className="text-[9rem] font-bold leading-[10rem]">
              MY DREAMS ARE
            </h1>
          </div>
          <div className="flex">
            <h1 className="text-[9rem] font-bold leading-[10rem]">VALID</h1>
            <div className=""></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
