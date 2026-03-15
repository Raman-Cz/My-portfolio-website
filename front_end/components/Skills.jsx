"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaPython,
} from "react-icons/fa";
import {
  SiNextdotjs, SiTailwindcss, SiPostgresql, SiMongodb,
  SiPrisma, SiSocketdotio, SiTypescript, SiExpress,
} from "react-icons/si";

/* ─── Skill Data ─────────────────────────────────────── */
const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "Python", icon: <FaPython /> },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Prisma", icon: <SiPrisma /> },
    ],
  },
  {
    category: "Real-Time",
    skills: [
      { name: "Socket.io", icon: <SiSocketdotio /> },
    ],
  },
];

const mindsetLines = [
  "I think in systems, not features.",
  "Every project starts with understanding the problem deeply.",
  "I optimize for developer experience and user delight.",
  "Clean architecture today saves debugging tomorrow.",
  "I'm always learning — currently exploring LLMs & MLOps.",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full py-28 px-6 overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-[1240px] mx-auto w-full relative z-10">
        {/* Section tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Engineering Mindset</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-6 mb-12"
        >
          How I<br />
          Think<span className="text-accent">.</span>
        </motion.h2>

        {/* Mindset text lines — staggered reveal */}
        <div className="max-w-3xl mb-20">
          {mindsetLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              viewport={{ once: true }}
              className="border-b-3 border-[var(--border)] py-4 flex items-start gap-4"
            >
              <span className="text-xs font-mono font-bold text-[var(--accent)] min-w-[2rem]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-base sm:text-lg font-medium leading-relaxed">
                {line}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <h3 className="mb-8">
            Tech Stack<span className="text-accent">.</span>
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: catIdx * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 border-3 border-[var(--border)] ${
                catIdx > 0 ? "border-l-0 sm:border-l-3 lg:border-l-0" : ""
              } ${catIdx >= 2 ? "border-t-0 lg:border-t-3" : ""} ${catIdx === 1 ? "border-t-0 sm:border-t-3" : ""}`}
            >
              <h4 className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-[var(--accent)] mb-5">
                {cat.category}
              </h4>
              <div className="flex flex-col gap-3">
                {cat.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{
                      x: 6,
                      backgroundColor: "var(--text)",
                      color: "var(--text-inverse)",
                    }}
                    className="flex items-center gap-3 px-3 py-2 border-2 border-[var(--border)] text-sm font-semibold cursor-default transition-all duration-150"
                  >
                    <span className="text-base">{skill.icon}</span>
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Large decorative number */}
      <div
        className="absolute -right-4 top-1/2 -translate-y-1/2 text-[20rem] font-bold leading-none pointer-events-none select-none hidden lg:block"
        style={{ color: "rgba(15, 23, 42, 0.04)" }}
      >
        04
      </div>

      <div className="brutalist-divider absolute bottom-0 left-0" />
    </section>
  );
}
