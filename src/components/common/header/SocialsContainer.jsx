import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { useAppContext } from "../../../contexts/AppContext";

const SocialsContainer = () => {
  const { isScrolled } = useAppContext();

  return (
    <>
      <div className="rounded-sm md:flex hidden md:gap-2 lg:gap-5 items-center">
        <a
          href="https://www.instagram.com/tcipod?igsh=MnFoaHNncjlqZXgz"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram
            color={"white"}
            size={"20px"}
            className="hover:scale-125 cursor-pointer transition-all duration-300"
          />
        </a>
        <a
          href="https://www.tiktok.com/@tcipod?_t=8mvJLhhpwm5&_r=1"
          target="_blank"
          rel="noreferrer"
        >
          <FaTiktok
            color={"white"}
            size={"20px"}
            className="hover:scale-125 cursor-pointer transition-all duration-300"
          />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61555765794362"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookSquare
            color={"white"}
            size={"20px"}
            className="hover:scale-125 cursor-pointer transition-all duration-300"
          />
        </a>
        <a
          href="https://x.com/_tcipod?t=Gi3QvuM3-mZZszrOj31uxw&s=09"
          target="_blank"
          rel="noreferrer"
        >
          <FaXTwitter
            color={"white"}
            size={"20px"}
            className="hover:scale-125 cursor-pointer transition-all duration-300"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/the-chronicles-of-an-immigrant/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin
            color={"white"}
            size={"20px"}
            className="hover:scale-125 cursor-pointer transition-all duration-300"
          />
        </a>
      </div>

      <div className="rounded-sm md:hidden flex gap-5 items-center">
        <a
          href="https://www.instagram.com/tcipod?igsh=MnFoaHNncjlqZXgz"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram
            color={`#fcea10`}
            size={"25px"}
            className="hover:scale-125 cursor-pointer transition-all duration-300"
          />
        </a>

        <a
          href="https://www.tiktok.com/@tcipod?_t=8mvJLhhpwm5&_r=1"
          target="_blank"
          rel="noreferrer"
        >
          <FaTiktok
            color={`#fcea10`}
            size={"25px"}
            className="hover:scale-125 cursor-pointer transition-all duration-300"
          />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61555765794362"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookSquare
            color={`#fcea10`}
            size={"25px"}
            className="hover:scale-125 cursor-pointer transition-all duration-300"
          />
        </a>
        <a
          href="https://x.com/_tcipod?t=Gi3QvuM3-mZZszrOj31uxw&s=09"
          target="_blank"
          rel="noreferrer"
        >
          <FaXTwitter
            color={`#fcea10`}
            size={"25px"}
            className="hover:scale-125 cursor-pointer transition-all duration-300"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/the-chronicles-of-an-immigrant/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin
            color={`#fcea10`}
            size={"25px"}
            className="hover:scale-125 cursor-pointer transition-all duration-300"
          />
        </a>
      </div>
    </>
  );
};

export default SocialsContainer;
