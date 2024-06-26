import FixedFloater from "../../../components/common/FixedFloater";
import Footer from "../../../components/common/footer/Footer";
import Header from "../../../components/common/header/Header";
import Section2 from "../../../components/contact/Section2";
import ScrollToTop from "../../../ScrollToTop";

const Contact = () => {
  return (
    <>
      <Header />
      <main>
        <div className="relative">
          <section className="w-full relative bg-primary1 py-[80px] md:py-[100px] text-white">
            <div data-aos="fade-down" data-aos-duration="1000">
              <h1 className="mt-5 text-[2rem] md:text-[4rem] text-center font-bold leading-tight font-sfpro">
                GET IN TOUCH
              </h1>
            </div>
          </section>
          <div className="w-full absolute bottom-[-1px] left-0 hidden">
            <img
              alt="wave"
              src="/images/wavey2.png"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="w-full bg-slate-50/90">
          <Section2 />
        </div>

        <FixedFloater />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Contact;
