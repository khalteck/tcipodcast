const Section23 = () => {
  return (
    <div className="w-full bg-white md:pb-[100px] pt-10 md:pt-[100px]">
      <section className="w-full px-5 pb-[80px] md:px-[100px]">
        <h3 className="mb-[150px] md:mb-[100px] text-center">
          Meet the founders
        </h3>
        <div className="w-full md:h-[350px] bg-secondary/80 border-2 border-primary rounded-lg flex md:flex-row flex-col-reverse justify-center">
          <div className="w-full md:w-[55%] border-r border-primary flex flex-col gap-5 p-4 lg:p-8">
            <h3 className="mt-[170px] md:mt-0">Moyeni Mebude</h3>
            <p className="w-full leading-relaxed md:text-[.9rem] lg:text-[1rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. <br />
              <br /> Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>

          <div className="w-full md:w-[45%] bg-primary/10 relative">
            <div className="w-[250px] h-[250px] md:w-[100%] md:h-[100%] lg:w-[450px] lg:h-[450px] bg-white absolute top-[-100px] md:top-[50%] left-[50%] translate-x-[-50%] md:translate-y-[-50%] rounded-sm shadow-custom md:shadow-none lg:shadow-custom flex">
              <img
                alt=""
                src="/images/host.jpg"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section23;
