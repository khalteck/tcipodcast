import topPodcastData from "../../data/topPodcasts.json";
import PodcastCard from "./PodcastCard";
import { useAppContext } from "../../contexts/AppContext";
import PodcastCard2 from "./PodcastCard2";
import { IoPlay } from "react-icons/io5";
import { BsPlayCircleFill } from "react-icons/bs";
import { FaHeadset } from "react-icons/fa";
import { GiSplash } from "react-icons/gi";

const Section3 = () => {
  const { navigate, handleToggleModal } = useAppContext();
  const latestEpisode = topPodcastData?.[0];
  return (
    <div
      id="episodes"
      className="relative bg-secondary2 text-white pb-[80px] md:pb-[100px] pt-10 md:pt-0"
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
      <h3 data-aos="fade-up" data-aos-duration="1000" className="text-center">
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
      <section className="pt-[50px] md:pt-[120px] flex flex-col md:flex-row md:items-center gap-10 md:gap-[80px]">
        <div className="w-full md:w-1/2 flex flex-col gap-3 md:gap-5 p-5">
          {/* <div className="w-full flex justify-between">
            <p className="font-bold">TCI PODCAST</p>
            <small>{latestEpisode?.date}</small>
          </div> */}
          <h3 className="font-bold">{latestEpisode?.title}</h3>
          <p className="font-bold">{latestEpisode?.date}</p>
          <p className="text-[1.1rem]">{latestEpisode?.description}</p>
          <div className="w-full flex justify-between mt-auto">
            <p className="font-bold">{latestEpisode?.duration}</p>
            <BsPlayCircleFill
              color={"#fcea10"}
              size={"60px"}
              className="cursor-pointer hover:scale-125"
              onClick={() => handleToggleModal(latestEpisode)}
            />
          </div>
          {/* <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="w-full mt-10 "
          >
            {topPodcastData?.slice(0, 1)?.map((item, index) => {
              return <PodcastCard2 key={index} item={item} index={index} />;
            })}
          </div> */}
        </div>
        <div className="w-full md:w-1/2">
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            alt="hero"
            src="/images/pod3.jpg"
            className="w-full h-[300px] md:h-[500px] lg:h-[700px] object-cover rounded-[50px]"
          />
        </div>
      </section>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
        className="mt-14 center-flex"
      >
        <button
          onClick={() => navigate("/episodes")}
          className="btn-custom4 text-[1.2rem]"
        >
          More Episodes <IoPlay color="black" />
        </button>
      </div>

      {/* decor */}
      <GiSplash
        size={"80px"}
        color="#481297"
        className="absolute -bottom-2 right-10 md:right-[100px]"
      />
    </div>
  );
};

export default Section3;
