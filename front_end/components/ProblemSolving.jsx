"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

/* ─── Animated Counter ──────────────────────────────── */
const Counter = ({ value, duration = 1.5 }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!value) return;
    let start = 0;
    const end = parseInt(value);
    if (isNaN(end)) return;
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
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs font-mono font-bold uppercase tracking-[0.2em]">
          {label}
        </span>
        <span className="text-xs font-mono font-semibold" style={{ color }}>
          {solved}/{total}
        </span>
      </div>
      <div className="w-full h-[6px] bg-white/10 border border-white/20">
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

export default function ProblemSolving() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/leetcode")
      .then((r) => r.json())
      .then((d) => {
        if (!d.error) setData(d);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  // Fallback values if API is slow
  const solved = data?.solved || { total: 0, easy: 0, medium: 0, hard: 0 };
  const totals = data?.totalQuestions || { easy: 932, medium: 2026, hard: 915 };
  const contest = data?.contest;
  const ranking = data?.ranking;

  return (
    <section
      id="problem-solving"
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
          <span className="section-tag">Competitive Programming</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-6 mb-14"
        >
          Problem<br />
          Solving<span className="text-accent">.</span>
        </motion.h2>

        {/* Main grid: stats left, breakdown right */}
        <div className="grid lg:grid-cols-3 gap-0">
          {/* Left — Big Numbers (1 col) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1 border-3 border-[var(--border)] section-dark p-8 flex flex-col justify-between"
          >
            {/* Total solved */}
            <div className="mb-8">
              <p className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[var(--accent)] mb-2">
                Problems Solved
              </p>
              <p className="text-7xl sm:text-8xl font-bold leading-none text-[var(--text-inverse)]">
                {loading ? (
                  <span className="text-4xl text-white/30">...</span>
                ) : (
                  <Counter value={solved.total} />
                )}
              </p>
              <p className="text-xs font-mono text-white/40 mt-2 uppercase tracking-wider">
                On LeetCode
              </p>
            </div>

            {/* Contest Rating */}
            {contest && (
              <div className="mb-8">
                <p className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[var(--accent-2)] mb-2">
                  Contest Rating
                </p>
                <p className="text-5xl sm:text-6xl font-bold leading-none text-[var(--text-inverse)]">
                  <Counter value={contest.rating} />
                </p>
                <p className="text-xs font-mono text-white/40 mt-2 uppercase tracking-wider">
                  Top {contest.topPercentage}% · {contest.attended} Contests
                </p>
              </div>
            )}

            {/* Global ranking */}
            {ranking && (
              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-white/50 mb-2">
                  Global Ranking
                </p>
                <p className="text-3xl font-bold leading-none text-[var(--text-inverse)]">
                  #{ranking.toLocaleString()}
                </p>
              </div>
            )}

            {/* LC link */}
            <a
              href="https://leetcode.com/u/raman04/"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-mono font-bold text-[var(--accent)] hover:text-[var(--text-inverse)] transition-colors"
            >
              View Profile ↗
            </a>
          </motion.div>

          {/* Right — Difficulty Breakdown + Topics (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:col-span-2 border-3 border-[var(--border)] lg:border-l-0"
          >
            {/* Difficulty breakdown */}
            <div className="p-8 border-b-3 border-[var(--border)]">
              <h3 className="text-lg mb-6">
                Difficulty Breakdown<span className="text-accent">.</span>
              </h3>

              {loading ? (
                <p className="text-sm text-[var(--text-muted)] font-mono">
                  Fetching live stats from LeetCode...
                </p>
              ) : (
                <>
                  <DiffBar
                    label="Easy"
                    solved={solved.easy}
                    total={totals.easy}
                    color="#22C55E"
                  />
                  <DiffBar
                    label="Medium"
                    solved={solved.medium}
                    total={totals.medium}
                    color="#F59E0B"
                  />
                  <DiffBar
                    label="Hard"
                    solved={solved.hard}
                    total={totals.hard}
                    color="#EF4444"
                  />
                </>
              )}
            </div>

            {/* Key topics */}
            <div className="p-8 border-b-3 border-[var(--border)]">
              <h4 className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-[var(--accent)] mb-5">
                Core Topics
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Dynamic Programming",
                  "Graphs & BFS/DFS",
                  "Binary Search",
                  "Greedy Algorithms",
                  "Trees & BST",
                  "Backtracking",
                  "Bit Manipulation",
                  "Sliding Window",
                  "Two Pointers",
                  "Stack & Queue",
                  "Hashing",
                  "Linked Lists",
                ].map((topic) => (
                  <span key={topic} className="tag-chip">
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Recent contests */}
            {data?.recentContests?.length > 0 && (
              <div className="p-8">
                <h4 className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-[var(--accent)] mb-5">
                  Recent Contests
                </h4>
                <div className="space-y-0">
                  {data.recentContests.map((c, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-between py-3 ${
                        i < data.recentContests.length - 1
                          ? "border-b-2 border-[var(--border)]"
                          : ""
                      }`}
                    >
                      <span className="text-sm font-semibold truncate max-w-[60%]">
                        {c.title}
                      </span>
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-mono text-[var(--text-muted)]">
                          #{c.ranking}
                        </span>
                        <span className="text-sm font-bold font-mono text-[var(--accent)]">
                          {c.rating}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Extra stat chips at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-0 border-3 border-[var(--border)]"
        >
          {[
            { label: "LeetCode", value: `${solved.total}+ Solved` },
            { label: "Codeforces", value: "300+ Solved" },
            { label: "Contests", value: `${contest?.attended || 20}+ Attended` },
            { label: "Platforms", value: "LC · CF · GFG" },
          ].map(({ label, value }, i) => (
            <motion.div
              key={label}
              whileHover={{
                backgroundColor: "var(--text)",
                color: "var(--text-inverse)",
              }}
              className={`p-5 text-center cursor-default group transition-all duration-200 ${
                i < 3 ? "border-r-0 md:border-r-3 border-[var(--border)]" : ""
              } ${i < 2 ? "border-b-3 md:border-b-0 border-[var(--border)]" : ""} ${i === 2 ? "border-b-3 md:border-b-0 border-[var(--border)]" : ""}`}
            >
              <p className="text-lg sm:text-xl font-bold mb-0.5 group-hover:text-[var(--accent)] transition-colors">
                {value}
              </p>
              <p className="text-[9px] uppercase tracking-[0.3em] font-mono font-semibold text-[var(--text-muted)] group-hover:text-[var(--text-inverse)] transition-colors">
                {label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Large decorative number */}
      <div
        className="absolute -left-4 top-1/2 -translate-y-1/2 text-[20rem] font-bold leading-none pointer-events-none select-none hidden lg:block"
        style={{ color: "rgba(15, 23, 42, 0.04)" }}
      >
        03
      </div>

      <div className="brutalist-divider absolute bottom-0 left-0" />
    </section>
  );
}
