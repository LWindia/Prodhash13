

import React from 'react';

const TestimonialCardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="p-0">{children}</div>; // Set padding to 0
};

export default TestimonialCardContent;
