import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) setShadow(true);
      else setShadow(false);
    };
    window.addEventListener("scroll", handleShadow);
    return () => window.removeEventListener("scroll", handleShadow);
  }, []);

  const handleNav = () => setNav(!nav);

  return (
    <div
      className={`fixed w-full h-13 md:h-20 z-[100] transition-all duration-300 ${
        shadow ? "shadow-xl bg-white" : "bg-white"
      }`}
    >
      <div className="flex justify-between items-center w-full h-full px-4 md:px-16">
        <Link href="/">
          <Image
            className="rounded-full"
            src="/assets/navLogo.jpg"
            alt="Logo"
            width={50}
            height={50}
          />
        </Link>

        <ul className="hidden md:flex text-gray-700">
          <Link href="/">
            <li className="ml-10 p-2 text-sm uppercase hover:bg-[#f6f3f3] ">Home</li>
          </Link>
          <Link href="/#about">
            <li className="ml-10 p-2  text-sm uppercase hover:bg-[#f6f3f3]">About</li>
          </Link>
          <Link href="/#skills">
            <li className="ml-10 p-2 text-sm uppercase hover:bg-[#f6f3f3]">Skills</li>
          </Link>
          <Link href="/#projects">
            <li className="ml-10 p-2 text-sm uppercase hover:bg-[#f6f3f3]">Projects</li>
          </Link>
          <Link href="/#contact">
            <li className="ml-10 p-2 text-sm uppercase hover:bg-[#f6f3f3]">Contact</li>
          </Link>
        </ul>

        <div onClick={handleNav} className="md:hidden cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      <div className={nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
        <div
          className={`fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500 ${
            nav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image
                className="rounded-full"
                src="/assets/navLogo.jpg"
                alt="Logo"
                width={80}
                height={80}
              />
            </Link>
            <div onClick={handleNav} className="p-3 cursor-pointer">
              <AiOutlineClose />
            </div>
          </div>

          <ul className="uppercase mt-10" onClick={handleNav}>
            <Link href="/">
              <li className="py-4 text-sm">Home</li>
            </Link>
            <Link href="/#about">
              <li className="py-4 text-sm">About</li>
            </Link>
            <Link href="/#skills">
              <li className="py-4 text-sm">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="py-4 text-sm">Projects</li>
            </Link>
            <Link href="/#contact">
              <li className="py-4 text-sm">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;