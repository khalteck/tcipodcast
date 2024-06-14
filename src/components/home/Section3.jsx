import topPodcastData from "../../data/topPodcasts.json";
import PodcastCard from "./PodcastCard";
import { useAppContext } from "../../contexts/AppContext";
import PodcastCard2 from "./PodcastCard2";
import { IoPlay } from "react-icons/io5";

const Section3 = () => {
  const { navigate } = useAppContext();
  return (
    <div id="episodes" className="relative bg-[#01ffff] text-primary1">
      <section className="pt-[50px] pb-[80px] md:pb-[150px] md:pt-[120px] flex flex-col md:flex-row md:items-center gap-10">
        <div className="w-full md:w-1/2">
          <h3
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-center"
          >
            Latest Episode
          </h3>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="text-center md:text-[1.25rem]"
          >
            Sharing untold migration stories from around the world
          </p>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="w-full mt-10"
          >
            {topPodcastData?.slice(0, 1)?.map((item, index) => {
              return <PodcastCard2 key={index} item={item} index={index} />;
            })}
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="mt-10 center-flex"
          >
            <button
              onClick={() => navigate("/episodes")}
              className="btn-custom3"
            >
              More Episodes <IoPlay color="white" />
            </button>
          </div>
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
    </div>
  );
};

export default Section3;
