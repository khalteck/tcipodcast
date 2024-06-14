import Footer from "../../../components/common/footer/Footer";
import Header from "../../../components/common/header/Header";
import Section1 from "../../../components/home/Section1";
import Section2 from "../../../components/home/Section2";
import Section3 from "../../../components/home/Section3";
import Section22 from "../../../components/home/Section22";
import Section23 from "../../../components/home/Section23";
import Section24 from "../../../components/home/Section24";
import Section4 from "../../../components/home/Section4";
import Section5 from "../../../components/home/Section5";
import ScrollToTop from "../../../ScrollToTop";
import { useEffect } from "react";
import { useAppContext } from "../../../contexts/AppContext";
import { useLocation } from "react-router-dom";

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

          {/* <Section2 /> */}

          <Section24 />

          <Section3 />

          <Section22 />

          <Section23 />

          <Section4 />

          <Section5 />
        </div>
      </main>
      <Footer />

      <ScrollToTop />
    </>
  );
};

export default Homepage;
