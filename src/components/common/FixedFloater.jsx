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
          <div className="lg:w-[50px] lg:h-[50px] w-[35px] h-[35px] rounded-full bg-primary1 border border-secondary/30 shadow-xl center-flex">
            <img
              alt="icon"
              src="/images/icons8-instagram-48.png"
              className="w-[30px] h-[30px]"
            />
          </div>
        </a>
        <a
          href="https://www.tiktok.com/@tcipod?_t=8mvJLhhpwm5&_r=1"
          target="_blank"
          rel="noreferrer"
        >
          <div className="lg:w-[50px] lg:h-[50px] w-[35px] h-[35px] rounded-full bg-primary1 border border-secondary/30 shadow-xl center-flex">
            <img
              alt="icon"
              src="/images/icons8-tiktok-48.png"
              className="w-[30px] h-[30px]"
            />
          </div>
        </a>
        <a
          href="https://x.com/_tcipod?t=Gi3QvuM3-mZZszrOj31uxw&s=09"
          target="_blank"
          rel="noreferrer"
        >
          <div className="lg:w-[50px] lg:h-[50px] w-[35px] h-[35px] rounded-full bg-primary1 border border-secondary/30 shadow-xl center-flex">
            <img
              alt="icon"
              src="/images/icons8-twitter-30.png"
              className="w-[25px] h-[25px]"
            />
          </div>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61555765794362"
          target="_blank"
          rel="noreferrer"
        >
          <div className="lg:w-[50px] lg:h-[50px] w-[35px] h-[35px] rounded-full bg-primary1 border border-secondary/30 shadow-xl center-flex">
            <img
              alt="icon"
              src="/images/icons8-facebook-48.png"
              className="w-[30px] h-[30px]"
            />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/company/the-chronicles-of-an-immigrant/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="lg:w-[50px] lg:h-[50px] w-[35px] h-[35px] rounded-full bg-primary1 border border-secondary/30 shadow-xl center-flex">
            <img
              alt="icon"
              src="/images/icons8-linkedin-48.png"
              className="w-[30px] h-[30px]"
            />
          </div>
        </a>
      </div>
      <div className="w-1 h-[30px] lg:h-[100px] bg-primary1 border border-secondary/30 hidden md:flex"></div>
      <div
        onClick={scrollToTop}
        className="lg:w-[80px] lg:h-[80px] w-[60px] h-[60px] rounded-full shadow-xl center-flex bg-primary1 border border-secondary/30 cursor-pointer"
      >
        <MdKeyboardDoubleArrowUp size={"30px"} color="#fff" />
      </div>
    </div>
  );
};

export default FixedFloater;
