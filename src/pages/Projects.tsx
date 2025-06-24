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
      githubLink: 'https://github.com/ujwal-code10/saas-project-landing-page'
    },
    {
      title: 'Creative Portfolio',
      category: 'Portfolio',
      description: 'Minimalist portfolio website for a graphic designer showcasing creative work',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tools: ['React', 'Tailwind CSS', 'Framer Motion'],
      demoLink: 'https://elevate-personal-page.vercel.app/',
      githubLink: 'https://github.com/ujwal-code10/ujwal.dev'
    },
    {
      title: 'Analytics Dashboard',
      category: 'Dashboard',
      description: 'Comprehensive admin dashboard with data visualization and user management',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tools: ['React', 'Tailwind CSS', 'Chart.js', 'React Query'],
      demoLink: 'https://admin-dashboard-main-plum.vercel.app/',
      githubLink: 'https://github.com/ujwal-code10/admin-dashboard--main'
    },
    {
      title: 'Restaurant Website',
      category: 'Website',
      description: 'Multi-page restaurant website with menu, location, and reservation system',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tools: ['React', 'Tailwind CSS', 'React Router', 'Formspree','TypeScript'],
      demoLink: 'https://restaurant-website-ten-psi.vercel.app/',
      githubLink: 'https://github.com/ujwal-code10/Restaurant-Website'
    },
    {
      title: 'Fitness App Landing',
      category: 'Landing Page',
      description: 'A clean and responsive landing page designed to promote a fictional AI-powered fitness mobile app.',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tools: ['React', 'Tailwind CSS', 'TypeScript'],
      demoLink: 'https://trainrx-ai-fitness-hub-main.vercel.app/',
      githubLink: 'https://github.com/ujwal-code10/trainrx-ai-fitness-hub-main'
    },
    
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
                      {/* Only show buttons if demoLink and githubLink are present */}
                      {project.demoLink && project.githubLink && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[2px]">
                          <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex gap-4">
                            <EnhancedButton
                              href={project.demoLink}
                              size="lg"
                              className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                            >
                              Live Demo
                            </EnhancedButton>
                            <EnhancedButton
                              href={project.githubLink}
                              variant="outline"
                              size="lg"
                              className="bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white/20 text-white font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                            >
                              View Code
                            </EnhancedButton>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-4">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {project.title}
                        </h3>
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-full dark:bg-indigo-500/20 dark:text-indigo-300 whitespace-nowrap">
                          {project.category}
                        </span>
                      </div>
                      
                      <p className="text-slate-600 dark:text-slate-400 mb-6 min-h-[3rem]">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-slate-700/50">
                        {project.tools.map((tool, toolIndex) => (
                          <span
                            key={toolIndex}
                            className="px-3 py-1 bg-gradient-to-r from-indigo-500/10 via-indigo-500/5 to-indigo-500/10 dark:from-indigo-400/20 dark:via-indigo-400/10 dark:to-indigo-400/20 text-indigo-700 dark:text-indigo-300 text-sm rounded-lg font-medium inline-flex items-center gap-1.5 transform transition-all duration-200 hover:scale-105 hover:shadow-md hover:bg-indigo-500/20 dark:hover:bg-indigo-400/30"
                          >
                            <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 8 8">
                              <circle cx="4" cy="4" r="3"/>
                            </svg>
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
