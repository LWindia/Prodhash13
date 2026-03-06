import React from 'react';
import Image from 'next/image';

// Trained Teachers Sub-component
const TrainedTeachersCard = () => {
  return (
    <div className="absolute right-0 bottom-12 transform translate-x-1/2 bg-white rounded-xl shadow-lg p-6 w-[280px]">
      <div className="flex items-center gap-4 mb-5">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100">
          <Image 
            src="/teacher-icon.jpg" 
            alt="Teacher Icon" 
            width={40} 
            height={40}
            className="object-cover"
          />
        </div>
        <h3 className="text-lg font-semibold text-[#2F327D]">Trained Teachers</h3>
      </div>
      <div className="space-y-3">
        <div className="h-2 bg-gray-200 rounded-full w-[75%]" />
        <div className="h-2 bg-gray-200 rounded-full w-[50%]" />
      </div>
    </div>
  );
};

export default function LeftAbout() {
  return (
    <div className="relative w-full min-h-screen bg-white p-8">
      {/* Decorative Elements */}
      <div className="absolute top-8 left-8 w-16 h-16 rounded-full bg-[#FFE5DB] opacity-80" />
      <div className="absolute top-6 right-8 w-24 h-24">
        <div className="grid grid-cols-7 gap-1">
          {[...Array(49)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-[#E7EAFF]" />
          ))}
        </div>
      </div>
      <div className="absolute bottom-32 left-32 w-4 h-4 rounded-full bg-[#B1E3FF]" />
      <div className="absolute top-1/4 right-12 w-4 h-4 rounded-full bg-[#FFB6D9]" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-12">
          {/* Left Column - Images Section */}
          <div className="relative pt-8">
            {/* Logo Circle */}
            <div className="absolute top-0 left-0 w-24 h-24 rounded-full overflow-hidden bg-[#2F327D]">
              <Image
                src="/logo-circle.jpg"
                alt="Logo"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>

            {/* Top Image Section */}
            <div className="relative ml-auto mr-0 mt-12 mb-12 w-[85%]">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200 shadow-lg">
                <Image
                  src="/top-image.jpg"
                  alt="Learning Environment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full py-1.5 px-3 flex items-center space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#4AE087]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5757]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#549CFF]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Image Section */}
            <div className="relative w-[85%]">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200 shadow-lg">
                <Image
                  src="/bottom-image.jpg"
                  alt="Learning Environment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full py-1.5 px-3 flex items-center space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#4AE087]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5757]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#549CFF]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Curved Arrow */}
            <div className="absolute bottom-1/3 -right-8">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                <path d="M20 80C20 50 80 50 80 20" stroke="#FFB199" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="80" cy="20" r="4" fill="#FFB199"/>
              </svg>
            </div>

            {/* Trained Teachers Card */}
            <TrainedTeachersCard />
          </div>

          {/* Right Column - Content Section */}
          <div className="flex flex-col pt-12">
            <h2 className="text-[#80D0C7] text-sm font-medium mb-4">About #13</h2>
            <h1 className="text-[2.75rem] leading-tight font-bold text-[#2F327D] mb-4">
              You Can Learn<br />
              Anything, Anytime<br />
              From <span className="relative inline-block">
                Anywhere
                <span className="absolute -bottom-0.5 left-0 w-full h-2 bg-[#FF5757] -z-10" />
              </span>
            </h1>
            <p className="text-gray-500 mb-12">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
            </p>

            {/* Features */}
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#ff0000] flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#ff0000]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#2F327D] mb-2">All Classes Video Provided</h3>
                  <p className="text-gray-500">There are many variations of passages of but the majority have suffered.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#2F327D] mb-2">Online Class From Expert Teachers</h3>
                  <p className="text-gray-500">There are many variations of passages of but the majority have suffered.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}