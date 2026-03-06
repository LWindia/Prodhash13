"use client";
import Image from "next/image";
import { Card, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { courseInfo } from "../../../../data/courses/courses";
import curveLine from "@../../../public/assets/CurlLine.svg";
import { Course } from "../../../../types/courses";

// Define SimplifiedCourse type
type SimplifiedCourse = Pick<Course, '_id' | 'title' | 'category' | 'backgroundImage' | 'rating' | 'hours' | 'slug' | 'shortDescription'>;

// Format title function for both card types
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
              className={`text-[#ff0000] ${isBold ? 'font-bold' : ''} inline`}
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
            ${isRed ? 'text-[#ff0000]' : ''}
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
    <div className="flex flex-col text-left">
      <div className="text-xs sm:text-sm leading-tight">
        {applyFormatting(mainTitle)}
      </div>
      {subtitle && (
        <div className="text-[10px] sm:text-xs text-gray-600">
          {subtitle}
        </div>
      )}
    </div>
  );
};

// Desktop CourseCard component (your original)
const DesktopCourseCard = ({ course }: { course: SimplifiedCourse }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`courses/${course.slug}`);
  }

  return (
    <Card 
      onClick={handleClick} 
      className="group relative overflow-hidden w-full cursor-pointer transition-transform hover:scale-105 flex flex-col h-full"
    >
      <div className="h-[200px] sm:h-[260px] overflow-hidden">
        <Image 
          src={course.backgroundImage}
          alt={course.title}
          fill
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <CardFooter className="p-2 flex flex-col flex-1 bg-white">
        <div className="mb-2 overflow-hidden">
          <h3 className="line-clamp-3 text-xs sm:text-sm text-left">
            {formatTitle(course.title)}
          </h3>
        </div>

        <div className="flex items-center justify-between mt-auto w-full">
          <span className="text-left">
            <Badge className="bg-gray-100 text-black text-[10px] sm:text-xs hover:bg-gray-50">
              {course.category}
            </Badge>
          </span>
          <span className="text-[10px] sm:text-xs text-gray-600">
            {course.hours} hrs.
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

// Mobile CourseCard component (new style)
const MobileCourseCard = ({ course }: { course: SimplifiedCourse }) => {
  return (
    <div className="flex flex-col h-full hover:shadow-lg transition-all duration-300 group bg-white rounded-lg overflow-hidden border border-gray-200">
      {/* Image Container */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={course.backgroundImage}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw"
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-1 p-4">
        {/* Title */}
        <div className="min-h-[2.5rem] mb-2 text-left w-full">
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
              <span className="text-xs">{course.hours} hrs</span>
            </div>
          </div>
          
          <Badge 
            variant="secondary" 
            className="text-[10px] px-2 py-0.5 truncate max-w-[180px]"
          >
            {course.category}
          </Badge>
        </div>
      </div>
    </div>
  );
};

// Combined CourseCard component with responsive behavior
const CourseCard = ({ course }: { course: SimplifiedCourse }) => {
  return (
    <>
      {/* Desktop/Tablet version - sm and up */}
      <div className="hidden sm:block">
        <DesktopCourseCard course={course} />
      </div>

      {/* Mobile version - only on xs */}
      <Link href={`/courses/${course.slug}`} className="block sm:hidden">
        <MobileCourseCard course={course} />
      </Link>
    </>
  );
};

export default function CoursesComponent() {
  // Simplify the course data
  const simplifiedCourses: SimplifiedCourse[] = courseInfo.map(course => ({
    _id: course._id,
    title: course.title,
    category: course.category,
    backgroundImage: course.backgroundImage,
    rating: course.rating,
    hours: course.hours,
    slug: course.slug,
    shortDescription: course.shortDescription
  }));

  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 py-8" id="courses">
      <div className="text-center mb-6 sm:mb-10">
        <h2 className="text-xs sm:text-sm text-muted-foreground mb-2 text-teal-500 font-semibold">
          POPULAR COURSES
        </h2>
        <h1 className="text-2xl sm:text-3xl font-bold">
          Choose From Our Top{" "}
          <span className="text-[#ff0000] relative">
            Courses
            <span className="absolute bottom-0 left-0 w-full h-1">
              <Image 
                src={curveLine} 
                alt="curve line" 
                className="w-full mb-4" 
                width={100}
                height={100}
                style={{ height: 'auto' }}
              />
            </span>
          </span>
        </h1>
      </div>
      
      {/* First row of courses (5 cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mt-4 p-1 sm:p-2">
        {simplifiedCourses.slice(0, 5).map((course) => (
          <CourseCard 
            key={course._id} 
            course={course} 
          />
        ))}
      </div>
      
      {/* Second row of courses (5 more cards) - Only visible on sm screens and up */}
      <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mt-4 p-1 sm:p-2">
        {simplifiedCourses.slice(5, 10).map((course) => (
          <CourseCard 
            key={course._id} 
            course={course} 
          />
        ))}
      </div>
      
      {/* Mobile view will still only show 5 courses as per your request */}
      
      <div className="text-center mt-6 sm:mt-10">
        <Link 
          className="bg-[#ff0000] px-4 py-2 sm:px-6 sm:py-3 cursor-pointer rounded-lg text-white text-sm sm:text-base hover:bg-red-500 transition-colors" 
          href="/courses" 
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}