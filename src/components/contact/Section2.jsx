/* eslint-disable react/no-unescaped-entities */
const Section2 = () => {
  return (
    <>
      <div className="w-full flex md:flex-row flex-col gap-10 md:gap-0">
        <div className="w-full md:w-1/2 p-3 md:px-0">
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            alt="hero"
            src="/images/Contact us pic.jpg"
            className="w-full h-auto md:h-[700px] object-cover rounded-[50px] md:rounded-none"
          />
        </div>
        <div className="w-full md:w-1/2 text-center px-3 pb-[80px] md:p-[50px] xl:md:p-[80px]">
          <h4
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-center font-bold text-[1.5rem]"
          >
            Reach Out To Us—We Would Love To Hear From You!
          </h4>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className=""
          >
            <h4 className="text-center font-bold text-[1.5rem]">
              Become a Part of Our Story
            </h4>
            <p className="">
              Are you someone who loves building communities and is fascinated
              by the stories of global migration? We're on the lookout for
              passionate volunteers, including a dedicated Community Manager, to
              help us grow and connect our audience worldwide.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="mt-7"
          >
            <h4 className="text-center font-bold text-[1.5rem]">
              Volunteer Community Manager Wanted
            </h4>
            <p className="">
              Do you have a flair for creativity and a talent for bringing
              people together? We need a volunteer Community Manager who is
              excited about global migration and loves connecting with people.
              This is a voluntary role, perfect for someone passionate about
              community building and storytelling. If you have innovative ideas
              and a heart for our mission, we’d love to meet you! You’ll play a
              key role in managing our community, sparking engagement, and
              making our platform a welcoming space for everyone.
            </p>
            <p className="mt-10">
              Contact us at{" "}
              <a
                href="mailto:hello@tcipod.com"
                className="underline text-secondary2"
              >
                hello@tcipod.com
              </a>
            </p>
          </div>
        </div>{" "}
      </div>
      <div className="w-full flex md:flex-row-reverse flex-col gap-10 md:gap-0">
        <div className="w-full md:w-1/2 p-3 md:px-0">
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            alt="hero"
            src="/images/Contact 2.jpg"
            className="w-full h-auto md:h-[700px] object-cover rounded-[50px] md:rounded-none"
          />
        </div>
        <div className="w-full md:w-1/2 text-center px-3 pb-[80px] md:p-[50px] xl:md:p-[80px]">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className=""
          >
            <h4 className="text-center font-bold text-[1.5rem]">
              Sponsoships and Partnership
            </h4>
            <p>
              Hey there! Do you believe in the power of sharing immigrant
              stories and building a supportive community? We do too, and we’d
              love for you to join us! Let’s team up to make a difference! We’re
              looking for amazing sponsors and partners to join us on this
              incredible journey.
              <br />
              <br />
              Imagine the impact we can have together – inspiring, empowering,
              and uplifting immigrants from all over the world. If this sounds
              like something you’d love to be a part of, let’s chat and see how
              we can create something amazing together!
            </p>

            <p>
              Contact us now at:{" "}
              <a
                href="mailto:enquiries@tcipod.com"
                className="underline text-secondary2"
              >
                enquiries@tcipod.com
              </a>{" "}
              – we can't wait to hear from you!
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="mt-10"
          >
            <h4 className="text-center font-bold text-[1.5rem]">
              Volunteer with Us
            </h4>
            <p>
              We’re also looking for enthusiastic volunteers who want to be part
              of something special. Whether you want to help with our podcast,
              manage social media, or support our events, there’s a spot for you
              here. Your efforts will help us share meaningful stories and build
              a supportive global community.
            </p>
            {/* <a
            href="mailto:hello@tcipod.com"
            className="underline text-secondary2"
          >
            hello@tcipod.com
          </a> */}
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="mt-7"
          >
            <p className="mt-10">
              If this sounds like you, don’t hesitate to reach out. Contact us
              at{" "}
              <a
                href="mailto:hello@tcipod.com"
                className="underline text-secondary2"
              >
                hello@tcipod.com
              </a>{" "}
              – we can't wait to hear from you!
            </p>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default Section2;
