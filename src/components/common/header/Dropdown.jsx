import { IoClose } from "react-icons/io5";

const Dropdown = ({ handleDropdown }) => {
  return (
    <div className="w-full h-screen bg-[#171a1f] fixed top-0 left-0 z-[999] md:hidden overflow-y-auto px-5 md:px-8 py-8 quickview">
      <div className="w-full flex justify-between">
        <div className="logo-cont">
          <img
            alt="logo"
            src="/images/logo.png"
            className="w-8 md:w-10 h-auto"
          />
          <h1>TCI Podcast</h1>
        </div>

        <div onClick={handleDropdown} className="flex md:hidden">
          <IoClose color="#ea580c" size={"40px"} />
        </div>
      </div>

      <ul className="flex flex-col gap-8 uppercase mt-10 text-lg">
        <li className="nav-link-mobile cursor-pointer">Home</li>
        <li className="nav-link-mobile cursor-pointer">Episodes</li>
        <li className="nav-link-mobile cursor-pointer">Pricing</li>
        <li className="nav-link-mobile cursor-pointer">About</li>
        <li className="nav-link-mobile cursor-pointer">Login</li>
        <li className="nav-link-mobile cursor-pointer">Contact us</li>
      </ul>
    </div>
  );
};

export default Dropdown;
