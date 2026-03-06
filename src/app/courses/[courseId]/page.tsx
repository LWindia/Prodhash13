
"use client";

import React, { useEffect, useState } from "react";
import { useParams } from 'next/navigation';
import { Course } from "../../../..//types/courses";
import { courseInfo } from "../../../../data/courses/courses";
import CourseDetailHero from "@/components/customComponents/coursesComponents/courseDetails/CourseDetailsHero";
import Tools from "@/components/customComponents/coursesComponents/Tools";
import Analyst from "@/components/customComponents/coursesComponents/Analyst";
import Faq from "@/components/customComponents/coursesComponents/Faq";
// import CardStack from "@/components/customComponents/coursesComponents/CardStack";
import Projects from "@/components/customComponents/coursesComponents/courseDetails/Projects";
import ProgramHighlights from "@/components/customComponents/coursesComponents/courseDetails/ProgramHighlights";
import MentorProfile from "@/components/customComponents/coursesComponents/courseDetails/Mentor";
import WhoisthisProgramFor from "@/components/customComponents/coursesComponents/courseDetails/WhoisthisProgramFor";
import KeyOutcomes from "@/components/customComponents/coursesComponents/courseDetails/KeyOutcomes";
import CourseTestimonials from "@/components/customComponents/coursesComponents/courseDetails/CourseTestimonials";
import CoursePricingSection from "@/components/customComponents/coursesComponents/courseDetails/CoursePricingSection";
import CertificateDisplay from "@/components/customComponents/coursesComponents/courseDetails/CertificateDetails";
import ErrorBoundary from '@/components/errorHandling/ErrorBoundary';
import Navbar from '@/components/customComponents/coursesComponents/CourseNavbar';
import { LeftRightAlumniCarousel } from "@/components/customComponents/coursesComponents/LeftRightNowAlumniSection";
import SupportContact from "@/components/customComponents/landingPage/SupportContact";
import QueryForm from "@/components/customComponents/coursesComponents/courseDetails/ContactAndSupport";
import CourseStructure from "@/components/customComponents/coursesComponents/courseDetails/subComponents/CourseStructure";
import EnrollNow from "@/components/customComponents/coursesComponents/EnrollNow";

// Loading Skeleton Component
const LoadingSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-96 bg-gray-200 mb-8"></div>
    <div className="max-w-6xl mx-auto px-4">
      <div className="h-8 bg-gray-200 w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-200 w-1/2 mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-40 bg-gray-200 rounded"></div>
        ))}
      </div>
    </div>
  </div>
);

// Error Component
const ErrorDisplay = ({ message }: { message: string }) => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Oops! Something went wrong</h2>
      <p className="text-gray-600 mb-6">{message}</p>
      <button 
        onClick={() => window.location.reload()}
        className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
      >
        Try Again
      </button>
    </div>
  </div>
);

export default function CourseDetailPage() {
  const params = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const courseId = params?.courseId as string;
        if (!courseId) {
          throw new Error('No course ID provided');
        }

        const foundCourse = courseInfo.find(c => c.slug === courseId);
        if (!foundCourse) {
          throw new Error('Course not found');
        }

        setCourse(foundCourse);
      } catch (error) {
        console.error('Error fetching course:', error);
        setError(error instanceof Error ? error.message : 'Failed to load course');
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [params]);

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return <ErrorDisplay message={error} />;
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Course Not Found</h2>
          <p className="text-gray-600">The course you&lsquo;re looking for doesn&lsquo;t exist.</p>
        </div>
      </div>
    );
  }

  return (
    
    <ErrorBoundary>
      <main className="min-h-screen bg-gray-50">
      <Navbar />
        <section className="">
          <CourseDetailHero courseId={params.courseId as string} />
          {/* <CourseDetailHero /> */}
        </section>

        {/* <CourseStructure /> */}

        <section className="">
          <ProgramHighlights course={course} />
        </section>

        <section className=" ">
          <Tools courseId={params.courseId as string}/>
        </section>

          {/* hidden */}
        {/* <section className="">
          <Projects  />
        </section> */}
        
                <section className="">
                 
                <KeyOutcomes course={course} />
                </section>

          <LeftRightAlumniCarousel />

        <section className=" ">
          <MentorProfile />
        </section>

        <section className="">
          <WhoisthisProgramFor course = {course} />
        </section>
        
<section className="">
  <Analyst courseId={course.slug} />
</section>

        <section className="">
  <Faq courseId={params.courseId as string} />
</section>

    

        <section className="">
        <CoursePricingSection courseId={params.courseId as string} />
        </section>

        <section className="">
          <CourseTestimonials />
        </section>

        <section className="">
        <CertificateDisplay course={course} />
        </section>
        <QueryForm />

        <EnrollNow course={course}  />
      </main>
    </ErrorBoundary>
  );
}