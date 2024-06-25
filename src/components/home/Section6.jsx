/* eslint-disable react/no-unescaped-entities */
import { IoPlay } from "react-icons/io5";
import { BsSendFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaMicrophoneAlt } from "react-icons/fa";
import { GiSplash } from "react-icons/gi";
import { Link } from "react-router-dom";

const Section6 = () => {
  return (
    <div className="w-full bg-secondary/80 text-primary relative">
      {/* deocr */}
      <FaMicrophoneAlt
        size={"60px"}
        color="#481297"
        className="absolute top-0 md:top-[100px] left-10 swing"
      />
      <section
        id="community"
        className="py-[80px] md:pb-[80px] flex flex-col md:flex-row-reverse md:items-center gap-10"
      >
        <div className="w-full md:w-1/2">
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            alt="hero"
            src="/images/Contact us pic.jpg"
            className="w-full h-[300px] md:h-[500px] lg:h-[700px] object-cover rounded-[50px]"
          />
        </div>
        <div className="w-full md:w-1/2 text-primary1">
          <h3
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-center"
          >
            Be Our Next Podcast Guest
          </h3>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="mt-5 mb-10 text-center text-[1.25rem] font-medium"
          >
            Ever wanted to share your immigration journey? Now's your chance!
            Join us on The Chronicles of an Immigrant Podcast and let your story
            inspire our global community. It doesn't matter where you are in the
            UK – if you're an immigrant, we want to hear from you!
            <br />
          </p>

          <div className="center-flex">
            <Link to="/contact">
              <button
                // data-aos="fade-up"
                // data-aos-duration="1000"
                // data-aos-delay="200"
                className={`btn-custom5 min-w-[150px] text-[1.1rem]`}
              >
                Reach Out
                <IoMdMail size={"20px"} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* decor */}
      <GiSplash
        size={"80px"}
        color="#481297"
        className="absolute -bottom-1 left-3 md:left-[40%] md:translate-x-[-50%] md:hidden flex"
      />
      {/* decor */}
      <GiSplash
        size={"100px"}
        color="#481297"
        className="absolute -bottom-2 left-3 md:left-[40%] md:translate-x-[-50%] hidden md:flex"
      />
    </div>
  );
};

export default Section6;
