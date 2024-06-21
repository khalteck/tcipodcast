import getTimeOfDay from "../../utils/getTimeOfDay";
import { useFetchAdminInfoQuery } from "../../redux/features/firebaseSlice";
import CommunityList from "./CommunityList";
import { FaPlus } from "react-icons/fa";
import { useAppContext } from "../../contexts/AppContext";
import { useEffect } from "react";
import { setInfoData } from "../../redux/features/dataManagementSlice";
import { useSelector } from "react-redux";
import CreateImmigrantsCorner from "./CreateImmigrantsCorner";
import CreatePodcast from "./CreatePodcast";
import Totals from "./Totals";
import ImmigrantsCornerList from "./ImmigrantsCornerList";
import PodcastList from "./PodcastList";

const Section2 = () => {
  const {
    addpodcast,
    handleToggleaddPodcast,
    addImmigrantsCorner,
    handleToggleaddImmigrantsCorner,
    dispatch,
  } = useAppContext();

  const { infoData } = useSelector((state) => state?.dataManagement);

  const {
    isLoading: loadingInfo,
    isSuccess: isSuccessInfo,
    data: infoDataRaw,
    refetch,
  } = useFetchAdminInfoQuery();

  useEffect(() => {
    dispatch(setInfoData(infoDataRaw));
  }, [infoDataRaw]);

  return (
    <>
      <div className="w-full bg-slate-50/90">
        <section className="py-[50px] min-h-screen">
          <h4 className="font-medium text-[1.25rem] md:text-[2rem]">
            Good {getTimeOfDay()} <span className="font-bold">Admin</span>,
          </h4>

          <Totals loadingInfo={loadingInfo} />

          <div className="mt-10 flex gap-5 flex-wrap">
            <button
              onClick={() => handleToggleaddPodcast("create")}
              className="btn-secondary bg-secondary font-bold text-[1rem] rounded-md center-flex"
            >
              Add New Podcast <FaPlus size={"20px"} />
            </button>
            <button
              onClick={() => handleToggleaddImmigrantsCorner("create")}
              className="btn-secondary bg-secondary font-bold text-[1rem] rounded-md center-flex"
            >
              Add Immigrants Corner <FaPlus size={"20px"} />
            </button>
          </div>

          <div className="w-full mt-10 flex flex-col md:flex-row gap-5 md:gap-7">
            <div
              id="podcasts-list"
              className="w-full h-fit md:w-1/2 p-4 rounded-md bg-white"
            >
              <PodcastList
                infoData={infoData}
                refetch={refetch}
                loadingInfo={loadingInfo}
              />
            </div>
            <div
              id="immigrants-corner"
              className="w-full h-fit md:w-1/2 p-4 rounded-md bg-white"
            >
              <ImmigrantsCornerList
                infoData={infoData}
                refetch={refetch}
                loadingInfo={loadingInfo}
              />
            </div>
          </div>
          <div
            id="joined-community"
            className="w-full h-fit md:w-1/2 md:p-4 py-4 rounded-md bg-white mt-10"
          >
            <CommunityList infoData={infoData} />
          </div>
        </section>
      </div>

      {addpodcast && <CreatePodcast onClose={handleToggleaddPodcast} />}
      {addImmigrantsCorner && (
        <CreateImmigrantsCorner onClose={handleToggleaddImmigrantsCorner} />
      )}
    </>
  );
};

export default Section2;
