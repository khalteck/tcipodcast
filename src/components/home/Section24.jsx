import { FaPlay } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { FaHeadphonesAlt } from "react-icons/fa";
import { BsPlayCircleFill } from "react-icons/bs";
import { useAppContext } from "../../contexts/AppContext";

const Section24 = () => {
  const { navigate } = useAppContext();
  return (
    <div className="w-full mt-[80px]">
      <section className="w-full pb-[80px] md:py-0 flex flex-col md:flex-row gap-10">
        <div className="w-full flex md:flex-row flex-col gap-4 md:w-1/2">
          <img
            alt="hero"
            src="/images/podcast.jpg"
            className="w-full md:w-[30%] h-[220px] md:h-full object-cover rounded-lg"
          />
          <div className="w-full flex flex-col gap-4">
            <div className="bg-gray-200 rounded-lg w-full h-[130px] md:h-[50%] flex gap-1">
              <div className="w-[30%] h-full bg-primary1/40 rounded-l-lg center-flex">
                <FaHeadphonesAlt size={"60px"} />
              </div>
              <div className="w-[70%] flex flex-col gap-3 p-3">
                <p className="font-bold text-[1.1rem]">How to make money</p>
                <small>By Mo Mebude</small>
                <div className="flex justify-between items-center mt-auto">
                  <BsPlayCircleFill
                    color={"#2a354e"}
                    size={"30px"}
                    className="cursor-pointer hover:scale-125"
                  />
                  <small>20 minutes 30 seconds</small>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg w-full h-[130px] md:h-[50%] flex gap-1">
              <div className="w-[30%] h-full bg-primary2/50 rounded-l-lg center-flex">
                <FaHeadphonesAlt size={"60px"} />
              </div>
              <div className="w-[70%] flex flex-col gap-3 p-3">
                <p className="font-bold text-[1.1rem]">How to make money</p>
                <small>By Mo Mebude</small>
                <div className="flex justify-between items-center mt-auto">
                  <BsPlayCircleFill
                    color={"#2a354e"}
                    size={"30px"}
                    className="cursor-pointer hover:scale-125"
                  />
                  <small>20 minutes 30 seconds</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-5">
          <h3>Our Mission, Your Entertainment</h3>
          {/* <h3 className="">We offer the best for you</h3> */}

          <p className="text-lg leading-relaxed mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <button
            onClick={() => navigate("/episodes")}
            className="btn-secondary mt-5 w-fit"
          >
            Listen All <FaPlay color="#2a354e" size={"15"} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Section24;
