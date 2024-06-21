import { useState } from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import Modal from "./Modal";
import { useAppContext } from "../../contexts/AppContext";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";

const PodcastCard = ({ item, isOdd }) => {
  const { handleToggleModal, podcast } = useAppContext();

  return (
    <>
      <section
        id={item?.id}
        className={`flex flex-col md:items-center gap-5 md:gap-10 ${
          !isOdd ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="w-full md:w-[55%]">
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            alt="hero"
            src={item?.thumbnail}
            className="w-full h-auto md:max-h-[500px] min-h-[300px] object-cover rounded-[50px]"
          />
        </div>
        <div className="w-full md:w-[45%]">
          <h3
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-start mb-2"
          >
            {capitalizeFirstLetter(item?.title)}
          </h3>
          <p data-aos="fade-up" data-aos-duration="1000" className="font-bold">
            {item?.date}
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mt-5 mb-5 md:mb-10 text-start text-[1.25rem] font-medium"
          >
            {item?.description}
          </p>
          <div className="w-full flex justify-between md:mt-auto">
            <BsPlayCircleFill
              color={"#ff4402"}
              size={"50px"}
              className="cursor-pointer hover:scale-125"
              onClick={() => handleToggleModal(item)}
            />
            <p className="font-bold">{item?.duration}</p>
          </div>
        </div>
      </section>

      {/* //pop up modal */}
      {/* {podcast && (
        <Modal onClose={handleToggleModal} action={() => console.log("play")} />
      )} */}
    </>
  );
};

export default PodcastCard;
