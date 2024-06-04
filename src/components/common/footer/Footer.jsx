import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { useState, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { ClipLoader } from "react-spinners";
import { FaMicrophoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-center bg-primary1 text-white lg:text-left">
      <div className="pt-[60px] text-left px-5 lg:px-[100px]">
        <section className="w-full lg:w-[70%] flex md:flex-row flex-col gap-10 justify-between">
          <div className="w-full md:w-1/3">
            <div className="logo-cont mb-4">
              <FaMicrophoneAlt color="#663881" size={"50px"} />
              <h1 className="text-white">TCIPOD</h1>
            </div>
            <p className="mb-5">TCI: The Chronicles of an Immigrant</p>
            <p className="flex gap-2 items-center">
              <MdEmail color="white" size="20px" />
              <a href="mailto:email@gmail.com" className="cursor-pointer">
                email@gmail.com
              </a>
            </p>
          </div>
          <div className="w-full md:w-1/3 flex flex-col">
            <h6 className="mb-4 flex font-semibold uppercase justify-start">
              INFO
            </h6>

            <p className="mb-4">
              <Link to="/" className="">
                About
              </Link>
            </p>
            <p className="mb-4">
              <Link to="/" className="">
                Episodes
              </Link>
            </p>
            <p>
              <Link to="/" className="">
                Community
              </Link>
            </p>
          </div>
          <div className="w-full md:w-1/3 flex flex-col">
            <h6 className="mb-4 flex font-semibold uppercase">Socials</h6>
            <p className="mb-4">
              <Link to="/" className="">
                Instagram
              </Link>
            </p>
            <p className="mb-4">
              <Link to="/" className="">
                Twitter (X)
              </Link>
            </p>
            <p className="mb-4">
              <Link to="/" className="">
                Tiktok
              </Link>
            </p>
            <p className="mb-4">
              <Link to="/" className="">
                Facebook
              </Link>
            </p>
            <p className="mb-4">
              <Link to="/" className="">
                Linkedin
              </Link>
            </p>
          </div>
        </section>
      </div>
      <div className="flex h-[80px] justify-center items-center text-[.75rem] opacity-70 border-t border-t-white/20">
        <p>© 2024 Tcipod. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
