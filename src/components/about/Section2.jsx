import { GiSplash } from "react-icons/gi";

const Section2 = () => {
  return (
    <div className="w-full bg-secondary2 text-white pb-[80px] px-3 pt-10 md:pt-[80px] relative">
      <section className="w-full flex md:flex-row flex-col gap-5 md:gap-10">
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          alt="hero"
          src="/images/podcast.jpg"
          className="w-full md:w-[60%] lg:w-[70%] h-[300px] sm:h-[400px] md:h-[700px] mx-auto object-cover rounded-[50px]"
        />

        <div className="w-full md:w-[40%] lg:w-[30%] flex flex-col">
          <div>
            <h3 className="mb-5">Our Mission</h3>
            <p className="w-full mb-10">
              <span className="font-bold">Mo and Folawe</span> met as students
              at Lancaster University, and their friendship has flourished ever
              since. Their shared passion for community impact led to the
              creation of "The Chronicles of an Immigrant" media production.
              Together, they aim to build a supportive community for immigrants,
              fostering connections in business, friendship, and career, and
              significantly contributing to the global migrant community.
            </p>
          </div>

          <div>
            <h3 className="mb-5">Our Vision</h3>
            <p className="w-full mb-10">
              Imagine a world where migrating to any country is hassle-free. At
              TCI, our goal is to create a supportive community that guides you
              wherever you choose to migrate. We envision a future where every
              immigrant feels welcomed and empowered, no matter their
              destination.
            </p>
          </div>

          <div>
            <h3 className="mb-5">Our Values</h3>
            <p className="w-full mb-10">
              We’re Bold, We’re Resilient & We’re Different
            </p>
          </div>
        </div>
      </section>

      {/* decor */}
      <GiSplash
        size={"100px"}
        color="#fcea10"
        className="absolute -bottom-2 right-10 md:right-[100px]"
      />
    </div>
  );
};

export default Section2;
