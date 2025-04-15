"use client";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import {Typewriter} from "react-simple-typewriter";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center bg-white">
      <div className="flex flex-col md:flex-row max-w-[1240px] w-full h-full mx-auto p-4 justify-center items-center">
        {/* Profile Image Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative m-10"
        >
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 0.2, 0.6],
              boxShadow: [
                "0px 0px 15px #5651e5",
                "0px 0px 30px #5651e5",
                "0px 0px 15px #5651e5",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative rounded-full border-4 border-[#5651e5] overflow-hidden">
            <img
              src="/assets/me.png"
              alt="Profile"
              className="object-cover rounded-full"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET'S BUILD SOMETHING TOGETHER
          </p>

          <h1 className="py-4 text-gray-700 text-4xl md:text-5xl font-bold">
            Hey there, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Raman
            </span>
          </h1>

          <h2 className="py-2 text-gray-700 text-2xl md:text-3xl font-semibold min-h-[60px]">
          <Typewriter
          words={['Full-Stack Developer', 'Game Developer', 'AI/ML Enthusiast']}
          loop={Infinity}
          cursor
          cursorStyle='|'
          typeSpeed={70}
          deleteSpeed={20}
          delaySpeed={2000}
        />
          </h2>

          <p className="py-4 text-gray-600 max-w-[80%] mx-auto text-md">
            I specialize in JavaScript, React, Next.js, Node.js, and more,
            blending frontend elegance with backend power. Whether it's
            designing interactive UIs, optimizing databases, or implementing
            AI-driven features, I love bringing ideas to life through code.
          </p>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-6 py-6">
            <a
              href="https://www.linkedin.com/in/raman-singh-343b212b7/"
              target="_blank"
              className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 transition"
            >
              <FaLinkedinIn size={22} />
            </a>
            <a
              href="https://github.com/raman-Cz"
              target="_blank"
              className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 transition"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="mailto:raman.singh.ug22@nsut.ac.in"
              target="_blank"
              className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 transition"
            >
              <AiOutlineMail size={22} />
            </a>
            <a
              href="/assets/Current Resume.pdf"
              download="MyResume.pdf"
              className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 transition"
            >
              <BsFillPersonLinesFill size={22} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
