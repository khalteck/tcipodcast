import { FaFacebook, FaLinkedin, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { SiInstagram } from "react-icons/si";

const FixedFloater = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="flex flex-col center-flex gap-2 fixed bottom-5 right-2 z-[100]">
      <div className="md:flex flex-col gap-3 hidden">
        <a
          href="https://www.instagram.com/tcipod?igsh=MnFoaHNncjlqZXgz"
          target="_blank"
          rel="noreferrer"
        >
          <div className="w-[50px] h-[50px] rounded-full bg-primary1 border border-secondary/30 shadow-xl center-flex">
            <SiInstagram size={"20px"} color="#fff" />
          </div>
        </a>
        <a
          href="https://www.tiktok.com/@tcipod?_t=8mvJLhhpwm5&_r=1"
          target="_blank"
          rel="noreferrer"
        >
          <div className="w-[50px] h-[50px] rounded-full bg-primary1 border border-secondary/30 shadow-xl center-flex">
            <FaTiktok size={"20px"} color="#fff" />
          </div>
        </a>
        <a
          href="https://x.com/_tcipod?t=Gi3QvuM3-mZZszrOj31uxw&s=09"
          target="_blank"
          rel="noreferrer"
        >
          <div className="w-[50px] h-[50px] rounded-full bg-primary1 border border-secondary/30 shadow-xl center-flex">
            <FaXTwitter size={"20px"} color="#fff" />
          </div>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61555765794362"
          target="_blank"
          rel="noreferrer"
        >
          <div className="w-[50px] h-[50px] rounded-full bg-primary1 border border-secondary/30 shadow-xl center-flex">
            <FaFacebook size={"20px"} color="#fff" />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/company/the-chronicles-of-an-immigrant/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="w-[50px] h-[50px] rounded-full bg-primary1 border border-secondary/30 shadow-xl center-flex">
            <FaLinkedin size={"20px"} color="#fff" />
          </div>
        </a>
      </div>
      <div className="w-1 h-[200px] bg-primary1 border border-secondary/30 hidden md:flex"></div>
      <div
        onClick={scrollToTop}
        className="md:w-[80px] md:h-[80px] w-[60px] h-[60px] rounded-full shadow-xl center-flex bg-primary1 border border-secondary/30 cursor-pointer"
      >
        <MdKeyboardDoubleArrowUp size={"30px"} color="#fff" />
      </div>
    </div>
  );
};

export default FixedFloater;
