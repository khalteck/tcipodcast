import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { useAppContext } from "../../../contexts/AppContext";

const SocialsContainer = () => {
  const { isScrolled } = useAppContext();

  return (
    <>
      <div className="rounded-sm md:flex hidden gap-5 items-center">
        <FaInstagram
          color={`${isScrolled ? "black" : "white"}`}
          size={"25px"}
          className="hover:scale-125 cursor-pointer transition-all duration-300"
        />
        <FaTiktok
          color={`${isScrolled ? "black" : "white"}`}
          size={"25px"}
          className="hover:scale-125 cursor-pointer transition-all duration-300"
        />
        <FaFacebookSquare
          color={`${isScrolled ? "black" : "white"}`}
          size={"25px"}
          className="hover:scale-125 cursor-pointer transition-all duration-300"
        />
        <FaXTwitter
          color={`${isScrolled ? "black" : "white"}`}
          size={"25px"}
          className="hover:scale-125 cursor-pointer transition-all duration-300"
        />
        <FaLinkedin
          color={`${isScrolled ? "black" : "white"}`}
          size={"25px"}
          className="hover:scale-125 cursor-pointer transition-all duration-300"
        />
      </div>

      <div className="rounded-sm md:hidden flex gap-5 items-center">
        <FaInstagram
          color={`black`}
          size={"25px"}
          className="hover:scale-125 cursor-pointer transition-all duration-300"
        />
        <FaTiktok
          color={`black`}
          size={"25px"}
          className="hover:scale-125 cursor-pointer transition-all duration-300"
        />
        <FaFacebookSquare
          color={`black`}
          size={"25px"}
          className="hover:scale-125 cursor-pointer transition-all duration-300"
        />
        <FaXTwitter
          color={`black`}
          size={"25px"}
          className="hover:scale-125 cursor-pointer transition-all duration-300"
        />
        <FaLinkedin
          color={`black`}
          size={"25px"}
          className="hover:scale-125 cursor-pointer transition-all duration-300"
        />
      </div>
    </>
  );
};

export default SocialsContainer;
