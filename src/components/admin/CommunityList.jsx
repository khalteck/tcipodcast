import { useEffect, useState } from "react";
import CommunityCard from "./CommunityCard";
import { useAppContext } from "../../contexts/AppContext";
import {
  useFetchInitialCommunityQuery,
  useFetchNextCommunityMutation,
} from "../../redux/features/firebaseSlice";

const CommunityList = ({ type }) => {
  const { scrollToTop } = useAppContext();

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

  console.log("dataNext", dataNext);

  const [communityData, setCommunityData] = useState([]);

  useEffect(() => {
    if (isSuccessInitial) {
      setCommunityData(dataInitial);
    }
    if (isSuccessNext) {
      setCommunityData(dataNext);
    }
  }, [dataInitial, isSuccessInitial, dataNext, isLoadingNext]);

  console.log("communityData", communityData);

  const displayItems = communityData?.map((item, index) => {
    return <CommunityCard key={index} item={item} />;
  });

  async function handleNext() {
    localStorage.setItem(
      "lastVisible",
      JSON.stringify(communityData?.[communityData?.length - 1])
    );
    await fetchNextCommunity();
  }

  return (
    <div>
      <div className="w-full bg-neutral-100 flex flex-col gap-2 md:p-3 py-2">
        {!isLoadingInitial && !isLoadingNext ? (
          displayItems
        ) : (
          <div className="center-flex p-3">Loading..</div>
        )}
      </div>
      <div className="w-full flex gap-3 justify-center my-5 text-sm">
        <button className="px-3 py-1 hover:bg-secondary bg-neutral-200 border border-primary/30 rounded-md text-primary">
          Prev
        </button>
        <button
          onClick={handleNext}
          disabled={isLoadingNext || isLoadingInitial}
          className="px-3 py-1 hover:bg-secondary bg-neutral-200 border border-primary/30 rounded-md text-primary"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CommunityList;
