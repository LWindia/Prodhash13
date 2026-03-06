import React from 'react';
import { User2, GraduationCap, MonitorPlay, Video, Globe } from 'lucide-react';
import { CardProps } from '../../../../types/coreFeatures';
import curveLine from "@../../../public/assets/CurlLine.svg";
import Image from "next/image";


const Card: React.FC<CardProps> = ({ icon, title, description, bgColor, iconBgColor, textColor }) => (
  <div className={`w-64 h-64 rounded-2xl shadow-lg ${bgColor} ${textColor} flex flex-col items-center text-center overflow-hidden`}>
    <div className="w-full h-1/2 flex items-center justify-center">
      <div className={`rounded-lg p-3 ${iconBgColor} flex items-center justify-center`}>
        {icon}
      </div>
    </div>
    <div className="w-full h-1/2 p-4 flex flex-col justify-center">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  </div>
);

const CoreFeature = () => {
  return (
    <div className="w-full lg:px-14  mx-auto px-6 bg-white-500 relative overflow-hidden"> {/* Adjusted height here */}
      {/* Decorative Elements */}
      <div className="absolute top-8 left-12">
        <div className="relative w-6 h-6">
          <div className="absolute w-4 h-px bg-red-200 rotate-45 right-0"></div>
          <div className="absolute h-4 w-px bg-red-200 rotate-45 right-0.5"></div>
        </div>
      </div>

      <div className="absolute bottom-20 left-20">
        <Globe className="w-24 h-24 text-red-100/20" />
      </div>

      <div className="absolute top-40 right-20">
        <div className="w-10 h-10 rounded-full border border-red-100/30"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-teal-500 text-sm font-semibold tracking-wide mb">CORE FEATURES</p>
          <h1 className="text-3xl font-bold">
          Why <span className="text-[#ff0000] relative">
            Choose 
            <span className="absolute bottom-0 left-0 w-full h-1  rounded-full">

            <Image src={curveLine} alt="curve line" className='w-full mb-4' width={100} height={300}></Image>
            </span>
          </span> #13
        </h1>
        </div>

        {/* Features Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          <Card
            icon={<User2 className="w-12 h-12 text-white" />}
            title="Learn from the World Record Holder"
            description="Be mentored by Vimal Daga who has set benchmarks in technology."
            bgColor="bg-white"
            iconBgColor="bg-blue-400"
            textColor="text-gray-800"
          />
          <Card
            icon={<GraduationCap className="w-12 h-12 text-white" />}
            title="Learner Success Stories "
            description="Join a thriving community of learners who have transformed their skills and careers."
            bgColor="bg-white"
            iconBgColor="bg-pink-500"
            textColor="text-gray-800"
          />
          <Card
            icon={<MonitorPlay className="w-12 h-12 text-white" />}
            title="Industry-Relevant Projects  "
            description="Work on real-world projects to gain practical exposure and make your learning job-ready!"
            bgColor="bg-white"
            iconBgColor="bg-green-400"
            textColor="text-gray-800"
          />
          <Card
            icon={<Video className="w-12 h-12 text-white" />}
            title="24x7 Doubt-Solving Support "
            description="Never get stuck! Our dedicated tech team is available 24x7 to help you overcome challenges."
            bgColor="bg-white"
            iconBgColor="bg-red-400"
            textColor="text-gray-800"
          />
        </div>
      </div>
    </div>
  );
};

export default CoreFeature;
