
"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  ShoppingBag,
  Users,
  Code2,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer",
    type: "Personal Project",
    project: "ShopEase – E-commerce Application",
    period: "2026",
    description:
      "Developing a full-stack e-commerce application with a Next.js frontend and Node.js backend.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MySQL",
      "Sequelize",
      "TanStack Query",
      "Socket.IO",
    ],
    responsibilities: [
      "Building REST APIs using Node.js and Express.js.",
      "Implementing authentication and role-based permissions.",
      "Working with MySQL and Sequelize for database operations.",
      "Developing product, order, and administrative features.",
      "Working on real-time notifications and communication.",
    ],
    icon: ShoppingBag,
  },
  {
    role: "Full Stack Developer",
    type: "Personal Project",
    project: "SkillSwap – Skill Sharing Platform",
    period: "2026",
    description:
      "Working on a platform where users can build profiles, share skills, and interact through a structured application.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Authentication",
    ],
    responsibilities: [
      "Developing reusable frontend components.",
      "Working on multi-step user onboarding.",
      "Implementing authentication and protected routes.",
      "Developing administrative features and category management.",
    ],
    icon: Users,
  },
  {
    role: "Backend Developer",
    type: "Practice Projects",
    project: "REST API & CRUD Applications",
    period: "2026",
    description:
      "Practicing backend architecture, database operations, API development, and automated testing.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Jest",
      "Supertest",
      "Swagger",
    ],
    responsibilities: [
      "Building CRUD APIs using Express.js and MongoDB.",
      "Implementing JWT-based authentication and authorization.",
      "Practicing MVC and service-layer architecture.",
      "Writing API tests using Jest and Supertest.",
      "Documenting APIs with Swagger.",
    ],
    icon: Code2,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
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
          What I've Been Building
        </p>

        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Experience & <span className="gradient-text">Projects</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          Practical experience gained through personal projects,
          backend development, and continuous hands-on learning.
        </p>
      </motion.div>

      {/* Experience Cards */}
      <div className="mx-auto max-w-4xl space-y-7">
        {experiences.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.article
              key={item.project}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className="group gradient-border rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(139,92,246,0.08)] sm:p-8"
            >
              {/* Card Header */}
              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                    <Icon size={25} />
                  </div>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
                      {item.type}
                    </span>

                    <h3 className="mt-1 text-xl font-bold text-white">
                      {item.project}
                    </h3>

                    <p className="mt-2 text-sm text-blue-400">
                      {item.role}
                    </p>
                  </div>
                </div>

                <span className="flex shrink-0 items-center gap-2 text-sm text-slate-500">
                  <BriefcaseBusiness size={15} />
                  {item.period}
                </span>
              </div>

              {/* Description */}
              <p className="mt-6 leading-7 text-slate-400">
                {item.description}
              </p>

              {/* Responsibilities */}
              <div className="mt-6">
                <h4 className="mb-4 text-sm font-semibold text-white">
                  Key Contributions
                </h4>

                <ul className="space-y-3">
                  {item.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-400"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-1 shrink-0 text-purple-400"
                      />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mt-7 border-t border-white/10 pt-6">
                <h4 className="mb-4 text-sm font-semibold text-white">
                  Technologies Used
                </h4>

                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 transition hover:border-purple-500/40 hover:text-purple-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
