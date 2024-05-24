import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Dropdown from "./Dropdown";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  function handleDropdown() {
    setShowDropdown((prev) => !prev);
  }
  return (
    <header className="">
      <div className="w-full flex justify-between">
        <div className="logo-cont">
          <img
            alt="logo"
            src="/images/logo.png"
            className="w-8 lg:w-10 h-auto"
          />
          <h1>TCI Podcast</h1>
        </div>

        <ul className="hidden md:flex gap-5 lg:gap-10 items-center uppercase font-normal text-sm">
          <li className="nav-link cursor-pointer">Home</li>
          <li className="nav-link cursor-pointer">Episodes</li>
          <li className="nav-link cursor-pointer">Pricing</li>
          <li className="nav-link cursor-pointer">About</li>
        </ul>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <p className="cursor-pointer hover:text-secondary">LOGIN</p>
          <button className="btn-primary">contact us</button>
        </div>

        <div onClick={handleDropdown} className="flex md:hidden">
          <HiOutlineMenuAlt3 color="#ea580c" size={"40px"} />
        </div>

        {showDropdown && <Dropdown handleDropdown={handleDropdown} />}
      </div>
    </header>
  );
};

export default Header;
