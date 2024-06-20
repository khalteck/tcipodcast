import { useState } from "react";
import { BsPlayCircleFill } from "react-icons/bs";
// import Modal from "./Modal";
import { useAppContext } from "../../contexts/AppContext";
import { PiPencilSimpleLineFill } from "react-icons/pi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import DeleteModal from "./DeleteModal";

const PodcastCardAdmin = ({ item }) => {
  const {
    handleToggleModal,
    deleteModal,
    handleToggledeleteModal,
    handleToggleaddPodcast,
  } = useAppContext();

  return (
    <>
      <div
        className={`w-full p-2 md:p-3 rounded-lg flex gap-3 border transition-all duration-300 text-[.75rem] bg-white`}
      >
        <img
          alt="podcast-thumbnail"
          src={item?.thumbnail}
          className="w-[100px] h-[100px] object-cover rounded-lg"
        />
        <div className="w-full flex flex-col gap-1 md:gap-3">
          <div>
            <p className="font-bold text-[.9rem]">
              {capitalizeFirstLetter(item?.title)}
            </p>
          </div>
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
                  color={"white"}
                  size={"17px"}
                  className="cursor-pointer"
                  onClick={() => handleToggleaddPodcast(item)}
                />
              </div>
              <div className="w-fit h-fit p-1 rounded-full bg-red-500 hover:scale-125">
                <RiDeleteBin6Fill
                  color={"white"}
                  size={"17px"}
                  className="cursor-pointer"
                  onClick={() =>
                    handleToggledeleteModal({ ...item, type: "podcast" })
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {deleteModal && (
        <DeleteModal onClose={handleToggledeleteModal} item={deleteModal} />
      )}
    </>
  );
};

export default PodcastCardAdmin;
