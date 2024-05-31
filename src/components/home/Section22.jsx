import { MdMessage } from "react-icons/md";

const Section22 = () => {
  return (
    <div className="w-full bg-[#e0c0f3]/20 mt-[80px]">
      <section className="w-full py-[80px] md:py-[100px] flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2">
          <img alt="hero" src="/images/hero1.jpg" className="w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <h3>Help us Help You</h3>
          <h3 className="">We offer the best for you</h3>

          <p className="text-lg leading-relaxed mt-5">
            Send your migration dilemmas- you don't have to go through your
            migration journey alone. If you have a challenge, question or some
            exciting news we want to hear it.{" "}
          </p>

          <button className="btn-secondary mt-5 w-fit">
            Get in Touch <MdMessage color="#2a354e" size={"15"} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Section22;
