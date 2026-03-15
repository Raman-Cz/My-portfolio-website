"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { motion } from "framer-motion";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/raman-singh-343b212b7/",
    icon: <FaLinkedinIn size={20} />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/raman-Cz",
    icon: <FaGithub size={20} />,
    label: "GitHub",
  },
  {
    href: "mailto:raman.singh.ug22@nsut.ac.in",
    icon: <AiOutlineMail size={20} />,
    label: "Email",
  },
  {
    href: "/assets/Resume1.pdf",
    icon: <BsFillPersonLinesFill size={20} />,
    label: "Resume",
    download: "Raman_Resume.pdf",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(
        "https://myportfolio-backend-d9oe.onrender.com/api/message",
        formData
      );
      toast.success("Message sent! I'll get back soon.");
      setFormData({
        name: "",
        phoneNumber: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen py-28 px-6 overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-[1240px] mx-auto w-full relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Contact</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-6 mb-6"
        >
          Let's Work<br />
          Together<span className="text-accent">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base max-w-xl mb-16 leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          Actively seeking opportunities in Software Development, Full-Stack
          Engineering, and AI-driven projects. Drop me a message.
        </motion.p>

        <div className="grid lg:grid-cols-5 gap-0">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 border-3 border-[var(--border)] p-8 flex flex-col gap-6"
          >
            <div className="overflow-hidden border-3 border-[var(--border)]">
              <img
                src="/assets/contact.jpg"
                alt="Raman"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold uppercase tracking-wide">
                Raman Singh
              </h3>
              <p className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-[var(--accent)] mt-1">
                Full-Stack Developer
              </p>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              Let's build something great together. I'm always open to
              discussing new projects, creative ideas, or opportunities to be
              part of something impactful.
            </p>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] font-mono font-semibold mb-4 text-[var(--text-muted)]">
                Connect
              </p>
              <div className="flex gap-0">
                {socialLinks.map(({ href, icon, label, download }, i) => (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    download={download}
                    whileHover={{ y: -3 }}
                    whileTap={{ y: 2 }}
                    className={`w-12 h-12 border-3 border-[var(--border)] flex items-center justify-center text-[var(--text)] hover:bg-[var(--text)] hover:text-[var(--text-inverse)] transition-all ${
                      i > 0 ? "border-l-0" : ""
                    }`}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:col-span-3 border-3 border-[var(--border)] lg:border-l-0 p-8 section-dark"
          >
            <form onSubmit={handleOnSubmit} className="flex flex-col gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-mono font-bold text-white/50">
                    Name *
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    className="brutalist-input"
                    required
                    value={formData.name}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-mono font-bold text-white/50">
                    Phone
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="phoneNumber"
                    placeholder="+91 98765 43210"
                    className="brutalist-input"
                    value={formData.phoneNumber}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.3em] font-mono font-bold text-white/50">
                  Email *
                </label>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  placeholder="john@company.com"
                  className="brutalist-input"
                  required
                  value={formData.email}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.3em] font-mono font-bold text-white/50">
                  Subject
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="subject"
                  placeholder="Opportunity at XYZ"
                  className="brutalist-input"
                  value={formData.subject}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.3em] font-mono font-bold text-white/50">
                  Message *
                </label>
                <textarea
                  onChange={handleChange}
                  name="message"
                  placeholder="Hi Raman, I saw your portfolio..."
                  className="brutalist-input resize-none"
                  rows={5}
                  required
                  value={formData.message}
                />
              </div>
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ x: -3, y: -3 }}
                whileTap={{ x: 3, y: 3 }}
                className="w-full py-4 font-bold text-sm uppercase tracking-[0.3em] font-mono text-[var(--bg-dark)] bg-[var(--text-inverse)] border-3 border-[var(--text-inverse)] transition-all disabled:opacity-50"
                style={{
                  boxShadow: loading
                    ? "none"
                    : "6px 6px 0px var(--accent)",
                }}
              >
                {loading ? "Sending..." : "Send Message →"}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Back to top */}
        <div className="flex justify-center pt-16">
          <Link href="/">
            <motion.div
              whileHover={{ y: -4 }}
              whileTap={{ y: 2 }}
              className="w-14 h-14 border-3 border-[var(--border)] flex items-center justify-center cursor-pointer hover:bg-[var(--text)] hover:text-[var(--text-inverse)] transition-all"
            >
              <HiOutlineChevronDoubleUp size={22} />
            </motion.div>
          </Link>
        </div>
      </div>

      {/* Large decorative number */}
      <div
        className="absolute -right-4 top-1/2 -translate-y-1/2 text-[20rem] font-bold leading-none pointer-events-none select-none hidden lg:block"
        style={{ color: "rgba(15, 23, 42, 0.04)" }}
      >
        06
      </div>
    </section>
  );
};

export default Contact;
