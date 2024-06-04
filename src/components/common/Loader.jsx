import { BarLoader } from "react-spinners";
import LoaderMessageCard from "./LoaderMessageCard";

const Loader = () => {
  return (
    <div
      data-testid="loader"
      className="w-full h-[100dvh] fixed top-0 left-0 bg-neutral-100 text-primary center-flex z-[100]"
    >
      <LoaderMessageCard />
    </div>
  );
};

export default Loader;
