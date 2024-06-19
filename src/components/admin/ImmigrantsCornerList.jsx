import { useEffect, useState } from "react";
import { useAppContext } from "../../contexts/AppContext";
import {
  useFetchInitialImmigrantsCornerQuery,
  useFetchNextImmigrantsCornerMutation,
  useFetchPreviousImmigrantsCornerMutation,
} from "../../redux/features/firebaseSlice";
import { ClipLoader } from "react-spinners";
import ImmigrantsCornerCard from "./ImmigrantsCornerCard";

const ImmigrantsCornerList = ({ infoData, refetch }) => {
  const { handleScrollTo, reRender } = useAppContext();

  // to fetch data
  const {
    isLoading: isLoadingInitial,
    data: dataInitial,
    isSuccess: isSuccessInitial,
    refetch: refetchInitial,
  } = useFetchInitialImmigrantsCornerQuery();

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
    fetchNextImmigrantsCorner,
    { isLoading: isLoadingNext, isSuccess: isSuccessNext, data: dataNext },
  ] = useFetchNextImmigrantsCornerMutation();

  //to get prev 5 data
  const [
    fetchPreviousImmigrantsCorner,
    { isLoading: isLoadingPrev, isSuccess: isSuccessPrev, data: dataPrev },
  ] = useFetchPreviousImmigrantsCornerMutation();

  const [immigrantsData, setimmigrantsData] = useState([]);

  // console.log("immigrantsData", immigrantsData);

  const pagDetails =
    JSON.parse(localStorage.getItem("pagDetailsImmigrants")) || null;
  const dataEnd = infoData?.total_immigrants_corner === pagDetails?.displayed;
  const dataStart = pagDetails?.page === 1;

  const totalPages = Math.ceil(infoData?.total_immigrants_corner / 5);

  useEffect(() => {
    if (isSuccessInitial && dataInitial && pagDetails?.page === 1) {
      setimmigrantsData(dataInitial);
      localStorage.setItem(
        "lastVisibleImmigrants",
        JSON.stringify(dataInitial?.[dataInitial?.length - 1])
      );
    }
    if (isSuccessNext && dataNext) {
      localStorage.setItem(
        "lastVisibleImmigrants",
        JSON.stringify(immigrantsData?.[immigrantsData?.length - 1])
      );
      localStorage.setItem(
        "firstVisibleImmigrants",
        JSON.stringify(immigrantsData?.[0])
      );
    }
    if (isSuccessPrev && dataPrev) {
      localStorage.setItem(
        "lastVisibleImmigrants",
        JSON.stringify(immigrantsData?.[immigrantsData?.length - 1])
      );
      localStorage.setItem(
        "firstVisibleImmigrants",
        JSON.stringify(immigrantsData?.[0])
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
      localStorage.setItem(
        "pagDetailsImmigrants",
        JSON.stringify(newPagDetails)
      );
      localStorage.removeItem("firstVisibleImmigrants");
    }
  }, [dataInitial, isSuccessInitial]);

  const displayItems = immigrantsData?.map((item, index) => {
    return <ImmigrantsCornerCard key={index} item={item} />;
  });

  async function handleNext() {
    const response = await fetchNextImmigrantsCorner();
    setimmigrantsData(response?.data);

    const oldPagDetails =
      JSON.parse(localStorage.getItem("pagDetailsImmigrants")) || null;

    const newPagDetails = {
      page: oldPagDetails?.page + 1,
      displayed: oldPagDetails?.displayed + response?.data?.length,
    };

    localStorage.setItem("pagDetailsImmigrants", JSON.stringify(newPagDetails));

    handleScrollTo("immigrants-corner");
  }

  async function handlePrev() {
    const response = await fetchPreviousImmigrantsCorner();
    setimmigrantsData(response?.data);

    const oldPagDetails =
      JSON.parse(localStorage.getItem("pagDetailsImmigrants")) || null;

    const newPagDetails = {
      page: oldPagDetails?.page - 1,
      displayed: oldPagDetails?.displayed - immigrantsData?.length,
    };
    localStorage.setItem("pagDetailsImmigrants", JSON.stringify(newPagDetails));

    handleScrollTo("immigrants-corner");
  }

  return (
    <div>
      <div className="w-full flex justify-between px-2">
        <h4 className="font-bold md:px-0">Immigrants Corner</h4>
        <p className="font-medium text-[.9rem]">
          Page <span className="font-bold">{pagDetails?.page}</span> of{" "}
          <span className="font-bold">{!isNaN(totalPages) && totalPages}</span>
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

export default ImmigrantsCornerList;
