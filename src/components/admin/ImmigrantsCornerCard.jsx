import { FaYoutube } from "react-icons/fa";
import { PiPencilSimpleLineFill } from "react-icons/pi";
import { RiDeleteBin6Fill } from "react-icons/ri";

const ImmigrantsCornerCard = ({ item }) => {
  return (
    <div className="w-full flex gap-3 p-2 md:p-3 bg-white rounded-md">
      <div className="w-fit h-fit p-3 rounded-full bg-primary1/10">
        <FaYoutube color="#FF0000" size={"25px"} />
      </div>
      <div className="w-full flex flex-col gap-1">
        <p className="font-bold leading-tight">{item?.title}</p>
        <small className="hover:underline w-[80%] md:w-fit">
          <a href={`${item?.youtubeLink}`} target="_blank" rel="noreferrer">
            {item?.youtubeLink?.slice(0, 50)}...
          </a>
        </small>
        <div className="flex gap-2 mt-2 ml-auto">
          <div className="w-fit h-fit p-1 rounded-full bg-blue-400 hover:scale-125">
            <PiPencilSimpleLineFill
              color={"white"}
              size={"17px"}
              className="cursor-pointer"
              // onClick={() => handleToggleModal(item)}
            />
          </div>
          <div className="w-fit h-fit p-1 rounded-full bg-red-500 hover:scale-125">
            <RiDeleteBin6Fill
              color={"white"}
              size={"17px"}
              className="cursor-pointer"
              // onClick={() => handleToggleModal(item)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImmigrantsCornerCard;
