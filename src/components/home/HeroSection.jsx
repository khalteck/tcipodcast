const HeroSection = () => {
  return (
    <div className="w-full min-h-[650px] md:min-h-screen bg-hero4 bg-cover bg-top bg-no-repeat flex relative">
      <div className="w-full h-full md:p-[80px] bg-primary1/20 absolute top-0 left-0 flex flex-col items-center justify-center">
        <div className="w-full h-[150px] xl:mb-[100px]"></div>

        <div className="text-white/90 font-bold text-center text-[2rem] md:text-[4rem] leading-tight mt-auto">
          <div>
            The <span className="white rounded-full px-5">Chronicles</span> Of
            <br /> An Immigrant
          </div>
          <p className="text-[.9rem] md:text-[1.25rem] blink mt-2">
            My Dreams Are Valid!
          </p>
        </div>

        <div className="w-full mb-5 md:mb-0 mt-auto text-white">
          <div className="w-fit mx-auto md:mx-0 py-3 px-5 md:p-10 flex flex-col items-center md:items-start gap-3 bg-primary1/50 rounded-xl">
            <p className="font-bold">Listen to us on:</p>
            <div className="flex gap-3">
              <a
                href="https://open.spotify.com/show/2AlbaXLHC7EW1IFvsGGlcF?si=1dQ_vKAdTQaUjOMBha7OCw"
                target="_blank"
                rel="noreferrer"
              >
                <button className="rounded-full py-2 px-5 md:px-7 md:py-3 border border-white bg-white/30 flex gap-2 items-center font-bold">
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
                <button className="rounded-full py-2 px-5 md:px-7 md:py-3 border border-white bg-white/30 flex gap-2 items-center font-bold">
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
      </div>
    </div>
  );
};

export default HeroSection;
