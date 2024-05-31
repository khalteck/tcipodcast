import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Dropdown from "./Dropdown";
import SocialsContainer from "./SocialsContainer";
import { FaMicrophoneAlt } from "react-icons/fa";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  function handleDropdown() {
    setShowDropdown((prev) => !prev);
  }
  return (
    <header className="">
      <div className="w-full flex justify-between border-b border-primary/30">
        <div className="logo-cont">
          <FaMicrophoneAlt color="#663881" size={"50px"} />
          <h1>TCIPOD</h1>
        </div>

        <ul className="hidden md:flex gap-5 lg:gap-7 items-center uppercase font-normal text-sm">
          <li className="nav-link cursor-pointer">About</li>
          <li className="nav-link cursor-pointer">Community</li>
          <li className="nav-link cursor-pointer">Episodes</li>
          <li className="nav-link cursor-pointer">Contact Us</li>
        </ul>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <SocialsContainer />
        </div>

        <div onClick={handleDropdown} className="flex md:hidden">
          <HiOutlineMenuAlt3 color="#2a354e" size={"40px"} />
        </div>

        {showDropdown && <Dropdown handleDropdown={handleDropdown} />}
      </div>
    </header>
  );
};

export default Header;
