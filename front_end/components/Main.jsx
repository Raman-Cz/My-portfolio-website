"use client";
import React from "react";
import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiArrowDown, FiSend } from "react-icons/fi";
import MeImg from "../public/assets/me.png";
import ResumeModal from "./ResumeModal";

/* ═══════════════════════════════════════════════════════
   HERO — MASSIVE TYPOGRAPHY
   ═══════════════════════════════════════════════════════ */

const ROLES = ["SOFTWARE DEVELOPMENT ENGINEER", "FULLSTACK ENGINEER", "AI/ML ENTHUSIAST"];

const PREDEFINED_QA = [
  {
    keywords: ["hi", "hello", "hey", "sup"],
    answer: "Hello! I'm Raman's AI agent. Ask me about his skills, experience, or projects!"
  },
  {
    keywords: ["projects", "nyxia", "intervue", "chatty", "lightyears", "games"],
    answer: "Raman built Nyxia (Social Media), Intervue (WebRTC platform), Chatty, and LightYears (a C++ 2D game engine)!"
  },
  {
    keywords: ["skills", "tech", "stack", "languages", "know", "tools"],
    answer: "His stack includes React, Next.js, Node.js, TypeScript, C++, Python, and more. He loves system design & AI agents!"
  },
  {
    keywords: ["intern", "innovaccer", "experience", "work", "job", "role"],
    answer: "He is currently an SDE Intern at Innovaccer, working on full-stack development and complex architectures."
  },
  {
    keywords: ["contact", "hire", "email", "reach"],
    answer: "You can reach him at raman.singh.ug22@nsut.ac.in or connect on LinkedIn!"
  },
  {
    keywords: ["education", "nsut", "college", "university", "school", "cgpa"],
    answer: "He's currently studying at NSUT, keeping ~8.5 CGPA while exploring competitive programming and game dev."
  },
  {
    keywords: ["leetcode", "competitive", "cp", "rating", "dsa"],
    answer: "He has solved 500+ LeetCode problems and 300+ on Codeforces, developing deep algorithmic reasoning."
  }
];

function getBotResponse(text) {
  const lower = text.toLowerCase();
  for (const qa of PREDEFINED_QA) {
    if (qa.keywords.some((kw) => lower.includes(kw))) {
      return qa.answer;
    }
  }
  return "That's a great question! I'm just a simple AI, but you can email Raman directly to chat more about it.";
}

const Main = () => {
  const [roleIdx, setRoleIdx] = React.useState(0);
  const [showResume, setShowResume] = React.useState(false);

  // Chatbot State
  const [messages, setMessages] = React.useState([
    { role: "bot", text: "SYSTEM ONLINE. I am Raman's AI agent. Ask me anything about him!" }
  ]);
  const [inputValue, setInputValue] = React.useState("");
  const chatContainerRef = React.useRef(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setRoleIdx((p) => (p + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const userMessage = { role: "user", text: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    
    setTimeout(() => {
      const botMessage = { role: "bot", text: getBotResponse(userMessage.text) };
      setMessages((prev) => [...prev, botMessage]);
    }, 600);
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Decorative corner brackets */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-[4px] border-l-[4px] border-[var(--border)] hidden md:block" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-[4px] border-r-[4px] border-[var(--border)] hidden md:block" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-[4px] border-l-[4px] border-[var(--border)] hidden md:block" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-[4px] border-r-[4px] border-[var(--border)] hidden md:block" />

      {/* Main content — two-column grid */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-16 pt-32 pb-20">
       <div className="grid lg:grid-cols-5 gap-10 items-center">
        {/* Left — Text (3 cols) */}
        <div className="lg:col-span-3">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-tag">Available for Opportunities</span>
        </motion.div>

        {/* Main title */}
        <div className="mt-10">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="leading-[0.85]"
          >
            RAMAN
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="leading-[0.85] mt-2"
          >
            SINGH<span className="text-accent">.</span>
          </motion.h1>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full max-w-2xl h-[4px] bg-[var(--border)] mt-8 mb-6 origin-left"
        />

        {/* Role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="w-3 h-3 bg-[var(--accent)]" />
          <span
            className="text-lg sm:text-xl md:text-2xl font-mono font-semibold tracking-[0.15em] uppercase"
            style={{ color: "var(--text-muted)" }}
          >
            {ROLES[roleIdx]}
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-base sm:text-lg max-w-xl leading-relaxed mb-10"
          style={{ color: "var(--text-muted)" }}
        >
          I build scalable, real-time web applications and data-driven AI
          solutions. Blending frontend elegance with backend efficiency.
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a href="/#contact" className="brutalist-btn">
            Let's Talk →
          </a>
          <button
            onClick={() => setShowResume(true)}
            className="brutalist-btn-outline"
          >
            <BsFillPersonLinesFill size={14} />
            Resume
          </button>
        </motion.div>

        {/* Social row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="flex items-center gap-0 mt-12 border-3 border-[var(--border)] w-fit"
        >
          {[
            {
              href: "https://www.linkedin.com/in/raman-singh-343b212b7/",
              icon: <FaLinkedinIn size={16} />,
              label: "LinkedIn",
            },
            {
              href: "https://github.com/raman-Cz",
              icon: <FaGithub size={16} />,
              label: "GitHub",
            },
            {
              href: "mailto:raman.singh.ug22@nsut.ac.in",
              icon: <AiOutlineMail size={16} />,
              label: "Email",
            },
          ].map(({ href, icon, label }, i) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-2 px-5 py-3 text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text)] hover:bg-[var(--text)] hover:text-[var(--text-inverse)] transition-all ${
                i < 2 ? "border-r-3 border-[var(--border)]" : ""
              }`}
            >
              {icon}
              <span className="hidden sm:inline">{label}</span>
            </a>
          ))}
        </motion.div>
        </div>

        {/* Right — Photo & Chatbot (2 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-2 hidden lg:flex flex-col gap-6"
        >
          {/* Shrunk Image */}
          <div className="relative w-3/5 mx-auto">
            {/* Offset shadow */}
            <div
              className="absolute top-3 left-3 w-full h-full border-3 border-[var(--border)]"
              style={{ background: "var(--accent)", opacity: 0.15 }}
            />
            {/* Image frame */}
            <div className="relative border-3 border-[var(--border)] overflow-hidden aspect-[4/5]">
              <img
                src={MeImg.src}
                alt="Raman Singh"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Chatbot Interface */}
          <div className="brutalist-card bg-white flex flex-col h-[320px] relative overflow-hidden group">
            {/* Chatbot Header */}
            <div className="px-4 py-3 border-b-3 border-[var(--border)] bg-[var(--text)] text-[var(--text-inverse)] flex justify-between items-center">
              <span className="font-mono text-xs font-bold tracking-widest uppercase">Agent Console</span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest opacity-70">ONLINE</span>
              </span>
            </div>

            {/* Chat Messages */}
            <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 font-mono text-xs relative" style={{ scrollbarWidth: 'thin' }}>
              {messages.map((m, i) => (
                <div key={i} className={`flex max-w-[85%] ${m.role === "user" ? "self-end" : "self-start"}`}>
                  <div className={`p-3 border-2 border-[var(--border)] leading-relaxed ${m.role === "user" ? "bg-[var(--accent)] text-white shadow-[2px_2px_0_var(--border)]" : "bg-white text-black shadow-[2px_2px_0_var(--accent)]"}`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSend} className="border-t-3 border-[var(--border)] flex bg-white z-10">
              <input 
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="ASK ABOUT RAMAN..."
                className="flex-1 px-4 py-3 bg-transparent font-mono text-[10px] sm:text-xs uppercase tracking-wider outline-none placeholder-[var(--text-muted)] text-[var(--text)]"
              />
              <button 
                type="submit"
                className="px-4 border-l-3 border-[var(--border)] bg-[var(--text)] text-white hover:bg-[var(--accent)] transition-colors active:bg-white active:text-[var(--text)] flex items-center justify-center cursor-pointer"
              >
                <FiSend size={16} />
              </button>
            </form>
          </div>
        </motion.div>

       </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span
          className="text-[10px] uppercase tracking-[0.4em] font-mono font-semibold"
          style={{ color: "var(--text-muted)" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FiArrowDown size={18} style={{ color: "var(--text)" }} />
        </motion.div>
      </motion.div>

      {/* Large decorative number */}
      <div
        className="absolute -right-4 top-1/2 -translate-y-1/2 text-[20rem] font-bold leading-none pointer-events-none select-none hidden lg:block"
        style={{ color: "rgba(15, 23, 42, 0.04)" }}
      >
        01
      </div>

      <ResumeModal isOpen={showResume} onClose={() => setShowResume(false)} />
    </section>
  );
};

export default Main;
