// import React from 'react';
// import { Program } from '../../../../types/Navbar';
// import Link from "next/link"
// export const ProgramCard: React.FC<Program> = ({ title, mentor, duration, status, type ,image,slug}) => (

//   <Link href={slug}>
//   <div className="p-4 hover:bg-gray-50 rounded-lg transition-colors">
//     <div className="flex gap-4">
//       <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden">
//         <img src={image} alt="mentor" className="w-full h-full object-cover" />
//       </div>
//       <div className="flex-1">
//         <h3 className="font-medium text-lg">{title}</h3>
//         <p className="text-sm text-gray-600">{mentor}</p>
//         <div className="flex flex-wrap gap-4 mt-2">
//           <span className="text-sm text-gray-600">⏱️ {duration}</span>
//           <span className="text-sm text-gray-600">📅 {status}</span>
//           <span className="text-sm text-gray-600">🎥 {type}</span>
//         </div>
//       </div>
//     </div>
//   </div>
//   </Link>
// );

// export const SideCategories: React.FC<{
//   categories: string[];
//   selectedCategory: string;
//   onCategorySelect: (category: string) => void;
// }> = ({ categories, selectedCategory, onCategorySelect }) => (
//   <div className="w-48 bg-gray-50 p-4 space-y-2 md:block">
//     {categories.map((category) => (
//       <div
//         key={category}
//         className={`p-2 rounded-md cursor-pointer ${
//           selectedCategory === category ? "bg-gray-100 font-semibold" : "hover:bg-gray-100"
//         }`}
//         onClick={() => onCategorySelect(category)}
//       >
//         {category}
//       </div>
//     ))}
//   </div>
// );

// export const DropdownOverlay: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
//   if (!isOpen) return null;
//   return (
//     <div className="dropdown-overlay" />
//   );
// };


import React from 'react';
import { Program } from '../../../../types/Navbar';
import Link from "next/link";
import Image from "next/image";

/**
 * Formats the title by interpreting formatting tags
 * Handles [B], [/B], [R], [/R] tags and pipe character divisions
 */
const formatTitle = (title: string): JSX.Element => {
  if (!title) return <></>;
  
  // Split by pipe and only use the first part
  const mainTitle = title.split('|')[0].trim();
  
  // Apply formatting
  let isBold = false;
  let isRed = false;
  const result: JSX.Element[] = [];
  let currentText = '';

  for (let i = 0; i < mainTitle.length; i++) {
    if (mainTitle.slice(i).startsWith('[B]')) {
      if (currentText) {
        result.push(
          <span key={`text-${i}`} className="inline">
            {currentText}
          </span>
        );
        currentText = '';
      }
      isBold = true;
      i += 2;
    } 
    else if (mainTitle.slice(i).startsWith('[/B]')) {
      if (currentText) {
        result.push(
          <span key={`bold-${i}`} className="font-bold inline">
            {currentText}
          </span>
        );
        currentText = '';
      }
      isBold = false;
      i += 3;
    }
    else if (mainTitle.slice(i).startsWith('[R]')) {
      if (currentText) {
        result.push(
          <span key={`text-${i}`} className={`${isBold ? 'font-bold' : ''} inline`}>
            {currentText}
          </span>
        );
        currentText = '';
      }
      isRed = true;
      i += 2;
    }
    else if (mainTitle.slice(i).startsWith('[/R]')) {
      if (currentText) {
        result.push(
          <span 
            key={`red-${i}`} 
            className={`text-red-500 ${isBold ? 'font-bold' : ''} inline`}
          >
            {currentText}
          </span>
        );
        currentText = '';
      }
      isRed = false;
      i += 3;
    }
    else {
      currentText += mainTitle[i];
    }
  }

  if (currentText) {
    result.push(
      <span 
        key="final" 
        className={`
          ${isBold ? 'font-bold' : ''} 
          ${isRed ? 'text-red-500' : ''}
          inline
        `}
      >
        {currentText}
      </span>
    );
  }

  return <>{result}</>;
};

/**
 * ProgramCard component displays a course card with program details
 */
export const ProgramCard: React.FC<Program> = ({ 
  title, 
  mentor, 
  duration, 
  status, 
  type, 
  image, 
  slug 
}) => {
  return (
    <Link href={slug} className="block">
      <div className="p-4 hover:bg-gray-50 rounded-lg transition-colors">
        <div className="flex gap-4">
          <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
            {image && (
              <Image 
                src={image} 
                alt={typeof title === 'string' ? title.replace(/$$[^$$]*\]/g, '') : 'Program Image'} 
                width={64} 
                height={64} 
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="flex-1">
            {/* Use the formatted title */}
            <h3 className="font-medium text-lg line-clamp-2">
              {formatTitle(title)}
            </h3>
            <p className="text-sm text-gray-600">{mentor}</p>
            <div className="flex flex-wrap gap-4 mt-2">
              <span className="text-sm text-gray-600">⏱️ {duration}</span>
              <span className="text-sm text-gray-600">📅 {status}</span>
              <span className="text-sm text-gray-600">🎥 {type}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

/**
 * SideCategories component displays the category selector sidebar
 */
export const SideCategories: React.FC<{
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}> = ({ categories, selectedCategory, onCategorySelect }) => (
  <div className="w-48 bg-gray-50 p-4 space-y-2 border-r border-gray-100">
    <h3 className="font-semibold mb-3 text-gray-700">Categories</h3>
    {categories.map((category) => (
      <button
        key={category}
        className={`p-2 rounded-md cursor-pointer w-full text-left transition-colors ${
          selectedCategory === category 
            ? "bg-gray-200 font-semibold text-gray-900" 
            : "hover:bg-gray-100 text-gray-700"
        }`}
        onClick={() => onCategorySelect(category)}
        aria-selected={selectedCategory === category}
        role="tab"
      >
        {category}
      </button>
    ))}
  </div>
);

/**
 * DropdownOverlay component provides a background overlay when dropdown is open
 */
export const DropdownOverlay: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  if (!isOpen) return null;
  
  return (
    <div 
      className="fixed inset-0 bg-black/20 z-40" 
      aria-hidden="true"
      onClick={(e) => e.stopPropagation()}
    />
  );
};

/**
 * No results component shown when no courses are available
 */
export const NoResults: React.FC = () => (
  <div className="flex flex-col items-center justify-center p-8 text-center">
    <div className="text-gray-400 mb-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
    </div>
    <h4 className="text-lg font-medium text-gray-900">No courses available</h4>
    <p className="text-sm text-gray-500 mt-1">
      Check back soon for new courses in this category.
    </p>
  </div>
);
