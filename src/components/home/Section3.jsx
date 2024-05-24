import TopPodcastCard from "./TopPodcastCard";
import topPodcastData from "../../data/topPodcasts.json";

const Section3 = () => {
  return (
    <section className="py-[120px]">
      <h3 className="text-center">Top Episodes For You</h3>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 gap-10">
        {topPodcastData?.map((item, index) => {
          return <TopPodcastCard key={index} item={item} index={index} />;
        })}
      </div>
      <div className="center-flex mt-[100px]">
        <button className="btn-custom">View all</button>
      </div>
    </section>
  );
};

export default Section3;
