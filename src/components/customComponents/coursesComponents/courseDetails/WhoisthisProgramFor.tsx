"use client"
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Course } from '../../../../../types/courses';
import Image from 'next/image';

interface WhoIsThisProgramForProps {
    course: Course;
}

const WhoIsThisProgramFor: React.FC<WhoIsThisProgramForProps> = ({ course }) => {
    return (
        <div className="mx-auto justify-center text-center py-6">
            <h2 className="text-3xl font-bold mb-8">
                Who is this <span className="text-[#ff0000]">program </span>for?
            </h2>

            <div className="relative overflow-hidden bg-white">
                <div className="w-full inline-flex flex-nowrap p-4">
                    {/* First scroll */}
                    <div className="flex items-center justify-center animate-marquee">
                        {course.programFor.map((data, index) => (
                            <div
                                key={index}
                                className="mx-2 w-32 flex-shrink-0"
                            >
                                <Card className="max-w-[280px] h-[150px] rounded-2xl border-4 border-black-900 shadow-black shadow-md hover:shadow-lg transition-all duration-300 flex-shrink-0">
                                    <CardContent className="p-1 space-y-4 flex flex-col justify-between h-full">
                                        <div className="w-full aspect-video relative rounded-lg overflow-hidden flex-shrink-0">
                                            <Image
                                                src={data.src}
                                                alt={data.alt}
                                                fill
                                                className="w-full h-full object-cover" // Changed to object-cover for better fit
                                            />
                                        </div>
                                        <div className="pb-2">
                                            <h3 className="text-sm font-medium text-center text-gray-800">
                                                {data.text}
                                            </h3>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                    {/* Second scroll (duplicate) */}
                    <div className="flex items-center justify-center animate-marquee2"
                        aria-hidden="true">
                        {course.programFor.map((data, index) => (
                            <div
                                key={`duplicate-${index}`}
                                className="mx-2 w-32 flex-shrink-0"
                            >
                                <Card className="max-w-[280px] h-[150px] rounded-2xl border-4 border-black-900 shadow-black shadow-md hover:shadow-lg transition-all duration-300">
                                    <CardContent className="p-1 space-y-4 flex flex-col justify-between h-full">
                                        <div className="w-full aspect-video relative rounded-lg overflow-hidden flex-shrink-0">
                                            <Image
                                                src={data.src}
                                                alt={data.alt}
                                                fill
                                                className="w-full h-full object-cover" // Changed to object-cover for better fit
                                            />
                                        </div>
                                        <div className="pb-2">
                                            <h3 className="text-sm font-medium text-center text-gray-800">
                                                {data.text}
                                            </h3>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoIsThisProgramFor;