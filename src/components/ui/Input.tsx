import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input: React.FC<InputProps> = ({ 
  className = '', 
  error, 
  ...props 
}) => {
  return (
    <div className="w-full">
      <input
        className={`w-full px-4 py-2 bg-amber-50 border ${error ? 'border-red-500' : 'border-amber-200'} 
                   rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 
                   placeholder:text-amber-300 text-amber-900 transition-all duration-200 ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};