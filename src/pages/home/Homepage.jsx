import { FaPlay } from "react-icons/fa6";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/Header";
import Section1 from "../../components/home/Section1";
import Section2 from "../../components/home/Section2";
import Section3 from "../../components/home/Section3";
import Section22 from "../../components/home/Section22";
import { MdMessage } from "react-icons/md";
import Section23 from "../../components/home/Section23";
import Section24 from "../../components/home/Section24";

const Homepage = () => {
  return (
    <>
      <Header />
      <main className="home">
        <div className="w-full h-full bg-[#f5f5f5]/50">
          <Section1 />

          <Section2 />

          <Section22 />

          <Section23 />

          <Section24 />

          <Section3 />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
