
import React from 'react';

interface BadgeProps {
  className?: string;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ className, children }) => {
  return (
    <span className={`bg-teal-500 text-white px-2 py-1 rounded ${className}`}>
      {children}
    </span>
  );
};

