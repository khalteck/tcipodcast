const Section2 = () => {
  return (
    <div className="w-full bg-secondary2 text-white pb-[80px] px-3 pt-10 md:pt-0">
      <div className="w-full">
        <h3 className="text-center mb-5">Best In Podcast</h3>
        <p className="w-full md:w-[70%] mx-auto text-[1.1rem] mb-10 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          alt="hero"
          src="/images/podcast.jpg"
          className="w-full md:w-[70%] h-[300px] md:h-[600px] mx-auto object-cover rounded-[50px]"
        />
      </div>
    </div>
  );
};

export default Section2;
