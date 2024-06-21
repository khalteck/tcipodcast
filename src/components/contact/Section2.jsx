const Section2 = () => {
  return (
    <section className="w-full flex md:flex-row flex-col gap-10">
      <div className="w-full md:w-1/2">
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          alt="hero"
          src="/images/pod.jpg"
          className="w-full h-[300px] md:h-[700px] object-cover rounded-[50px]"
        />
      </div>
      <div className="w-full md:w-1/2 text-center">
        <h3 data-aos="fade-up" data-aos-duration="1000" className="text-center">
          REACH OUT TO US
        </h3>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="mt-5 mb-10 text-center"
        >
          We would love to hear from you!
        </p>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          className=""
        >
          <h4 className="font-medium font-gluten text-[1.25rem] uppercase">
            Sponsorship and Partnership
          </h4>
          <a
            href="mailto:payment@tcipod.com"
            className="underline text-secondary2"
          >
            payment@tcipod.com
          </a>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="mt-10"
        >
          <h4 className="font-medium font-gluten text-[1.25rem] uppercase">
            Donations
          </h4>
          <p>
            Be part of helping an immigrant's wildest dream come true - email
            follows Interested in inspiring the world through your migration
            journey.
          </p>
          <a
            href="mailto:payment@tcipod.com"
            className="underline text-secondary2"
          >
            payment@tcipod.com
          </a>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="mt-10"
        >
          <h4 className="font-medium font-gluten text-[1.25rem] uppercase">
            Join our video segments
          </h4>
          <p>
            We feature businesses of immigrants across the world, don't worry
            whether you're the UK or not - you never know we might be in your
            city next.
          </p>
          <a
            href="mailto:hello@tcipod.com"
            className="underline text-secondary2"
          >
            hello@tcipod.com
          </a>
        </div>
      </div>{" "}
    </section>
  );
};

export default Section2;
