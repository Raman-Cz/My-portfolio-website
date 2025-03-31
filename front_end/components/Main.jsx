import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {motion } from 'framer-motion';

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className=" flex flex-col md:flex-row max-w-[1240px] w-full h-full mx-auto p-2 justify-center items-center">
    <div className="flex items-center rounded-full justify-cente">
      <div className="relative size-40 md:size-full m-10 ">
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [1, 0.2, 0.6],
            boxShadow: [
              "0px 0px 15px #5651e5",
              "0px 0px 30px #5651e5",
              "0px 0px 15px #5651e5",
            ],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative w-full h-full rounded-full border-4 border-[#5651e5] overflow-hidden">
          <img
            src="/assets/me.png"
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </div>

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
            <div className=" rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-200" >
              <a href="https://www.linkedin.com/in/raman-singh-343b212b7/"  target="_blank" ><FaLinkedinIn size={25}  /></a> 
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-200">
              <a href="https://github.com/raman-Cz" target="_blank"><FaGithub size={25} /></a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-200">
              <a href="mailto:raman.singh.ug22@nsut.ac.in" target="_blank"> <AiOutlineMail size={25} /></a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-200">
              <a href="/assets/Current Resume.pdf" download="MyResume.pdf"><BsFillPersonLinesFill size={25} /></a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Main;
