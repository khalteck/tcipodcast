import { IoPlay } from "react-icons/io5";
import { BsSendFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaMicrophoneAlt } from "react-icons/fa";
import { GiSplash } from "react-icons/gi";

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
            src="/images/pod.jpg"
            className="w-full h-[300px] md:h-[500px] lg:h-[700px] object-cover rounded-[50px]"
          />
        </div>
        <div className="w-full md:w-1/2 text-primary1">
          <h3
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-center"
          >
            Help us Help You
          </h3>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="mt-5 mb-10 text-center text-[1.25rem] font-medium"
          >
            Send your migration dilemmas- you don't have to go through your
            migration journey alone. If you have a challenge, question or some
            exciting news we want to hear it.
          </p>

          <a
            href="mailto:hello@tcipod.com"
            className="underline text-secondary"
          >
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="w-[200px] md:w-[300px] bg-primary1 text-secondary shadow-lg cursor-pointer rounded-xl mx-auto p-5 flex flex-col justify-center items-center gap-3"
            >
              <h3 className="text-center">Reach out</h3>
              <IoMdMail size={"50px"} />
            </div>
          </a>
        </div>
      </section>

      {/* decor */}
      <GiSplash
        size={"80px"}
        color="#481297"
        className="absolute -bottom-1 left-3 md:left-[40%] md:translate-x-[-50%]"
      />
    </div>
  );
};

export default Section6;
