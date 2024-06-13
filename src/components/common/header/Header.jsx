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
      className={`relative bg-primary2 text-white border-b border-neutral-400/30 h-[80px] md:h-[200px] w-full flex items-center px-3 transition-all duration-500`}
    >
      <div className="w-full max-w-[1500px] md:px-7 mx-auto flex">
        <div className="w-full md:w-[55%] flex justify-between pr-5">
          <div className="flex flex-col items-center">
            <div
              onClick={() => navigate("/")}
              className="logo-cont flex items-center cursor-pointer"
            >
              <Logo type={"secondary"} />
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm mt-5">
              <SocialsContainer />
            </div>
          </div>

          <ul className="hidden md:flex gap-5 lg:gap-7 items-center uppercase font-medium text-[.75rem] lg:text-sm ml-[100px]">
            {/* <li
            className={`nav-link cursor-pointer ${
              isScrolled ? "hover:text-primary1" : "hover:text-secondary"
            }`}
          >
            <Link to={"/"}>Home</Link>
          </li> */}
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
                className={`nav-link cursor-pointer px-2 rounded-sm ${
                  isScrolled
                    ? "bg-primary1 text-white"
                    : "bg-secondary text-primary"
                }`}
              >
                ADMIN
              </li>
            )}
          </ul>

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
      </div>
    </header>
  );
};

export default Header;
