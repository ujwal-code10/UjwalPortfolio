import React, { useState } from 'react';
import EnhancedButton from '../components/ui/enhanced-button';
import EnhancedCard from '../components/ui/enhanced-card';
import FloatingInput from '../components/ui/FloatingInput';
import FloatingTextarea from '../components/ui/FloatingTextarea';
import PageWrapper from '../components/ui/PageWrapper';
import { useToast } from '../components/ui/ToastProvider';
import { motion } from 'framer-motion';

const Contact = () => {
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      addToast({
        title: 'Validation Error',
        description: 'Please fix the errors below and try again.',
        variant: 'error'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xblyknaw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          message: formData.message,
          _replyto: formData.email
        })
      });

      if (response.ok) {
        addToast({
          title: 'Message sent successfully!',
          description: 'Thanks for reaching out. I\'ll get back to you within 24 hours.',
          variant: 'success'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('Formspree error:', errorData);
        throw new Error('Failed to send message');
      }
    } catch (error) {
      addToast({
        title: 'Error sending message',
        description: 'Something went wrong. Please try again or email me directly.',
        variant: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageWrapper
      title="Contact"
      description="Get in touch with Ujwal for your next frontend development project. Quick response within 24 hours and transparent pricing."
      keywords="contact ujwal, hire frontend developer, react developer contact, web development inquiry"
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
            Get In Touch
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Have a project in mind? Let's discuss how we can work together
          </p>
        </div>
      </motion.section>

      <div className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <EnhancedCard className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Send a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <FloatingInput
                    id="name"
                    name="name"
                    type="text"
                    label="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    error={errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  
                  <FloatingInput
                    id="email"
                    name="email"
                    label="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    error={errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  
                  <FloatingTextarea
                    id="message"
                    name="message"
                    label="Project Details"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    error={errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  
                  <EnhancedButton
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                    aria-label={isSubmitting ? 'Sending message...' : 'Send message'}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </EnhancedButton>
                </form>
              </EnhancedCard>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <EnhancedCard className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Let's Connect
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  I'm always excited to work on new projects and help bring digital ideas to life. 
                  Whether you need a landing page, portfolio, or complete website, let's discuss how we can collaborate.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mr-3">
                      📧
                    </span>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">Email</p>
                      <a 
                        href="mailto:magarujal6@gmail.com" 
                        className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors"
                      >
                        magarujal6@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mr-3">
                      💼
                    </span>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">LinkedIn</p>
                      <a 
                        href="https://www.linkedin.com/in/ujwalmagar/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors"
                      >
                        Connect with me professionally
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mr-3">
                      🔗
                    </span>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">GitHub</p>
                      <a 
                        href="https://github.com/ujwal-code10/UjwalPortfolio.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors"
                      >
                        View my code and projects
                      </a>
                    </div>
                  </div>
                </div>
              </EnhancedCard>

              <EnhancedCard className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  What to Expect
                </h3>
                <div className="space-y-3 text-slate-600 dark:text-slate-300">
                  <div className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Quick response within 24 hours</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Free consultation to discuss your project</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Transparent pricing and timeline</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Regular updates throughout development</span>
                  </div>
                </div>
              </EnhancedCard>
            </motion.div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;
