import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-600 mb-4 md:mb-0">
            © {currentYear} Ujwal. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/ujwalmagar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-indigo-600 transition-colors"
              aria-label="Visit my GitHub profile"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ujwalmagar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-indigo-600 transition-colors"
              aria-label="Connect with me on LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="mailto:magarujal6@gmail.com"
              className="text-slate-600 hover:text-indigo-600 transition-colors"
              aria-label="Send me an email"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
