
import React from 'react';
import Card from '../components/Card';

const About = () => {
  const skills = [
    { name: 'React', level: 'Advanced' },
    { name: 'Tailwind CSS', level: 'Advanced' },
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'TypeScript', level: 'Intermediate' },
    { name: 'Git', level: 'Intermediate' },
    { name: 'AI Tools', level: 'Advanced' },
    { name: 'UI/UX Principles', level: 'Intermediate' },
  ];

  const workflow = [
    {
      step: '1',
      title: 'Design & Planning',
      description: 'Define layout and flow using basic wireframing, sketches, or reference designs. I focus on clarity, spacing, and usability.'
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
                I'm a frontend developer who focuses on building clean, responsive user interfaces using modern web technologies. While I'm not a full-time UI/UX designer, I understand the core principles of visual design and usability, which I apply to every project I build. My goal is to create intuitive and visually consistent digital experiences that feel great on all devices.
              </p>
              <p>
              I specialize in React and Tailwind CSS, and I speed up development using AI-enhanced tools like Cursor, V0.dev, Lovable.dev and ChatGPT. These tools help me deliver high-quality frontend code faster without compromising on clarity or attention to detail. I enjoy working with structured layouts, smooth transitions, and scalable components that keep the user experience at the center.

              </p>
              <p>
              When I'm not building, I spend time exploring design trends, improving my development workflow, and learning about emerging web technologies. Whether it's a portfolio, landing page, or dashboard, I bring a clear process and a modern frontend toolkit to every project.
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
