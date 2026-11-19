"use client";

import { motion } from "framer-motion";
import { Code2, Server, Database, Wrench, Sparkles } from "lucide-react";

import { skillCategories } from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";

const categoryIcons = [Code2, Server, Database, Wrench];

export default function Skills() {
  return (
    <section id="skills" className="section-container section-padding">
      {/* Section Heading */}
      <SectionHeading
        eyebrow="My Technical Expertise"
        title="Skills &"
        highlightedText="Technologies"
        description="Technologies and tools I use to design, develop, and build modern full-stack web applications."
      />

      {/* Skills Grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {skillCategories.map((category, index) => {
          const Icon = categoryIcons[index] ?? Code2;

          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className="group rounded-2xl border border-white/10 bg-[#111729] p-7 transition duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:shadow-[0_0_35px_rgba(139,92,246,0.10)]"
            >
              {/* Category Header */}
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-400 transition group-hover:text-blue-400">
                  <Icon size={25} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {category.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Technology Badges */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.08 + skillIndex * 0.04,
                    }}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-300 transition duration-300 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-white"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-10 flex items-center justify-center gap-3 text-center"
      >
        <Sparkles size={18} className="text-purple-400" />

        <p className="text-sm text-slate-400">
          Always learning, exploring new technologies, and improving my
          development skills.
        </p>
      </motion.div>
    </section>
  );
}
