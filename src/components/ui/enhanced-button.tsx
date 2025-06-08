
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface EnhancedButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
  'aria-label'?: string;
}

const EnhancedButton: React.FC<EnhancedButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  'aria-label': ariaLabel,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-800 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg hover:scale-105 dark:bg-indigo-500 dark:hover:bg-indigo-600',
    secondary: 'bg-slate-600 text-white hover:bg-slate-700 hover:shadow-lg hover:scale-105 dark:bg-slate-500 dark:hover:bg-slate-600',
    outline: 'border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 hover:shadow-md hover:scale-105 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:border-slate-500',
    ghost: 'text-slate-700 hover:bg-slate-100 hover:text-slate-900 hover:scale-105 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const MotionComponent = motion.div;

  const buttonContent = (
    <MotionComponent
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </MotionComponent>
  );

  if (to) {
    return (
      <Link to={to} className="inline-block">
        {buttonContent}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {buttonContent}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className="inline-block" aria-label={ariaLabel}>
      {buttonContent}
    </button>
  );
};

export default EnhancedButton;
