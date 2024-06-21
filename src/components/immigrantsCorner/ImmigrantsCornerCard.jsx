import { FaYoutube } from "react-icons/fa";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import formatTimestamp from "../../utils/formatTimestamp";

const ImmigrantsCornerCard = ({ isOdd, item }) => {
  return (
    <div
      id={item?.id}
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
        <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          {capitalizeFirstLetter(item?.title)}
        </h3>
        <small
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="font-bold"
        >
          {formatTimestamp(item?.timestamp)}
        </small>
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
};

export default ImmigrantsCornerCard;
