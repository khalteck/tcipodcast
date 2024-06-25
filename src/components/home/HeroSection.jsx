import { FaHeadphonesSimple } from "react-icons/fa6";
import { GiSplash } from "react-icons/gi";

const HeroSection = () => {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full h-[300px] md:min-h-screen bg-primary1 text-white flex center-flex flex-col relative">
          <div className="w-full h-[100px] md:mb-auto"></div>
          <div className="w-full font-bold md:mt-auto text-center text-[2rem] md:text-[3rem] lg:text-[4rem] leading-tight">
            <div className="w-full">
              The{" "}
              <span className="white rounded-full pl-3 pr-2 mr-3 relative">
                Chronicles{" "}
                <GiSplash
                  size={"75px"}
                  color="#fff"
                  className="absolute top-[-80px] lg:top-[-70px] left-[50%] translate-x-[-50%] hidden md:flex"
                />
              </span>{" "}
              Of
              <br /> An Immigrant
            </div>
            <p className="text-[.9rem] md:text-[1.25rem] blink mt-2">
              My Dreams Are Valid!
            </p>
          </div>
          <div className="w-fit m-auto md:mx-0 py-3 px-5 md:p-10 hidden md:flex flex-col items-center gap-3 bg-primary1/50 rounded-xl">
            <p className="font-bold">Listen to us on:</p>
            <div className="flex gap-3">
              <a
                href="https://open.spotify.com/show/2AlbaXLHC7EW1IFvsGGlcF?si=1dQ_vKAdTQaUjOMBha7OCw"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn-custom4 font-bold">
                  <img
                    alt="icon"
                    src="/images/icons8-spotify.png"
                    className="w-8 h-8"
                  />
                  Spotify
                </button>
              </a>
              <a
                href="https://podcasts.apple.com/gb/podcast/tci-the-chronicles-of-an-immigrant/id1727631336"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn-custom6 font-bold">
                  <img
                    alt="icon"
                    src="/images/icons8-podcast-96.png"
                    className="w-8 h-8 bg-white rounded-full"
                  />
                  Apple
                </button>
              </a>
            </div>
          </div>

          <FaHeadphonesSimple
            size={"75px"}
            color="#fcea10"
            className="absolute bottom-10 left-10 hidden md:flex rotate-12"
          />
          <FaHeadphonesSimple
            size={"30px"}
            color="#fcea10"
            className="absolute bottom-10 right-10 md:hidden flex rotate-12"
          />
        </div>

        <div className="w-full min-h-screen bg-hero4 bg-cover bg-top bg-no-repeat hidden md:flex relative">
          {/* <img
            alt="hero"
            src="/images/Landing page first pic.jpg"
            className="w-full h-auto"
          /> */}
        </div>

        <div className="w-full md:hidden flex relative">
          <img
            alt="hero"
            src="/images/Landing page first pic.jpg"
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="w-full h-[160px] md:h-[400px] bg-primary1 text-white flex md:hidden center-flex">
        <div className="w-fit mx-auto md:mx-0 py-3 px-5 md:p-10 flex flex-col items-center md:items-start gap-3 bg-primary1/50 rounded-xl">
          <p className="font-bold">Listen to us on:</p>
          <div className="flex gap-3">
            <a
              href="https://open.spotify.com/show/2AlbaXLHC7EW1IFvsGGlcF?si=1dQ_vKAdTQaUjOMBha7OCw"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn-custom4 font-bold">
                <img
                  alt="icon"
                  src="/images/icons8-spotify.png"
                  className="w-8 h-8"
                />
                Spotify
              </button>
            </a>
            <a
              href="https://podcasts.apple.com/gb/podcast/tci-the-chronicles-of-an-immigrant/id1727631336"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn-custom4 font-bold">
                <img
                  alt="icon"
                  src="/images/icons8-podcast-96.png"
                  className="w-8 h-8 bg-white rounded-full"
                />
                Apple
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
