import Section1 from "../../../components/about/Section1";
import Section2 from "../../../components/about/Section2";
import Section3 from "../../../components/about/Section3";
import FixedFloater from "../../../components/common/FixedFloater";
import Footer from "../../../components/common/footer/Footer";
import Header from "../../../components/common/header/Header";

const About = () => {
  return (
    <>
      <Header />
      <main className="">
        <Section1 />

        <div className="bg-white">
          <Section2 />
          <Section3 />
        </div>
        <FixedFloater />
      </main>
      <Footer />
    </>
  );
};

export default About;
