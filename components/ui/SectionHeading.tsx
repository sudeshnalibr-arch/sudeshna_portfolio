
"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  highlightedText?: string;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  highlightedText,
  description,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-14 text-center"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-bold text-white sm:text-4xl">
        {title}{" "}
        {highlightedText && (
          <span className="gradient-text">
            {highlightedText}
          </span>
        )}
      </h2>

      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          {description}
        </p>
      )}
    </motion.div>
  );
}
