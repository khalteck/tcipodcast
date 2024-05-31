import { FaPlay } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";

const Section24 = () => {
  return (
    <div className="w-full mt-[80px]">
      <section className="w-full pb-[80px] md:py-0 flex flex-col md:flex-row gap-10">
        <div className="w-full flex gap-4 md:w-1/2">
          <img
            alt="hero"
            src="/images/podcast.jpg"
            className="w-[30%] h-[220px] md:h-full object-cover rounded-lg"
          />
          <div className="w-full flex flex-col gap-4">
            <div className="bg-blue-500/20 rounded-lg w-full h-[50%]"></div>
            <div className="bg-blue-500/20 rounded-lg w-full h-[50%]"></div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-5">
          <h3>Our Mission, Your Entertainment</h3>
          {/* <h3 className="">We offer the best for you</h3> */}

          <p className="text-lg leading-relaxed mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <button className="btn-secondary mt-5 w-fit">
            Listen All <FaPlay color="#2a354e" size={"15"} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Section24;
