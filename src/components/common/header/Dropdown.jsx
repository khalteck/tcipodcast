import { IoClose } from "react-icons/io5";
import SocialsContainer from "./SocialsContainer";
import { Link } from "react-router-dom";
import { FaMicrophoneAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useAppContext } from "../../../contexts/AppContext";

const Dropdown = ({ handleDropdown, showDropdown }) => {
  const { navigate, handleScrollTo } = useAppContext();
  const [showTray, setShowTray] = useState(false);

  useEffect(() => {
    if (showDropdown) {
      setTimeout(() => {
        setShowTray(true);
      }, 700);
    }
  }, [showDropdown]);

  return (
    <div className="w-full h-screen bg-black/80 fixed top-0 left-0 z-[999] bgslide blurry">
      {showTray && (
        <div className="w-[75%] h-screen bg-[#5828a1] text-secondary md:hidden overflow-y-auto px-5 md:px-8 py-8 quickview">
          <div className="w-full flex justify-between">
            <div className="logo-cont">
              <FaMicrophoneAlt color="#f9a815" size={"30px"} />
              <h1 className="text-secondary">TCIPOD</h1>
            </div>

            <div
              onClick={() => {
                handleDropdown();
                setShowTray(false);
              }}
              className="flex md:hidden"
            >
              <IoClose color="#f9a815" size={"40px"} />
            </div>
          </div>

          <ul
            // onClick={handleDropdown}
            className="flex flex-col gap-8 uppercase mt-10 text-xl font-medium"
          >
            <li
              onClick={() => {
                navigate("/");
                handleDropdown();
              }}
              className="nav-link-mobile cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => {
                handleDropdown();
                handleScrollTo("about");
              }}
              className="nav-link-mobile cursor-pointer"
            >
              About
            </li>
            <li
              onClick={() => {
                handleDropdown();
                handleScrollTo("community");
              }}
              className="nav-link-mobile cursor-pointer"
            >
              Community
            </li>
            <li
              onClick={() => {
                navigate("/episodes");
                handleDropdown();
              }}
              className="nav-link-mobile cursor-pointer"
            >
              Episodes
            </li>
            <li
              onClick={() => {
                handleDropdown();
                handleScrollTo("contact");
              }}
              className="nav-link-mobile cursor-pointer"
            >
              Contact Us
            </li>
            <li className="mt-10">
              <SocialsContainer />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
