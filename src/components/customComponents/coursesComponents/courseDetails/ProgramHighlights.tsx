

// components/customComponents/coursesComponents/courseDetails/ProgramHighlights.tsx
import React from 'react';
import { Card } from "../../../../components/ui/card";
import { Course } from '../../../../../types/courses';
import { defaultHighlights } from '../../../../../data/programHighlights/programHighlights';

interface ProgramHighlightsProps {
  course?: Course | null;
}
 

const ProgramHighlights: React.FC<ProgramHighlightsProps> = ({ course }) => {
  if (!course) {
    return null;
  }

  const highlights = course.highlights || defaultHighlights;

  return (
    <div className="bg-gradient-to-r from-gray-50 to-red-50">
      <div className="p-6 lg:px-8 py-6 max-w-5xl mx-auto text-center">
        <h2 className="text-gray-700 text-sm font-semibold mb-2">
          Your Pathway To {course.category || 'Professional'} Career
        </h2>
        <h1 className="text-3xl font-bold mb-6">
          Key <span className="text-[#ff0000]">Program</span> Highlights
        </h1>
        <Card className="p-8 bg-white rounded-2xl shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`text-center ${
                  index !== 0 ? 'md:border-l md:border-gray-300 md:pl-8' : ''
                }`}
              >
                <div className="text-[#ff0000] text-3xl font-bold mb-2">
                  {highlight.number}
                </div>
                <div className="text-gray-600 text-md">
                  {highlight.description}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProgramHighlights;