
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  GitHubIcon,
  LinkedInIcon,
} from "@/components/ui/SocialIcons";
import {
  Mail,
  ArrowDown,
  Download,
} from "lucide-react";



export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="section-container grid items-center gap-14 py-20 md:grid-cols-2">

        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-7"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Full Stack Developer
          </div>

          <div className="space-y-3">
            <p className="text-lg text-slate-400">
              Hello, I'm
            </p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Sudeshna
              <br />
              <span className="gradient-text">
                Mandal.
              </span>
            </h1>

            <h2 className="text-xl font-semibold text-slate-300 sm:text-2xl">
              Building Digital Experiences
            </h2>
          </div>

          <p className="max-w-xl leading-8 text-slate-400">
            I am a Full Stack Developer focused on building
            modern web applications, scalable REST APIs,
            secure authentication systems and database-driven
            solutions using Node.js, React and Next.js.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-7 py-3 font-semibold text-white transition hover:scale-105"
            >
              Explore My Work
            </Link>

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 font-semibold text-white transition hover:border-purple-400 hover:text-purple-300"
            >
              <Download size={18} />
              Resume
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5 pt-3">
            <a
              href="https://github.com/sudeshnalibr-arch"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-400 transition hover:text-purple-400"
            >
              <GitHubIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/sudeshna-mandal-b07a793b1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 transition hover:text-purple-400"
            >
              <LinkedInIcon />
            </a>

            <a
              href="mailto:sudeshnalibr@gmail.com"
              aria-label="Email"
              className="text-slate-400 transition hover:text-purple-400"
            >
              <Mail size={23} />
            </a>
          </div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="glow gradient-border rounded-3xl p-8">
            <div className="space-y-6">

              <div className="flex items-center gap-3 border-b border-white/10 pb-5">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <span className="text-xs text-slate-500">
                  developer.ts
                </span>
              </div>

              <div className="space-y-4 font-mono text-sm">
                <p className="text-purple-400">
                  const developer = {"{"}
                </p>

                <p className="pl-5 text-slate-300">
                  name: <span className="text-green-400">"Sudeshna Mandal"</span>,
                </p>

                <p className="pl-5 text-slate-300">
                  role: <span className="text-green-400">"Full Stack Developer"</span>,
                </p>

                <p className="pl-5 text-slate-300">
                  backend: <span className="text-green-400">"Node.js"</span>,
                </p>

                <p className="pl-5 text-slate-300">
                  frontend: <span className="text-green-400">"Next.js"</span>,
                </p>

                <p className="pl-5 text-slate-300">
                  database: <span className="text-green-400">"MySQL"</span>,
                </p>

                <p className="pl-5 text-slate-300">
                  mindset: <span className="text-green-400">"Always Learning"</span>
                </p>

                <p className="text-purple-400">
                  {"}"};
                </p>
              </div>

              <div className="rounded-xl bg-purple-500/10 p-4">
                <p className="text-sm text-purple-300">
                  {"// Turning ideas into real applications."}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
