
import React from 'react';
import { motion } from 'framer-motion';

interface EnhancedCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  variant?: 'default' | 'elevated' | 'bordered';
  'aria-label'?: string;
}

const EnhancedCard: React.FC<EnhancedCardProps> = ({ 
  children, 
  className = '', 
  hover = false,
  variant = 'default',
  'aria-label': ariaLabel 
}) => {
  const baseClasses = 'bg-white dark:bg-slate-800 rounded-lg transition-all duration-300 border border-slate-200 dark:border-slate-700';
  
  const variantClasses = {
    default: 'shadow-md',
    elevated: 'shadow-lg',
    bordered: 'border-2 shadow-sm',
  };
  
  const hoverClasses = hover 
    ? 'hover:shadow-xl hover:-translate-y-2 hover:scale-105 cursor-pointer' 
    : '';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
      className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </motion.div>
  );
};

export default EnhancedCard;
