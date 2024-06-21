import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import { useAppContext } from "../../../contexts/AppContext";
import Logo from "../Logo";
import { useSelector } from "react-redux";
import { IoShareSocial } from "react-icons/io5";

const Header = () => {
  const { isScrolled, setIsScrolled, navigate, handleScrollTo } =
    useAppContext();

  const user = useSelector((state) => state.user.user);

  const [showDropdown, setShowDropdown] = useState(false);

  function handleDropdown() {
    setShowDropdown((prev) => !prev);
  }

  return (
    <>
      <header
        className={`relative bg-primary1 text-white h-[100px] md:h-[120px] px-3 w-full flex flex-col justify-center items-center transition-all duration-500`}
      >
        <div className="w-full max-w-[1500px] md:px-7 mx-auto flex flex-col">
          <div className="w-full flex justify-between items-center">
            <div className="w-full flex justify-between items-center">
              <div onClick={handleDropdown} className="flex md:hidden mr-auto">
                <IoShareSocial color={"#fff"} size={"30px"} />
              </div>

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
                  className={`nav-link cursor-pointer ${
                    isScrolled ? "hover:text-primary1" : "hover:text-secondary"
                  }`}
                >
                  <Link to={"/about"}>About</Link>
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
                  className={`nav-link cursor-pointer ${
                    isScrolled ? "hover:text-primary1" : "hover:text-secondary"
                  }`}
                >
                  <Link to={"/immigrants-corner"}>Immigrants Corner</Link>
                </li>
                {user && (
                  <li
                    onClick={() => window.location.replace("/admin")}
                    className={`nav-link cursor-pointer px-2 rounded-sm ${
                      isScrolled
                        ? "bg-primary1 text-white"
                        : "bg-secondary2 text-white"
                    }`}
                  >
                    ADMIN
                  </li>
                )}
              </ul>

              <div className="hidden md:block">
                <button
                  onClick={() => navigate("/contact")}
                  className="btn-custom3"
                >
                  Get in Touch
                </button>
              </div>

              <div onClick={handleDropdown} className="flex md:hidden ml-auto">
                <HiOutlineMenuAlt3 color={"#fff"} size={"35px"} />
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
