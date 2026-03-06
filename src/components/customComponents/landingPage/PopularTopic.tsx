import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import curveLine from "../../../../public/assets/CurlLine.svg";
import Image from 'next/image';
import Link from 'next/link';
import { topics } from '../../../../data/popularTopics/popularTopics';

const PopularTopic = () => {
  return (
    <div className="container mx-auto py-8 max-w-7xl px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <p className="text-sm text-teal-500 mb-2">Start Learning From Today</p>
        <h1 className="text-3xl font-bold">
          Popular <span className="text-[#ff0000] relative">
            Technologies
            <span className="absolute bottom-0 left-0 w-full h-1 rounded-full">
              <Image src={curveLine} alt="curve line" className="w-full mb-4" width={100} height={300}></Image>
            </span>
          </span> To Learn
        </h1>
      </div>

      {/* Topics Grid - Now each card is wrapped in a Link */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
        {topics.map((topic, index) => (
          <Link 
            key={index} 
            href={`/courses`} 
            className="block w-full cursor-pointer"
          >
            <Card 
              className={`transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 h-full`} 
              style={{ backgroundColor: getColor(index) }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 mb-4">
                    <span className="text-2xl">{topic.icon}</span>
                  </div>
                  <p className="font-semibold text-lg mb-2 leading-[1.1]">{topic.title}</p>
                  <p className="text-gray-500">{topic.courses} Courses</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

// Function to get colors based on index
const getColor = (index: number) => {
  const colors = [
    "#FEE2E2", // Red
    "#E0F2FE", // Light Blue
    "#D1FAE5", // Green
    "#FBCFE8", // Pink
    "#F9FAFB", // Gray
    "#FEF3C7", // Yellow
  ];
  return colors[index % colors.length];
};

export default PopularTopic;