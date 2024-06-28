import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaMicrophoneAlt } from "react-icons/fa";
import { useAppContext } from "../../../contexts/AppContext";
import Logo from "../Logo";

const Footer = () => {
  const { handleScrollTo, navigate, toggleComm } = useAppContext();
  return (
    <footer className="text-center bg-primary1 text-white lg:text-left">
      <div className="pt-[60px] text-left px-5 lg:px-[100px]">
        <section className="w-full lg:w-[70%] flex md:flex-row flex-col gap-10 justify-between text-center md:text-start">
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
            <div
              onClick={() => navigate("/")}
              className="logo-cont flex items-center cursor-pointer"
            >
              <Logo type={"secondary"} />
            </div>
            {/* <p className="my-5">TCI: The Chronicles of an Immigrant</p> */}
            <p className="flex gap-2 items-center mt-5">
              <MdEmail color="#fff" size="20px" />
              <a href="mailto:hello@tcipod.com" className="cursor-pointer">
                hello@tcipod.com
              </a>
            </p>
          </div>
          <div className="w-full md:w-1/3 flex flex-col">
            <h6 className="mb-4 flex font-semibold uppercase justify-center md:justify-start">
              INFO
            </h6>

            <p className="mb-4">
              <Link to="/" className="">
                Home
              </Link>
            </p>
            <p
              onClick={() => navigate("/about")}
              className="mb-4 cursor-pointer"
            >
              About
            </p>
            <p className="mb-4">
              <Link to="/episodes" className="">
                Episodes
              </Link>
            </p>
            <p
              onClick={() => {
                handleScrollTo("community");
                toggleComm();
              }}
              className="mb-4 cursor-pointer"
            >
              Community
            </p>
            <p className="mb-4">
              <Link to="/immigrants-corner" className="">
                Immigrants Corner
              </Link>
            </p>
            <p onClick={() => navigate("/contact")} className="cursor-pointer">
              Contact
            </p>
          </div>
          <div className="w-full md:w-1/3 flex flex-col">
            <h6 className="mb-4 flex font-semibold uppercase justify-center md:justify-start">
              Socials
            </h6>
            <p className="mb-4">
              <a
                href="https://www.instagram.com/tcipod?igsh=MnFoaHNncjlqZXgz"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </p>
            <p className="mb-4">
              <a
                href="https://x.com/_tcipod?t=Gi3QvuM3-mZZszrOj31uxw&s=09"
                target="_blank"
                rel="noreferrer"
              >
                Twitter (X)
              </a>
            </p>
            <p className="mb-4">
              <a
                href="https://www.tiktok.com/@tcipod?_t=8mvJLhhpwm5&_r=1"
                target="_blank"
                rel="noreferrer"
              >
                Tiktok
              </a>
            </p>
            <p className="mb-4">
              <a
                href="https://www.facebook.com/profile.php?id=61555765794362"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </p>
            <p className="mb-4">
              <a
                href="https://www.linkedin.com/company/the-chronicles-of-an-immigrant/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </section>
      </div>
      <div className="flex h-[80px] mt-5 justify-center items-center text-[.75rem] border-t border-t-white/20">
        <p>© 2024 TCI. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
