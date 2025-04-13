import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiNextdotjs, SiExpress } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black-400" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
];

export default function SkillsShowcase() {
  return (
    <div id="skills" className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-6 relative overflow-hidden">
      
      
      <h2 className="text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 drop-shadow-lg">
        My Tech Stack
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-5xl">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.2,
              rotate: 720,
              transition: { duration: 0.1, ease:"circOut" }
            }}
            whileTap={{
              scale: 0.9,
              transition: { duration: 0.1 } 
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.1 }}
            className="relative group flex flex-col items-center p-8 bg-white/10 backdrop-blur-lg shadow-lg rounded-3xl border border-white/20 hover:border-white/40 transition duration-300"
          >
            <div className="text-6xl mb-4 transition-all group-hover:scale-110 group-hover:rotate-6 drop-shadow-md">
              {skill.icon}
            </div>
            <p className="text-xl font-semibold tracking-wide text-gray-800 group-hover:text-black transition">
              {skill.name}
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-[#9B4DFF]  to-[#4D96FF] opacity-0 group-hover:opacity-50 transition-all rounded-3xl"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
