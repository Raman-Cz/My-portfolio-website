"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/",          label: "Home" },
  { href: "/#timeline", label: "Journey" },
  { href: "/#projects", label: "Work" },
  { href: "/#about",    label: "About" },
  { href: "/#contact",  label: "Contact" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed w-full z-[100] transition-all duration-300 ${
          scrolled
            ? "py-2 bg-[var(--bg)] border-b-[3px] border-[var(--border)]"
            : "py-4 bg-[var(--bg)]"
        }`}
      >
        <div className="flex justify-between items-center max-w-[1400px] mx-auto px-6 md:px-16">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative w-[42px] h-[42px] border-3 border-[var(--border)] overflow-hidden transition-all group-hover:shadow-brutal-sm">
              <Image
                src="/assets/navLogo.jpg"
                alt="Logo"
                width={42}
                height={42}
                className="object-cover"
              />
            </div>
            <span className="hidden md:block text-sm font-bold tracking-[0.3em] uppercase font-mono text-[var(--text)]">
              Raman
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-0">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href}>
                <li className="px-4 py-2 text-xs uppercase tracking-[0.2em] font-mono font-semibold text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200 cursor-pointer border-r-[2px] border-[var(--border)] last:border-r-0">
                  {label}
                </li>
              </Link>
            ))}
            <Link href="/assets/Resume1.pdf" download="Raman_Resume.pdf">
              <motion.button
                whileHover={{ x: -2, y: -2 }}
                whileTap={{ x: 3, y: 3 }}
                className="ml-4 brutalist-btn text-[10px]"
              >
                Resume ↗
              </motion.button>
            </Link>
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setNav(true)}
            className="md:hidden p-2 border-3 border-[var(--border)] bg-transparent text-[var(--text)] hover:bg-[var(--text)] hover:text-[var(--text-inverse)] transition-all"
          >
            <AiOutlineMenu size={20} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {nav && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setNav(false)}
              className="fixed inset-0 bg-black/60 z-[150]"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 w-[80%] sm:w-[55%] h-screen z-[200] p-8 flex flex-col bg-[var(--bg-dark)] border-r-[4px] border-[var(--accent)]"
            >
              <div className="flex justify-between items-center mb-16">
                <span className="text-xl font-bold tracking-[0.3em] uppercase font-mono text-[var(--text-inverse)]">
                  Raman
                </span>
                <button
                  onClick={() => setNav(false)}
                  className="p-2 border-3 border-[var(--text-inverse)] text-[var(--text-inverse)] hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-all"
                >
                  <AiOutlineClose size={18} />
                </button>
              </div>
              <ul className="flex flex-col gap-0">
                {navLinks.map(({ href, label }, i) => (
                  <motion.li
                    key={href}
                    initial={{ x: -40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.07 + 0.1 }}
                    onClick={() => setNav(false)}
                    className="border-b-[2px] border-white/20"
                  >
                    <Link
                      href={href}
                      className="block px-0 py-4 text-lg uppercase tracking-[0.3em] font-bold text-[var(--text-inverse)] hover:text-[var(--accent)] transition-all"
                    >
                      {label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto pt-8 border-t-[3px] border-white/20">
                <p className="text-xs text-white/50 uppercase tracking-[0.3em] font-mono mb-4">
                  Connect
                </p>
                <div className="flex gap-3">
                  {[
                    { href: "https://github.com/raman-Cz", label: "GH" },
                    { href: "https://www.linkedin.com/in/raman-singh-343b212b7/", label: "LI" },
                  ].map(({ href, label }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 border-3 border-[var(--text-inverse)] flex items-center justify-center text-xs font-bold text-[var(--text-inverse)] hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-all font-mono"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;