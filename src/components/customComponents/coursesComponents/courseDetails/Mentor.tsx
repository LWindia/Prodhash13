"use client";
import Image from "next/image"
import React, { useEffect, useState, useRef } from 'react';
import { Youtube, Instagram, Linkedin } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { CircleCheck } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import MentorFeatured from '@/components/customComponents/coursesComponents/courseDetails/MentorFeatured'
import { mentorImages } from "../../../../../data/mentor/mentor";


const MentorProfile = () => {

  // State to track if the component is in view
  const [isVisible, setIsVisible] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  // Use Intersection Observer to set isVisible to true when component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once it's visible
        }
      },
      { threshold: 0.4 } // 40% of the component in view to trigger
    );

    if (profileRef.current) observer.observe(profileRef.current);
    return () => observer.disconnect();
  }, []);

  // Counter function to animate each number
  const useCounter = (target: number, duration: number, start: boolean) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!start) return; // Only start if the component is visible
      let startValue = 0;
      const increment = Math.ceil(target / (duration / 16)); // Calculate increment

      const counter = setInterval(() => {
        startValue += increment;
        if (startValue >= target) {
          setCount(target); // Snap to target count
          clearInterval(counter);
        } else {
          setCount(startValue);
        }
      }, 16); // Update every 16ms for 60fps

      return () => clearInterval(counter);
    }, [target, duration, start]);

    return count;
  };

  // Create separate counter states for each social stat
  const youtubeCount = useCounter(300000, 2000, isVisible);
  const instagramCount = useCounter(1100000, 2000, isVisible);
  const linkedinCount = useCounter(60000, 2000, isVisible);

  // Social stats data with URLs and counter values
  const socialStats = [
    { 
      icon: <Youtube className="w-6 h-6 text-red-600" />, 
      count: youtubeCount,
      label: "subscribers", 
      url: "https://www.youtube.com/@IIECconnect"
    },
    { 
      icon: <Instagram className="w-6 h-6 text-pink-600" />, 
      count: instagramCount,
      label: "followers", 
      url: "https://www.instagram.com/vimaldaga.india/?hl=en"
    },
    { 
      icon: <Linkedin className="w-6 h-6 text-blue-600" />, 
      count: linkedinCount,
      label: "followers", 
      url: "https://www.linkedin.com/in/vimaldaga/"
    }
  ];

  return (
    <div className='bg-gradient-to-br from-gray-50 via-black-50 to-red-50' id="mentor">
      <div ref={profileRef} className="max-w-6xl pt-12 mx-auto md:p-6 lg:px-8">
        <h1 className="text-center mb-4 font-bold text-3xl sm:text-3xl text-black pb-4">
          Know Your Mentor : <span className="text-[#ff0000]"> The World Record Holder - Mr Vimal Daga </span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Image Carousel */}
          <div className="space-y-6">
            <div className="rounded-xl overflow-hidden border-2 border-gray-100 shadow-lg bg-white p-1">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="w-full md:h-[500px] rounded-lg overflow-hidden sm:h-[450px]"
              >
                {mentorImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <Image 
                      src={image} 
                      alt={`Mentor Image ${index + 1}`} 
                      fill
                      className="w-full h-full object-cover" 
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            
            {/* Profile Card - Below the image */}
            <div className="bg-blue-50 rounded-xl p-6 shadow-sm border border-blue-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                <span className="text-[#ff0000] text-xs md:text-sm font-medium bg-red-100/50 px-3 py-1 rounded-full">
                  Internationally Recognised Industry Expert
                </span>
              </div>
              <div className="space-y-1 pl-5">
                <h2 className="md:text-2xl font-bold text-gray-900">Mr. Vimal Daga</h2>
                <p className="text-gray-600 text-sm">Founder of LinuxWorld | #13 | IIEC | JAZBAA</p>
              </div>
            </div>
            
            {/* Social Stats Section - Moved below profile card with same width */}
            <div className="flex justify-between bg-blue-50 rounded-xl p-4 shadow-sm border border-blue-100">
              {socialStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <a href={stat.url} target="_blank" rel="noopener noreferrer">
                    <div className="flex justify-center">{stat.icon}</div>
                  </a>
                  <div className="font-bold text-md text-gray-900">
                    {stat.count.toLocaleString()}+
                  </div>
                  <div className="text-gray-600 text-xs font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6 -mb-3">
              <div className="space-y-4 text-black-800">
                <ul className="grid md:grid-cols-2 gap-y-2 list-disc pl-5 text-black -mb-1 list-none sm:grid-cols-1">
                  <li className="leading-relaxed text-sm leading-tight"><CircleCheck className='inline text-green-400 ml-2' /> World Record Holder</li>
                  <li className="leading-relaxed text-sm leading-tight"><CircleCheck className='inline text-green-400 ml-2' /> Two-Time TEDx Speaker</li>
                  <li className="leading-relaxed text-sm leading-tight"><CircleCheck className='inline text-green-400 ml-2' /> Mentor & Visionary Educator</li>
                  <li className="leading-relaxed text-sm leading-tight"><CircleCheck className='inline text-green-400 ml-2' /> 22+ Years of Rich Experience</li>
                  <li className="leading-relaxed text-sm leading-tight"><CircleCheck className='inline text-green-400 ml-2' /> Founder of LinuxWorld Informatics Pvt. Ltd.</li>
                </ul>

                <p className="text-black text-md -mb-2 pl-6">
                  Mr. Vimal Daga is a globally recognized leader in DevOps, Cloud Computing, and AI. Through his unique teaching style and real-world training approach, he continues to transform the lives of learners and professionals—helping them gain skills that matter in today&apos;s tech-driven world.
                </p>
                
                <p className="pl-6 font-semibold">🔹 Unmatched Achievements</p>
                <ul className="pl-10 list-disc">
                  <li>Holds a World Record for completing 11 AWS Certifications in just 11 days.</li>
                  <li>Recognized as a Senior IT Consultant by top global companies.</li>
                </ul>

                <p className="pl-6 font-semibold mt-4">🔹 Recognized Thought Leader</p>
                <ul className="pl-10 list-disc">
                  <li>Two-time TEDx Speaker, inspiring audiences with his journey and insights.</li>
                  <li>Invited by top institutions and platforms for his expertise in next-gen technologies.</li>
                </ul>

                <p className="pl-6 font-semibold mt-4">🔹 Impact Beyond Tech</p>
                <ul className="pl-10 list-disc">
                  <li>A true philanthropist, committed to empowering youth through skill-based learning.</li>
                  <li>Deeply respected for his humility, clarity of vision, and passion for uplifting others.</li>
                </ul>
              </div>
            </div>

            {/* Companies Section */}
            <div className="border border-gray-200 rounded-xl py-4 shadow-sm bg-white">
              <p className="text-black font-semibold text-sm px-4 overflow-hidden inset-2">Companies benefited with his trainings & consultancy</p>
              <MentorFeatured />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfile;