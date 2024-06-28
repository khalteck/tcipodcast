import Marquee from "react-fast-marquee";

const Divider = () => {
  const paragraphs = [];
  for (let i = 0; i < 50; i++) {
    paragraphs.push(
      <h3
        key={i}
        className="text-secondary text-[1.25rem] md:text-[2rem] mr-[80px]"
      >
        New Episodes Every Thursday...{" "}
      </h3>
    );
  }
  return (
    <div className="w-full h-[100px] bg-primary1 center-flex">
      <Marquee pauseOnHover={false}>{paragraphs}</Marquee>
    </div>
  );
};

export default Divider;
