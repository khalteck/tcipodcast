/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/exhaustive-deps */
import Footer from "../../../components/common/footer/Footer";
import Header from "../../../components/common/header/Header";
import Section1 from "../../../components/home/Section1";
import Section3 from "../../../components/home/Section3";
import Section5 from "../../../components/home/Section5";
import ScrollToTop from "../../../ScrollToTop";
import { useEffect } from "react";
import { useAppContext } from "../../../contexts/AppContext";
import { useLocation } from "react-router-dom";
import Section6 from "../../../components/home/Section6";
import FixedFloater from "../../../components/common/FixedFloater";
import Loader from "../../../components/common/Loader";
import { useFetchLatestEpisodeQuery } from "../../../redux/features/firebaseSlice";
import { setLatestEpisode } from "../../../redux/features/dataManagementSlice";
import HeroSection from "../../../components/home/HeroSection";
// import { useSelector } from "react-redux";

const Homepage = () => {
  // const { latestEpisode } = useSelector((state) => state.dataManagement);

  const { currentPage, dispatch } = useAppContext();

  const location = useLocation();

  useEffect(() => {
    const hash = location.hash?.replace(/[\/#]/g, "");
    const element = document.getElementById(hash);

    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  }, [currentPage]);

  const { data, isLoading, isSuccess } = useFetchLatestEpisodeQuery();

  useEffect(() => {
    if (data && isSuccess) {
      dispatch(setLatestEpisode(data?.[0]));
    }
  }, [isLoading, data, isSuccess]);

  return (
    <>
      {isLoading && <Loader />}
      <Header />

      <main className="home">
        <div className="w-full h-full bg-[#f5f5f5]/50">
          {/* <Section1 /> */}
          <HeroSection />

          <Section3 />

          <Section5 />

          <Section6 />
        </div>

        <FixedFloater />
      </main>
      <Footer />

      <ScrollToTop />
    </>
  );
};

export default Homepage;
