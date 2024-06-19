import { FaCaretUp, FaMicrophoneAlt } from "react-icons/fa";
import { ClipLoader } from "react-spinners";
import { useAppContext } from "../../contexts/AppContext";
import { useSelector } from "react-redux";

const Totals = ({ loadingInfo }) => {
  const { handleScrollTo } = useAppContext();
  const { infoData } = useSelector((state) => state?.dataManagement);

  return (
    <div className="mt-10 flex gap-5 flex-wrap">
      <div className="w-full md:w-[350px] flex gap-4 p-4 rounded-md bg-white shadow-md">
        <div className="w-fit h-fit p-3 bg-primary1 rounded-md">
          <FaMicrophoneAlt color="#f9a815" size={"50px"} />
        </div>
        <div className="w-full">
          <p>Total Podcasts</p>
          <p className="text-[2rem] font-bold flex gap-2 items-center">
            {loadingInfo ? <ClipLoader /> : infoData?.total_podcasts}
            <FaCaretUp color="green" size={"20px"} />
            <button
              onClick={() => handleScrollTo("podcasts-list")}
              className="px-2 py-1 bg-secondary font-bold text-[.75rem] rounded-md ml-auto"
            >
              View all
            </button>
          </p>
        </div>
      </div>

      <div className="w-full md:w-[350px] flex gap-4 p-4 rounded-md bg-white shadow-md">
        <div className="w-fit h-fit p-3 bg-primary1 rounded-md">
          <FaMicrophoneAlt color="#f9a815" size={"50px"} />
        </div>
        <div className="w-full">
          <p>Immigrants corner</p>
          <p className="text-[2rem] font-bold flex gap-2 items-center">
            {loadingInfo ? <ClipLoader /> : infoData?.total_immigrants_corner}
            <FaCaretUp color="green" size={"20px"} />
            <button
              onClick={() => handleScrollTo("immigrants-corner")}
              className="px-2 py-1 bg-secondary font-bold text-[.75rem] rounded-md ml-auto"
            >
              View all
            </button>
          </p>
        </div>
      </div>

      <div className="w-full md:w-[350px] flex gap-4 p-4 rounded-md bg-white shadow-md">
        <div className="w-fit h-fit p-3 bg-primary1 rounded-md">
          <FaMicrophoneAlt color="#f9a815" size={"50px"} />
        </div>
        <div className="w-full">
          <p>Total Joined Community</p>
          <p className="text-[2rem] font-bold flex gap-2 items-center">
            {loadingInfo ? <ClipLoader /> : infoData?.total_joined_community}

            <FaCaretUp color="green" size={"20px"} />
            <button
              onClick={() => handleScrollTo("joined-community")}
              className="px-2 py-1 bg-secondary font-bold text-[.75rem] rounded-md ml-auto"
            >
              View all
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Totals;
