export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "ShopEase",
    description:
      "A full-stack e-commerce application with product management, authentication, role-based access control, orders, and real-time notifications.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Express.js",
      "MySQL",
      "Sequelize",
      "Socket.IO",
    ],
    githubUrl: "https://github.com/sudeshnalibr-arch/sql_next_shopease.git",
    liveUrl: "",
    image: "/images/projects/shopease.png",
    featured: true,
  },
  {
    id: 2,
    title: "SkillSwap",
    description:
      "A skill-sharing platform featuring user authentication, onboarding, profiles, and role-based admin functionality.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "Shadcn",
    ],
    githubUrl: "https://github.com/Madhumita15/skillswap",
    liveUrl: "",
    image: "/images/projects/skill_swap.png",
    featured: true,
  },
];