'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function DiscordCommunity() {
  const useIntersectionObserver = (
    ref: React.RefObject<Element>,
    options: IntersectionObserverInit = {
      threshold: 0.1,
      root: null,
      rootMargin: "0px",
    }
  ): boolean => {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting);
      }, options);

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        observer.disconnect();
      };
    }, [ref, options]);

    return isIntersecting;
  };

  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(ref, { threshold: 0.1 });

  // State for modal visibility and selected image
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Add these after existing useState declarations
  const [isVideoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Add this after handleImageClick function
  const handleVideoClick = (videoSrc: string) => {
    setSelectedVideo(videoSrc);
    setVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setVideoModalOpen(false);
    setSelectedVideo(null);
  };

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="bg-[#ff0000] overflow-x-hidden">
      <div className="flex max-w-5xl mx-auto flex-col lg:flex-row w-full gap-8 bg-[#ff0000] p-4 md:rounded-lg">
        <div className="container sm:px-6 mx-auto pt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center max-w-6xl">
          {/* Left side with code screenshots */}
          <div
            ref={ref}
            className={`relative grid grid-cols-2 gap-4 mt-12 mb-12 transition-transform duration-1000 ease-out`}
          >
            <div className="relative col-span-2">
              {/* First card - Image */}
              <Image
                src="/dis3.png"
                alt="Code editor screenshot"
                width={300}
                height={220}
                className={`border-4 rounded-lg shadow-lg md:ml-[30%] ml-[5%] transform transition-all duration-1000 ease-out ${
                  isIntersecting ? "translate-y-[-40px]" : "translate-y-[50px]"
                } max-w-[80%] sm:max-w-full`}
                onClick={() => handleImageClick("/dis3.png")}
              />

              {/* Fourth card - Image */}
              <Image
                src="/dis3.png"
                alt="Code editor screenshot"
                width={300}
                height={220}
                className={`border-4 rounded-lg shadow-lg md:ml-[40%] ml-[15%] transform transition-all duration-1000 ease-out ${
                  isIntersecting 
                    ? "translate-y-[-20px] md:translate-x-[-30px]" 
                    : "translate-y-[30px] translate-x-0"
                } max-w-[80%] sm:max-w-full`}
                onClick={() => handleImageClick("/dis3.png")}
              />
          
              {/* Second card - Image */}
              <Image
                src="/dis4.png"
                alt="Code editor screenshot"
                width={300}
                height={220}
                className={`border-4 absolute bottom-[50%] md:left-[-10%] left-[0%] rounded-lg shadow-lg transform transition-all duration-1000 ease-out ${
                  isIntersecting
                    ? "translate-y-[-0px] translate-x-[10px]"
                    : "translate-y-[80px] translate-x-10"
                } max-w-[80%] sm:max-w-full`}
                onClick={() => handleImageClick("/dis4.png")}
              />
          
              {/* Third card - Video */}
              <div
                className={`border-4 absolute top-[60%] md:right-[40%] right-[10%] rounded-lg shadow-lg transform transition-all duration-1000 ease-out ${
                  isIntersecting
                    ? "translate-y-[-10px] translate-x-[-10px]"
                    : "translate-y-[40px] translate-x-10"
                } max-w-[80%] sm:max-w-full`}
              >
                <video
                  width={300}
                  height={220}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="rounded-lg cursor-pointer w-full h-auto"
                  onClick={() => handleVideoClick("/assets/learners/discord video.mp4")}
                >
                  <source src="/assets/learners/discord video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          {/* Right side with content */}
          <div className="space-y-6 text-center sm:px-0 px-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl text-white font-bold">
              Exclusive{" "}
              <span className="text-[#ffffff] text-2xl sm:text-3xl font-bold">Discord Community</span>
            </h1>
            <p className="text-base sm:text-lg pb-4 text-white">
              Get 1:1 technical doubt support from our team & elite Discord
              community for lifetime
            </p>
            <a href="https://bit.ly/41nbzpy" target="_blank" className="pt-8 block">
              <button className="bg-[#ffffff] text-black px-6 py-3 rounded-lg text-base sm:text-lg hover:shadow-white hover:shadow-md transition-all flex items-center font-bold justify-center mx-auto w-full sm:w-auto">
                Visit our Discord
                <span className="ml-2">→</span>
              </button>
            </a>
          </div>
        </div>

        {/* Modal for large image view */}
        {isModalOpen && selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-full">
              <Image
                src={selectedImage}
                alt="Enlarged view"
                width={500}
                height={500}
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
              <button
                className="absolute top-4 right-4 text-white text-2xl"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
          </div>
        )}

        {/* Video Modal */}
        {isVideoModalOpen && selectedVideo && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
            onClick={closeVideoModal}
          >
            <div className="relative max-w-full">
              <video
                width={800}
                height={600}
                controls
                autoPlay
                className="rounded-lg max-w-full h-auto"
              >
                <source src={selectedVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button
                className="absolute top-4 right-4 text-white text-2xl"
                onClick={closeVideoModal}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}