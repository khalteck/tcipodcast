import { useState, useEffect } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Dropdown from "./Dropdown";
import SocialsContainer from "./SocialsContainer";
import { FaMicrophoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppContext } from "../../../contexts/AppContext";
import Logo from "../Logo";
import { useSelector } from "react-redux";
import { MdEmail } from "react-icons/md";

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
    <>
      {/* <div className="w-full bg-secondary2">
        <div className="w-full max-w-[1500px] p-2 mx-auto flex justify-between">
          <button className="flex items-center gap-3 text-white font-medium">
            <MdEmail size={"18px"} color="white" />
            <p className="text-[.75rem]">Email Us</p>
          </button>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <SocialsContainer />
          </div>
        </div>
      </div> */}

      <header
        className={`relative bg-primary1 text-white h-[120px] px-3 w-full flex flex-col justify-center items-center transition-all duration-500`}
      >
        <div className="w-full max-w-[1500px] md:px-7 mx-auto flex flex-col">
          <div className="w-full flex justify-between items-center">
            <div className="w-full flex justify-between items-center pr-5">
              <div
                onClick={() => navigate("/")}
                className="logo-cont flex items-center cursor-pointer"
              >
                <Logo type={"secondary"} />
              </div>

              <ul className="hidden md:flex gap-5 lg:gap-7 items-center font-medium text-[.7rem] lg:text-sm">
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
                {/* <li
                onClick={() => handleScrollTo("contact")}
                className={`nav-link cursor-pointer ${
                  isScrolled ? "hover:text-primary1" : "hover:text-secondary"
                }`}
              >
                Contact
              </li> */}
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

              <div className="hidden md:block">
                <button className="px-5 py-3 bg-secondary2 rounded-full text-white font-medium text-sm">
                  Contact
                </button>
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
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
