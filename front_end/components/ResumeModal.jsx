"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiDownload, FiExternalLink } from "react-icons/fi";

const ResumeModal = ({ isOpen, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9998] bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4"
            onClick={(e) => e.target === e.currentTarget && onClose()}
          >
            <div
              className="relative w-full max-w-4xl bg-[var(--bg)] border-3 border-[var(--border)] flex flex-col"
              style={{
                height: "95vh",
                boxShadow: "8px 8px 0 var(--border)",
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b-3 border-[var(--border)]">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-[var(--accent)]" />
                  <h3
                    className="text-sm font-bold uppercase tracking-[0.2em] font-mono"
                    style={{ color: "var(--text)" }}
                  >
                    Resume
                  </h3>
                </div>

                <div className="flex items-center gap-0">
                  {/* Open in new tab */}
                  <a
                    href="/assets/Resume1.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 border-3 border-[var(--border)] flex items-center justify-center text-[var(--text)] hover:bg-[var(--text)] hover:text-[var(--text-inverse)] transition-all"
                    title="Open in new tab"
                  >
                    <FiExternalLink size={14} />
                  </a>

                  {/* Download */}
                  <a
                    href="/assets/Resume1.pdf"
                    download="Raman_Singh_Resume.pdf"
                    className="w-10 h-10 border-3 border-[var(--border)] border-l-0 flex items-center justify-center text-[var(--text)] hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] transition-all"
                    title="Download"
                  >
                    <FiDownload size={14} />
                  </a>

                  {/* Close */}
                  <button
                    onClick={onClose}
                    className="w-10 h-10 border-3 border-[var(--border)] border-l-0 flex items-center justify-center text-[var(--text)] hover:bg-[var(--text)] hover:text-[var(--text-inverse)] transition-all"
                    title="Close (Esc)"
                  >
                    <FiX size={16} />
                  </button>
                </div>
              </div>

              <div className="flex-1 min-h-0">
                <iframe
                  src="/assets/Resume1.pdf#toolbar=0&navpanes=0"
                  title="Resume - Raman Singh"
                  className="w-full h-full border-0"
                  style={{ background: "#525659" }}
                />
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between px-6 py-3 border-t-3 border-[var(--border)]">
                <p
                  className="text-[9px] font-mono uppercase tracking-[0.3em]"
                  style={{ color: "var(--text-muted)" }}
                >
                  Raman Singh — Resume
                </p>
                <a
                  href="/assets/Resume1.pdf"
                  download="Raman_Singh_Resume.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] font-mono bg-[var(--text)] text-[var(--text-inverse)] hover:bg-[var(--accent)] transition-all border-3 border-[var(--border)]"
                >
                  <FiDownload size={12} />
                  Download PDF
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
