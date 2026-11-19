"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-container section-padding"
    >
      <SectionHeading
        eyebrow="My Recent Work"
        title="Featured"
        highlightedText="Projects"
        description="Some of the applications I've been working on using modern web technologies."
      />

      <div className="grid gap-7 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}