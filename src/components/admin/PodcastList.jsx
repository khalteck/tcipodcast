import { useEffect, useState } from "react";
import { useAppContext } from "../../contexts/AppContext";
import {
  useFetchInitialPodcastsQuery,
  useFetchNextPodcastsMutation,
  useFetchPreviousPodcastsMutation,
} from "../../redux/features/firebaseSlice";
import { ClipLoader } from "react-spinners";
import ImmigrantsCornerCard from "./ImmigrantsCornerCard";
import PodcastCardAdmin from "./PodcastCardAdmin";

const PodcastList = ({ infoData, refetch }) => {
  const { handleScrollTo, reRender } = useAppContext();

  // to fetch data
  const {
    isLoading: isLoadingInitial,
    data: dataInitial,
    isSuccess: isSuccessInitial,
    refetch: refetchInitial,
  } = useFetchInitialPodcastsQuery();

  function refetchAll() {
    refetch();
    refetchInitial();
  }

  useEffect(() => {
    if (infoData && dataInitial) {
      refetchAll();
    }
  }, [reRender]);

  //to get next 5 data
  const [
    fetchNextPodcasts,
    { isLoading: isLoadingNext, isSuccess: isSuccessNext, data: dataNext },
  ] = useFetchNextPodcastsMutation();

  //to get prev 5 data
  const [
    fetchPreviousPodcasts,
    { isLoading: isLoadingPrev, isSuccess: isSuccessPrev, data: dataPrev },
  ] = useFetchPreviousPodcastsMutation();

  const [podcastsData, setpodcastsData] = useState([]);

  // console.log("podcastsData", podcastsData);

  const pagDetails =
    JSON.parse(localStorage.getItem("pagDetailsPodcasts")) || null;
  const dataEnd = infoData?.total_podcasts === pagDetails?.displayed;
  const dataStart = pagDetails?.page === 1;

  const totalPages = Math.ceil(infoData?.total_podcasts / 4);

  useEffect(() => {
    if (isSuccessInitial && dataInitial && pagDetails?.page === 1) {
      setpodcastsData(dataInitial);
      localStorage.setItem(
        "lastVisiblePodcasts",
        JSON.stringify(dataInitial?.[dataInitial?.length - 1])
      );
    }
    if (isSuccessNext && dataNext) {
      localStorage.setItem(
        "lastVisiblePodcasts",
        JSON.stringify(podcastsData?.[podcastsData?.length - 1])
      );
      localStorage.setItem(
        "firstVisiblePodcasts",
        JSON.stringify(podcastsData?.[0])
      );
    }
    if (isSuccessPrev && dataPrev) {
      localStorage.setItem(
        "lastVisiblePodcasts",
        JSON.stringify(podcastsData?.[podcastsData?.length - 1])
      );
      localStorage.setItem(
        "firstVisiblePodcasts",
        JSON.stringify(podcastsData?.[0])
      );
    }
  }, [
    dataInitial,
    isSuccessInitial,
    dataNext,
    isLoadingNext,
    dataPrev,
    isLoadingPrev,
    pagDetails,
  ]);

  useEffect(() => {
    if (dataInitial && isSuccessInitial) {
      const newPagDetails = {
        page: 1,
        displayed: dataInitial?.length,
      };
      localStorage.setItem("pagDetailsPodcasts", JSON.stringify(newPagDetails));
      localStorage.removeItem("firstVisiblePodcasts");
    }
  }, [dataInitial, isSuccessInitial]);

  const displayItems = podcastsData?.map((item, index) => {
    return <PodcastCardAdmin key={index} item={item} />;
  });

  async function handleNext() {
    const response = await fetchNextPodcasts();
    setpodcastsData(response?.data);

    const oldPagDetails =
      JSON.parse(localStorage.getItem("pagDetailsPodcasts")) || null;

    const newPagDetails = {
      page: oldPagDetails?.page + 1,
      displayed: oldPagDetails?.displayed + response?.data?.length,
    };

    localStorage.setItem("pagDetailsPodcasts", JSON.stringify(newPagDetails));

    handleScrollTo("podcasts-list");
  }

  async function handlePrev() {
    const response = await fetchPreviousPodcasts();
    setpodcastsData(response?.data);

    const oldPagDetails =
      JSON.parse(localStorage.getItem("pagDetailsPodcasts")) || null;

    const newPagDetails = {
      page: oldPagDetails?.page - 1,
      displayed: oldPagDetails?.displayed - podcastsData?.length,
    };
    localStorage.setItem("pagDetailsPodcasts", JSON.stringify(newPagDetails));

    handleScrollTo("podcasts-list");
  }

  return (
    <div>
      <div className="w-full flex justify-between px-2">
        <h4 className="font-bold md:px-0">Podcasts</h4>
        {!isLoadingInitial && (
          <p className="font-medium text-[.9rem]">
            Page <span className="font-bold">{pagDetails?.page}</span> of{" "}
            <span className="font-bold">
              {!isNaN(totalPages) && totalPages}
            </span>
          </p>
        )}
      </div>
      <div className="w-full min-h-[400px] bg-neutral-100 flex flex-col gap-2 md:p-3 py-2">
        {!isLoadingInitial && !isLoadingNext && !isLoadingPrev ? (
          displayItems
        ) : (
          <div className="center-flex gap-3 p-3">
            Loading.. <ClipLoader color="black" size={"20px"} />
          </div>
        )}
      </div>
      <div className="w-full flex gap-3 justify-center my-5 text-sm">
        <button
          onClick={handlePrev}
          disabled={
            dataStart || isLoadingPrev || isLoadingInitial || isLoadingNext
          }
          className={`px-3 py-1 bg-neutral-200 border border-primary/30 rounded-md text-primary ${
            dataStart ? "opacity-50 cursor-not-allowed" : "hover:bg-secondary"
          }`}
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          disabled={
            dataEnd || isLoadingNext || isLoadingInitial || isLoadingPrev
          }
          className={`px-3 py-1 bg-neutral-200 border border-primary/30 rounded-md text-primary ${
            dataEnd ? "opacity-50 cursor-not-allowed" : "hover:bg-secondary"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PodcastList;
