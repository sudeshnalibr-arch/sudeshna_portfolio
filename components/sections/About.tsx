"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Layers3,
  Server,
  GraduationCap,
  Lightbulb,
} from "lucide-react";

import Image from "next/image";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building responsive and user-friendly interfaces using React, Next.js, TypeScript, and Tailwind CSS.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Developing REST APIs, authentication systems, role-based access control, and business logic using Node.js and Express.",
  },
  {
    icon: Database,
    title: "Database Management",
    description:
      "Working with MySQL, Sequelize, MongoDB, and Mongoose to design and manage application data.",
  },
  {
    icon: Layers3,
    title: "Full Stack Projects",
    description:
      "Combining frontend, backend, and database technologies to build practical, end-to-end applications.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-container section-padding">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
          Get to know me
        </p>

        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          About <span className="gradient-text">Me</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          A little introduction about my development journey, technical
          interests, and what I love building.
        </p>
      </motion.div>

      {/* Main About Layout */}
      <div className=" grid items-start gap-10 lg:grid-cols-[300px_1fr]">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <div className="gradient-border glow w-full max-w-[300px] rounded-3xl p-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#111729]">
              <Image
                src="/images/projects/sudeshna_Profile.jpeg"
                alt="Sudeshna Mandal - Full Stack Developer"
                fill
                priority
                sizes="(max-width: 768px) 80vw, 300px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-6 text-center">
            <h3 className="text-xl font-bold text-white">Sudeshna Mandal</h3>

            <p className="mt-2 text-sm text-purple-400">Full Stack Developer</p>

            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-xs text-green-400">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Open to Opportunities
            </div>
          </div>
        </motion.div>

        {/* About Content */}
        <div className="space-y-7">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="gradient-border glow rounded-2xl p-7 sm:p-9"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
              <GraduationCap size={30} />
            </div>

            <h3 className="mb-5 text-2xl font-semibold text-white">
              My Development Journey
            </h3>

            <div className="space-y-4 leading-7 text-slate-400">
              <p>
                Hello! I'm{" "}
                <span className="font-semibold text-white">
                  Sudeshna Mandal
                </span>
                , an aspiring Full Stack Developer passionate about building
                modern, scalable, and user-friendly web applications.
              </p>

              <p>
                My development journey focuses on both frontend and backend
                technologies. I enjoy creating interactive interfaces with React
                and Next.js while developing reliable server-side applications
                using Node.js and Express.
              </p>

              <p>
                Through projects like{" "}
                <span className="font-medium text-purple-400">ShopEase</span>{" "}
                and <span className="font-medium text-blue-400">SkillSwap</span>
                , I have been working on practical application features such as
                authentication, REST APIs, database integration, role-based
                permissions, and real-time communication.
              </p>

              <p>
                I believe in continuous learning, writing maintainable code,
                solving problems, and improving my development skills through
                hands-on projects.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-xl border border-purple-500/20 bg-purple-500/5 p-4">
              <Lightbulb size={23} className="shrink-0 text-purple-400" />
              <p className="text-sm text-slate-300">
                My goal is to grow as a Full Stack Developer and contribute to
                meaningful real-world applications.
              </p>
            </div>
          </motion.div>
        </div>
    </div>
        {/* Technical Highlights */}
        <div className="mt-12">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className=" grid gap-5 sm:grid-cols-2"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group rounded-2xl border border-white/10 bg-[#111729] p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-500/40"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-400 transition group-hover:text-blue-400">
                    <Icon size={25} />
                  </div>

                  <h4 className="mb-3 text-lg font-semibold text-white">
                    {item.title}
                  </h4>

                  <p className="text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
     
    </section>
  );
}
