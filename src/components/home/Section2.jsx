import { BiSolidMessageDetail } from "react-icons/bi";
import { FaSpotify } from "react-icons/fa";
import { FaItunes } from "react-icons/fa";

const Section2 = () => {
  return (
    <section className="w-full flex md:flex-row flex-col gap-10 justify-between mt-10 md:mt-0">
      <div className="w-full md:w-[45%]">
        <div className="w-full sm:w-[350px] relative px-5">
          <div className="w-full sm:w-[350px] p-7 rounded-2xl bg-[#663881] flex flex-col gap-2 absolute top-0 left-0 z-20">
            <p className="font-bold text-xl blink text-white">120 million +</p>
            <small className="text-white/70">
              World-wide podcast listeners 2024
            </small>
          </div>
          <div className="w-full h-[100px] p-7 rounded-2xl bg-[#2c2a2f]/70 flex flex-col gap-2 translate-y-[40px] z-10"></div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-between gap-10 mt-14 md:mt-0">
        <div className="w-full md:w-1/2 border border-primary/50 p-3 rounded-md hover:bg-secondary/70 hover:rotate-6 bg-[#663881]/10 transition-all duration-500">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full center-flex">
              <FaSpotify size={"20px"} color="#ffc65b" />
            </div>
            <div>
              <p className="font-bold text-md lg:text-lg">Listen on Spotify</p>
              <p className="opacity-80 text-sm lg:text-[1rem] underline cursor-pointer">
                Listen Now
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 border border-primary/50 p-3 rounded-md hover:bg-secondary/70 hover:rotate-6 bg-[#663881]/10 transition-all duration-500">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full center-flex">
              <FaItunes size={"20px"} color="#ffc65b" />
            </div>
            <div>
              <p className="font-bold text-md lg:text-lg">Listen on Apple</p>
              <p className="opacity-80 text-sm lg:text-[1rem] underline cursor-pointer">
                Listen Now
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
