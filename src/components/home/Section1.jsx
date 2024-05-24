import { FaPlay } from "react-icons/fa";

const Section1 = () => {
  return (
    <section className="w-full py-10 md:py-[100px] flex md:flex-row flex-col-reverse gap-10 justify-between">
      <div className="w-full md:w-[45%] flex flex-col gap-5 md:gap-8">
        <div className="font-light uppercase flex gap-2 items-center">
          <div className="bg-secondary w-3 h-4"></div>
          Explore a 14 day free trial
        </div>
        <h2>
          TCI: The Chronicles of an{" "}
          <span className="text-secondary">Immigrant</span>
        </h2>
        <p className="font-medium text-lg">
          Stories That Inspire, Voices that Resonate.
          <br />
          By Mo Mebude
        </p>
        <button className="btn-secondary mt-5 w-fit">
          Start listening <FaPlay color="#e5e5e5" size={"13"} />
        </button>
      </div>

      <div className="w-full md:w-1/2 h-[250px] md:h-[500px] border-secondary border-2"></div>
    </section>
  );
};

export default Section1;
