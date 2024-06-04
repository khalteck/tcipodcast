const Section5 = () => {
  return (
    <section className="py-[80px] md:pb-[80px]">
      <h3 className="text-center">Join The Community</h3>
      <p className="mt-5 mb-7 text-center">
        Join the Tcipod community and never miss out on new and exciting
        episodes!
      </p>

      <form className="w-full md:w-[650px] mx-auto flex flex-col gap-5">
        <div className="flex md:flex-row flex-col gap-5">
          <input
            type="text"
            placeholder="First name"
            className="w-full p-4 rounded-sm border border-primary/50 bg-transparent outline-none text-sm"
          />
          <input
            type="text"
            placeholder="Last name"
            className="w-full p-4 rounded-sm border border-primary/50 bg-transparent outline-none text-sm"
          />
        </div>
        <div className="flex md:flex-row flex-col gap-5">
          <input
            type="text"
            placeholder="Email"
            className="w-full p-4 rounded-sm border border-primary/50 bg-transparent outline-none text-sm"
          />
          <input
            type="text"
            placeholder="Phone number"
            className="w-full p-4 rounded-sm border border-primary/50 bg-transparent outline-none text-sm"
          />
        </div>

        <div className="center-flex mt-10">
          <button className="btn-secondary w-full md:w-1/3 center-flex">
            Join
          </button>
        </div>
      </form>
    </section>
  );
};

export default Section5;
