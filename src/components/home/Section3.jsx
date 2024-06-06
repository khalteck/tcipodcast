import topPodcastData from "../../data/topPodcasts.json";
import PodcastCard from "./PodcastCard";
import { useAppContext } from "../../contexts/AppContext";

const Section3 = () => {
  const { navigate } = useAppContext();
  return (
    <div className="relative">
      <section
        id="episodes"
        className="pt-[50px] pb-[150px] md:pt-[120px] sm:pb-[200px] md:pb-[300px] lg:pb-[500px] xxl:pb-[700px]"
      >
        <h3 className="text-center">Top Episodes For You</h3>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 gap-5">
          {topPodcastData?.slice(0, 6)?.map((item, index) => {
            return <PodcastCard key={index} item={item} index={index} />;
          })}
        </div>
        <div className="center-flex mt-14 md:mt-[100px]">
          <button
            onClick={() => navigate("/episodes")}
            className="btn-secondary w-full md:w-1/3 center-flex"
          >
            View all
          </button>
        </div>
      </section>

      {/* sharp edge bottom */}
      <svg
        className="w-full absolute bottom-[-0.5px] xxl:bottom-[-1px] left-0 z-0 hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#5828a1"
          fillOpacity="1"
          d="M0,192L288,288L576,128L864,288L1152,0L1440,160L1440,320L1152,320L864,320L576,320L288,320L0,320Z"
        ></path>
      </svg>

      {/* mobile wave */}
      <svg
        className="w-full absolute bottom-[-1px] left-0 z-0 block md:hidden"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#5828a1"
          fillOpacity="1"
          d="M0,192L288,288L576,128L864,288L1152,0L1440,160L1440,320L1152,320L864,320L576,320L288,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Section3;
