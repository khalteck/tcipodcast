/* eslint-disable react/no-unescaped-entities */
const Section2 = () => {
  return (
    <section>
      <div className="w-full flex md:flex-row flex-col gap-10 md:gap-0 pt-10 md:pt-[100px]">
        <div className="w-full md:w-1/2 p-3 md:px-0">
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            alt="hero"
            src="/images/Contact us pic.jpg"
            className="w-full h-auto md:h-[700px] object-cover rounded-[50px]"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center px-3 pb-[80px] md:p-[50px] xl:md:p-[80px]">
          {/* <h4
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-center font-bold text-[1.5rem]"
          >
            {/* //Reach Out To Us— 
            We Would Love To Hear From You!
          </h4> */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className=""
          >
            <h4 className="text-center font-bold text-[1.5rem] mb-3">
              Become a Part of Our Story
            </h4>
            <p className="">
              Are you someone who loves building communities and is fascinated
              by the stories of global migration? We are on the lookout for
              passionate volunteers, including a dedicated Community Manager, to
              help us grow and connect our audience worldwide.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="mt-10"
          >
            <h4 className="text-center font-bold text-[1.5rem] mb-3">
              Sponsorships and Partnerships
            </h4>
            <p>
              Hey there! Do you believe in the power of sharing immigrant
              stories and building a supportive community? We do too, and we
              would love for you to join us! Let us team up to make a
              difference! We are looking for amazing sponsors and partners to
              join us on this incredible journey.
              <br />
              <br />
              If this sounds like something you would love to be a part of,
              contact us now at{" "}
              <a
                href="mailto:enquiries@tcipod.com"
                className="underline text-secondary2"
              >
                enquiries@tcipod.com
              </a>{" "}
              – we cannot wait to hear from you!
            </p>
          </div>
        </div>{" "}
      </div>
      <div className="w-full flex md:flex-row-reverse flex-col gap-10 md:gap-0 pb-[100px]">
        <div className="w-full md:w-1/2 p-3 md:px-0">
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            alt="hero"
            src="/images/Contact 2.jpg"
            className="w-full h-auto md:h-[700px] object-cover rounded-[50px]"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center px-3 pb-[80px] md:p-[50px] xl:md:p-[80px]">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="mt-10"
          >
            <h4 className="text-center font-bold text-[1.5rem] mb-3">
              Volunteer with Us
            </h4>
            <p>
              We need a <strong>Community Manager</strong> passionate about
              global migration and community building. This volunteer role is
              perfect for someone with creative ideas and a love for connecting
              with people. We also seek volunteers to help with our podcast, the
              creative process, and other projects.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="mt-10"
          >
            <h4 className="text-center font-bold text-[1.5rem] mb-3">
              We Value Your Feedback
            </h4>
            <p>
              Share your thoughts and suggestions to help us improve.
              <br />
              <br />
              Interested? Contact us at{" "}
              <a
                href="mailto:hello@tcipod.com"
                className="underline text-secondary2"
              >
                hello@tcipod.com
              </a>{" "}
              – we cannot wait to hear from you!
            </p>
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default Section2;
