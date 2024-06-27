/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Footer from "../../../components/common/footer/Footer";
import Header from "../../../components/common/header/Header";
import { useAppContext } from "../../../contexts/AppContext";
import ScrollToTop from "../../../ScrollToTop";
import Section1 from "../../../components/episodes/Section1";
import Section2 from "../../../components/episodes/Section2";
import Section3 from "../../../components/episodes/Section3";
import FixedFloater from "../../../components/common/FixedFloater";
import {
  useFetchAdminInfoQuery,
  useFetchInitialPodcastsClientQuery,
} from "../../../redux/features/firebaseSlice";
import {
  setInfoData,
  setInitialPodcasts,
} from "../../../redux/features/dataManagementSlice";
import Loader from "../../../components/common/Loader";

const Episodes = () => {
  const { dispatch } = useAppContext();

  const {
    isLoading: loadingInfo,
    isSuccess: isSuccessInfo,
    data: infoDataRaw,
  } = useFetchAdminInfoQuery();

  useEffect(() => {
    if (infoDataRaw && isSuccessInfo) {
      dispatch(setInfoData(infoDataRaw));
    }
  }, [infoDataRaw, isSuccessInfo]);

  const { data, isLoading, isSuccess } = useFetchInitialPodcastsClientQuery();

  useEffect(() => {
    if (data && isSuccess) {
      dispatch(setInitialPodcasts(data));
      localStorage.setItem(
        "lastVisiblePodcastClient",
        JSON.stringify(data?.slice(-1)[0])
      );
    }
  }, [isLoading, data, isSuccess]);

  return (
    <>
      {(isLoading || loadingInfo) && <Loader />}

      <Header />
      <main>
        <Section1 />

        <div className="bg-white">
          <Section2 />
          <Section3 />
        </div>

        <FixedFloater />
      </main>
      <Footer />

      <ScrollToTop />
    </>
  );
};

export default Episodes;
