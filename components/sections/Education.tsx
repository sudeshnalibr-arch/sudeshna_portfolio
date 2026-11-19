
"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Award,
  CalendarDays,
} from "lucide-react";

const education = [
  {
    type: "Formal Education",
    title: "MCA",
    institution: "MUJ Online University",
    period: "Year 2023 – Year 2025",
    description:
      "Masters in Computer Application with special paper Advanced Web Designing.",
    icon: GraduationCap,
  },
  {
    type: "Professional Training",
    title: "FullStack Development",
    institution: "Webskitters Academy",
    period: "Ongoing",
    description:
      "Learning frontend and backend development with React, Next.js, Node.js, Express.js, REST APIs, database integration, and practical application development.",
    icon: BookOpen,
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="section-container section-padding"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
          My Learning Journey
        </p>

        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Education & <span className="gradient-text">Training</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          My academic background and continuous learning
          journey in software development.
        </p>
      </motion.div>

      {/* Education Timeline */}
      <div className="mx-auto max-w-3xl">
        <div className="relative space-y-8">
          {/* Timeline Line */}
          <div className="absolute bottom-8 left-6 top-8 w-px bg-gradient-to-b from-purple-500 via-blue-500 to-transparent" />

          {education.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="relative flex gap-5"
              >
                {/* Timeline Icon */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-500/30 bg-[#111729] text-purple-400">
                  <Icon size={23} />
                </div>

                {/* Content */}
                <div className="gradient-border flex-1 rounded-2xl p-6">
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-400">
                      {item.type}
                    </span>

                    <span className="flex items-center gap-2 text-xs text-slate-500">
                      <CalendarDays size={14} />
                      {item.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-blue-400">
                    {item.institution}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Learning Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex items-center gap-4 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5"
        >
          <Award
            size={28}
            className="shrink-0 text-blue-400"
          />

          <p className="text-sm leading-6 text-slate-300">
            I believe learning is a continuous process.
            I regularly improve my technical knowledge
            through hands-on projects and practice.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
