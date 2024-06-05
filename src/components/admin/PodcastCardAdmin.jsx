import { useState } from "react";
import { BsPlayCircleFill } from "react-icons/bs";
// import Modal from "./Modal";
import { useAppContext } from "../../contexts/AppContext";
import { PiPencilSimpleLineFill } from "react-icons/pi";
import { RiDeleteBin6Fill } from "react-icons/ri";

const PodcastCardAdmin = ({ item }) => {
  const { handleToggleModal, podcast } = useAppContext();
  const [hover, setHover] = useState(null);
  return (
    <>
      <div
        onMouseOver={() => setHover(item)}
        onMouseOut={() => setHover(null)}
        className={`w-full p-2 md:p-3 rounded-lg flex gap-3 border shadow-md transition-all duration-300 text-[.75rem] ${
          hover?.id === item?.id ? "bg-secondary" : "bg-white"
        }`}
      >
        <img
          alt="podcast-thumbnail"
          src={item?.thumbnail}
          className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] object-cover rounded-lg"
        />
        <div className="w-full flex flex-col gap-1 md:gap-3">
          <div>
            <p className="font-bold text-[.9rem]">{item?.title}</p>
          </div>
          <p className="">
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
            <div className="flex gap-2 items-end">
              <BsPlayCircleFill
                color={"#2a354e"}
                size={"25px"}
                className="cursor-pointer hover:scale-125"
                onClick={() => handleToggleModal(item)}
              />
              <div className="w-fit h-fit p-1 rounded-full bg-blue-400 hover:scale-125">
                <PiPencilSimpleLineFill
                  color={"#2a354e"}
                  size={"17px"}
                  className="cursor-pointer"
                  // onClick={() => handleToggleModal(item)}
                />
              </div>
              <div className="w-fit h-fit p-1 rounded-full bg-red-500 hover:scale-125">
                <RiDeleteBin6Fill
                  color={"#2a354e"}
                  size={"17px"}
                  className="cursor-pointer"
                  // onClick={() => handleToggleModal(item)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* //pop up modal */}
      {/* {podcast && (
        <Modal onClose={handleToggleModal} action={() => console.log("play")} />
      )} */}
    </>
  );
};

export default PodcastCardAdmin;
