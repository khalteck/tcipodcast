import { FaUserPlus } from "react-icons/fa";

const CommunityCard = ({ item }) => {
  return (
    <div className="w-full flex gap-3 p-2 md:p-3 bg-white rounded-md">
      <div className="w-fit h-fit p-3 rounded-full bg-primary">
        <FaUserPlus color="#fcea10" size={"25px"} />
      </div>
      <div className="w-full flex flex-col gap-1">
        <p className="font-bold leading-tight">
          {item?.firstname} {item?.lastname}
        </p>
        <small className="hover:underline">
          <a href={`mailto:${item?.email}`}>{item?.email}</a>
        </small>
      </div>
    </div>
  );
};

export default CommunityCard;
