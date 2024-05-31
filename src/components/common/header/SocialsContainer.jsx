import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const SocialsContainer = () => {
  return (
    <div className=" border border-neutral-950/30 p-3 rounded-sm flex gap-5 items-center">
      <FaInstagram
        color="black"
        size={"25px"}
        className="hover:scale-125 cursor-pointer transition-all duration-300"
      />
      <FaTiktok
        color="black"
        size={"25px"}
        className="hover:scale-125 cursor-pointer transition-all duration-300"
      />
      <FaFacebookSquare
        color="black"
        size={"25px"}
        className="hover:scale-125 cursor-pointer transition-all duration-300"
      />
      <FaXTwitter
        color="black"
        size={"25px"}
        className="hover:scale-125 cursor-pointer transition-all duration-300"
      />
      <FaLinkedin
        color="black"
        size={"25px"}
        className="hover:scale-125 cursor-pointer transition-all duration-300"
      />
    </div>
  );
};

export default SocialsContainer;
