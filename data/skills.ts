
export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend Development",
    description: "Developing APIs and server-side application logic.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "Socket.IO",
      "Multer",
      "Joi",
    ],
  },
  {
    title: "Database & ORM",
    description: "Managing application data and database relationships.",
    skills: [
      "MySQL",
      "MongoDB",
      "Sequelize",
      "Mongoose",
    //   "Prisma",
    ],
  },
  {
    title: "Tools & Technologies",
    description: "Development tools and workflow technologies.",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Docker",
      "GitHub Actions",
      "npm",
    ],
  },
];
