import { useAppContext } from "../../contexts/AppContext";

const Logo = ({ type }) => {
  const { isScrolled } = useAppContext();
  return (
    <div>
      <img
        alt="logo"
        src={`/images/logo-icon-1.jpg`}
        className="w-[90px] md:w-[150px] h-auto rounded-b-xl"
      />
    </div>
  );
};

export default Logo;
