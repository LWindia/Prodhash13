"use client"
import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronRight, Star, Clock } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';
import { courseInfo } from '../../../data/courses/courses';

interface Category {
  name: string;
  highlight?: boolean;
  count?: number;
}

interface Course {
  _id: string;
  title: string;
  category: string;
  backgroundImage: string;
  rating?: number;
  hours: string;
  slug: string;
  shortDescription: string;
}

const CoursePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Courses");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const formatTitle = (title: string) => {
    const parts = title.split('|').map(part => part.trim());
    const mainTitle = parts[0];
    const subtitle = parts[1];

    const applyFormatting = (text: string) => {
      let isBold = false;
      let isRed = false;
      const result: JSX.Element[] = [];
      let currentText = '';

      for (let i = 0; i < text.length; i++) {
        if (text.slice(i).startsWith('[B]')) {
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
        else if (text.slice(i).startsWith('[/B]')) {
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
        else if (text.slice(i).startsWith('[R]')) {
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
        else if (text.slice(i).startsWith('[/R]')) {
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
          currentText += text[i];
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

      return result;
    };

    return (
      <div className="flex flex-col gap-0.5">
        <div className="text-sm leading-[1.1] -space-y-[2px]">
          {applyFormatting(mainTitle)}
        </div>
        {subtitle && (
          <div className="text-xs leading-tight">
            {subtitle}
          </div>
        )}
      </div>
    );
  };

  // Categories with Counts
  const categoriesWithCounts = useMemo(() => {
    const categoryCounts: { [key: string]:  number } = courseInfo.reduce((acc, course) => {
      acc[course.category] = (acc[course.category] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });

    const baseCategories: Category[] = [
      { name: "All Courses", highlight: false },
      // { name: "Popular Courses", highlight: true },
      { name: "DevOps", highlight: false },
      { name: "Cloud Computing", highlight: false },
      { name: "Programming", highlight: false },
      { name: "Databases", highlight: false },
      { name: "System Administration", highlight: false },
      { name: "Artificial Intelligence", highlight: false },
      { name: "Web Development", highlight: false },
      { name: "Data Applications", highlight: false },
      { name: "Web Scraping & Data Extraction", highlight: false },
      { name: "Cybersecurity & Linux", highlight: false },
      // { name: "Cloud Computing", highlight: false },
      
      
      { name: "MLOPS", highlight: false },
    ];

    return baseCategories.map(category => ({
      ...category,
      count: category.name === "All Courses" 
        ? courseInfo.length 
        : categoryCounts[category.name] || 0,
      displayCount: category.name === "All Courses"
        ? courseInfo.length 
        : (categoryCounts[category.name] || 0 ) === 0 ? "Coming soon" : categoryCounts[category.name],
    }));
  }, []);

  const handleCategoryClick = (categoryName: string): void => {
    setSelectedCategory(categoryName);
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  const filteredCourses = courseInfo.filter((course: Course) => {
    if (selectedCategory === "All Courses") return true;
    return course.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold">
            Discover Our <span className="text-red-500"> Courses</span>
          </h1>
          <Button
            variant="outline"
            className="lg:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            Categories
          </Button>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Sidebar */}
          <div className={`
            w-full lg:w-64 lg:flex-shrink-0 transition-all duration-300
            ${isSidebarOpen ? 'block' : 'hidden lg:block'}
          `}>
            <div className="lg:sticky lg:top-4">
              <ScrollArea className="h-auto lg:h-[calc(100vh-200px)] pr-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-3 ">
                  {categoriesWithCounts.map((category) => (



                    <button 
                      key={category.name} 
                      onClick={()=> handleCategoryClick(category.name)}
                      className={`flex items-center justify-between w-full p-3 lg:p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all text-left
                        ${category.highlight ? 'bg-pink-50' : 'bg-white'}
                        ${selectedCategory === category.name ? 'border-red-50- bg-red-50': ''}
                        ${typeof category.displayCount === 'string' ? 'opacity-50': ''}
                        disabled={typeof category.displayCount === 'string' ? 'opacity-50' : ''}
                      `}
                      >
                        <span className="text-xs sm:text-sm font-medium ">{category.name}</span>
                        <div className="flex items-center gap-2 text-gray-500 flex-shrink-0">
                          <span className="text-xs sm:text-sm">({category.displayCount})</span>
                          <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                        </div>
                      </button>


                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>

          {/* Course Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course: Course) => (
                  <Link href={`/courses/${course.slug}`} key={course._id}>
                    <Card className="flex flex-col h-full hover:shadow-lg transition-all duration-300 group">
                      {/* Image Container */}
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={course.backgroundImage}
                          alt={course.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>

                      {/* Content Container */}
                      <CardFooter className="flex flex-col flex-1 p-4">
                        {/* Title */}
                        <div className="min-h-[2.5rem] mb- text-left w-full">
  <h3 className="font-semibold text-left line-clamp-2 flex flex-col items-start">
    {formatTitle(course.title)}
  </h3>
</div>

{/* Description */}
<p className="text-xs text-gray-600 mb-4 line-clamp-2 text-left w-full">
  {course.shortDescription}
</p>

                        {/* Stats Row */}
                        <div className="flex items-center justify-between mt-auto w-full">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center">
                              <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                              <span className="text-xs text-gray-600 ml-1">
                                {course.rating ? course.rating.toFixed(1) : 'N/A'}
                              </span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <Clock className="w-3 h-3 mr-1" />
                              <span className="text-xs">{course.hours}h</span>
                            </div>
                          </div>
                          
                          <Badge 
                            variant="secondary" 
                            className="text-[10px] px-2 py-0.5 truncate max-w-[180px]"
                          >
                            {course.category}
                          </Badge>
                        </div>
                      </CardFooter>
                    </Card>
                  </Link>
                ))
              ) : (
                <div className="col-span-full flex items-center justify-center h-40 text-gray-500">
                  No courses found in this category.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;