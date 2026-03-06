"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "../../../public/assets/landingPage/logohash13.svg";
import { menuData } from "../../../data/Navbar/Navbar";
/// --- Types ---
type Program = {
  title: string;
  mentor: string;
  duration: string;
  status: string;
  type: "Live" | "Recorded";
  image?:string
};

type CategoryData = {
  mentorshipPrograms: Program[];
  selfPacedPrograms: Program[];
};

type MenuData = {
  categories: Record<string, CategoryData>;
};

type MenuKeys = "workingProfessionals" | "collegeStudents" | "more";

// const menuData: Record<MenuKeys, MenuData> = {
//   workingProfessionals: {
//     categories: {
//       Business: {
//         mentorshipPrograms: [
//           { title: "Leadership", mentor: "by John Doe", duration: "6 Weeks", status: "Coming Soon", type: "Live" },
//           { title: "Data Science", mentor: "by Jane Smith", duration: "8 Weeks", status: "Available Now", type: "Live" },
//         ],
//         selfPacedPrograms: [
//           { title: "Agile Management", mentor: "by Alice", duration: "Self-paced", status: "Available Now", type: "Recorded" },
//         ],
//       },
//       // ... rest of your data
//     },
//   },
//   collegeStudents: {
//     categories: {
//       // ... your college students data
//     },
//   },
//   more: {
//     categories: {
//       // ... your more data
//     },
//   },
// };

/// --- Components ---
const ProgramCard: React.FC<Program> = ({ title, mentor, duration, status, type,image }) => {
  
  return (
    <>
  <div className="p-4 hover:bg-gray-50 rounded-lg transition-colors">
    <div className="flex gap-4">
      <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden">
        <Image 
          src={`${image}`}
          alt="mentor" 
          width={64} 
          height={64}
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-lg">{title}</h3>
        <p className="text-sm text-gray-600">Sumit</p>
        <div className="flex flex-wrap gap-4 mt-2">
          <span className="text-sm text-gray-600">⏱️ {duration}</span>
          <span className="text-sm text-gray-600">📅 {status}</span>
          <span className="text-sm text-gray-600">🎥 {type}</span>
        </div>
      </div>
    </div>
  </div>
  </>
  )
};

interface SideCategoriesProps {
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const SideCategories: React.FC<SideCategoriesProps> = ({ categories, selectedCategory, onCategorySelect }) => (
  <div className="w-48 bg-gray-50 p-4 space-y-2 md:block">
    {categories.map((category) => (
      <div
        key={category}
        className={`p-2 rounded-md cursor-pointer ${
          selectedCategory === category ? "bg-gray-100 font-semibold" : "hover:bg-gray-100"
        }`}
        onClick={() => onCategorySelect(category)}
      >
        {category}
      </div>
    ))}
  </div>
);

const DropdownContent: React.FC<{ data: MenuData }> = ({ data }) => {
  const categoryKeys = Object.keys(data.categories);
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryKeys[0]);

  return (
    <div className="flex flex-col md:flex-row">
      <SideCategories 
        categories={categoryKeys} 
        selectedCategory={selectedCategory} 
        onCategorySelect={setSelectedCategory} 
      />
      <div className="flex-1 p-6">
        <h2 className="text-xl font-medium mb-4">Content for {selectedCategory}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold">Mentorship Programs</h3>
            {data.categories[selectedCategory].mentorshipPrograms.map((program) => (
              <ProgramCard key={program.title} {...program} />
            ))}
          </div>
          <div>
            <h3 className="text-lg font-semibold">Self-Paced Programs</h3>
            {data.categories[selectedCategory].selfPacedPrograms.map((program) => (
              <ProgramCard key={program.title} {...program} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Navbar() {
  const [openDropdowns, setOpenDropdowns] = useState<Record<MenuKeys, boolean>>({
    workingProfessionals: false,
    collegeStudents: false,
    more: false,
  });

  const handleDropdownChange = (key: MenuKeys, isOpen: boolean) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [key]: isOpen
    }));
  };

  return (
    <header className="flex w-full mx-auto items-center max-w-7xl px-6 lg:px-14 overflow-visible h-16 sticky top-0 z-50 bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between h-full">
        <Link href="/">
          <Image src={logo} alt="#13 logo" width={50} height={50} className="object-contain h-full" priority />
        </Link>
        
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full sm:w-[540px]">
              <DropdownContent data={menuData.workingProfessionals} />
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden md:flex flex-1 justify-end items-center space-x-6 h-full">
          <nav className="flex items-center space-x-6 h-full">
            {(Object.entries(menuData) as [MenuKeys, MenuData][]).map(([key, data]) => (
              <DropdownMenu 
                key={key} 
                onOpenChange={(isOpen) => handleDropdownChange(key, isOpen)}
              >
                <DropdownMenuTrigger className="flex items-center space-x-1 text-sm hover:text-[#ff0000]">
                  <span>
                    {key === "workingProfessionals"
                      ? "For working professionals"
                      : key === "collegeStudents"
                      ? "For college students"
                      : "More"}
                  </span>
                  <div className="transition-transform duration-300">
                    {openDropdowns[key] ? (
                      <ChevronUp className="w-4 h-4 text-red-600" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-screen max-w-6xl mt-4 p-0" align="center">
                  <DropdownContent data={data} />
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4 h-full">
            <Button variant="outline">Free Courses</Button>
            <Button className="bg-[#ff0000] text-white hover:bg-red-600">Sign Up</Button>
          </div>
        </div>
      </div>
    </header>
  );
}