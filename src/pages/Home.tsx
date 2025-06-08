
import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';

const Home = () => {
  const featuredProjects = [
    {
      title: 'SaaS Landing Page',
      description: 'High-converting landing page with smooth animations and clear CTAs',
      tools: ['React', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Portfolio Website',
      description: 'Clean, minimal portfolio showcasing creative work and projects',
      tools: ['React', 'Tailwind CSS', 'React Router'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Admin Dashboard',
      description: 'Modern dashboard UI with interactive charts and data visualization',
      tools: ['React', 'Tailwind CSS', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Hi, I'm <span className="text-indigo-600">Ujwal</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 mb-4">
            Frontend Developer & UI/UX Visual Builder
          </p>
          <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Crafting Digital Experiences
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            I specialize in creating clean, modern websites that convert visitors into customers. 
            From landing pages to complete web applications, I combine thoughtful design with 
            efficient development to deliver results that matter to your business.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-600">
              Recent work showcasing clean design and modern development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} hover className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button to="/projects" variant="outline">
              View All Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
