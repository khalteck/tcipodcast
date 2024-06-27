import { useAppContext } from "../../contexts/AppContext";
import { IoPlay } from "react-icons/io5";
import { BsPlayCircleFill } from "react-icons/bs";
import { FaHeadset } from "react-icons/fa";
import { GiSplash } from "react-icons/gi";
import { useSelector } from "react-redux";
import formatTimestamp from "../../utils/formatTimestamp";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import Divider from "./Divider";

const Section3 = () => {
  const { latestEpisode } = useSelector((state) => state.dataManagement);

  const { navigate, handleToggleModal } = useAppContext();
  // const latestEpisode = topPodcastData?.[0];

  return (
    <div
      // id="episodes"
      className="relative bg-[#ff4402]/70 text-white pt-[50px]"
    >
      {/* deocr */}
      <FaHeadset
        size={"60px"}
        color="#fcea10"
        className="absolute top-10 md:top-[100px] left-2 md:left-[100px] swing hidden md:flex"
      />
      <FaHeadset
        size={"30px"}
        color="#fcea10"
        className="absolute top-3 left-2 md:left-[100px] swing md:hidden"
      />
      <h3
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-center font-bold"
      >
        Latest Episode
      </h3>
      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
        className="text-center md:text-[1.25rem] mt-4"
      >
        Sharing untold migration stories from around the world
      </p>
      {!latestEpisode && (
        <section className="w-full h-[300px] mt-10 center-flex border-white/30 border rounded-md gap-10 md:gap-[80px]">
          Nothing to see here...
        </section>
      )}
      {latestEpisode && (
        <>
          <section className="pt-[50px] md:pt-[120px] flex flex-col-reverse md:flex-row md:items-center gap-10 md:gap-[80px]">
            <div className="w-full md:w-[45%] flex flex-col gap-3 md:gap-5 md:p-5 text-center md:text-start">
              <h3 className="font-bold">
                {capitalizeFirstLetter(latestEpisode?.title)}
              </h3>
              <p className="font-bold">
                {formatTimestamp(latestEpisode?.timestamp)}
              </p>
              <p className="">{latestEpisode?.description}</p>
              <div className="w-full flex justify-between mt-auto">
                <p className="font-bold">{latestEpisode?.duration}</p>
                <BsPlayCircleFill
                  color={"#fcea10"}
                  size={"60px"}
                  className="cursor-pointer hover:scale-125"
                  onClick={() => handleToggleModal(latestEpisode)}
                />
              </div>
            </div>
            <div className="w-full md:w-[55%]">
              <img
                data-aos="zoom-in"
                data-aos-duration="1000"
                alt="hero"
                src={latestEpisode?.thumbnail}
                className="w-full h-auto md:max-h-[700px] object-cover rounded-[50px]"
              />
            </div>
          </section>
          <div
            // data-aos="fade-up"
            // data-aos-duration="1000"
            // data-aos-delay="200"
            className="mt-14 mb-[100px] center-flex"
          >
            <button
              onClick={() => navigate("/episodes")}
              className="btn-custom4 text-[1.2rem]"
            >
              More Episodes <IoPlay color="black" />
            </button>
          </div>
        </>
      )}
      <Divider />

      {/* decor */}
      <GiSplash
        size={"80px"}
        color="#481297"
        className="absolute bottom-[90px] right-10 md:right-[100px]"
      />
    </div>
  );
};

export default Section3;
