import { useInView } from 'react-intersection-observer';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { motion } from "framer-motion";
import React from "react";

const About = () => {
  const { ref } = useInView({ threshold: 0.6 }); // you can still track inView for motion
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div
      id="about"
      ref={ref}
      className="relative w-full md:h-screen p-2 flex items-center py-16 overflow-hidden"
    >
      

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
        className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 relative z-10"
      >
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
  Hi, I'm Raman Singh, a <span className="font-semibold text-[#5651e5]">Full-Stack Developer</span> and <span className="font-semibold text-[#5651e5]">Machine Learning enthusiast</span>. I specialize in building <span className="font-semibold text-[#5651e5]">scalable web applications</span> and <span className="font-semibold text-[#5651e5]">real-time platforms</span> using technologies like React, Next.js, Node.js, TypeScript, and Python. My background in Electrical Engineering gives me a strong analytical foundation, which I combine with creative problem-solving to craft seamless digital experiences.
</p>

<p className="py-2 text-gray-600">
  Over the years, I've worked on diverse projects, from <span className="font-semibold text-[#5651e5]">social media and chat applications</span> to <span className="font-semibold text-[#5651e5]">video calling platforms</span> and <span className="font-semibold text-[#5651e5]">2D games</span>, implementing secure backend APIs, real-time communication, and database optimizations. My internship at the Centre for Railway Information Systems involved developing <span className="font-semibold text-[#5651e5]">predictive ML models</span> and building end-to-end data pipelines, enhancing operational efficiency through data-driven solutions.
</p>

<p className="py-2 text-gray-600">
  Beyond development, I am passionate about <span className="font-semibold text-[#5651e5]">competitive programming</span>, having solved hundreds of problems on LeetCode and Codeforces, which sharpens my algorithmic thinking. I also enjoy building and experimenting with my own projects on GitHub and continuously exploring new technologies to stay at the forefront of the software landscape. Whether it's coding, learning, or creating innovative applications, I strive to bring <span className="font-semibold text-[#5651e5]">efficiency and creativity</span> to every project I undertake.
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
