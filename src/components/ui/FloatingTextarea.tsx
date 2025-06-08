
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FloatingTextareaProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  rows?: number;
  error?: string;
  'aria-describedby'?: string;
}

const FloatingTextarea: React.FC<FloatingTextareaProps> = ({
  id,
  label,
  value,
  onChange,
  required = false,
  rows = 6,
  error,
  'aria-describedby': ariaDescribedBy
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.length > 0;
  const isFloated = isFocused || hasValue;

  return (
    <div className="relative">
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
        rows={rows}
        className={`w-full px-4 pt-6 pb-2 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none dark:bg-slate-800 dark:border-slate-600 dark:text-white ${
          error 
            ? 'border-red-500 focus:ring-red-500' 
            : 'border-slate-300 dark:border-slate-600'
        }`}
        aria-describedby={ariaDescribedBy}
        aria-invalid={error ? 'true' : 'false'}
      />
      <motion.label
        htmlFor={id}
        initial={false}
        animate={{
          y: isFloated ? -8 : 8,
          scale: isFloated ? 0.85 : 1,
          color: error ? '#ef4444' : isFocused ? '#4f46e5' : '#64748b'
        }}
        transition={{ duration: 0.2 }}
        className="absolute left-4 top-4 pointer-events-none origin-left dark:text-slate-400"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </motion.label>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1 text-sm text-red-500"
          id={`${id}-error`}
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default FloatingTextarea;
