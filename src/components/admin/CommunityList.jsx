import { useEffect, useState } from "react";
import CommunityCard from "./CommunityCard";
import { useAppContext } from "../../contexts/AppContext";
import {
  useFetchInitialCommunityQuery,
  useFetchNextCommunityMutation,
  useFetchPreviousCommunityMutation,
} from "../../redux/features/firebaseSlice";
import { ClipLoader } from "react-spinners";

const CommunityList = ({ infoData }) => {
  const { handleScrollTo } = useAppContext();

  // to fetch data
  const {
    isLoading: isLoadingInitial,
    data: dataInitial,
    isSuccess: isSuccessInitial,
  } = useFetchInitialCommunityQuery();

  //to get next 5 data
  const [
    fetchNextCommunity,
    { isLoading: isLoadingNext, isSuccess: isSuccessNext, data: dataNext },
  ] = useFetchNextCommunityMutation();

  //to get prev 5 data
  const [
    fetchPreviousCommunity,
    { isLoading: isLoadingPrev, isSuccess: isSuccessPrev, data: dataPrev },
  ] = useFetchPreviousCommunityMutation();

  const [communityData, setCommunityData] = useState([]);

  const pagDetails = JSON.parse(localStorage.getItem("pagDetails")) || null;
  const dataEnd = infoData?.total_joined_community === pagDetails?.displayed;
  const dataStart = pagDetails?.page === 1;

  const totalPages = Math.ceil(infoData?.total_joined_community / 5);

  useEffect(() => {
    if (isSuccessInitial && dataInitial && pagDetails?.page === 1) {
      setCommunityData(dataInitial);
      localStorage.setItem(
        "lastVisibleCommunity",
        JSON.stringify(dataInitial?.[dataInitial?.length - 1])
      );
    }
    if (isSuccessNext && dataNext) {
      localStorage.setItem(
        "lastVisibleCommunity",
        JSON.stringify(communityData?.[communityData?.length - 1])
      );
      localStorage.setItem(
        "firstVisibleCommunity",
        JSON.stringify(communityData?.[0])
      );
    }
    if (isSuccessPrev && dataPrev) {
      localStorage.setItem(
        "lastVisibleCommunity",
        JSON.stringify(communityData?.[communityData?.length - 1])
      );
      localStorage.setItem(
        "firstVisibleCommunity",
        JSON.stringify(communityData?.[0])
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
      localStorage.setItem("pagDetails", JSON.stringify(newPagDetails));
      localStorage.removeItem("firstVisibleCommunity");
    }
  }, [dataInitial, isSuccessInitial]);

  const displayItems = communityData?.map((item, index) => {
    return <CommunityCard key={index} item={item} />;
  });

  async function handleNext() {
    const response = await fetchNextCommunity();
    setCommunityData(response?.data);

    const oldPagDetails =
      JSON.parse(localStorage.getItem("pagDetails")) || null;

    const newPagDetails = {
      page: oldPagDetails?.page + 1,
      displayed: oldPagDetails?.displayed + response?.data?.length,
    };

    localStorage.setItem("pagDetails", JSON.stringify(newPagDetails));

    handleScrollTo("joined-community");
  }

  async function handlePrev() {
    const response = await fetchPreviousCommunity();
    setCommunityData(response?.data);

    const oldPagDetails =
      JSON.parse(localStorage.getItem("pagDetails")) || null;

    const newPagDetails = {
      page: oldPagDetails?.page - 1,
      displayed: oldPagDetails?.displayed - communityData?.length,
    };
    localStorage.setItem("pagDetails", JSON.stringify(newPagDetails));

    handleScrollTo("joined-community");
  }

  return (
    <div>
      <div className="w-full flex justify-between px-2">
        <h4 className="font-bold md:px-0">Joined Community</h4>
        <p className="font-medium text-[.9rem]">
          Page <span className="font-bold">{pagDetails?.page}</span> of{" "}
          <span className="font-bold">{totalPages}</span>
        </p>
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

export default CommunityList;
