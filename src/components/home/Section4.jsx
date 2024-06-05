import { FaPhone } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";

const Section4 = () => {
  return (
    <>
      <section
        id="contact"
        className="w-full bg-primary2/10 md:bg-inherit py-[80px] md:pt-[100px] md:pb-0 flex flex-col md:flex-row gap-5 md:gap-0"
      >
        <div className="w-full md:w-1/2">
          <img
            alt="hero"
            src="/images/pod2.jpg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:bg-primary2/10 md:w-1/2 flex flex-col gap-5 md:p-10">
          <h3>Contact Us</h3>

          <div className="text-lg leading-relaxed mt-5">
            <p>Sponsorship and Partnership</p>
            <p>Donations</p>
            <br />
            Interested in inspiring the world through your migration journey, we
            love to hear from you.
          </div>

          <button className="btn-secondary mt-5 w-fit">
            Email Us <MdMessage color="#2a354e" size={"15"} />
          </button>
        </div>
      </section>

      <section className="w-full bg-[#e0c0f3]/30 md:bg-inherit py-[80px] md:py-0 md:pb-[100px] flex flex-col-reverse md:flex-row gap-5 md:gap-0">
        <div className="w-full md:bg-[#e0c0f3]/30 md:w-1/2 flex flex-col gap-5 md:p-10">
          <h3>Anywhere You Are</h3>

          <p className="text-lg leading-relaxed mt-5">
            Join our video segments where we feature businesses of immigrants
            across the world, don't worry whether you're the UK or not - you
            never know we might be in your city next.
          </p>

          <button className="btn-secondary mt-5 w-fit">
            Call Us <FaPhone color="#2a354e" size={"15"} />
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <img
            alt="hero"
            src="/images/pod.jpg"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default Section4;
