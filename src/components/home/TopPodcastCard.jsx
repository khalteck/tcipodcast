import { FaMicrophoneAlt } from "react-icons/fa";

const TopPodcastCard = ({ item, index }) => {
  return (
    <div
      className={`p-6 border-primary/20 border rounded-xl ${
        index === 1 && "border-[#ea580c]"
      }`}
    >
      <div className="flex gap-3">
        <div className="w-14 h-14 rounded-full center-flex bg-[#414144]/80">
          <FaMicrophoneAlt color="#ea580c" size={"30px"} />
        </div>
        <div>
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
    </div>
  );
};

export default TopPodcastCard;
