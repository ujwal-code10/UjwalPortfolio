import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';

const Home = () => {
  const featuredProjects = [
    {
      title: 'SaaS Landing Page',
      description: 'High-converting landing page with smooth animations and clear CTAs',
      tools: ['React', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      demoUrl: 'https://v0-react-landing-page-template-ashen.vercel.app/',
      codeUrl: 'https://github.com/ujwal-code10/saas-project-landing-page.git'
    },
    {
      title: 'Portfolio Website',
      description: 'Clean, minimal portfolio showcasing creative work and projects',
      tools: ['React', 'Tailwind CSS', 'React Router'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      demoUrl: 'https://elevate-personal-page.vercel.app/',
      codeUrl: 'https://github.com/ujwal-code10/ujwal.dev.git'
    },
    {
      title: 'Admin Dashboard',
      description: 'Modern dashboard UI with interactive charts and data visualization',
      tools: ['React', 'Tailwind CSS', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      demoUrl: 'https://admin-dashboard-main-plum.vercel.app/',
      codeUrl: 'https://github.com/ujwal-code10/admin-dashboard--main.git'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Ujwal</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-200 mb-4">
            Frontend Developer & UI/UX Visual Builder
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Clean UI. Fast delivery. I build beautiful, responsive websites using modern tools and AI-enhanced workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/services" size="lg">
              View Services
            </Button>
            <Button to="/contact" variant="outline" size="lg">
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            Crafting Digital Experiences
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-200 leading-relaxed">
            I specialize in creating clean, modern websites that convert visitors into customers. 
            From landing pages to complete web applications, I combine thoughtful design with 
            efficient development to deliver results that matter to your business.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-200">
              Recent work showcasing clean design and modern development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card 
                key={index} 
                hover 
                className="group overflow-hidden flex flex-col bg-white dark:bg-slate-800 shadow-lg rounded-xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl relative"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-[2px]"
                  />
                  {/* Overlay that's always visible with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  
                  {/* Hover overlay with buttons */}
                  <div 
                    className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-6 p-6 backdrop-blur-sm"
                  >
                    <h4 className="text-white font-bold text-2xl text-center mb-2 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {project.title}
                    </h4>
                    <div className="flex flex-col sm:flex-row items-center gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-8 py-3 bg-indigo-600 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl inline-flex items-center justify-center gap-2 hover:bg-indigo-500 ring-2 ring-white/20"
                      >
                        <span>Live Demo</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-8 py-3 bg-white/10 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl inline-flex items-center justify-center gap-2 hover:bg-white/20 backdrop-blur-sm ring-2 ring-white/20"
                      >
                        <span>View Code</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                    {project.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="px-4 py-2 bg-gradient-to-r from-indigo-500/10 via-indigo-500/5 to-indigo-500/10 dark:from-indigo-400/20 dark:via-indigo-400/10 dark:to-indigo-400/20 text-indigo-700 dark:text-indigo-300 text-sm rounded-lg font-semibold inline-flex items-center gap-2 transform transition-all duration-200 hover:scale-105 hover:shadow-md hover:bg-indigo-500/20 dark:hover:bg-indigo-400/30"
                      >
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="3"/>
                        </svg>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button 
              to="/projects" 
              variant="outline"
              className="px-10 py-4 text-lg font-bold hover:scale-105 transition-all duration-200 hover:shadow-lg"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
