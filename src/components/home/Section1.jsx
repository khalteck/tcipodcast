import { FaHeadset, FaMicrophoneAlt } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import SocialsContainer from "../common/header/SocialsContainer";
import { IoPlay } from "react-icons/io5";
import { GiSplash } from "react-icons/gi";

const Section1 = () => {
  function scrollToEpisodes() {
    const episodesSection = document.getElementById("episodes");
    if (episodesSection) {
      episodesSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="w-full relative bg-primary1 pb-[100px] md:pb-[200px] lg:pb-[300px]">
      <section className="pt-10 md:pt-[50px]">
        <img
          alt="hero"
          src="/images/Landing page first pic.jpg"
          className="w-full md:w-[60%] h-[300px] md:h-[500px] xl:h-[700px] object-cover rounded-[50px] md:hidden flex mb-10"
        />
        <div className="w-full text-white">
          <div data-aos="fade-down" data-aos-duration="1000">
            <h1 className="text-[3rem] md:text-[5rem] lg:text-[9rem] font-bold leading-[3rem] md:leading-[5rem] lg:leading-[10rem] relative font-sfpro">
              MY DREAMS <span className="hidden md:inline">ARE</span>
              {/* decor */}
              <GiSplash
                size={"75px"}
                color="#fff"
                className="absolute top-[-80px] lg:top-[-60px] left-[50%] translate-x-[-50%] hidden md:flex"
              />
            </h1>
          </div>
          <div className="w-full flex md:flex-row flex-col md:gap-[100px] items-center">
            <h1
              data-aos="fade-right"
              data-aos-duration="1000"
              className="w-full md:w-fit text-[3rem] md:text-[5rem] lg:text-[9rem] font-bold leading-[3rem] md:leading-[5rem] lg:leading-[10rem] relative font-sfpro"
            >
              <span className="inline md:hidden">ARE</span> VALID
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="w-full md:w-[500px] md:text-[1.25rem] font-medium relative"
            >
              <p className="text-white">
                Stories That Inspire, Voices That Resonate: Capturing Moments,
                Evoking Emotions.
              </p>
              <div className="flex gap-2 text-white items-center mt-4">
                <div className="bg-white w-3 h-4"></div>
                <Typewriter
                  words={["Hosted by Mo & Produced by Folawe"]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={4000}
                />
              </div>
              <button onClick={scrollToEpisodes} className="btn-custom3 mt-3">
                Start Listening <IoPlay color="white" />
              </button>

              {/* deocr */}
              <FaHeadset
                size={"60px"}
                color="#fcea10"
                className="absolute bottom-0 right-0 xl:right-[-40%] swing hidden md:flex"
              />
              {/* deocr */}
              <FaHeadset
                size={"40px"}
                color="#fcea10"
                className="absolute bottom-8 right-0 xl:right-[-40%] swing md:hidden"
              />
            </div>
          </div>
        </div>

        <div className="w-full mt-10 md:mt-[80px] flex md:flex-row flex-col-reverse gap-10">
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            alt="hero"
            src="/images/Landing page first pic.jpg"
            className="w-full md:w-[60%] h-[300px] md:h-[500px] xl:h-[700px] object-cover rounded-[50px] hidden md:flex"
          />
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="w-full md:w-[40%] h-fit bg-hero3 bg-no-repeat bg-cover rounded-[50px] flex flex-col"
          >
            <div className="w-full h-full bg-[#f800f8]/30 rounded-[50px] p-7 flex flex-col gap-5">
              <div className="w-full p-5 rounded-[30px] bg-secondary2/90 flex md:flex-row flex-col gap-3 text-white font-bold">
                <p className="blink">Connect with us</p>
                <div className="flex items-center gap-6 text-sm md:ml-auto">
                  <SocialsContainer />
                </div>
              </div>

              <div className="w-full flex flex-col gap-5">
                <a
                  href="https://open.spotify.com/show/2AlbaXLHC7EW1IFvsGGlcF?si=1dQ_vKAdTQaUjOMBha7OCw"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="w-full p-5 rounded-[30px] bg-secondary2/90 flex gap-3 text-white font-bold">
                    <img
                      alt="icon"
                      src="/images/icons8-spotify.png"
                      className="w-8 md:w-12 h-auto"
                    />
                    <div className="">
                      <p className="font-medium md:font-bold text-sm md:text-md lg:text-lg">
                        Spotify Podcast
                      </p>
                      <p className="opacity-80 text-[.75em] md:text-sm lg:text-[1rem] underline cursor-pointer">
                        Listen Now
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href="https://podcasts.apple.com/gb/podcast/tci-the-chronicles-of-an-immigrant/id1727631336"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="w-full p-5 rounded-[30px] bg-secondary2/90 flex gap-3 text-white font-bold">
                    <img
                      alt="icon"
                      src="/images/apple-podcast.png"
                      className="w-10 md:w-14 h-auto"
                    />
                    <div>
                      <p className="font-medium md:font-bold text-sm md:text-md lg:text-lg">
                        Apple Podcast
                      </p>
                      <p className="opacity-80 text-[.75em] md:text-sm lg:text-[1rem] underline cursor-pointer">
                        Listen Now
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* wave */}
      <div className="w-full absolute bottom-[-1px] left-0">
        <img alt="wave" src="/images/waves2.png" className="w-full h-auto" />
      </div>
      {/* deocr */}
      <FaMicrophoneAlt
        size={"60px"}
        color="#fcea10"
        className="absolute bottom-[100px] right-[100px] swing hidden md:flex"
      />
    </div>
  );
};

export default Section1;
