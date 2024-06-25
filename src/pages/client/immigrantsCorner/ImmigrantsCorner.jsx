/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import FixedFloater from "../../../components/common/FixedFloater";
import Footer from "../../../components/common/footer/Footer";
import Header from "../../../components/common/header/Header";
import Loader from "../../../components/common/Loader";
import Section1 from "../../../components/immigrantsCorner/Section1";
import Section2 from "../../../components/immigrantsCorner/Section2";
import { useAppContext } from "../../../contexts/AppContext";
import {
  setInfoData,
  setInitialImmigrantsCorner,
} from "../../../redux/features/dataManagementSlice";
import {
  useFetchAdminInfoQuery,
  useFetchInitialImmigrantsClientQuery,
} from "../../../redux/features/firebaseSlice";
import ScrollToTop from "../../../ScrollToTop";
import Popup from "../../../components/immigrantsCorner/Popup";

const ImmigrantsCorner = () => {
  const { dispatch } = useAppContext();

  const {
    isLoading: loadingInfo,
    isSuccess: isSuccessInfo,
    data: infoDataRaw,
    // refetch,
  } = useFetchAdminInfoQuery();

  useEffect(() => {
    if (infoDataRaw && isSuccessInfo) {
      dispatch(setInfoData(infoDataRaw));
    }
  }, [infoDataRaw, isSuccessInfo]);

  const { data, isLoading, isSuccess } = useFetchInitialImmigrantsClientQuery();

  useEffect(() => {
    if (data && isSuccess) {
      dispatch(setInitialImmigrantsCorner(data));
      localStorage.setItem(
        "lastVisibleImmigrantsClient",
        JSON.stringify(data?.slice(-1)[0])
      );
    }
  }, [isLoading, data, isSuccess]);

  const [showPopup, setShowPopup] = useState(true);
  function togglePopup() {
    setShowPopup((prev) => !prev);
  }

  return (
    <>
      {(isLoading || loadingInfo) && <Loader />}

      <Header />

      <main>
        <Section1 />

        <Section2 />

        <FixedFloater />
        {showPopup && <Popup onClose={togglePopup} />}
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ImmigrantsCorner;
