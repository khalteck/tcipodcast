import FixedFloater from "../../../components/common/FixedFloater";
import Footer from "../../../components/common/footer/Footer";
import Header from "../../../components/common/header/Header";
import Section2 from "../../../components/contact/Section2";

const Contact = () => {
  return (
    <>
      <Header />
      <main>
        <div className="relative">
          <section className="w-full relative bg-primary1 pb-[100px] md:pb-[200px] lg:pb-[300px] text-white">
            <div data-aos="fade-down" data-aos-duration="1000">
              <h1 className="mt-5 text-[2.5rem] md:text-[5rem] lg:text-[8rem] text-center font-bold leading-[3rem] md:leading-[5rem] lg:leading-[10rem] font-sfpro">
                GET IN TOUCH
              </h1>
            </div>
          </section>
          <div className="w-full absolute bottom-0 left-0">
            <img
              alt="wave"
              src="/images/wavey2.png"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="w-full bg-slate-50/90 py-[80px]">
          <Section2 />
        </div>

        <FixedFloater />
      </main>
      <Footer />
    </>
  );
};

export default Contact;
