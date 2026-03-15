"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const chapters = [
  {
    num: "01",
    period: "Academic",
    title: "Foundation & Excellence",
    description: "94.8% (10th) & 96.2% (12th). 96 percentile in JEE Mains. Built a strong foundation in logic and mathematics.",
    accent: "var(--accent)",
    chips: ["Math", "Logic", "Consistency"],
  },
  {
    num: "02",
    period: "NSUT",
    title: "University Beginnings",
    description: "Started C++ and Python. Dove deep into data structures, algorithms, and daily problem-solving at Netaji Subhas University of Technology.",
    accent: "var(--text)",
    chips: ["C++", "Python", "DSA"],
  },
  {
    num: "03",
    period: "LeetCode",
    title: "Competitive Programming",
    description: "500+ LeetCode problems (DP, graphs, greedy). 300+ Codeforces. Developed deep algorithmic reasoning and optimized debugging skills.",
    accent: "#22C55E",
    chips: ["DP", "Graphs", "Greedy"],
  },
  {
    num: "04",
    period: "Dev",
    title: "Software Engineering",
    description: "Transitioned to building real systems. Mastered React, Next.js, TypeScript, Node.js, and complex database architectures.",
    accent: "var(--bg)",
    chips: ["React", "Next.js", "TypeScript"],
  },
  {
    num: "05",
    period: "Projects",
    title: "Major Architectures",
    description: "Built Nyxia (Social Media), Intervue (WebRTC coding platform), Chatty (Socket.io), and LightYears (C++ 2D Engine).",
    accent: "var(--accent-2)",
    chips: ["Systems", "Realtime", "Shipping"],
  },
  {
    num: "06",
    period: "CRIS",
    title: "Machine Learning Intern",
    description: "Centre for Railway Information Systems. Engineered predictive pipelines and regression models with RMSE ~2.7 on railway datasets.",
    accent: "var(--accent)",
    chips: ["Pipelines", "Regression", "RMSE 2.7"],
  },
  {
    num: "07",
    period: "Lead",
    title: "Community Leadership",
    description: "Co-Head of IGTS Game Development. Mentored peers, collaborated on tech initiatives, maintaining ~8.5 CGPA.",
    accent: "var(--text)",
    chips: ["Mentoring", "Collaboration", "Leadership"],
  },
  {
    num: "08",
    period: "Now",
    title: "SDE Intern\n@ Innovaccer",
    description: "Current Role. Full-stack dev, TypeScript, system design, agentic AI, and cybersecurity training. 300+ hours of technical coursework.",
    accent: "var(--accent-2)",
    chips: ["Full-stack", "System Design", "Agentic AI"],
    current: true,
  },
];

function clamp(num, min, max) {
  return Math.max(min, Math.min(max, num));
}

export default function Timeline() {
  const reduceMotion = useReducedMotion();
  const trackRef = React.useRef(null);
  const cardRefs = React.useRef([]);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [scrubValue, setScrubValue] = React.useState(0);
  const [hoverIndex, setHoverIndex] = React.useState(null);

  const liveIndex = hoverIndex ?? activeIndex;
  const active = chapters[liveIndex] ?? chapters[0];
  const progressPct =
    chapters.length <= 1 ? 0 : (liveIndex / (chapters.length - 1)) * 100;

  const scrollTo = React.useCallback(
    (idx) => {
      const next = clamp(idx, 0, chapters.length - 1);
      setScrubValue(next);
      const el = cardRefs.current[next];
      if (!el) return;
      el.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        inline: "center",
        block: "nearest",
      });
    },
    [reduceMotion]
  );

  React.useEffect(() => {
    const track = trackRef.current;
    const nodes = cardRefs.current.filter(Boolean);
    if (!track || !nodes.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        let best = null;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          if (!best || entry.intersectionRatio > best.intersectionRatio) best = entry;
        }
        if (!best) return;
        const idx = Number(best.target.getAttribute("data-journey-index"));
        if (!Number.isFinite(idx)) return;
        setActiveIndex((prev) => (prev === idx ? prev : idx));
        setScrubValue((prev) => (prev === idx ? prev : idx));
      },
      {
        root: track,
        threshold: [0.35, 0.55, 0.75],
        rootMargin: "0px -20% 0px -20%",
      }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="timeline"
      className="relative w-full overflow-hidden section-dark border-y-[4px] border-[var(--border)]"
    >
      <div className="journey-bg absolute inset-0 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-16 py-16 space-y-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <span className="inline-block border-2 border-[var(--border)] bg-[var(--text)] text-[var(--accent)] text-[10px] font-mono font-bold uppercase px-3 py-1 tracking-[0.25em] shadow-brutal-sm">
              Journey Logging
            </span>
            <div className="flex items-center gap-4 mt-3">
              <div className="journey-flag" aria-hidden="true" />
              <h2 className="text-4xl sm:text-6xl font-bold uppercase leading-[0.85] tracking-tight text-[var(--text-inverse)]">
                Brutal Storyrail
                <br />
                <span className="text-[var(--accent)] decoration-accent text-[0.8em]">Drag • Scroll • Feel</span>
              </h2>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-mono text-white/50 max-w-sm lg:text-right uppercase tracking-[0.2em] leading-relaxed"
          >
            A rolling comic strip of your path. Horizontal scroll snaps. Scrub or arrow through chapters; hover for accent glow.
          </motion.p>
        </div>

        <div className="journey-halo brutalist-card bg-[var(--bg)] text-[var(--text)] p-5 sm:p-6 opacity-90">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="journey-nav-btn"
                onClick={() => scrollTo(activeIndex - 1)}
                disabled={activeIndex === 0}
                aria-label="Previous chapter"
              >
                Prev
              </button>
              <button
                type="button"
                className="journey-nav-btn"
                onClick={() => scrollTo(activeIndex + 1)}
                disabled={activeIndex === chapters.length - 1}
                aria-label="Next chapter"
              >
                Next
              </button>
            </div>

            <div className="flex-1">
              <input
                type="range"
                min={0}
                max={chapters.length - 1}
                value={scrubValue}
                onChange={(e) => scrollTo(Number(e.target.value))}
                className="journey-slider"
                aria-label="Scrub through chapters"
              />
            </div>

            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
              {String(liveIndex + 1).padStart(2, "0")} / {String(chapters.length).padStart(2, "0")}
            </div>
          </div>

          <div className="journey-progress mt-5" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progressPct)}>
            <div className="journey-progress__fill" style={{ width: `${progressPct}%` }} />
          </div>

          <div className="mt-4 flex items-center gap-3 flex-wrap text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--text-muted)]">
            <span className="journey-bullet" /> Scroll / Drag / Arrow keys
            <span className="journey-bullet" /> Snap at each chapter
            <span className="journey-bullet" /> Hover = preview glow
          </div>
        </div>

        <div
          ref={trackRef}
          className="journey-track"
          aria-label="Journey chapters track"
        >
          {chapters.map((c, i) => (
            <motion.article
              key={c.num}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              data-journey-index={i}
              data-active={i === activeIndex ? "true" : "false"}
              className="journey-card brutalist-card transition-colors duration-300"
              style={{ "--j-accent": c.accent }}
              whileHover={{ 
                y: reduceMotion ? 0 : -6,
                boxShadow: "var(--shadow-lg), 0 0 25px -5px var(--j-accent)"
              }}
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className="journey-card__head">
                <div className="journey-pill">
                  <span className="journey-dot" aria-hidden="true" />
                  Phase {c.num}
                </div>
                <span className="journey-mini">{c.period}</span>
                {c.current ? <span className="journey-live">Active</span> : null}
              </div>

              <h3 className="journey-title">{c.title}</h3>
              <p className="journey-body">{c.description}</p>

              <div className="journey-taglist">
                {(c.chips ?? []).map((chip) => (
                  <span key={chip} className="journey-chip">
                    {chip}
                  </span>
                ))}
              </div>

              <div className="journey-card__footer">
                <button
                  type="button"
                  className="journey-jump font-mono"
                  onClick={() => scrollTo(i)}
                  aria-label={`Focus chapter ${c.num}`}
                >
                  Focus
                </button>
                <div className="journey-stamp group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                  {c.num}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="journey-marquee" aria-hidden="true">
          {chapters.map((c) => (
            <span key={c.num} className="journey-marquee__item">
              {c.period} — {c.title}
            </span>
          ))}
        </div>
      </div>

      <div className="journey-word absolute left-1/2 -translate-x-1/2 bottom-[-10vw] pointer-events-none select-none" aria-hidden="true">
        JOURNEY
      </div>
    </section>
  );
}
