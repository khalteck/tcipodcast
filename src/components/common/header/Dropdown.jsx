import { IoClose } from "react-icons/io5";
import SocialsContainer from "./SocialsContainer";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaMicrophoneAlt,
  FaTiktok,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { useAppContext } from "../../../contexts/AppContext";
import { useSelector } from "react-redux";
import { FaXTwitter } from "react-icons/fa6";

const Dropdown = ({ handleDropdown, showDropdown }) => {
  const { navigate, handleScrollTo, isScrolled } = useAppContext();

  const user = useSelector((state) => state.user.user);

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
        <div className="w-[75%] h-screen bg-[#5828a1] text-white md:hidden overflow-y-auto px-5 md:px-8 py-8 quickview">
          <div className="w-full flex justify-between">
            <div className="logo-cont">
              <FaMicrophoneAlt color="#fff" size={"30px"} />
              <h1 className="text-white">TCIPOD</h1>
            </div>

            <div
              onClick={() => {
                handleDropdown();
                setShowTray(false);
              }}
              className="flex md:hidden"
            >
              <IoClose color="#fff" size={"40px"} />
            </div>
          </div>

          <ul
            // onClick={handleDropdown}
            className="flex flex-col gap-8 mt-10 text-xl font-medium"
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
                navigate("/about");
                handleDropdown();
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
                navigate("/immigrants-corner");
                handleDropdown();
              }}
              className="nav-link-mobile cursor-pointer"
            >
              Immigrants Corner
            </li>
            <li
              onClick={() => {
                navigate("/contact");
                handleDropdown();
              }}
              className="nav-link-mobile cursor-pointer"
            >
              Contact Us
            </li>
            {user && (
              <li
                onClick={() => {
                  handleDropdown();
                  navigate("/admin");
                }}
                className={`nav-link-mobile w-fit text-[.85rem] cursor-pointer px-2 rounded-sm bg-secondary text-primary`}
              >
                ADMIN DASHBOARD
              </li>
            )}
            <li className="mt-10">
              <div className="rounded-sm md:hidden flex gap-5 items-center">
                <a
                  href="https://www.instagram.com/tcipod?igsh=MnFoaHNncjlqZXgz"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram
                    color={`#fff`}
                    size={"25px"}
                    className="hover:scale-125 cursor-pointer transition-all duration-300"
                  />
                </a>

                <a
                  href="https://www.tiktok.com/@tcipod?_t=8mvJLhhpwm5&_r=1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTiktok
                    color={`#fff`}
                    size={"25px"}
                    className="hover:scale-125 cursor-pointer transition-all duration-300"
                  />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61555765794362"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookSquare
                    color={`#fff`}
                    size={"25px"}
                    className="hover:scale-125 cursor-pointer transition-all duration-300"
                  />
                </a>
                <a
                  href="https://x.com/_tcipod?t=Gi3QvuM3-mZZszrOj31uxw&s=09"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaXTwitter
                    color={`#fff`}
                    size={"25px"}
                    className="hover:scale-125 cursor-pointer transition-all duration-300"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/the-chronicles-of-an-immigrant/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin
                    color={`#fff`}
                    size={"25px"}
                    className="hover:scale-125 cursor-pointer transition-all duration-300"
                  />
                </a>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
