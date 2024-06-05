import { BiSolidMessageDetail } from "react-icons/bi";
import { FaSpotify } from "react-icons/fa";
import { FaItunes } from "react-icons/fa";
import { useAppContext } from "../../contexts/AppContext";

const Section2 = () => {
  const { handleScrollTo } = useAppContext();
  return (
    <div className="w-full bg-[#0c0c1d] md:h-[300px] relative">
      <div className="w-full md:h-full top-0 left-0 md:absolute">
        <section>
          {/* hosts */}
          <div className="w-full py-5 md:py-10 flex items-center">
            <div className="w-14 h-14 p-1 bg-primary1 rounded-full flex center-flex relative -left-0">
              <img
                alt=""
                src="/images/host.jpg"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="w-14 h-14 p-1 bg-primary1 rounded-full flex center-flex relative -left-[15px]">
              <img
                alt=""
                src="/images/hero1.jpg"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="w-14 h-14 p-1 bg-primary1 rounded-full flex center-flex relative -left-[30px]">
              <img
                alt=""
                src="/images/host.jpg"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="w-14 h-14 p-1 bg-primary1 rounded-full flex center-flex relative -left-[45px]">
              <img
                alt=""
                src="/images/hero1.jpg"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div
              onClick={() => handleScrollTo("contact")}
              className="text-white underline cursor-pointer md:ml-10"
            >
              Contact our hosts
            </div>
          </div>

          {/* streaming platforms */}
          <div className="md:h-[150px] flex gap-3 md:gap-5 items-center text-white border-t md:border-none border-white/20">
            <a
              href="https://open.spotify.com/show/2AlbaXLHC7EW1IFvsGGlcF?si=1dQ_vKAdTQaUjOMBha7OCw"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center gap-3 md:pr-3">
                <img
                  alt="icon"
                  src="/images/icons8-spotify.png"
                  className="w-8 md:w-12 h-auto"
                />
                <div>
                  <p className="font-medium md:font-bold text-sm md:text-md lg:text-lg">
                    Spotify Podcast
                  </p>
                  <p className="opacity-80 text-[.75em] md:text-sm lg:text-[1rem] underline cursor-pointer">
                    Listen Now
                  </p>
                </div>
              </div>
            </a>
            <div className="w-[2px] h-[100px] bg-transparent md:bg-white rounded-full"></div>
            <a
              href="https://podcasts.apple.com/gb/podcast/tci-the-chronicles-of-an-immigrant/id1727631336"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center gap-3">
                <img
                  alt="icon"
                  src="/images/icons8-podcast-96.png"
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
        </section>
      </div>

      <div className="w-full flex md:flex-row flex-col md:gap-10 justify-between md:mt-0">
        <div className="w-full md:w-1/2"></div>
        <div className="w-full md:w-1/2 h-[200px] md:h-[300px] bg-hero bg-cover bg-no-repeat bg-center flex flex-col md:flex-row justify-between md:gap-10 md:mt-0 relative">
          <div className="w-full h-full absolute top-0 left-0 bg-primary1/40 md:bg-primary1/30 center-flex">
            <p className="text-[2.5rem] text-white text-center font-sevillana blink">
              10,000+ <br />
              Worldwide Listeners
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
