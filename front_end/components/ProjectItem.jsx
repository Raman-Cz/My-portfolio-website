"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const ProjectItem = ({
  title,
  backgroundImg,
  projectUrl,
  info,
  tags = [],
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group brutalist-card flex-shrink-0 w-[340px] sm:w-[400px] cursor-pointer"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-[220px] border-b-3 border-[var(--border)]">
        <img
          src={backgroundImg?.src || backgroundImg}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[var(--bg-dark)]/0 group-hover:bg-[var(--bg-dark)]/70 transition-all duration-300 flex items-center justify-center">
          <motion.a
            href={projectUrl}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            className="opacity-0 group-hover:opacity-100 transition-all duration-300 brutalist-btn text-[10px]"
          >
            View Live <FiExternalLink size={12} />
          </motion.a>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold uppercase tracking-wide mb-2 leading-tight group-hover:text-[var(--accent)] transition-colors">
          {title}
        </h3>

        <p
          className="text-xs leading-relaxed mb-4 line-clamp-3 font-mono"
          style={{ color: "var(--text-muted)" }}
        >
          {info}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.map((tag) => (
              <span key={tag} className="tag-chip">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action */}
        <a
          href={projectUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] font-mono text-[var(--accent)] hover:underline decoration-2 underline-offset-4 transition-all"
        >
          View Project <FiExternalLink size={12} />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
