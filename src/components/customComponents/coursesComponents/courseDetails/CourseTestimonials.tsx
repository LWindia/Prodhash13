"use client"
import React, { useState } from 'react';
import { Linkedin } from 'lucide-react';
import {posts} from '../../../../../data/testimonials/posts'
import Image from 'next/image';

export default function Component() {
  const [isExpanded, setIsExpanded] = useState(false);

  

  

  // Show only the first 6 posts when not expanded, otherwise show all posts
  const visiblePosts = isExpanded ? posts : posts.slice(0, 6);

  return (
    <div className="bg-gradient-to-br from-gray-50 via-black-50 to-red-50 p-4 sm:p-2 mx-auto" id ="testimonials" >
      <div className="max-w-[920px] mx-auto">
        <h2 className="text-black text-sm sm:text-md">HEAR IT FROM THEM</h2>
        <h2 className="text-black text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 mt-2">
          Ambitious People ❤️ <span className="text-[#ff0000]">#13</span>
        </h2>

        {/* Displaying testimonials in masonry layout */}
        <div className="sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-0">
          {visiblePosts.map((post) => (
            <div key={post.id} className="break-inside-avoid mb-4 sm:mb-6">
              <PostCard post={post} />
            </div>
          ))}
        </div>

        {/* Button to toggle visibility of all posts */}
        <div className="flex justify-center items-center mt-6">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-white text-[#2C3E50] font-semibold text-lg border-2 border-gray-500 py-3 px-8 rounded-full hover:bg-[#ff0000] hover:text-white transition-all duration-300"
          >
            {isExpanded ? 'Show Less' : 'See our Wall of Love'}
          </button>
        </div>
      </div>
    </div>
  );
}

// PostCard component to display individual testimonial
const PostCard: React.FC<{ post: any }> = ({ post }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const words = post.content.split(' ');
  const truncatedContent = words.length > 80 ? words.slice(0, 80).join(' ') + '...' : post.content;

  const handleToggleContent = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="bg-[#ffffff] text-black mt-4 shadow-md w-full p-4 rounded-lg">
      <div className="pb-2">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gray-300">
            <Image 
              className="h-full w-full object-cover rounded-full" 
              src={post.author.avatar || '/default-avatar.png'} 
              alt={post.author.name}
              width={48}
              height={48}
            />
          </div>
          <div className="flex-grow">
            <h3 className="text-sm font-semibold">{post.author.name}</h3>
            <p className="text-xs text-gray-400">{post.author.title}</p>
          </div>
          <a href={post.author.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${post.author.name}'s LinkedIn profile`}>
            <svg className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-blue-600 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-blue-600 cursor-pointer" />
            </svg>
          </a>
        </div>
      </div>

      <div className="pt-2 space-y-2 text-xs sm:text-sm">
        <p>
          {isExpanded ? post.content : truncatedContent}
          {words.length > 80 && (
            <span 
              className="text-blue-500 cursor-pointer ml-1" 
              onClick={handleToggleContent}
            >
              {isExpanded ? 'Show less' : 'Read more'}
            </span>
          )}
        </p>
      </div>

      <p className="mt-4 text-xs text-gray-400">{post.timestamp}</p>
    </div>
  );
};
