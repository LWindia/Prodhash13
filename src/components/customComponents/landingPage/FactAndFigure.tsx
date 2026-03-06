"use client";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { features } from '../../../../data/factsAndFigure/features';

const handleClickGetStartedWithHash13 = (url: string)=>{
  window.open(url, '_blank')
}

export default function FactsAndFigure() {
  return (
    <div className="container mx-auto max-w-6xl py-6 md:py-12 pt-0 px-4 md:px-6 lg:px-14">
      <div className="flex flex-col lg:flex-row items-start">
        {/* Left Side Section */}
        <div className="mb-6 lg:mb-0 px-4 lg:pr-8 lg:pl-6 lg:sticky lg:top-12 flex flex-col items-center w-full lg:w-[400px]">
          <h2 className="text-sm font-semibold text-teal-500 mb-2 text-center">
            LEARNER SUPPORT & SUCCESS
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            What gives us <span className="text-[#ff0000]">an edge?</span>
          </h3>
          
          <Button onClick={()=> handleClickGetStartedWithHash13('https://learning.hash13.com/')} className="bg-[#ff0000] hover:bg-red-600 text-white w-full md:w-auto">
            Get started with #13
          </Button>
        </div>

        {/* Right Side Section with Card Contents */}
        <div className="grid grid-cols-1 gap-4 md:gap-6 w-full lg:ml-8 lg:w-[1140px]">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`
                bg-white p-3 md:p-0 lg:p-0 md:pl-6 rounded-lg shadow-lg 
                flex flex-col md:flex-row justify-between items-start md:items-center 
                relative border-b border-gray-200
                w-full
                ${index === 0 ? 'md:w-[385px]' : ''}
                ${index === 1 ? 'md:w-[500px]' : ''}
                ${index === 2 ? 'md:w-[400px]' : ''}
                ${index === 3 ? 'md:w-[400px]' : ''}
                ${index === 4 ? 'md:w-[680px]' : ''}
              `}
              style={{
                borderTop: 'solid transparent',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1), 0 2px 20px rgba(0, 0, 0, 0.05)',
              }}
            >
              {/* Container for Feature Data */}
              <div className="flex-1 mb-3 md:mb-0 md:mr-4 md:pl-4 md:pt-4">
                <h3 className="text-2xl md:text-4xl font-bold mb-1 text-[#ff0000]">
                  {feature.number}
                </h3>
                <h4 className="text-sm md:text-md font-semibold mb-1 truncate">
                  {feature.title}
                </h4>
                <p
                  className="text-xs md:text-sm text-gray-600 pb-2 md:pb-4"
                  dangerouslySetInnerHTML={{ __html: feature.description }}
                ></p>
              </div>

              {/* Container for Feature Image */}
              <div className={`
                w-full md:w-auto 
                flex justify-center md:flex-shrink-0 
                ${index === 4 ? 'flex flex-col items-center' : ''}
              `}>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={index === 4 ? 300 : 120}
                  height={index === 4 ? 180 : 80}
                  className="rounded-md h-auto object-cover w-full md:w-auto max-w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}