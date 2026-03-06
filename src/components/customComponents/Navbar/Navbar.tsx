


"use client"
import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose, SheetTrigger } from "@/components/ui/sheet";
import logo from "../../../../public/assets/landingPage/logohash13.svg";
import { MenuData, Program } from "../../../../types/Navbar";
import './styles/navbar.css';
import { courseInfo } from '../../../../data/courses/courses';

// Constants
const VISIBLE_MENU_ITEMS = ['workingProfessionals', 'collegeStudents'] as const;
type MenuKey = typeof VISIBLE_MENU_ITEMS[number];

const DROPDOWN_POSITIONS: Record<MenuKey, { transform: string; width: string }> = {
  workingProfessionals: {
    transform: 'translateX(-67%)',
    width: '1200px',
  },
  collegeStudents: {
    transform: 'translateX(-82%)',
    width: '1200px',
  },
};

/**
 * Formats the title by interpreting formatting tags
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
const ProgramCard: React.FC<Program> = ({ 
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
 * Mobile optimized program card for smaller screens
 */
const MobileProgramCard: React.FC<Program> = ({ 
  title, 
  mentor, 
  duration, 
  image, 
  slug 
}) => {
  return (
    <Link href={slug} className="block">
      <div className="p-3 hover:bg-gray-50 rounded-lg transition-colors">
        <div className="flex gap-3">
          <div className="w-12 h-12 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
            {image && (
              <Image 
                src={image} 
                alt={typeof title === 'string' ? title.replace(/$$[^$$]*\]/g, '') : 'Program Image'} 
                width={48} 
                height={48} 
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-sm line-clamp-2">
              {formatTitle(title)}
            </h3>
            <p className="text-xs text-gray-600">{mentor}</p>
            <div className="flex items-center mt-1">
              <span className="text-xs text-gray-600">⏱️ {duration}</span>
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
const SideCategories: React.FC<{
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
  isMobile?: boolean;
}> = ({ categories, selectedCategory, onCategorySelect, isMobile = false }) => {
  if (isMobile) {
    // Horizontal scrolling categories for mobile
    return (
      <div className="w-full overflow-x-auto py-2 px-1 horizontal-categories">
        <div className="flex gap-2 min-w-max">
          {categories.map((category) => (
            <button
              key={category}
              className={`py-1.5 px-3 rounded-full text-xs whitespace-nowrap transition-colors ${
                selectedCategory === category 
                  ? "bg-red-50 text-red-600 font-medium border border-red-100" 
                  : "bg-gray-50 text-gray-700 border border-gray-100 hover:bg-gray-100"
              }`}
              onClick={() => onCategorySelect(category)}
              aria-selected={selectedCategory === category}
              role="tab"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    );
  }
  
  // Original vertical categories for desktop
  return (
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
};

/**
 * DropdownOverlay component provides a background overlay when dropdown is open
 */
const DropdownOverlay: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
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
 * Mobile menu component that shows audience options
 */
const MobileMenuContent: React.FC<{ 
  onOptionSelect: (option: MenuKey) => void 
}> = ({ onOptionSelect }) => {
  return (
    <div className="py-4">
      <div className="mb-4 border-b pb-3">
        <h3 className="font-semibold text-base mb-1 px-1">Choose your path</h3>
        <p className="text-xs text-gray-500 px-1">Select the category that fits you best</p>
      </div>
      
      <div className="space-y-2">
        <button
          onClick={() => onOptionSelect('workingProfessionals')}
          className="w-full p-3 text-left rounded-lg flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div>
            <div className="font-medium">For Working Professionals</div>
            <div className="text-xs text-gray-500 mt-0.5">Industry-focused programs</div>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </button>
        
        <button
          onClick={() => onOptionSelect('collegeStudents')}
          className="w-full p-3 text-left rounded-lg flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div>
            <div className="font-medium">For College Students</div>
            <div className="text-xs text-gray-500 mt-0.5">Campus to corporate</div>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </button>
      </div>
      
      <div className="mt-6 pt-4 border-t">
        <a href="#contactus">
          <Button className="w-full bg-[#ff0000] text-white hover:bg-red-600">
            Have a Query?
          </Button>
        </a>
      </div>
    </div>
  );
};

/**
 * Mobile dropdown content for courses
 */
const MobileDropdownContent: React.FC<{ 
  data: MenuData, 
  title: string,
  onBack: () => void
}> = ({ data, title, onBack }) => {
  const categoryKeys = Object.keys(data.categories);
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryKeys[0] || '');

  if (!categoryKeys.length) {
    return (
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
  }

  return (
    <div className="flex flex-col">
      <SheetHeader className="px-1 mb-2">
        <div className="flex items-center justify-between">
          <button 
            onClick={onBack}
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            <span className="ml-1">Back</span>
          </button>
          <SheetTitle className="text-center">{title}</SheetTitle>
          <div className="w-12"></div> {/* Spacer for alignment */}
        </div>
      </SheetHeader>
      
      <SideCategories 
        categories={categoryKeys} 
        selectedCategory={selectedCategory} 
        onCategorySelect={setSelectedCategory}
        isMobile={true}
      />
      
      <div className="mt-4">
        <h3 className="font-semibold text-sm px-4 pb-2">Mentorship Programs</h3>
        <div>
          {data.categories[selectedCategory]?.mentorshipPrograms.map((program, index) => (
            <MobileProgramCard key={`mentorship-${index}`} {...program} />
          ))}
        </div>
        
        {data.categories[selectedCategory]?.selfPacedPrograms.length > 0 && (
          <>
            <h3 className="font-semibold text-sm px-4 pb-2 pt-4">Self-paced Programs</h3>
            <div>
              {data.categories[selectedCategory]?.selfPacedPrograms.map((program, index) => (
                <MobileProgramCard key={`selfpaced-${index}`} {...program} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

/**
 * DropdownContent component displays the dropdown menu content
 */
const DropdownContent: React.FC<{ data: MenuData }> = ({ data }) => {
  const categoryKeys = Object.keys(data.categories);
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryKeys[0] || '');

  if (!categoryKeys.length) {
    return (
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
  }

  return (
    <div className="flex flex-col md:flex-row" style={{ minWidth: '750px' }}>
      <SideCategories 
        categories={categoryKeys} 
        selectedCategory={selectedCategory} 
        onCategorySelect={setSelectedCategory} 
      />
      <div className="flex-1 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            {data.categories[selectedCategory]?.mentorshipPrograms.map((program, index) => (
              <ProgramCard key={`mentorship-${index}`} {...program} />
            ))}
          </div>
          <div>
            {data.categories[selectedCategory]?.selfPacedPrograms.map((program, index) => (
              <ProgramCard key={`selfpaced-${index}`} {...program} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Navbar(): JSX.Element {
  const [activeDropdown, setActiveDropdown] = useState<MenuKey | null>(null);
  const [mobileMenuState, setMobileMenuState] = useState<'closed' | 'main' | MenuKey>('closed');

  // Create dynamic menu data from courseInfo
  const menuData = useMemo(() => {
    const dynamicMenuData: Record<MenuKey, MenuData> = {
      workingProfessionals: { categories: {} },
      collegeStudents: { categories: {} }
    };

    // Process courses to build the menu structure
    courseInfo.forEach(course => {
      const category = course.category;
      const courseItem: Program = {
        title: course.title,
        mentor: `by ${course.programBy}`,
        duration: course.hours,
        status: "Active",
        type: "Recorded",
        image: course.backgroundImage,
        slug: `/courses/${course.slug}`
      };

      // Helper function to add course to menu
      const addCourseToMenu = (menuKey: MenuKey) => {
        if (!dynamicMenuData[menuKey].categories[category]) {
          dynamicMenuData[menuKey].categories[category] = {
            mentorshipPrograms: [],
            selfPacedPrograms: []
          };
        }

        const categoryData = dynamicMenuData[menuKey].categories[category];
        if (categoryData.mentorshipPrograms.length < 3) {
          categoryData.mentorshipPrograms.push(courseItem);
        } else {
          categoryData.selfPacedPrograms.push(courseItem);
        }
      };

      // Add to both menus
      VISIBLE_MENU_ITEMS.forEach(menuKey => addCourseToMenu(menuKey));
    });

    return dynamicMenuData;
  }, []);

    const getDropdownStyles = (key: MenuKey): React.CSSProperties => ({
    position: 'absolute',
    left: '0',
    top: '100%',
    maxHeight: '80vh',
    overflowY: 'auto',
    marginTop: '1.2rem',
    transform: DROPDOWN_POSITIONS[key].transform,
    width: DROPDOWN_POSITIONS[key].width
  });

  // Handle mobile menu content based on state
  const renderMobileContent = () => {
    if (mobileMenuState === 'main') {
      return (
        <MobileMenuContent 
          onOptionSelect={(option) => setMobileMenuState(option)} 
        />
      );
    }
    
    if (mobileMenuState === 'workingProfessionals') {
      return (
        <MobileDropdownContent 
          data={menuData.workingProfessionals}
          title="For Working Professionals"
          onBack={() => setMobileMenuState('main')}
        />
      );
    }
    
    if (mobileMenuState === 'collegeStudents') {
      return (
        <MobileDropdownContent 
          data={menuData.collegeStudents}
          title="For College Students"
          onBack={() => setMobileMenuState('main')}
        />
      );
    }
    
    return null;
  };

  // Handle opening the mobile menu
  const handleOpenMobileMenu = (open: boolean) => {
    if (open) {
      setMobileMenuState('main');
    } else {
      setMobileMenuState('closed');
    }
  };

  return (
    <header className="flex w-full mx-auto items-center max-w-7xl px-6 lg:px-14 overflow-visible h-16 sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between h-full relative">
        <Link href="/" aria-label="Home">
          <Image src={logo} alt="#13 logo" width={50} height={50} className="object-contain h-full" priority />
        </Link>
        
        {/* Mobile menu with hamburger */}
        <div className="md:hidden">
          <Sheet open={mobileMenuState !== 'closed'} onOpenChange={handleOpenMobileMenu}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full sm:w-[320px] p-0 overflow-hidden">
              <div className="h-full overflow-y-auto py-4 px-4">
                {renderMobileContent()}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex flex-1 justify-end items-center space-x-6 h-full">
          <nav className="flex items-center space-x-6 h-full">
            {VISIBLE_MENU_ITEMS.map((key) => (
              <div key={key} className="relative dropdown-container">
                <DropdownMenu
                  open={activeDropdown === key}
                  onOpenChange={(open) => setActiveDropdown(open ? key : null)}
                >
                  <DropdownOverlay isOpen={activeDropdown === key} />
                  <DropdownMenuTrigger className="flex items-center mx-auto space-x-1 text-sm hover:text-[#ff0000] relative z-50">
                    <span>
                      {key === "workingProfessionals"
                        ? "For working professionals"
                        : "For college students"}
                    </span>
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    className={`dropdown-menu-content dropdown-${key}`}
                    style={getDropdownStyles(key)}
                  >
                    <div className="bg-white rounded-lg shadow-lg p-4">
                      <DropdownContent data={menuData[key]} />
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ))}
          </nav>
          <div className="flex items-center space-x-4 h-full">
            <a href="#contactus">
              <Button className="bg-[#ff0000] text-white hover:bg-red-600">Query</Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
