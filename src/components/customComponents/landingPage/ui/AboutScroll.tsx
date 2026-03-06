


"use client"
import React from 'react';
import Image from 'next/image'; // Using Next.js Image for optimization
import { COMPANY_LOGOS } from '../../../../../data/aboutScroll/aboutScroll';
// Move logos data to a separate file or constant

// Logo component for better reusability
const LogoItem = ({ src, alt }: { src: string; alt: string }) => (
  <div className="mx-2 w-20 md:w-28 lg:w-32 flex-shrink-0">
    <div className="w-14 md:w-20 lg:w-24 h-12 md:h-16 flex items-center justify-center">
      <Image
        src={src}
        alt={alt}
        width={96}
        height={64}
        className="max-h-12 md:max-h-16 w-auto object-contain"
        loading="lazy"
      />
    </div>
  </div>
);

const AboutScroll = () => {
  return (
    <section className="py-10 md:py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-6 md:mb-8 lg:mb-10 text-center max-w-4xl mx-auto">
        1.7M+ <span className='text-[#ff0000]'>Learners Trust Us</span>  – From Learning to Landing Global Big 5 Jobs

          {/* Trusted By 400k+ Students Around The World & Placed in Global Big 5! */}
        </h2>
        
        <div className="relative w-full overflow-hidden bg-white">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Scrolling Content */}
          <div className="w-full inline-flex flex-nowrap">
            {/* First Scroll */}
            <div className="flex items-center justify-center animate-marquee whitespace-nowrap">
              {COMPANY_LOGOS.map((logo, index) => (
                <LogoItem key={`scroll1-${index}`} {...logo} />
              ))}
            </div>
            
            {/* Second Scroll (duplicate) */}
            <div 
              className="flex items-center justify-center animate-marquee2 whitespace-nowrap"
              aria-hidden="true"
            >
              {COMPANY_LOGOS.map((logo, index) => (
                <LogoItem key={`scroll2-${index}`} {...logo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutScroll;