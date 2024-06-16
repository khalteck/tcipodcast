import { FaHeadset, FaMicrophoneAlt } from "react-icons/fa";
import founders from "../../data/founders.json";

const Section3 = () => {
  return (
    <div className="w-full py-[80px] overflow-x-hidden bg-secondary">
      <h3
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-center mb-5"
      >
        Meet The Brainbox
      </h3>
      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        className="w-full md:w-[70%] mx-auto text-[1.1rem] mb-10 text-center"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <>
        {founders?.map((item, index) => {
          const isOdd = (index + 1) % 2 === 1;
          return (
            <section
              key={index}
              className={`mb-10 md:mb-0 ${index !== 0 && "md:mt-[-15px]"}`}
            >
              <div
                className={`w-full flex items-center flex-col ${
                  isOdd ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  data-aos={`${isOdd ? "fade-right" : "fade-left"}`}
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className={`w-full md:w-1/2 border-x-[15px] md:border-y-[15px] px-2 pt-2 pb-0 md:p-2 border-primary1 ${
                    isOdd
                      ? "md:rounded-l-full md:border-l-[15px] md:rounded-r-none md:border-r-0 rounded-t-full border-t-[15px]"
                      : "md:rounded-r-full md:border-r-[15px] md:rounded-l-none md:border-l-0 rounded-t-full border-t-[15px]"
                  }`}
                >
                  <img
                    alt="hero"
                    src={item?.image}
                    className={`w-full h-[300px] md:h-[550px] object-cover ${
                      isOdd
                        ? "md:rounded-r-lg md:rounded-l-full rounded-t-full"
                        : "md:rounded-l-lg md:rounded-r-full rounded-t-full"
                    }`}
                  />
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
                  <h3>{item?.name}</h3>
                  <p className="text-[1.1rem] leading-relaxed">{item?.bio}</p>
                </div>
              </div>
            </section>
          );
        })}
      </>
    </div>
  );
};

export default Section3;
