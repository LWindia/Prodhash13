// components/customComponents/coursesComponents/courseDetails/subComponents/LearnersCarousel.tsx
'use client'

import { motion, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState, useCallback } from 'react';
import { images, learners } from '../../../../../../data/keyOutComes/keyOutComes';

interface CarouselItemProps {
  learner: typeof learners[0];
  priority?: boolean;
}

// Separate component for carousel items to optimize rendering
const CarouselItem = ({ learner, priority = false }: CarouselItemProps) => (
  <div className="flex flex-col items-center flex-shrink-0 pb-4">
    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden mb-2">
      <Image
        src={learner.image}
        alt={learner.name}
        width={64}
        height={64}
        className="object-cover w-full h-full"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          // target.src = images.defaultLearner;
        }}
        priority={priority}
      />
    </div>
    <div className="h-4 sm:h-5">
      <span className="text-xs sm:text-sm text-gray-600">
        {learner.company}
      </span>
    </div>
  </div>
);

const LearnersCarousel = () => {
  const [width, setWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  const startAnimation = useCallback(() => {
    if (width) {
      controls.start({
        x: -width,
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    }
  }, [width, controls]);

  const updateWidth = () => {
    if (carouselRef.current) {
      const singleSetWidth = carouselRef.current.scrollWidth / 3;
      setWidth(singleSetWidth);
      return singleSetWidth;
    }
    return 0;
  };

  // Initialize carousel
  useEffect(() => {
    const newWidth = updateWidth();
    if (newWidth) {
      controls.set({ x: 0 });
      startAnimation();
    }
  }, [controls, startAnimation]);

  // Handle resize
  useEffect(() => {
    let resizeTimer: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const newWidth = updateWidth();
        if (newWidth && !isPaused) {
          controls.set({ x: 0 });
          startAnimation();
        }
      }, 100);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, [controls, isPaused, startAnimation]);

  // Triple the items to ensure smooth infinite loop
  const tripleItems = [...learners, ...learners, ...learners];

  return (
    <div 
      className="overflow-hidden relative"
      onMouseEnter={() => {
        setIsPaused(true);
        controls.stop();
      }}
      onMouseLeave={() => {
        setIsPaused(false);
        startAnimation();
      }}
    >
      <motion.div
        ref={carouselRef}
        animate={controls}
        className="flex gap-4"
      >
        {tripleItems.map((learner, index) => (
          <CarouselItem
            key={`${learner.name}-${index}`}
            learner={learner}
            priority={index < learners.length}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default LearnersCarousel;