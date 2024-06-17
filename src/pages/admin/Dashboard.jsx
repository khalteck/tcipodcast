import { useEffect, useState } from "react";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/Header";
import topPodcastData from "../../data/topPodcasts.json";
import communityData from "../../data/community.json";
import immigrantsCornerData from "../../data/immigrantsCorner.json";
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
import { GiSplash } from "react-icons/gi";
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
      <main className="overflow-x-hidden">
        <div className="relative">
          <section className="w-full relative bg-primary1 pb-[100px] md:pb-[200px] lg:pb-[300px] text-secondary">
            <div data-aos="fade-down" data-aos-duration="1000">
              <h1 className="mt-5 text-[2.5rem] md:text-[5rem] lg:text-[8rem] text-center font-bold leading-[3rem] md:leading-[5rem] lg:leading-[10rem] font-gluten">
                ADMIN DASHBOARD
              </h1>
              <div className="center-flex md:block">
                <button
                  onClick={() => handleLogout()}
                  className="w-fit btn-custom3 text-[.75rem] md:text-[1rem]"
                >
                  {isLoading ? (
                    <ClipLoader color="black" size={"20px"} />
                  ) : (
                    "Log out"
                  )}
                </button>
              </div>
            </div>
          </section>
          <div className="w-full absolute bottom-0 left-0">
            <img
              alt="wave"
              src="/images/wavey2.png"
              className="w-full h-auto relative -bottom-[1px]"
            />
          </div>

          {/* decor */}
          <GiSplash
            size={"80px"}
            color="#481297"
            className="absolute -bottom-[100px] -right-1 rotate-[270deg]"
          />
        </div>

        <div className="w-full bg-slate-50/90">
          <section className="py-[50px] min-h-screen">
            <h4 className="font-medium text-[1.25rem]">
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

            <div className="mt-10">
              <button className="btn-secondary bg-secondary font-bold text-[1rem] rounded-md">
                Add New Podcast
              </button>
            </div>

            <div className="w-full mt-10 flex flex-col md:flex-row gap-5 md:gap-7">
              <div className="w-full h-fit md:w-1/2 p-4 rounded-md bg-white">
                <h4 className="font-bold">Podcasts</h4>
                <PaginatedList data={topPodcastData} type={"podcast"} />
              </div>
              <div className="w-full h-fit md:w-1/2 p-4 rounded-md bg-white">
                <h4 className="font-bold">Immigrants corner</h4>
                <PaginatedList
                  data={immigrantsCornerData}
                  type={"immigrants"}
                />
              </div>
            </div>
            <div
              id="joined-community"
              className="w-full h-fit md:w-1/2 md:p-4 rounded-md bg-white mt-10"
            >
              <div className="w-full flex justify-between">
                <h4 className="font-bold px-2 md:px-0">Joined Community</h4>
                <small className="font-medium">
                  Showing 5 of {infoData?.total_joined_community}
                </small>
              </div>
              <CommunityList data={communityData} type={"community"} />
            </div>
          </section>
        </div>
      </main>
      <Footer />

      <ScrollToTop />
    </>
  );
};

export default Dashboard;
