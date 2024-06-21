import { BsPlayCircleFill } from "react-icons/bs";
import { useAppContext } from "../../contexts/AppContext";
import { GiSplash } from "react-icons/gi";
import { useSelector } from "react-redux";

const Section2 = ({}) => {
  const { allPodcasts } = useSelector((state) => state.dataManagement);

  const { handleToggleModal } = useAppContext();

  const latestEpisode = allPodcasts?.[0];

  return (
    <div className="w-full bg-secondary2 text-white pb-[80px] px-3 pt-10 md:pt-0 relative">
      <div className="w-full">
        <h3 className="text-center mb-10 md:mb-5">Latest Episode</h3>
        <section
          id=""
          className="pb-[80px] md:py-[80px] flex flex-col md:flex-row-reverse md:items-center gap-10"
        >
          <div className="w-full md:w-[55%]">
            <img
              alt="hero"
              src={latestEpisode?.thumbnail}
              className="w-full h-auto object-cover rounded-[50px]"
            />
          </div>
          <div className="w-full md:w-[45%]">
            <h3
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-start mb-2"
            >
              {latestEpisode?.title}
            </h3>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="font-bold"
            >
              {latestEpisode?.date}
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="my-5 md:mb-10 text-start text-[1.25rem] font-medium"
            >
              {latestEpisode?.description}
            </p>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="w-full flex justify-between mt-auto"
            >
              <BsPlayCircleFill
                color={"#fcea10"}
                size={"50px"}
                className="cursor-pointer hover:scale-125"
                onClick={() => handleToggleModal(latestEpisode)}
              />
              <p className="font-bold">{latestEpisode?.duration}</p>
            </div>
          </div>
        </section>
      </div>

      {/* decor */}
      <GiSplash
        size={"100px"}
        color="#fcea10"
        className="absolute -bottom-2 right-10 md:right-[100px]"
      />
    </div>
  );
};

export default Section2;
