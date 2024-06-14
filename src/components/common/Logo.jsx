import { useAppContext } from "../../contexts/AppContext";

const Logo = ({ type }) => {
  const { isScrolled } = useAppContext();
  return (
    <div>
      <img
        alt="logo"
        src={
          !isScrolled
            ? `/images/logo-${type}.png`
            : `/images/logo-${"primary"}.png`
        }
        className="w-[150px] md:w-[250px] h-auto"
      />
    </div>
  );
};

export default Logo;
