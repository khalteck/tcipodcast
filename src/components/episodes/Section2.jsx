import { BsPlayCircleFill } from "react-icons/bs";
import { useAppContext } from "../../contexts/AppContext";

const Section2 = ({ latestEpisode }) => {
  const { handleToggleModal } = useAppContext();

  return (
    <div className="w-full bg-secondary2 text-white pb-[80px] px-3 pt-10 md:pt-0">
      <div className="w-full">
        <h3 className="text-center mb-5">Latest Episode</h3>
        <section
          id=""
          className="py-[80px] md:pb-[80px] flex flex-col md:flex-row-reverse md:items-center gap-10"
        >
          <div className="w-full md:w-1/2">
            <img
              data-aos="zoom-in"
              data-aos-duration="1000"
              alt="hero"
              src="/images/pod.jpg"
              className="w-full h-[300px] md:h-[500px] lg:h-[700px] object-cover rounded-[50px]"
            />
          </div>
          <div className="w-full md:w-1/2">
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
              className="mt-5 mb-10 text-start text-[1.25rem] font-medium"
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
    </div>
  );
};

export default Section2;
