import { useState } from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import Modal from "./Modal";
import { useAppContext } from "../../contexts/AppContext";

const PodcastCard = ({ item }) => {
  const { handleToggleModal, podcast } = useAppContext();
  const [hover, setHover] = useState(null);
  return (
    <>
      <div
        onMouseOver={() => setHover(item)}
        onMouseOut={() => setHover(null)}
        className={`w-full p-3 rounded-lg flex gap-3 border shadow-md transition-all duration-300 ${
          hover?.id === item?.id ? "bg-secondary" : "bg-white"
        }`}
      >
        <img
          alt="podcast-thumbnail"
          src="/images/hero1.jpg"
          className="w-[120px] lg:w-[150px] h-[150px] object-cover rounded-lg"
        />
        <div className="w-full flex flex-col gap-3">
          <div>
            <p className="text-[.7em]">PODCAST</p>
            <p className="font-bold lg:text-[1.1rem]">{item?.title}</p>
          </div>
          <p className="text-[.85rem]">
            By{" "}
            <span className="uppdercase font-medium">
              {item?.authors?.map(
                (x, ind, arr) =>
                  `${x}${arr?.length === 2 && ind === 0 ? " & " : ""}`
              )}
            </span>
          </p>
          <div className="w-full flex justify-between items-baseline mt-auto">
            <p className="text-[.75rem] font-medium opacity-80">
              {item?.duration}
            </p>
            <BsPlayCircleFill
              color={"#2a354e"}
              size={"35px"}
              className="cursor-pointer hover:scale-125"
              onClick={() => handleToggleModal(item)}
            />
          </div>
        </div>
      </div>

      {/* //pop up modal */}
      {podcast && (
        <Modal onClose={handleToggleModal} action={() => console.log("play")} />
      )}
    </>
  );
};

export default PodcastCard;
