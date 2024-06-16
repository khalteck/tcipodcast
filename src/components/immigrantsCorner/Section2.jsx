import { FaYoutube } from "react-icons/fa";
import immigrantsCornerData from "../../data/immigrantsCorner.json";

const Section2 = () => {
  return (
    <div className="w-full bg-secondary2 text-white pb-[80px] pt-10 md:pt-0">
      <section className="w-full">
        <h3 className="text-center mb-5">Catch The Latest</h3>
        <p className="w-full mx-auto text-[1.1rem] mb-10 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </section>

      <div className="w-full  max-w-[1550px] mx-auto lg:px-14">
        {immigrantsCornerData?.map((item, index) => {
          const isOdd = (index + 1) % 2 === 1;
          return (
            <div
              key={index}
              className={`mt-[100px] flex flex-col center-flex gap-10 ${
                isOdd ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="relative w-full md:w-[60%] h-[350px] md:h-[600px]"
              >
                <iframe
                  width="100%"
                  height="100%"
                  src={item?.embedLink}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="w-full md:w-[40%] flex flex-col gap-3 px-3 md:px-0">
                <h3
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  {item?.title}
                </h3>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className=""
                >
                  {item?.date}
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className="w-full text-[1.1rem] mb-2 md:mb-10"
                >
                  {item?.body}
                </p>
                <a href={item?.youtubeLink} target="_blank" rel="noreferrer">
                  <button
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                    className="btn-custom4 w-fit"
                  >
                    View on Youtube <FaYoutube size={"30px"} />
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section2;
