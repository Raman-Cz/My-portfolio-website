import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hey there, I'm <span className="text-[#5651e5]">Raman</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Full-Stack Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I specialize in JavaScript, React, Next.js, Node.js, and more,
            blending frontend elegance with backend power. Whether it's
            designing interactive UIs, optimizing databases, or implementing
            AI-driven features, I love bringing ideas to life through code.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className=" rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaLinkedinIn size={25} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaGithub size={25} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
              <AiOutlineMail size={25} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
              <BsFillPersonLinesFill size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
