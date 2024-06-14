import { useState } from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import Modal from "./Modal";
import { useAppContext } from "../../contexts/AppContext";

const PodcastCard2 = ({ item }) => {
  const { handleToggleModal, podcast } = useAppContext();
  const [hover, setHover] = useState(null);
  return (
    <>
      <div className="w-full flex md:flex-row flex-col gap-3 border-2 border-secondary2 rounded-xl p-5">
        <img
          alt="podcast-thumbnail"
          src="/images/hero1.jpg"
          className="w-full md:w-[200px] h-[200px] object-cover rounded-lg"
        />

        <div className="flex flex-col gap-3">
          <div className="w-full flex justify-between">
            <p>TCI PODCAST</p>
            <small>{item?.date}</small>
          </div>
          <h4 className="font-bold text-[1.5rem]">{item?.title}</h4>
          <p>{item?.description?.slice(0, 100)}...</p>
          <div className="w-full flex justify-between mt-auto">
            <small className="font-bold">{item?.duration}</small>
            <BsPlayCircleFill
              color={"#ff4402"}
              size={"40px"}
              className="cursor-pointer hover:scale-125"
              onClick={() => handleToggleModal(item)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PodcastCard2;
