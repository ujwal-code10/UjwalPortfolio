import React from 'react';

interface Technology {
  name: string;
  color?: string;
}

interface Project {
  name: string;
  category: string;
  description: string;
  technologies: Technology[];
}

const projects: Project[] = [
  {
    name: "TechStart Landing Page",
    category: "Landing Page",
    description: "Modern SaaS landing page with animated hero section and conversion-focused design",
    technologies: [
      { name: "React", color: "blue" },
      { name: "Tailwind CSS", color: "teal" },
      { name: "Responsive Design", color: "purple" }
    ]
  },
  {
    name: "Creative Portfolio",
    category: "Portfolio",
    description: "Minimalist portfolio website for a graphic designer showcasing creative work",
    technologies: [
      { name: "React", color: "blue" },
      { name: "Tailwind CSS", color: "teal" },
      { name: "Framer Motion", color: "pink" }
    ]
  },
  {
    name: "Analytics Dashboard",
    category: "Dashboard",
    description: "Comprehensive admin dashboard with data visualization and user management",
    technologies: [
      { name: "React", color: "blue" },
      { name: "Tailwind CSS", color: "teal" },
      { name: "Chart.js", color: "red" },
      { name: "React Query", color: "orange" }
    ]
  },
  {
    name: "Restaurant Website",
    category: "Website",
    description: "Multi-page restaurant website with menu, location, and reservation system",
    technologies: [
      { name: "React", color: "blue" },
      { name: "Tailwind CSS", color: "teal" },
      { name: "React Router", color: "red" },
      { name: "Formspree", color: "green" }
    ]
  },
  {
    name: "Fitness App Landing",
    category: "Landing Page",
    description: "High-energy landing page for a fitness app with interactive features",
    technologies: [
      { name: "React", color: "blue" },
      { name: "Tailwind CSS", color: "teal" },
      { name: "GSAP", color: "green" }
    ]
  },
  {
    name: "Developer Portfolio",
    category: "Portfolio",
    description: "Personal portfolio for a full-stack developer with project showcase",
    technologies: [
      { name: "React", color: "blue" },
      { name: "Tailwind CSS", color: "teal" },
      { name: "TypeScript", color: "blue" }
    ]
  }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] p-6 flex flex-col h-full">
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {project.name}
        </h3>
        <p className="text-base font-medium italic text-indigo-600 dark:text-indigo-400">
          {project.category}
        </p>
      </div>
      
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full"
          >
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProjectShowcase: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our diverse portfolio of web development projects, showcasing modern design and technical excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase; 