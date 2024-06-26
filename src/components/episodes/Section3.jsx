import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import PodcastCard from "../home/PodcastCard";
import { useAppContext } from "../../contexts/AppContext";
import { useEffect, useState } from "react";
import { setNextPodcasts } from "../../redux/features/dataManagementSlice";
import { useFetchNextPodcastsClientQuery } from "../../redux/features/firebaseSlice";
import { ClipLoader } from "react-spinners";

const Section3 = ({}) => {
  const { allPodcasts, infoData } = useSelector(
    (state) => state.dataManagement
  );
  const { dispatch } = useAppContext();

  const otherEpisodes = allPodcasts?.filter((x, ind) => ind !== 0);

  // State to control when to trigger the query
  const [shouldFetch, setShouldFetch] = useState(false);

  // Conditionally fetch data using the skip option
  const { data, isLoading, isSuccess } = useFetchNextPodcastsClientQuery(
    undefined,
    {
      skip: !shouldFetch,
    }
  );

  useEffect(() => {
    if (data && isSuccess) {
      dispatch(setNextPodcasts(data));
      localStorage.setItem(
        "lastVisiblePodcastClient",
        JSON.stringify(data?.slice(-1)[0])
      );
    }
    if (!isLoading && data) {
      setShouldFetch(false);
    }
  }, [data, isSuccess, isLoading]);

  useEffect(() => {
    const dataEnd = infoData?.total_immigrants_corner === allPodcasts?.length;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !dataEnd) {
            setShouldFetch(true);
          }
        });
      },
      {
        root: null, // use the viewport as the container
        rootMargin: "0px",
        threshold: 0.8, // trigger when 80% of the target is visible
      }
    );

    const lastItemId = allPodcasts?.slice(-1)?.[0]?.id;
    const lastCardElement = document.getElementById(lastItemId);

    if (lastCardElement) {
      observer.observe(lastCardElement);
    }

    return () => {
      if (lastCardElement) {
        observer.unobserve(lastCardElement);
      }
    };
  }, [infoData, allPodcasts]);

  return (
    <div className="w-full bg-secondary py-[80px] md:pt-[100px]">
      <section className="pb-[100px]">
        <h3 className="text-center mb-[100px] text-primary">Other Episodes</h3>

        <div className="flex flex-col gap-[80px] md:gap-[100px]">
          {otherEpisodes?.map((item, index) => {
            const isOdd = (index + 1) % 2 === 1;
            return <PodcastCard key={index} item={item} isOdd={isOdd} />;
          })}

          {isLoading && (
            <div className="mt-14 center-flex font-bold text-[1.5rem] pt-5 border-t border-primary/50">
              <div className="flex flex-col items-center gap-3">
                Loading more... <ClipLoader size={"50px"} color="black" />
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Section3;
