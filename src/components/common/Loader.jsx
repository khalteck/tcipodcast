import LoaderMessageCard from "./LoaderMessageCard";

const Loader = () => {
  return (
    <div
      data-testid="loader"
      className="w-full h-[100dvh] fixed top-0 left-0 bg-primary1 text-secondary center-flex z-[400]"
    >
      <LoaderMessageCard />
    </div>
  );
};

export default Loader;
