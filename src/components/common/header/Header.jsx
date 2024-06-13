import { useState, useEffect } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Dropdown from "./Dropdown";
import SocialsContainer from "./SocialsContainer";
import { FaMicrophoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppContext } from "../../../contexts/AppContext";
import Logo from "../Logo";
import { useSelector } from "react-redux";

const Header = () => {
  const { isScrolled, setIsScrolled, navigate, handleScrollTo } =
    useAppContext();

  const user = useSelector((state) => state.user.user);

  const [showDropdown, setShowDropdown] = useState(false);

  function handleDropdown() {
    setShowDropdown((prev) => !prev);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isScrolled
          ? "fixed top-0 left-0 w-full bg-neutral-50 text-primary shadow-md h-[80px]"
          : "relative bg-primary1/90 text-white border-b border-neutral-400/30 h-[80px] md:h-[90px]"
      } w-full flex items-center px-3 transition-all duration-500 z-[999]`}
    >
      <div className="w-full max-w-[1500px] md:px-7 mx-auto flex">
        <div
          onClick={() => navigate("/")}
          className="logo-cont flex items-center cursor-pointer"
        >
          <Logo type={"white"} />
        </div>

        <ul className="hidden md:flex gap-5 lg:gap-7 items-center uppercase font-medium text-[.75rem] lg:text-sm ml-[100px]">
          <li
            className={`nav-link cursor-pointer ${
              isScrolled ? "hover:text-primary1" : "hover:text-secondary"
            }`}
          >
            <Link to={"/"}>Home</Link>
          </li>
          <li
            onClick={() => handleScrollTo("about")}
            className={`nav-link cursor-pointer ${
              isScrolled ? "hover:text-primary1" : "hover:text-secondary"
            }`}
          >
            About
          </li>
          <li
            onClick={() => handleScrollTo("community")}
            className={`nav-link cursor-pointer ${
              isScrolled ? "hover:text-primary1" : "hover:text-secondary"
            }`}
          >
            Community
          </li>
          <li
            className={`nav-link cursor-pointer ${
              isScrolled ? "hover:text-primary1" : "hover:text-secondary"
            }`}
          >
            <Link to={"/episodes"}>Episodes</Link>
          </li>
          <li
            onClick={() => handleScrollTo("contact")}
            className={`nav-link cursor-pointer ${
              isScrolled ? "hover:text-primary1" : "hover:text-secondary"
            }`}
          >
            Contact
          </li>
          {user && (
            <li
              onClick={() => navigate("/admin")}
              className={`nav-link cursor-pointer px-2 rounded-md ${
                isScrolled
                  ? "bg-primary1 text-white"
                  : "bg-secondary text-primary"
              }`}
            >
              ADMIN
            </li>
          )}
        </ul>

        <div className="hidden md:flex items-center gap-6 text-sm ml-auto">
          <SocialsContainer />
        </div>

        <div onClick={handleDropdown} className="flex md:hidden ml-auto">
          <HiOutlineMenuAlt3
            color={isScrolled ? "#481297" : "white"}
            size={"40px"}
          />
        </div>

        {showDropdown && (
          <Dropdown
            handleDropdown={handleDropdown}
            showDropdown={showDropdown}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
