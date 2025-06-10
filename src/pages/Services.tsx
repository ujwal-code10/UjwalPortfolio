import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const Services = () => {
  const services = [
    {
      icon: '🛠️',
      title: 'Landing Pages',
      price: '$50',
      description: 'High-converting single-page sites with smooth scroll, clean CTA, and responsive layout. Ideal for SaaS, personal brands, or products.',
      deliveryTime: '3-5 days',
      tools: ['React', 'Tailwind CSS', 'Framer Motion'],
      features: ['Responsive design', 'Fast loading', 'SEO optimized', 'Contact forms']
    },
    {
      icon: '🌐',
      title: 'Multi-Page Websites',
      price: '$120',
      description: 'Complete sites with 3–5 pages (e.g., Home, About, Services, Projects, Contact). Designed for small businesses or creators.',
      deliveryTime: '1-2 weeks',
      tools: ['React', 'React Router', 'Tailwind CSS'],
      features: ['Multiple pages', 'Navigation system', 'CMS integration', 'Mobile friendly']
    },
    {
      icon: '🎨',
      title: 'Portfolio Sites',
      price: '$80',
      description: 'Personal websites for developers, designers, or freelancers. Showcases projects, skills, and contact info.',
      deliveryTime: '4-7 days',
      tools: ['React', 'Tailwind CSS', 'React Router'],
      features: ['Project gallery', 'About section', 'Skills showcase', 'Contact form']
    },
    {
      icon: '📊',
      title: 'Admin Dashboards',
      price: '$150',
      description: 'Dashboard UIs with reusable components (sidebar, cards, tables, charts). Built with Tailwind and React.',
      deliveryTime: '2-3 weeks',
      tools: ['React', 'Tailwind CSS', 'Chart.js', 'React Query'],
      features: ['Data visualization', 'Responsive tables', 'Interactive charts', 'User management']
    },
    {
      icon: '🧠',
      title: 'UI/UX Design',
      price: '$40',
      description: 'Clean wireframes and visual layouts using Figma. You can request design + build together or code from existing mockups.',
      deliveryTime: '2-4 days',
      tools: ['Figma', 'Adobe XD', 'Sketch'],
      features: ['Wireframing', 'Visual design', 'Prototyping', 'Design systems']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">
            Services
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From concept to launch, I help bring your digital vision to life with clean design and modern development
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} hover className="rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="text-3xl mb-4">{service.icon}</div>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                  <span className="text-indigo-600 font-bold text-lg">
                    {service.price}
                  </span>
                </div>
                <p className="text-slate-600 mb-4 flex-grow">
                  {service.description}
                </p>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Delivery:</span>
                    <span className="font-medium text-indigo-600">{service.deliveryTime}</span>
                  </div>
                  
                  <div>
                    <p className="text-sm text-slate-500 mb-2">Tools used:</p>
                    <div className="flex flex-wrap gap-1">
                      {service.tools.map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-slate-500 mb-2">Features:</p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <span className="w-1 h-1 bg-indigo-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Consultation
              </h3>
              <p className="text-slate-600">
                We discuss your needs, goals, and vision for the project
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Design & Build
              </h3>
              <p className="text-slate-600">
                I create and develop your project with regular updates
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Launch
              </h3>
              <p className="text-slate-600">
                Your project goes live with ongoing support as needed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Let's discuss your project and bring your vision to life
          </p>
          <Button to="/contact" size="lg">
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
