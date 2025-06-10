import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EnhancedCard from '../components/ui/enhanced-card';
import EnhancedButton from '../components/ui/enhanced-button';
import PageWrapper from '../components/ui/PageWrapper';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const projects = [
    {
      title: 'TechStart Landing Page',
      category: 'Landing Page',
      description: 'Modern SaaS landing page with animated hero section and conversion-focused design',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tools: ['React', 'Tailwind CSS', 'Responsive Design'],
      demoLink: 'https://v0-react-landing-page-template-ashen.vercel.app/',
      githubLink: 'https://github.com/ujwal-code10/saas-project-landing-page.git'
    },
    {
      title: 'Creative Portfolio',
      category: 'Portfolio',
      description: 'Minimalist portfolio website for a graphic designer showcasing creative work',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tools: ['React', 'Tailwind CSS', 'Framer Motion'],
      demoLink: 'https://elevate-personal-page.vercel.app/',
      githubLink: 'https://github.com/ujwal-code10/ujwal.dev.git'
    },
    {
      title: 'Analytics Dashboard',
      category: 'Dashboard',
      description: 'Comprehensive admin dashboard with data visualization and user management',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tools: ['React', 'Tailwind CSS', 'Chart.js', 'React Query'],
      demoLink: 'https://admin-dashboard-jade-two-66.vercel.app/',
      githubLink: 'https://github.com/ujwal-code10/admin-dashboard-.git'
    },
    {
      title: 'Restaurant Website',
      category: 'Website',
      description: 'Multi-page restaurant website with menu, location, and reservation system',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tools: ['React', 'Tailwind CSS', 'React Router', 'Formspree'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Fitness App Landing',
      category: 'Landing Page',
      description: 'High-energy landing page for a fitness app with interactive features',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tools: ['React', 'Tailwind CSS', 'GSAP'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Developer Portfolio',
      category: 'Portfolio',
      description: 'Personal portfolio for a full-stack developer with project showcase',
      image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tools: ['React', 'Tailwind CSS', 'TypeScript'],
      demoLink: '#',
      githubLink: '#'
    }
  ];

  const categories = ['All', 'Landing Page', 'Portfolio', 'Dashboard', 'Website'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <PageWrapper
      title="Projects"
      description="View Ujwal's portfolio of modern websites, landing pages, and dashboards built with React and Tailwind CSS."
      keywords="portfolio projects, react websites, tailwind css examples, frontend developer work, landing page examples"
    >
      {/* Hero Section */}
      <motion.section 
        className="pt-16 pb-12 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Projects
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            A collection of websites and applications I've built for clients and personal projects
          </p>
        </div>
      </motion.section>

      {/* Filter Tabs */}
      <motion.section 
        className="pb-8 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  filter === category
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                }`}
                aria-pressed={filter === category}
                aria-label={`Filter projects by ${category}`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={`${project.title}-${filter}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <EnhancedCard hover className="overflow-hidden group h-full">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                          <EnhancedButton
                            href={project.demoLink}
                            size="sm"
                            className="bg-white text-slate-900 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                          >
                            Demo
                          </EnhancedButton>
                          <EnhancedButton
                            href={project.githubLink}
                            variant="outline"
                            size="sm"
                            className="bg-white border-white text-slate-900 hover:bg-slate-100 dark:bg-slate-800 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                          >
                            Code
                          </EnhancedButton>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                          {project.title}
                        </h3>
                        <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full dark:bg-indigo-500 dark:text-indigo-100">
                          {project.category}
                        </span>
                      </div>
                      
                      <p className="text-slate-600 dark:text-slate-400 mb-4">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool, toolIndex) => (
                          <span
                            key={toolIndex}
                            className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </EnhancedCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            Let's work together to create something amazing
          </p>
          <EnhancedButton to="/contact" size="lg">
            Start a Project
          </EnhancedButton>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Projects;
