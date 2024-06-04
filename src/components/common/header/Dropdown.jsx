import { IoClose } from "react-icons/io5";
import SocialsContainer from "./SocialsContainer";
import { Link } from "react-router-dom";

const Dropdown = ({ handleDropdown }) => {
  return (
    <div className="w-full h-screen bg-[#f5f5f5] text-primary1 fixed top-0 left-0 z-[999] md:hidden overflow-y-auto px-5 md:px-8 py-8 quickview">
      <div className="w-full flex justify-between">
        <div className="logo-cont">
          <img
            alt="logo"
            src="/images/logo.png"
            className="w-8 md:w-10 h-auto"
          />
          <h1 className="text-primary1">TCIPOD</h1>
        </div>

        <div onClick={handleDropdown} className="flex md:hidden">
          <IoClose color="#481297" size={"40px"} />
        </div>
      </div>

      <ul
        onClick={handleDropdown}
        className="flex flex-col gap-8 uppercase mt-10 text-lg font-medium"
      >
        <li className="nav-link-mobile cursor-pointer">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="nav-link-mobile cursor-pointer">About</li>
        <li className="nav-link-mobile cursor-pointer">Community</li>
        <li className="nav-link-mobile cursor-pointer">
          <Link to={"/episodes"}>Episodes</Link>
        </li>
        <li className="nav-link-mobile cursor-pointer">Contact Us</li>
        <li className="mt-10">
          <SocialsContainer />
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
