import { BarLoader } from "react-spinners";
import LoaderMessageCard from "./LoaderMessageCard";

const Loader = () => {
  return (
    <div
      data-testid="loader"
      className="w-full h-[100dvh] fixed top-0 left-0 bg-primary1/90 text-secondary center-flex z-[100]"
    >
      <LoaderMessageCard />
    </div>
  );
};

export default Loader;
