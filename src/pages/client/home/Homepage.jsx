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

const Homepage = () => {
  const { currentPage } = useAppContext();

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

  return (
    <>
      <Header />

      <main className="home">
        <div className="w-full h-full bg-[#f5f5f5]/50">
          <Section1 />

          <Section3 />

          <Section5 />

          <Section6 />
        </div>

        <FixedFloater />
        <></>
      </main>
      <Footer />

      <ScrollToTop />
    </>
  );
};

export default Homepage;
