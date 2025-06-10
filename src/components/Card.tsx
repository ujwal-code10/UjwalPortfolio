import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = false }) => {
  const hoverClasses = hover ? 'hover:shadow-lg hover:-translate-y-1' : '';
  
  return (
    <div className={`rounded-lg transition-all duration-200 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
