const Offline = () => {
  return (
    <div className="w-full bg-primary1 min-h-screen center-flex flex-col">
      <img
        alt="illustration"
        src="/images/not-found.png"
        className="w-[200px] md:w-[400px] h-auto"
      />
      <p className="text-secondary font-sfpro text-center text-[1.1rem] font-medium mt-10">
        Oops, Looks like you are offline! <br />
        Back online?{" "}
        <span
          className="underline cursor-pointer"
          onClick={() => window.location.replace("/")}
        >
          Refresh
        </span>
      </p>
    </div>
  );
};

export default Offline;
