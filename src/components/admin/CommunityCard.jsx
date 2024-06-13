import { FaUserPlus } from "react-icons/fa";
import { timeAgo } from "../../utils/timeAgo";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

const CommunityCard = ({ item }) => {
  return (
    <div className="w-full flex gap-3 p-2 md:p-3 bg-white rounded-md">
      <div className="w-fit h-fit p-3 rounded-full bg-primary">
        <FaUserPlus color="#fcea10" size={"25px"} />
      </div>
      <div className="w-full flex flex-col gap-1">
        <p className="font-bold leading-tight">
          {capitalizeFirstLetter(item?.first_name)}{" "}
          {capitalizeFirstLetter(item?.last_name)}
        </p>
        <small className="hover:underline">
          <a href={`mailto:${item?.email}`}>{item?.email}</a>
        </small>
      </div>
      <p className="whitespace-nowrap text-[.75em] opacity-70">
        {timeAgo(item?.timestamp)}
      </p>
    </div>
  );
};

export default CommunityCard;
