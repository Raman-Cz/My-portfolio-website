"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import ProjectItem from "./ProjectItem";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import NyxiaImg from "../public/assets/projectImages/NyxiaImg.png";
import IntervueImg from "../public/assets/projectImages/IntervueImg.png";
import RealtimeChatImg from "../public/assets/projectImages/RealtimeChatImg.png";
import AdminDashboardImg from "../public/assets/projectImages/AdminDashboardImg.png";
import AdvancedAuthImg from "../public/assets/projectImages/AdvancedAuthImg.png";
import ExpenseTrackerImg from "../public/assets/projectImages/ExpenseTrackerImg.png";
import XCloneImg from "../public/assets/projectImages/XCloneImg.png";
import SpotifyCloneImg from "../public/assets/projectImages/SpotifyCloneImg.png";

const projects = [
  {
    title: "Nyxia — Social Media App",
    backgroundImg: NyxiaImg,
    projectUrl: "https://nyxia-two.vercel.app/",
    info: "Social media with user auth, profile management, real-time likes/comments, image posts, and notifications system.",
    tags: ["Next.js", "Prisma", "Postgres", "Clerk"],
  },
  {
    title: "Intervue — Video Interviews",
    backgroundImg: IntervueImg,
    projectUrl: "https://interview-platform-1vqs.vercel.app/",
    info: "Virtual coding interview platform with video/audio calls, screen sharing, multi-language code editor, and recordings.",
    tags: ["Next.js", "Stream SDK", "TypeScript"],
  },
  {
    title: "Live Chat App",
    backgroundImg: RealtimeChatImg,
    projectUrl: "https://chatty-for-chatting.onrender.com",
    info: "Real-time chat app with authentication, instant text/image messaging, online/offline status.",
    tags: ["React", "Socket.io", "MongoDB"],
  },
  {
    title: "Admin Dashboard",
    backgroundImg: AdminDashboardImg,
    projectUrl: "https://admin-dashboard-lilac-two-83.vercel.app/",
    info: "Analytics dashboard with interactive charts, CRUD operations, data tables, and real-time updates.",
    tags: ["React", "Recharts", "Tailwind"],
  },
  {
    title: "Expense Tracker",
    backgroundImg: ExpenseTrackerImg,
    projectUrl: "https://expense-tracker-frontend-sage.vercel.app/",
    info: "Full-stack finance tracker with income/expense logs, Chart.js visualizations, and real-time insights.",
    tags: ["React", "MongoDB", "SCSS"],
  },
  {
    title: "Advanced Auth System",
    backgroundImg: AdvancedAuthImg,
    projectUrl: "https://advanced-authentication-53j9.onrender.com/",
    info: "Secure auth with JWT, email verification, password reset, and Mailtrap integration.",
    tags: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "X (Twitter) Clone",
    backgroundImg: XCloneImg,
    projectUrl: "https://x-clone-b8bm.onrender.com",
    info: "Full-featured Twitter clone with real-time posts, notifications, WebSockets, and Redux.",
    tags: ["React", "Redux", "WebSockets"],
  },
  {
    title: "Spotify Clone",
    backgroundImg: SpotifyCloneImg,
    projectUrl: "https://spotify-clone-z0hi.onrender.com",
    info: "Music streaming clone with real-time chat, admin dashboard, custom playback, and album management.",
    tags: ["React", "Node.js", "Socket.io"],
  },
];

const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const amount = 420;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projects"
      className="relative w-full py-28 overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="section-tag">
                Portfolio
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-6"
            >
              Selected<br />
              Work<span className="text-accent">.</span>
            </motion.h2>
          </div>

          {/* Scroll arrows */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex gap-0"
          >
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 border-3 border-[var(--border)] text-[var(--text)] flex items-center justify-center hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-white transition-all"
            >
              <FiArrowLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 border-3 border-[var(--border)] border-l-0 text-[var(--text)] flex items-center justify-center hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-white transition-all"
            >
              <FiArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-6 px-6 md:px-16 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((p, i) => (
          <ProjectItem key={p.title} {...p} index={i} />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 mt-6">
        <p className="text-[10px] uppercase tracking-[0.4em] font-mono text-[var(--text-muted)]">
          ← Scroll horizontally to see more →
        </p>
      </div>

      {/* Large decorative number */}
      <div
        className="absolute -right-4 top-1/2 -translate-y-1/2 text-[20rem] font-bold leading-none pointer-events-none select-none hidden lg:block"
        style={{ color: "rgba(15, 23, 42, 0.04)" }}
      >
        03
      </div>
    </section>
  );
};

export default Projects;
