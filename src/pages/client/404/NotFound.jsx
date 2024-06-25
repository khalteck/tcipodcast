const Notfound = () => {
  return (
    <div className="w-full bg-primary1 min-h-screen center-flex flex-col">
      <img
        alt="illustration"
        src="/images/not-found.png"
        className="w-[200px] md:w-[400px] h-auto"
      />
      <p className="text-secondary font-sfpro text-center text-[1.1rem] font-bold mt-10">
        Oops! Page not found! <br />
        <span
          className="underline cursor-pointer"
          onClick={() => window.location.replace("/")}
        >
          Back to home
        </span>
      </p>
    </div>
  );
};

export default Notfound;
