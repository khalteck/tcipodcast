import { IoClose } from "react-icons/io5";
import SocialsContainer from "./SocialsContainer";
import { Link } from "react-router-dom";
import {
  FaFacebook,
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
import Logo from "../Logo";
import { SiInstagram } from "react-icons/si";

const Dropdown = ({ handleDropdown, showDropdown, showShare }) => {
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
        <div
          className={`w-[75%] h-screen bg-[#5828a1] text-white md:hidden overflow-y-auto px-5 md:px-8 py-8 ${
            showShare ? "quickview" : "quickview2 ml-auto"
          }`}
        >
          <div className="w-full flex justify-between">
            <div
              onClick={() => navigate("/")}
              className="logo-cont flex items-center cursor-pointer"
            >
              <Logo type={"secondary"} />
            </div>
            {/* <div className="logo-cont">
              <FaMicrophoneAlt color="#fff" size={"30px"} />
              <h1 className="text-white">TCIPOD</h1>
            </div> */}

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

          {showShare && (
            <div className="flex flex-col gap-3 mt-10">
              <a
                href="https://www.instagram.com/tcipod?igsh=MnFoaHNncjlqZXgz"
                target="_blank"
                rel="noreferrer"
              >
                <div className="w-full h-[50px] px-4 flex gap-3 items-center rounded-full bg-primary1 border border-secondary/30 shadow-xl center-flex">
                  <SiInstagram size={"20px"} color="#fff" />
                  <p>Instagram</p>
                </div>
              </a>
              <a
                href="https://www.tiktok.com/@tcipod?_t=8mvJLhhpwm5&_r=1"
                target="_blank"
                rel="noreferrer"
              >
                <div className="w-full h-[50px] px-4 flex gap-3 items-center rounded-full bg-primary1 border border-secondary/30 shadow-xl center-flex">
                  <FaTiktok size={"20px"} color="#fff" />
                  <p>Tiktok</p>
                </div>
              </a>
              <a
                href="https://x.com/_tcipod?t=Gi3QvuM3-mZZszrOj31uxw&s=09"
                target="_blank"
                rel="noreferrer"
              >
                <div className="w-full h-[50px] px-4 flex gap-3 items-center rounded-full bg-primary1 border border-secondary/30 shadow-xl center-flex">
                  <FaXTwitter size={"20px"} color="#fff" />
                  <p>Twitter</p>
                </div>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61555765794362"
                target="_blank"
                rel="noreferrer"
              >
                <div className="w-full h-[50px] px-4 flex gap-3 items-center rounded-full bg-primary1 border border-secondary/30 shadow-xl center-flex">
                  <FaFacebook size={"20px"} color="#fff" />
                  <p>Facebook</p>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/company/the-chronicles-of-an-immigrant/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="w-full h-[50px] px-4 flex gap-3 items-center rounded-full bg-primary1 border border-secondary/30 shadow-xl center-flex">
                  <FaLinkedin size={"20px"} color="#fff" />
                  <p>LinkedIn</p>
                </div>
              </a>
            </div>
          )}

          {!showShare && (
            <div className="flex flex-col gap-3 mt-10">
              <div
                onClick={() => {
                  navigate("/");
                  handleDropdown();
                }}
                className="w-full h-[50px] px-4 flex gap-3 items-center rounded-full bg-primary1 border border-secondary/30 shadow-xl center-flex"
              >
                <p>Home</p>
              </div>

              <div
                onClick={() => {
                  navigate("/about");
                  handleDropdown();
                }}
                className="w-full h-[50px] px-4 flex gap-3 items-center rounded-full bg-primary1 border border-secondary/30 shadow-xl center-flex"
              >
                <p>About</p>
              </div>

              <div
                onClick={() => {
                  handleDropdown();
                  handleScrollTo("community");
                }}
                className="w-full h-[50px] px-4 flex gap-3 items-center rounded-full bg-primary1 border border-secondary/30 shadow-xl center-flex"
              >
                <p>Community</p>
              </div>

              <div
                onClick={() => {
                  navigate("/episodes");
                  handleDropdown();
                }}
                className="w-full h-[50px] px-4 flex gap-3 items-center rounded-full bg-primary1 border border-secondary/30 shadow-xl center-flex"
              >
                <p>Episodes</p>
              </div>

              <div
                onClick={() => {
                  navigate("/immigrants-corner");
                  handleDropdown();
                }}
                className="w-full h-[50px] px-4 flex gap-3 items-center rounded-full bg-primary1 border border-secondary/30 shadow-xl center-flex"
              >
                <p>Immigrants Corner</p>
              </div>
              <div
                onClick={() => {
                  navigate("/contact");
                  handleDropdown();
                }}
                className="w-full h-[50px] px-4 flex gap-3 items-center rounded-full bg-primary1 border border-secondary/30 shadow-xl center-flex"
              >
                <p>Contact Us</p>
              </div>

              {user && (
                <div
                  onClick={() => {
                    handleDropdown();
                    navigate("/admin");
                  }}
                  className="w-full h-[50px] px-4 flex gap-3 items-center rounded-full bg-primary1 border border-secondary/30 shadow-xl center-flex"
                >
                  <p>Admin Dashboard</p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
