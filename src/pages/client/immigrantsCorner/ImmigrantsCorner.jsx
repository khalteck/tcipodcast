import FixedFloater from "../../../components/common/FixedFloater";
import Footer from "../../../components/common/footer/Footer";
import Header from "../../../components/common/header/Header";
import Section1 from "../../../components/immigrantsCorner/Section1";
import Section2 from "../../../components/immigrantsCorner/Section2";
import ScrollToTop from "../../../ScrollToTop";

const ImmigrantsCorner = () => {
  return (
    <>
      <Header />

      <main>
        <Section1 />

        <Section2 />

        <FixedFloater />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ImmigrantsCorner;
