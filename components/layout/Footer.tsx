"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";
import {
  GitHubIcon,
  LinkedInIcon,
} from "@/components/ui/SocialIcons";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-white/10 bg-[#080B16] py-8">
      <div className="section-container">

        {/* Social Links */}
        <div className="mb-6 flex justify-center gap-5">
          <a
            href="https://github.com/sudeshnalibr-arch"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-400 transition hover:text-white"
          >
            <GitHubIcon />
          </a>

          <a
            href="https://www.linkedin.com/in/sudeshna-mandal-b07a793b1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-400 transition hover:text-white"
          >
            <LinkedInIcon />
          </a>

          <a
            href="mailto:sudeshnalibr@gmail.com"
            aria-label="Email"
            className="text-slate-400 transition hover:text-white"
          >
            <Mail size={19} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-slate-500">
          © {currentYear ?? "2026"} Sudeshna Mandal. All rights reserved.
        </p>

        {/* Back to Top */}
        <div className="mt-5 flex justify-center">
          <Link
            href="#home"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-purple-500 hover:text-white"
          >
            <ArrowUp size={18} />
          </Link>
        </div>

      </div>
    </footer>
  );
}