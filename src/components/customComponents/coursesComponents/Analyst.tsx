// components/customComponents/coursesComponents/Analyst.tsx
"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import ChartComponent from "./courseDetails/ChartComponent";
import { Search, User } from "lucide-react";
import { analystData, companyLogos, CompanyName } from "../../../../data/analyst/analyst";
import Image from "next/image";

interface AnalystProps {
  courseId: string;
}

const Analyst: React.FC<AnalystProps> = ({ courseId }) => {
  // Add error handling for undefined courseId
  if (!courseId) {
    return <div>Course ID is required</div>;
  }

  const courseData = analystData[courseId];

  if (!courseData) {
    return <div>No analyst data available for this course</div>;
  }

  const { salary, companies, demand, jobCount, description, title, subtitle } = courseData;

  const chartData = {
    salaryData: salary.values,
    companiesData: companies,
    demandData: demand,
  };

  // Type guard for company validation
  const isValidCompany = (company: string): company is CompanyName => {
    return company in companyLogos;
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-black-50 to-red-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <div className="text-3xl sm:text-3xl font-bold text-[#ff0000] text-center">
            {title} <span className="text-black">{subtitle}</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Salary Chart */}
          <Card className="h-72">
            <span className="font-semibold mb-6 text-base sm:text-md border-2 rounded-br-lg rounded-tl-lg pr-4 pl-4 bg-red-200 border-red-200">
              Average Salaries
            </span>
            <div className="space-y-4 p-4">
              <span className="text-[#ff0000] md:text-sm font-medium bg-red-100/50 px-3 py-1 rounded-full animate-pulse">
                In 2025
              </span>
              <div className="relative sm:h-64">
                <ChartComponent data={chartData.salaryData} label={salary.label} />
              </div>
            </div>
          </Card>

          {/* Companies */}
          <Card className="h-72">
            <span className="font-semibold mb-6 text-base sm:text-md border-2 rounded-br-lg rounded-tl-lg pr-4 pl-4 bg-red-200 border-red-200">
              Companies Hiring
            </span>
            <div className="grid grid-cols-2 p-4 sm:grid-cols-3 gap-4 pt-10 sm:gap-6">
              {companies.map((company) => {
                if (!isValidCompany(company)) return null;
                return (
                  <Image
                    key={company}
                    src={companyLogos[company]}
                    alt={company}
                    height={80}
                    width={80}
                    className="h-6 sm:h-12 object-contain"
                  />
                );
              })}
            </div>
          </Card>

          {/* Jobs Card */}
          <Card className="w-full max-w-sm bg-white">
            <div className="space-y-6">
              <span className="font-semibold mb-6 text-base sm:text-md border-2 rounded-br-lg rounded-tl-lg pr-4 pl-4 bg-red-200 border-red-200">
                Available Jobs
              </span>

              {/* Icons Row */}
              <div className="flex justify-center items-center gap-2 relative">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={`left-${i}`}
                    className="w-8 h-8 rounded-full border-2 border-gray-100 bg-gray-50 flex items-center justify-center"
                  >
                    <User className="w-4 h-4 text-gray-400" />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center relative z-10">
                  <Search className="w-5 h-5 text-red-500" />
                </div>
                {[...Array(3)].map((_, i) => (
                  <div
                    key={`right-${i}`}
                    className="w-8 h-8 rounded-full border-2 border-gray-100 bg-gray-50 flex items-center justify-center"
                  >
                    <User className="w-4 h-4 text-gray-400" />
                  </div>
                ))}
              </div>

              {/* Stats Section */}
              <div className="relative pt-8">
                <div
                  className="absolute inset-x-0 top-0 h-40 bg-red-50 rounded-full scale-[1.3]"
                  style={{
                    borderRadius: "200%/400% 400% 0 0",
                    transform: "scaleX(0.9)",
                  }}
                />
                <div className="relative text-center space-y-2">
                  <h2 className="text-4xl font-bold text-gray-900">{jobCount}</h2>
                  <p className="text-gray-600">
                    Total jobs found online
                    <br />
                    for <span className="font-medium">{salary.label.split(" ")[2]}</span>
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Footer Text */}
        <p className="text-gray-600 text-sm sm:text-sm max-w-6xl">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Analyst;