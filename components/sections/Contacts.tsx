
"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Send,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

import {
  GitHubIcon,
  LinkedInIcon,
} from "@/components/ui/SocialIcons";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "sudeshnalibr@gmail.com",
    href: "mailto:sudeshnalibr@gmail.com",
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    value: "Visit my GitHub profile",
    href: "https://github.com/sudeshnalibr-arch",
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "Connect with me on LinkedIn",
    href: "https://www.linkedin.com/in/sudeshna-mandal-b07a793b1/",
  },
];

export default function Contacts() {
  const email = "sudeshnalibr@gmail.com";

  return (
    <section
      id="contact"
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
          Let's Connect
        </p>

        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          Have an opportunity, project idea, or just want to
          connect? I'd love to hear from you.
        </p>
      </motion.div>

      {/* Contact Content */}
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="gradient-border glow rounded-2xl p-7 sm:p-9"
        >
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
            <MessageCircle size={29} />
          </div>

          <h3 className="text-2xl font-bold text-white">
            Let's Work Together
          </h3>

          <p className="mt-4 leading-7 text-slate-400">
            I'm interested in opportunities where I can apply
            my Full Stack Development skills, learn from
            experienced developers, and contribute to building
            useful web applications.
          </p>

          <p className="mt-4 leading-7 text-slate-400">
            Whether you're a recruiter, developer, or someone
            with an interesting project, feel free to reach out.
          </p>

          <a
            href={`mailto:${email}?subject=Let's%20Connect`}
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-purple-500/20"
          >
            <Send size={18} />
            Send Me an Email
          </a>
        </motion.div>

        {/* Right Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <h3 className="mb-6 text-xl font-semibold text-white">
            Contact Information
          </h3>

          {contactDetails.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={
                  item.label === "Email"
                    ? undefined
                    : "_blank"
                }
                rel={
                  item.label === "Email"
                    ? undefined
                    : "noopener noreferrer"
                }
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#111729] p-5 transition duration-300 hover:border-purple-500/40 hover:bg-purple-500/5"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 transition group-hover:bg-purple-500/20">
                    <Icon size={22} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white">
                      {item.label}
                    </p>

                    <p className="mt-1 truncate text-sm text-slate-400">
                      {item.value}
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-slate-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-purple-400"
                />
              </motion.a>
            );
          })}

          {/* Availability */}
          <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-5">
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

              <p className="text-sm font-medium text-green-400">
                Open to New Opportunities
              </p>
            </div>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Interested in Full Stack Developer roles,
              collaborative projects, and opportunities
              to grow professionally.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
