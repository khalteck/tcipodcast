import { useEffect, useState } from "react";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/Header";
import topPodcastData from "../../data/topPodcasts.json";
import communityData from "../../data/community.json";
import ReactPaginate from "react-paginate";
import { useAppContext } from "../../contexts/AppContext";
import ScrollToTop from "../../ScrollToTop";
import getTimeOfDay from "../../utils/getTimeOfDay";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa6";
import PodcastCardAdmin from "../../components/admin/PodcastCardAdmin";
import PaginatedList from "../../components/admin/PaginatedList";
import { useDispatch } from "react-redux";
import {
  useFetchAdminInfoQuery,
  useLogoutUserMutation,
} from "../../redux/features/firebaseSlice";
import { removeUser } from "../../redux/features/userSlice";
import { ClipLoader } from "react-spinners";
import CommunityList from "../../components/admin/CommunityList";

const Dashboard = () => {
  const { navigate, handleScrollTo } = useAppContext();
  const dispatch = useDispatch();

  const [logoutUser, { isLoading, isSuccess }] = useLogoutUserMutation();

  async function handleLogout() {
    await logoutUser();
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(removeUser());
      navigate("/");
    }
  }, [isSuccess]);

  const { isLoading: loadingInfo, data: infoData } = useFetchAdminInfoQuery();

  // console.log("infoData", infoData);

  return (
    <>
      <Header />
      <main>
        <div className="w-full h-[200px] bg-primary1/90 center-flex md:flex-row flex-col gap-10 relative">
          <h2 className="text-white">Admin Dashboard</h2>
          <button
            onClick={() => handleLogout()}
            className="w-fit bg-secondary font-bold px-5 py-2 text-[.75rem] shadow-custom hover:shadow-clicked"
          >
            {isLoading ? <ClipLoader color="black" size={"15px"} /> : "Log out"}
          </button>
        </div>
        <section className="py-[50px] min-h-screen ">
          <h4 className="font-medium text-[1.25rem]">
            Good {getTimeOfDay()} <span className="font-bold">Admin</span>,
          </h4>
          <div className="mt-10 flex gap-5 flex-wrap">
            <div className="w-full md:w-[350px] flex gap-4 p-4 rounded-md bg-white shadow-md">
              <div className="w-fit h-fit p-3 bg-primary1 rounded-md">
                <FaMicrophoneAlt color="#f9a815" size={"50px"} />
              </div>
              <div className="w-full flex flex-col">
                <p>Total Podcasts</p>
                <p className="text-[2rem] font-bold flex gap-2 items-center mt-auto">
                  {loadingInfo ? (
                    <ClipLoader size={"20px"} />
                  ) : (
                    infoData?.total_podcasts
                  )}
                  <FaCaretUp color="green" size={"15px"} />
                  <button
                    onClick={() => handleScrollTo("podcasts")}
                    className="px-2 py-1 bg-secondary font-bold text-[.75rem] rounded-md ml-auto"
                  >
                    View all
                  </button>
                </p>
              </div>
            </div>

            <div className="w-full md:w-[350px] flex gap-4 p-4 rounded-md bg-white shadow-md">
              <div className="w-fit h-fit p-3 bg-primary1 rounded-md">
                <FaMicrophoneAlt color="#f9a815" size={"50px"} />
              </div>
              <div className="w-full flex flex-col">
                <p>Total Joined Community</p>
                <p className="text-[2rem] font-bold flex gap-2 items-center mt-auto">
                  {loadingInfo ? (
                    <ClipLoader size={"20px"} />
                  ) : (
                    infoData?.total_joined_community
                  )}

                  <FaCaretUp color="green" size={"20px"} />
                  <button
                    onClick={() => handleScrollTo("joined-community")}
                    className="px-2 py-1 bg-secondary font-bold text-[.75rem] rounded-md ml-auto"
                  >
                    View all
                  </button>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <button className="btn-secondary bg-secondary font-bold text-[1rem] rounded-md">
              Add New Podcast
            </button>
          </div>

          <div className="w-full mt-10 flex flex-col md:flex-row gap-5 md:gap-7">
            <div
              id="podcasts"
              className="w-full h-fit md:w-1/2 md:p-4 rounded-md bg-white"
            >
              <h4 className="font-bold px-2 md:px-0">Podcasts</h4>
              <PaginatedList data={topPodcastData} type={"podcast"} />
            </div>
            <div
              id="joined-community"
              className="w-full h-fit md:w-1/2 md:p-4 rounded-md bg-white"
            >
              <div className="w-full flex justify-between">
                <h4 className="font-bold px-2 md:px-0">Joined Community</h4>
                <small className="font-medium">
                  Showing 5 of {infoData?.total_joined_community}
                </small>
              </div>
              <CommunityList data={communityData} type={"community"} />
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <ScrollToTop />
    </>
  );
};

export default Dashboard;
