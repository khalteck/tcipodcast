import { FaCaretUp, FaMicrophoneAlt } from "react-icons/fa";
import getTimeOfDay from "../../utils/getTimeOfDay";
import { ClipLoader } from "react-spinners";
import PaginatedList from "./PaginatedList";
import topPodcastData from "../../data/topPodcasts.json";
import communityData from "../../data/community.json";
import immigrantsCornerData from "../../data/immigrantsCorner.json";
import { useFetchAdminInfoQuery } from "../../redux/features/firebaseSlice";
import CommunityList from "./CommunityList";
import { FaPlus } from "react-icons/fa";

const Section2 = () => {
  const { isLoading: loadingInfo, data: infoData } = useFetchAdminInfoQuery();

  return (
    <div className="w-full bg-slate-50/90">
      <section className="py-[50px] min-h-screen">
        <h4 className="font-medium text-[1.25rem] md:text-[2rem]">
          Good {getTimeOfDay()} <span className="font-bold">Admin</span>,
        </h4>
        <div className="mt-10 flex gap-5 flex-wrap">
          <div className="w-full md:w-[350px] flex gap-4 p-4 rounded-md bg-white shadow-md">
            <div className="w-fit h-fit p-3 bg-primary1 rounded-md">
              <FaMicrophoneAlt color="#f9a815" size={"50px"} />
            </div>
            <div className="w-full">
              <p>Total Podcasts</p>
              <p className="text-[2rem] font-bold flex gap-2 items-center">
                {loadingInfo ? <ClipLoader /> : infoData?.total_podcasts}
                <FaCaretUp color="green" size={"20px"} />
                <button className="px-2 py-1 bg-secondary font-bold text-[.75rem] rounded-md ml-auto">
                  View all
                </button>
              </p>
            </div>
          </div>

          <div className="w-full md:w-[350px] flex gap-4 p-4 rounded-md bg-white shadow-md">
            <div className="w-fit h-fit p-3 bg-primary1 rounded-md">
              <FaMicrophoneAlt color="#f9a815" size={"50px"} />
            </div>
            <div className="w-full">
              <p>Immigrants corner</p>
              <p className="text-[2rem] font-bold flex gap-2 items-center">
                {loadingInfo ? <ClipLoader /> : infoData?.total_podcasts}
                <FaCaretUp color="green" size={"20px"} />
                <button className="px-2 py-1 bg-secondary font-bold text-[.75rem] rounded-md ml-auto">
                  View all
                </button>
              </p>
            </div>
          </div>

          <div className="w-full md:w-[350px] flex gap-4 p-4 rounded-md bg-white shadow-md">
            <div className="w-fit h-fit p-3 bg-primary1 rounded-md">
              <FaMicrophoneAlt color="#f9a815" size={"50px"} />
            </div>
            <div className="w-full">
              <p>Total Joined Community</p>
              <p className="text-[2rem] font-bold flex gap-2 items-center">
                {loadingInfo ? (
                  <ClipLoader />
                ) : (
                  infoData?.total_joined_community
                )}

                <FaCaretUp color="green" size={"20px"} />
                <button className="px-2 py-1 bg-secondary font-bold text-[.75rem] rounded-md ml-auto">
                  View all
                </button>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex gap-5 flex-wrap">
          <button className="btn-secondary bg-secondary font-bold text-[1rem] rounded-md center-flex">
            Add New Podcast <FaPlus size={"20px"} />
          </button>
          <button className="btn-secondary bg-secondary font-bold text-[1rem] rounded-md center-flex">
            Add Immigrants Corner <FaPlus size={"20px"} />
          </button>
        </div>

        <div className="w-full mt-10 flex flex-col md:flex-row gap-5 md:gap-7">
          <div className="w-full h-fit md:w-1/2 p-4 rounded-md bg-white">
            <h4 className="font-bold">Podcasts</h4>
            <PaginatedList data={topPodcastData} type={"podcast"} />
          </div>
          <div className="w-full h-fit md:w-1/2 p-4 rounded-md bg-white">
            <h4 className="font-bold">Immigrants corner</h4>
            <PaginatedList data={immigrantsCornerData} type={"immigrants"} />
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
  );
};

export default Section2;
