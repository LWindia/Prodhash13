// src/components/ui/Card.tsx

import React from 'react';
import { Badge } from './Badge'; // Adjust the path if necessary
import { Star, Clock4, BookOpen } from 'lucide-react';
import Image from 'next/image';

interface CardProps {
  category: string;
  title: string;
  price: string;
  lessons: number;
  duration: string;
  rating: number;
  imageUrl?: string; // Optional image URL for the card
}

const Card: React.FC<CardProps> = ({
  category,
  title,
  price,
  lessons,
  duration,
  rating,
  imageUrl,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {imageUrl && (
        <div className="relative">
          <Image
            src={imageUrl}
            alt={title}
            width={400}
            height={192}
            className="object-cover h-48 w-full"
          />
          <Badge className="absolute top-2 left-2 bg-teal-500">{category}</Badge>
        </div>
      )}
      <div className="p-4">
        <p className="text-2xl font-bold text-teal-500 mb-4">{price}</p>
        <h3 className="font-semibold mb-2">{title}</h3>
        <div className="flex items-center text-sm text-muted-foreground">
          {/* Lessons with BookOpen Icon */}
          <span className="mr-4 flex items-center">
            <BookOpen size={14} className="mr-1 text-[#ff0000]" /> {/* Icon color changed to red */}
            {lessons} Lessons
          </span>
          
          {/* Duration with Clock4 Icon */}
          <span className="mr-4 flex items-center">
            <Clock4 size={14} className="mr-1 text-blue-500" /> {/* Icon color changed to blue */}
            {duration}
          </span>
          
          {/* Rating with Star Icon */}
          <span className="flex items-center">
            {rating} 
            <Star size={14} className="ml-1 text-yellow-500" /> {/* Icon color changed to yellow */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
