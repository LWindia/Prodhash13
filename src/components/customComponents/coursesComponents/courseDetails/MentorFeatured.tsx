"use client"
import React from 'react';
import { logos } from '../../../../../data/mentorFeatured/mentorFeatured';
import Image from 'next/image';

const MentorFeatured = () => {

  return (
   
      
      <div className="relative overflow-hidden bg-white">
        <div className="w-full inline-flex flex-nowrap">
          {/* First scroll */}
          <div className="flex items-center justify-center animate-marquee">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="mx-2 w-32 flex-shrink-0"
              >
                <div className="w-28 h-16 flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={112}
                    height={64}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
          {/* Second scroll (duplicate) */}
          <div className="flex items-center justify-center animate-marquee2" 
               aria-hidden="true">
            {logos.map((logo, index) => (
              <div
                key={`duplicate-${index}`}
                className="mx-2 w-32 flex-shrink-0"
              >
                <div className="w-28 h-16 flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={112}
                    height={64}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
   
  );
};

export default MentorFeatured;