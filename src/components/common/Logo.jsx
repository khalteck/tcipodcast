import { useAppContext } from "../../contexts/AppContext";

const Logo = ({ type }) => {
  const { isScrolled } = useAppContext();
  return (
    <div>
      <img
        alt="logo"
        src={`/images/logo-${"white"}.png`}
        className="w-[200px] md:w-[250px] h-auto"
      />
    </div>
  );
};

export default Logo;
