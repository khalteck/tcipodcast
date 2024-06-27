import { FaHeadset, FaMicrophoneAlt } from "react-icons/fa";
import founders from "../../data/founders.json";
import { GiSplash } from "react-icons/gi";
import Slider from "./Slider";
import moyeniImages from "../../data/moyeni.json";
import folaweImages from "../../data/folawe.json";

const Section3 = () => {
  return (
    <div className="w-full py-[80px] bg-secondary text-primary relative">
      <h3
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-center mb-5"
      >
        Meet The Brainboxes
      </h3>
      <img
        data-aos="fade-up"
        data-aos-duration="1000"
        alt="image"
        src="/images/Pic before meet the brainboxes .jpg"
        className="w-full md:w-[70%] md:max-w-[1000px] mx-auto mb-10 rounded-[50px] mt-10"
      />
      <h3
        data-aos="fade-up"
        data-aos-duration="1000"
        className="w-full md:w-[70%] md:max-w-[1000px] mx-auto mb-10 text-center mt-[100px]"
      >
        The Heart of Our Podcast
      </h3>

      <>
        {founders?.map((item, index) => {
          const isOdd = (index + 1) % 2 === 1;
          const slides = index === 0 ? moyeniImages : folaweImages;
          return (
            <section
              key={index}
              className={`mb-10 md:mb-0 overflow-x-hidden ${
                index !== 0 && "md:mt-[-15px]"
              }`}
            >
              <div
                className={`w-full flex items-center flex-col ${
                  isOdd ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="w-full md:w-1/2">
                  <Slider slides={slides} isOdd={isOdd} />
                </div>
                <div
                  data-aos={`${isOdd ? "fade-left" : "fade-right"}`}
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className="w-full md:w-1/2 p-3 md:p-10 flex flex-col gap-3 md:gap-7"
                >
                  <div className="w-[100px] h-[100px] rounded-full bg-primary1 center-flex">
                    {isOdd ? (
                      <FaMicrophoneAlt size={"50px"} color="#fcea10" />
                    ) : (
                      <FaHeadset size={"50px"} color="#fcea10" />
                    )}
                  </div>
                  <div>
                    <h3>Meet: {item?.name}</h3>
                    <h4 className="text-[1.5rem] font-bold font-sfpro">
                      {item?.role}
                    </h4>
                  </div>
                  <p className="text-[.95rem] font-medium leading-relaxed">
                    {item?.bio}
                  </p>
                  {/* <div className="flex gap-3 items-center">
                    {item?.socials?.map((x, ind) => {
                      return (
                        <a
                          href={x?.link}
                          key={ind}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div className="w-[50px] h-[50px] rounded-full bg-primary1 center-flex">
                            {x?.name === "instagram" ? (
                              <SiInstagram size={"30px"} color="#fcea10" />
                            ) : x?.name === "tiktok" ? (
                              <FaTiktok size={"30px"} color="#fcea10" />
                            ) : x?.name === "twitter" ? (
                              <FaXTwitter size={"30px"} color="#fcea10" />
                            ) : x?.name === "facebook" ? (
                              <FaFacebook size={"30px"} color="#fcea10" />
                            ) : (
                              <FaLinkedin size={"30px"} color="#fcea10" />
                            )}
                          </div>
                        </a>
                      );
                    })}
                  </div> */}
                </div>
              </div>
            </section>
          );
        })}
      </>

      {/* decor */}
      <GiSplash
        size={"100px"}
        color="#481297"
        className="absolute -bottom-2 left-10 md:right-[100px]"
      />
    </div>
  );
};

export default Section3;
