import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const CoursesOffer: React.FC = () => {
  return (
    <div className="bg-[#ffe7e7] p-6 mx-auto  overflow-hidden">
    <div className="text-black py-10 px-6">
      {/* Header Section */}
      <h1 className="text-center text-3xl font-bold mb-8">
        Book your spot! We will be increasing the price soon...
      </h1>

      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* Offer Box */}
        <div className="bg-white rounded-lg shadow-md p-6 flex-1">
          <h2 className="text-2xl font-bold mb-2">Mastering Git and Github Advanced Level Training</h2>
          <p className="text-lg text-gray-600 mb-4">(Save ₹4,020)</p>
          <div className="text-red-600 text-4xl font-bold mb-2">
            ₹980 <span className="line-through text-gray-500 text-2xl">₹5,000</span>
            <span className="text-gray-500 text-lg"> (+ taxes)</span>
          </div>
          <div className="my-4 border-t border-gray-300"></div>
          <ul className="mb-6 space-y-2 text-gray-700">
            <li className="flex items-center">
              <CheckCircle className="text-red-600 mr-2" />
              Avail the discounted price of ₹980 and save a total of ₹4,020
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-red-600 mr-2" />
              The launch offer expires in 24 hours
            </li>
          </ul>
          <Button variant="default" className="bg-red-600 text-white w-full py-3">
            Yes! I want this insane deal for ₹980 <span className="line-through">₹5000</span> (+ taxes)
          </Button>
        </div>

        {/* Features List */}
        <div className="flex-1">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-red-600 mb-4">What you’ll learn…</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <CheckCircle className="text-red-600 mr-2" />
                Git Basics and Git Commands
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-red-600 mr-2" />
                Git Branching and Merging
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-red-600 mr-2" />
                Git Rebase and Git Bisect
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-red-600 mr-2" />
                Squashing Commits, Cherry-Picking and Three-Way Merges
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-600 mb-4">And bonuses too…</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <CheckCircle className="text-red-600 mr-2" />
                Most Relevant Git and Github Training Tips & Tricks
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-red-600 mr-2" />
                Technical Support for 90 days
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-red-600 mr-2" />
                Real Industry Use Cases of Git and Github
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-red-600 mr-2" />
                Premium #13 Git and Github Training Community
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CoursesOffer;
