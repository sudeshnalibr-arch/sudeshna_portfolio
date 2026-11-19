
import Image from "next/image";
import { ExternalLink} from "lucide-react";
import type { Project } from "@/data/projects";
import {
  GitHubIcon,
  LinkedInIcon,
} from "@/components/ui/SocialIcons";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111729] transition duration-300 hover:-translate-y-1 hover:border-purple-500/40">

      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden bg-slate-800">
        <Image
          src={project.image}
          alt={`${project.title} project screenshot`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Project Details */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-purple-500/20 bg-purple-500/10 px-2.5 py-1.5 text-xs text-purple-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="mt-6 flex flex-wrap gap-4 border-t border-white/10 pt-5">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-purple-400"
            >
              <GitHubIcon />
              GitHub
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-purple-400"
            >
              <ExternalLink size={17} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
