"use client";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const buttonModifier = `
  relative overflow-hidden
  px-10 py-4 font-bold uppercase tracking-wider text-white
  bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0f172a]
  rounded-full
  hover:shadow-[0_0_25px_rgba(30,64,175,0.9),0_0_50px_rgba(59,130,246,1)]
  hover:scale-105 active:scale-95
  transition-all duration-200 ease-out
  before:content-[''] before:absolute before:top-0 before:left-[-75%]
  before:w-[50%] before:h-full
  before:bg-gradient-to-br before:from-transparent before:via-white before:to-transparent
  before:opacity-80 before:skew-x-[-20deg]
  hover:before:animate-[shine_0.5s_linear]
`;

const Main = () => {
  return (
    <div id="home" className="relative w-full h-screen text-center bg-white overflow-hidden">
      
      {/* Floating background shapes */}
      <motion.div
        className="absolute w-64 h-64 bg-blue-600/30 rounded-full top-20 left-10"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.1 }}
      />
      <motion.div
        className="absolute w-48 h-48 bg-blue-600/50 rounded-full bottom-10 right-20"
        animate={{ y: [0, -20, 0], x: [0, -15, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.1 }}
      />
      <motion.svg
        className="absolute top-1/4 left-3/4 w-50 h-50 opacity-90"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.1, rotate: 10 }}
      >
        <polygon points="10,0 20,20 0,20" fill="#3b82f6" />
      </motion.svg>

      {/* Main content */}
      <div className="relative z-10 flex flex-col md:flex-row max-w-[1240px] w-full h-full mx-auto p-4 justify-center items-center">

        {/* Profile Image Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative m-6 sm:m-8 md:m-10 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72"
        >
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 0.2, 0.6],
              boxShadow: [
                "0px 0px 15px rgba(30,64,175,0.8)",
                "0px 0px 30px rgba(59,130,246,1)",
                "0px 0px 15px rgba(30,64,175,0.8)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative w-full h-full rounded-full border-0 border-[#1e3a8a] overflow-hidden">
            <img
              src="/assets/me.png"
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center max-w-[95%] sm:max-w-[90%] md:max-w-[60%]"
        >
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET'S BUILD SOMETHING TOGETHER
          </p>

          <h1 className="py-4 text-gray-700 text-3xl sm:text-4xl md:text-5xl font-bold">
            Hey there, I'm{" "}
            <span className="bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0f172a] bg-clip-text text-transparent">
              Raman
            </span>
          </h1>

          <h2 className="py-2 text-gray-700 text-xl sm:text-2xl md:text-3xl font-semibold break-words">
            <Typewriter
              words={['Full-Stack Developer', 'Game Developer', 'AI/ML Enthusiast']}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={20}
              delaySpeed={2000}
            />
          </h2>

          <p className="py-4 text-gray-600 text-sm sm:text-md md:text-md max-w-[90%] sm:max-w-[80%] mx-auto">
            I’m Raman Singh, a Full-Stack Developer and Machine Learning enthusiast with a passion for building scalable, real-time web applications and data-driven solutions. I specialize in JavaScript, TypeScript, React, Next.js, Node.js, and Python, blending frontend elegance with backend efficiency. From crafting interactive UIs and implementing secure REST APIs to developing predictive ML models and real-time communication platforms, I thrive on turning complex ideas into seamless digital experiences.
          </p>

          {/* Social Icons */}
          <div className="flex flex-wrap items-center justify-center gap-5 py-4">
            <a href="https://www.linkedin.com/in/raman-singh-343b212b7/" target="_blank" className={buttonModifier}>
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://github.com/raman-Cz" target="_blank" className={buttonModifier}>
              <FaGithub size={20} />
            </a>
            <a href="mailto:raman.singh.ug22@nsut.ac.in" target="_blank" className={buttonModifier}>
              <AiOutlineMail size={20} />
            </a>
            <a href="/assets/Resume1.pdf" download="MyResume.pdf" className={buttonModifier}>
              <BsFillPersonLinesFill size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
