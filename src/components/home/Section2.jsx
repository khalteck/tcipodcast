import { BiSolidMessageDetail } from "react-icons/bi";
import { FaSpotify } from "react-icons/fa";

const Section2 = () => {
  return (
    <section className="w-full flex md:flex-row flex-col gap-10 justify-between mt-10 md:mt-0">
      <div className="w-full md:w-[45%]">
        <div className="w-full sm:w-[350px] relative px-5">
          <div className="w-full sm:w-[350px] p-7 rounded-2xl bg-[#414144]/80 flex flex-col gap-2 absolute top-0 left-0 z-20">
            <p className="font-bold text-xl blink text-white">120 million +</p>
            <small>World-wide podcast listeners 2024</small>
          </div>
          <div className="w-full h-[100px] p-7 rounded-2xl bg-[#2c2a2f] flex flex-col gap-2 translate-y-[40px] z-10"></div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-between gap-10 mt-14 md:mt-0">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-primary rounded-full center-flex">
              <FaSpotify size={"15px"} color="black" />
            </div>
            <p className="font-bold text-md lg:text-lg">Listen on spotify</p>
          </div>
          <p className="opacity-80 mt-4 text-sm lg:text-[1rem]">
            The migration journey is not an easy one; the excitement of leaving
            your home country vanishes when the true picture of migration begins
            to unravel itself.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-primary rounded-full center-flex">
              <BiSolidMessageDetail size={"15px"} color="black" />
            </div>
            <p className="font-bold text-md lg:text-lg">Send voice message</p>
          </div>
          <p className="opacity-80 mt-4 text-sm lg:text-[1rem]">
            I am Omoyeni Mebude, or Mo for short, a Nigerian immigrant who moved
            to England in 2021. Join me as we take a deep dive into the untold
            stories of the migration journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
