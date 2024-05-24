import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/Header";
import Section1 from "../../components/home/Section1";
import Section2 from "../../components/home/Section2";
import Section3 from "../../components/home/Section3";

const Homepage = () => {
  return (
    <>
      <Header />
      <main className="home">
        <div className="w-full h-full bg-[#171a1f]/50">
          <Section1 />

          <Section2 />

          <Section3 />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
