




// components/customComponents/coursesComponents/courseDetails/CoursePricingSection.tsx
"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';
import { courseInfo } from "../../../../../data/courses/courses";
import { Course } from "../../../../../types/courses";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";


interface CoursePricingSectionProps {
  courseId: string;
}



// Loading Skeleton Component
const PricingSkeleton = () => (
  <div className="animate-pulse w-full py-6">
    <div className="max-w-6xl mx-auto px-4">
      <div className="h-8 bg-gray-200 w-3/4 mb-8"></div>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 bg-gray-200 h-96 rounded-lg"></div>
        <div className="flex-1 space-y-4">
          <div className="h-6 bg-gray-200 w-1/2"></div>
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-4 bg-gray-200 w-full"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function CoursePricingSection({ courseId }: CoursePricingSectionProps) {
  const router = useRouter();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = () => {
      try {
        if (!courseId) {
          throw new Error('No course ID provided');
        }

        const foundCourse = courseInfo.find(c => c.slug === courseId);
        if (!foundCourse) {
          throw new Error('Course not found');
        }

        setCourse(foundCourse);
      } catch (error) {
        console.error('Error finding course:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId]);

  if (!courseId) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">No course ID provided</p>
      </div>
    );
  }

  if (loading) {
    return <PricingSkeleton />;
  }

  if (!course) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">Course not found</p>
      </div>
    );
  }

  const discount = course.originalPrice - course.price;
  const discountPercentage = ((discount / course.originalPrice) * 100).toFixed(0);

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 via-black-50 to-red-50 py-6" id="participatenow">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-3xl lg:text-3xl font-bold text-gray-800 mb-8 text-center ">
          Book your spot! We will be
          <span className="text-[#ff0000] block sm:inline sm:ml-2">
            increasing the price soon...
          </span>
        </h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Pricing */}
          <Card className="flex-1 p-4 sm:p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              {course.globalStatus}
              <span className="block text-base sm:text-lg text-gray-600 mt-1">
                (Save ₹{discount.toLocaleString()})
              </span>
            </h2>
            
            <div className="mb-6">
              <span className="text-3xl sm:text-4xl font-bold text-red-600">
                ₹{course.price.toLocaleString()}
              </span>
              <span className="text-gray-500 line-through ml-2">
                ₹{course.originalPrice.toLocaleString()}
              </span>
              <span className="text-gray-500 text-sm sm:text-base">(+ taxes)</span>
              <span className="ml-2 bg-green-100 text-green-800 text-sm px-2 py-1 rounded-full">
                {discountPercentage}% OFF
              </span>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2">
                <Check className="h-6 w-5 text-red-400 mt-1 flex-shrink-0" />
                <button className="text-sm pt-2 pb-2 sm:text-base text-gray-600">
                  Avail the discounted price of ₹{course.price.toLocaleString()} + taxes and save ₹{discount.toLocaleString()}
                </button>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                <p className="text-sm sm:text-base text-gray-600">
                  Recorded videos will be accessible for 365 days.
                </p>
              </div>
            </div>

            <div className="flex justify-center w-full">
              <Button 
                className="w-full sm:w-2/3 bg-[#ff0000] hover:bg-[#ff0000]/90 hover:shadow-md 
                          hover:shadow-black text-white py-4 sm:py-6 text-sm sm:text-base 
                          transition-all duration-300 transform hover:scale-105"
              >
                <a href={course.paymentLink} target="_blank">
                Yes! I want this insane deal for
                <br /> ₹{course.price.toLocaleString()} + taxes
                </a>
              </Button>
            </div>
          </Card>

          {/* Right Column - Features */}
          <div className="flex-1 space-y-8 px-4 sm:px-0">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-700 mb-4">
                What you will get...
              </h3>
              <div className="space-y-3">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.learningOutcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-700 mb-4">
                And bonuses too...
              </h3>
              <div className="space-y-3">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
