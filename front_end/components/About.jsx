"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import {
  FaReact, FaNodeJs, FaPython,
} from "react-icons/fa";
import {
  SiNextdotjs, SiTailwindcss, SiPostgresql, SiMongodb,
  SiPrisma, SiSocketdotio, SiTypescript, SiExpress,
} from "react-icons/si";

/* ─── Skills Data ─────────────────────────────────── */
const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
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
    category: "Data",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Prisma", icon: <SiPrisma /> },
      { name: "Socket.io", icon: <SiSocketdotio /> },
    ],
  },
];

/* ─── Animated Counter ──────────────────────────────── */
const Counter = ({ value, duration = 1.5 }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!value) return;
    const end = parseInt(value);
    if (isNaN(end)) return;
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [value, duration]);
  return <>{count}</>;
};

/* ─── Difficulty Bar ────────────────────────────────── */
const DiffBar = ({ label, solved, total, color }) => {
  const pct = total > 0 ? (solved / total) * 100 : 0;
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em]">
          {label}
        </span>
        <span className="text-[10px] font-mono font-semibold" style={{ color }}>
          {solved}/{total}
        </span>
      </div>
      <div className="w-full h-[5px] bg-white/10 border border-white/20">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-full"
          style={{ background: color }}
        />
      </div>
    </div>
  );
};

const wordReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: "easeOut" },
  }),
};

const About = () => {
  const statement =
    "I build scalable web applications and AI systems that solve real problems.";
  const words = statement.split(" ");

  const [lc, setLc] = useState(null);
  useEffect(() => {
    fetch("/api/leetcode")
      .then((r) => r.json())
      .then((d) => { if (!d.error) setLc(d); })
      .catch(() => {});
  }, []);

  const solved = lc?.solved || { total: 0, easy: 0, medium: 0, hard: 0 };
  const totals = lc?.totalQuestions || { easy: 932, medium: 2026, hard: 915 };
  const contest = lc?.contest;

  return (
    <section
      id="about"
      className="relative w-full py-28 px-6 overflow-hidden section-dark"
    >
      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        {/* Section tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="section-tag" style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>About Me</span>
        </motion.div>

        {/* Main heading */}
        <div className="mt-10 mb-14 max-w-3xl" style={{ color: "var(--text-inverse)" }}>
          <h2 className="leading-tight">
            {words.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="inline-block mr-[0.35em]"
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </div>

        {/* ─── Three-column layout: About | Skills | LeetCode ─── */}
        <div className="grid lg:grid-cols-6 gap-0">
          {/* Left — Bio (3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3 border-3 border-white/20 p-8"
          >
            <div className="border-l-[4px] border-[var(--accent)] pl-6 mb-8">
              <p className="text-base leading-relaxed text-white/70">
                Hi, I&apos;m <strong className="text-[var(--text-inverse)]">Raman Singh</strong>, a{" "}
                <strong className="text-[var(--accent)]">Full-Stack Developer</strong> and{" "}
                <strong className="text-[var(--accent-2)]">ML Enthusiast</strong>.
                I specialize in building scalable web applications and real-time platforms
                using React, Next.js, Node.js, TypeScript, and Python.
              </p>
            </div>

            <div className="border-l-[4px] border-white/20 pl-6 mb-8">
              <p className="text-base leading-relaxed text-white/70">
                My internship at <strong className="text-[var(--text-inverse)]">CRIS</strong> (Ministry
                of Railways) involved developing predictive ML models and end-to-end data
                pipelines. Currently an <strong className="text-[var(--accent)]">SDE Intern at Innovaccer</strong>.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-0 border-3 border-white/20">
              {[
                { label: "Projects", value: "10+" },
                { label: "Technologies", value: "15+" },
                { label: "Internships", value: "2" },
              ].map(({ label, value }, i) => (
                <motion.div
                  key={label}
                  whileHover={{ backgroundColor: "var(--accent)" }}
                  className={`p-4 text-center cursor-default group transition-all duration-200 ${
                    i < 2 ? "border-r-3 border-white/20" : ""
                  }`}
                >
                  <p className="text-2xl sm:text-3xl font-bold mb-0.5 text-[var(--text-inverse)] group-hover:text-[var(--text-inverse)] transition-colors">
                    {value}
                  </p>
                  <p className="text-[8px] uppercase tracking-[0.3em] font-mono font-semibold text-white/40 group-hover:text-[var(--text-inverse)] transition-colors">
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Middle — Tech Stack (1.5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:col-span-1 border-3 border-white/20 lg:border-l-0"
            id="skills"
          >
            <div className="p-4 border-b-3 border-white/20">
              <h4 className="text-sm font-bold uppercase" style={{ color: "var(--text-inverse)" }}>
                Stack<span className="text-accent">.</span>
              </h4>
            </div>
            <div className="divide-y-[2px] divide-white/15">
              {skillCategories.map((cat) => (
                <div key={cat.category} className="p-3">
                  <p className="text-[8px] font-mono font-bold uppercase tracking-[0.25em] text-[var(--accent)] mb-2">
                    {cat.category}
                  </p>
                  <div className="flex flex-col gap-1.5">
                    {cat.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ x: 3, backgroundColor: "var(--accent)", color: "var(--text-inverse)" }}
                        className="flex items-center gap-2 px-2 py-1.5 border border-white/20 text-xs font-semibold text-[var(--text-inverse)] cursor-default transition-all duration-150"
                      >
                        <span className="text-xs opacity-70">{skill.icon}</span>
                        {skill.name}
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — LeetCode Stats (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 border-3 border-white/20 lg:border-l-0 flex flex-col"
          >
            <div className="p-4 border-b-3 border-white/20">
              <h4 className="text-sm font-bold uppercase" style={{ color: "var(--text-inverse)" }}>
                LeetCode<span className="text-accent">.</span>
              </h4>
            </div>

            {/* Big number */}
            <div className="p-6 border-b-3 border-white/10 text-center">
              <p className="text-5xl sm:text-6xl font-bold leading-none text-[var(--text-inverse)]">
                {lc ? <Counter value={solved.total} /> : <span className="text-2xl text-white/30">...</span>}
              </p>
              <p className="text-[9px] font-mono text-white/40 mt-1 uppercase tracking-wider">
                Problems Solved
              </p>
            </div>

            {/* Difficulty bars */}
            <div className="p-5 border-b-3 border-white/10">
              <DiffBar label="Easy" solved={solved.easy} total={totals.easy} color="#22C55E" />
              <DiffBar label="Medium" solved={solved.medium} total={totals.medium} color="#F59E0B" />
              <DiffBar label="Hard" solved={solved.hard} total={totals.hard} color="#EF4444" />
            </div>

            {/* Contest rating */}
            {contest && (
              <div className="p-5 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[9px] font-mono font-bold uppercase tracking-[0.25em] text-[var(--accent-2)] mb-1">
                    Current Rating
                  </p>
                  <p className="text-3xl font-bold text-[var(--text-inverse)]">
                    <Counter value={contest.rating} />
                  </p>
                  <p className="text-[10px] font-mono text-white/40 mt-1">
                    Top {contest.topPercentage}%
                  </p>
                </div>
                <div>
                  <p className="text-[9px] font-mono font-bold uppercase tracking-[0.25em] text-[var(--accent)] mb-1">
                    Peak Rating
                  </p>
                  <p className="text-3xl font-bold text-[var(--text-inverse)]">
                    {contest.highestRating || <Counter value={contest.rating} />}
                  </p>
                  <p className="text-[10px] font-mono text-white/40 mt-1">
                    {contest.attended} contests
                  </p>
                </div>
              </div>
            )}

            {/* Profile link */}
            <div className="mt-auto p-4 border-t-3 border-white/10">
              <a
                href="https://leetcode.com/u/raman04/"
                target="_blank"
                rel="noreferrer"
                className="text-[10px] uppercase tracking-[0.2em] font-mono font-bold text-[var(--accent)] hover:text-[var(--text-inverse)] transition-colors"
              >
                View LeetCode Profile ↗
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Large decorative number */}
      <div
        className="absolute -right-4 top-1/2 -translate-y-1/2 text-[20rem] font-bold leading-none pointer-events-none select-none hidden lg:block"
        style={{ color: "rgba(253, 251, 247, 0.03)" }}
      >
        04
      </div>

      <div className="brutalist-divider absolute bottom-0 left-0" />
    </section>
  );
};

export default About;
