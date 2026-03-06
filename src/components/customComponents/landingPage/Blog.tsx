import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen } from 'lucide-react';
import Image from 'next/image';
import curveLine from "../../../../public/assets/CurlLine.svg"
import { blogs } from '../../../../data/blog/blog';

const BlogSection = () => {
  

  return (
    <div className="container mx-auto px-6 lg:px-14 max-w-7xl py-12">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-teal-500 mb-2 flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Team Member
          </p>
          <h2 className="text-3xl font-bold">
            Our Latest <span className="text-red-500 relative">
              Blogs
              <span className="absolute bottom-0 left-0 w-full h-1  rounded-full transform translate-y-1">

              <Image src={curveLine} alt="curve line" className='w-full mb-4' width={100} height={300}></Image>
              </span>
            </span>
          </h2>
        </div>
        <Button className='bg-[#ff0000]' variant="destructive">
          Read All Blogs
        </Button>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Card key={blog.id} className="overflow-hidden">
            <Image 
              src={blog.image} 
              alt={blog.title}
              width={400}
              height={192}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-4">
              <div className="mb-4">
                <Badge variant="secondary" className="bg-teal-100 text-teal-600 hover:bg-teal-200">
                  {blog.category}
                </Badge>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <span className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" /> {blog.author}
                </span>
                <span>{blog.date}</span>
              </div>
              <h3 className="font-semibold text-lg mb-4 line-clamp-2">
                {blog.title}
              </h3>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button variant="link" className="p-0 text-[#ff0000] hover:text-red-600">
                Read More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;