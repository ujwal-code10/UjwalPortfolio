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
  keywords = 'full-stack developer, web developer, mobile developer, React developer, Flutter developer, Node.js developer, TypeScript, PostgreSQL, SaaS, marketplace app, AI web app',
  className = ''
}) => {
  const fullTitle = `${title} | Ujwal Magar - Full-Stack Web & Mobile Developer`;

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className={`min-h-screen bg-[var(--bg)] text-[var(--text)] ${className}`}
        style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageWrapper;
