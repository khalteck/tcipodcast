import { FaHeadphonesSimple } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="w-full relative">
      <div className="w-full flex flex-col md:flex-row bg-primary1">
        <div className="w-full h-[300px] md:min-h-screen lg:min-h-[110vh] lg:pb-[150px] bg-primary1 text-white flex center-flex flex-col relative">
          <div className="w-full h-[100px] md:mb-auto"></div>
          <div className="w-full font-bold md:mt-auto text-center text-[2rem] md:text-[3rem] lg:text-[4rem] leading-tight">
            <img
              alt="icon"
              src="/images/tci-text.png"
              className="w-[80%] md:w-[500px] h-auto mx-auto"
            />
            <img
              alt="icon"
              src="/images/My dreams are valid text.png"
              className="w-[100px] md:w-[150px] h-auto mx-auto mt-4 md:mt-7 blink"
            />
          </div>
          <div className="w-fit m-auto md:mx-0 py-3 px-5 md:p-10 hidden md:flex flex-col items-center gap-3 bg-primary1/50 rounded-xl">
            <p className="font-bold">Listen to us on:</p>
            <div className="flex flex-wrap justify-center w-[400px] gap-3">
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
              <a
                href="https://youtube.com/@tcipod?si=3XspzJg1QUfr5Qsr"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn-custom4 font-bold">
                  <img
                    alt="icon"
                    src="/images/icons8-youtube-music-48.png"
                    className="w-8 h-8 rounded-full"
                  />
                  Youtube
                </button>
              </a>
            </div>
          </div>

          <FaHeadphonesSimple
            size={"75px"}
            color="#fcea10"
            className="absolute bottom-[100px] lg:bottom-[200px] left-10 hidden md:flex rotate-12"
          />
          <FaHeadphonesSimple
            size={"40px"}
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

        <div className="w-full md:hidden flex relative px-3">
          <img
            alt="hero"
            src="/images/Landing page first pic.jpg"
            className="w-full h-auto rounded-[50px]"
          />
        </div>
      </div>

      <div className="w-full h-[300px] sm:h-[350px] pb-10 sm:pb-[100px] bg-primary1 text-white flex md:hidden center-flex">
        <div className="w-fit mx-auto md:mx-0 py-3 px-5 md:p-10 flex flex-col items-center md:items-start gap-3 bg-primary1/50 rounded-xl">
          <p className="font-bold">Listen to us on:</p>
          <div className="flex flex-wrap justify-center gap-3">
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
            <a
              href="https://youtube.com/@tcipod?si=3XspzJg1QUfr5Qsr"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn-custom4 font-bold">
                <img
                  alt="icon"
                  src="/images/icons8-youtube-music-48.png"
                  className="w-8 h-8 rounded-full"
                />
                Youtube
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* wave */}
      <div className="w-full absolute bottom-[-0px] left-0">
        <img alt="wave" src="/images/waves2.png" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default HeroSection;
