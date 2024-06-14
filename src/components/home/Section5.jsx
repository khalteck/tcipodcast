import { IoPlay } from "react-icons/io5";
import { BsSendFill } from "react-icons/bs";
import Divider from "./Divider";

const Section5 = () => {
  return (
    <div className="w-full bg-slate-50/90 text-primary1">
      <Divider />
      <section
        id="community"
        className="py-[80px] md:pb-[80px] flex flex-col md:flex-row md:items-center gap-10"
      >
        <div className="w-full md:w-1/2">
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            alt="hero"
            src="/images/pod2.jpg"
            className="w-full h-[300px] md:h-[500px] lg:h-[700px] object-cover rounded-[50px]"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h3
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-center"
          >
            Join The Community
          </h3>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="mt-5 mb-7 text-center"
          >
            Join the Tcipod community and never miss out on new and exciting
            episodes!
          </p>

          <form
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="w-full md:w-[650px] mx-auto flex flex-col gap-5"
          >
            <div className="flex md:flex-row flex-col gap-5">
              <input
                type="text"
                placeholder="First name"
                className="w-full p-4 rounded-lg border border-primary1 bg-transparent outline-none text-sm"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full p-4 rounded-lg border border-primary1 bg-transparent outline-none text-sm"
              />
            </div>
            <div className="flex md:flex-row flex-col gap-5">
              <input
                type="text"
                placeholder="Email"
                className="w-full p-4 rounded-lg border border-primary1 bg-transparent outline-none text-sm"
              />
            </div>

            <div className="mt-10 center-flex">
              <button className="btn-custom5">
                Join Community <BsSendFill color="white" size={"15px"} />
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Section5;
