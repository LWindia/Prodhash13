// components/customComponents/coursesComponents/courseDetails/KeyOutcomes.tsx
'use client'

import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DisplayCourseContent from './subComponents/DisplayCourseContent';
import LearnersCarousel from './subComponents/LearnersCarousel';
import BenefitsList from './subComponents/BenefitsLists';
import AccreditationCard from './subComponents/AccreditationCard';
import { Course } from '../../../../../types/courses';
import CourseStructure from './subComponents/CourseStructure';

interface KeyOutcomesProps {
  course: Course;
}

export default function KeyOutcomes({ course }: KeyOutcomesProps) {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const rightSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rightSectionRef.current) {
        const scrollPosition = window.scrollY;
        const rightSectionTop = rightSectionRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        setIsSticky(scrollPosition >= rightSectionTop - windowHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='bg-gradient-to-r from-gray-50 to-red-50' id="Modules">
      <div className="flex flex-col lg:flex-row gap-6 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-8">
        {/* Left Section */}
        <div className="w-full lg:w-[80%]">
          <div className="space-y-4 mb-8">
            <h1 className="text-3xl sm:text-3xl lg:text-3xl font-bold tracking-tight">
              What will you{" "}
              <span className="relative">
                <span className="text-[#ff0000]">learn</span>
                <svg
                  className="absolute -top-1 -right-2 w-4 h-4 text-[#ff4d00]/20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <circle cx="12" cy="12" r="12" />
                </svg>
              </span>
              ?
            </h1>
            <p className="text-sm md:text-base font-bold text-muted-foreground">
              {course.shortDescription}
            </p>
          </div>
          {/* <DisplayCourseContent modules={course.module} /> */}
          {/* <CourseStructure modules={course.module}/> */}

          <CourseStructure modules={course.module } />

        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/3">
          <div
            ref={rightSectionRef}
            className={`transition-all duration-300 space-y-6 ${
              isSticky ? "lg:sticky lg:top-4" : ""
            }`}
          >
            {/* Learners Card */}
            <Card className="w-full">
              <CardHeader className="space-y-1">
                <CardTitle className="text-xl sm:text-2xl font-bold">
                  1.7M+ Learners
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  have reaped benefits from our programs
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <LearnersCarousel />
                <BenefitsList />
              </CardContent>
            </Card>

            <AccreditationCard />
          </div>
        </div>
      </div>
    </div>
  );
}