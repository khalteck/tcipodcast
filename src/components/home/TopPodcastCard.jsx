import { FaMicrophoneAlt } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";

const TopPodcastCard = ({ item, index }) => {
  return (
    <div
      className={`p-6 rounded-sm shadow-custom bg-[#e0c0f3]/30 border-primary1`}
    >
      <div className="flex gap-3">
        <div className="w-[80px] md:w-[80px] h-[80px] rounded-full center-flex bg-[#414144]/80">
          <FaMicrophoneAlt color="#ffc65b" size={"50px"} />
        </div>
        <div className=" w-[75%] md:w-[80%]">
          <p className="font-bold">
            By{" "}
            {item?.authors?.map(
              (x, ind, arr) =>
                `${x}${arr?.length === 2 && ind === 0 ? " & " : ""}`
            )}
          </p>
          <small>{item?.date}</small>
        </div>
      </div>
      <p className="mt-5 font-bold">{item?.title}</p>
      <small>{item?.duration}</small>
      <div className="w-full flex justify-end">
        <button className="btn-primary mt-5 w-fit">
          Listen Now <FaPlay color="#2a354e" size={"13"} />
        </button>
      </div>
    </div>
  );
};

export default TopPodcastCard;
