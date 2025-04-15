import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <motion.div  initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }} className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Hey there! I'm Raman Singh, a Full-Stack Developer & Problem Solver
            passionate about building scalable web applications and crafting
            seamless digital experiences. With a background in Electrical
            Engineering and a deep interest in software development, I bring a
            unique blend of analytical thinking and creative problem-solving to
            my work.
          </p>
          <p className="py-2 text-gray-600">
            Beyond coding, I love tackling competitive programming challenges,
            contributing to open-source projects, and continuously learning new
            technologies.
          </p>
          </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <img className="rounded-xl" src="/assets/about.jpg" alt="/" />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
