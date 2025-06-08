
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

interface PageWrapperProps {
  children: React.ReactNode;
  title: string;
  description: string;
  keywords?: string;
  className?: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  title,
  description,
  keywords = 'frontend developer, ui ux designer, react developer, tailwind css, web development, portfolio',
  className = ''
}) => {
  const fullTitle = `${title} | Ujwal - Frontend Developer & UI/UX Designer`;

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className={`min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 ${className}`}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageWrapper;
