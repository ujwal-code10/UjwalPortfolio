
import React from 'react';
import Card from '../components/Card';

const About = () => {
  const skills = [
    { name: 'React', level: 'Advanced' },
    { name: 'Tailwind CSS', level: 'Advanced' },
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'Figma', level: 'Advanced' },
    { name: 'Git', level: 'Intermediate' },
    { name: 'AI Tools', level: 'Advanced' },
  ];

  const workflow = [
    {
      step: '1',
      title: 'Design & Planning',
      description: 'Create wireframes and visual designs in Figma, focusing on user experience and clean aesthetics.'
    },
    {
      step: '2',
      title: 'AI-Enhanced Development',
      description: 'Build with React and Tailwind CSS, leveraging AI tools like Cursor, V0.dev, and ChatGPT for faster development.'
    },
    {
      step: '3',
      title: 'Polish & Deploy',
      description: 'Refine interactions, ensure responsiveness, and deploy with modern hosting solutions.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">
            About Me
          </h1>
          <p className="text-xl text-slate-600">
            Passionate about creating beautiful, functional web experiences
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Who I Am
            </h2>
            <div className="prose text-slate-600 leading-relaxed space-y-4">
              <p>
                I'm a frontend developer and UI/UX designer who believes in the power of clean, 
                purposeful design. With a focus on modern web technologies and AI-enhanced workflows, 
                I help businesses and individuals create digital experiences that truly connect with their audience.
              </p>
              <p>
                My approach combines traditional design principles with cutting-edge development tools. 
                I leverage AI assistants and modern frameworks to deliver high-quality websites faster 
                than traditional development methods, without compromising on quality or attention to detail.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends, learning about emerging 
                web technologies, or contributing to the developer community through projects and knowledge sharing.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              My Workflow
            </h2>
            <p className="text-lg text-slate-600">
              How I bring ideas to life through design and development
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {workflow.map((item, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Skills & Tools
            </h2>
            <p className="text-lg text-slate-600">
              Technologies and tools I use to create amazing web experiences
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-slate-900">
                    {skill.name}
                  </h3>
                  <span className="text-sm text-indigo-600 font-medium">
                    {skill.level}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
