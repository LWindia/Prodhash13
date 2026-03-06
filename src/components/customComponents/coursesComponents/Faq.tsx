import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqContent } from "../../../../data/faq/faq";

interface FaqProps {
  courseId: string;
}

const FAQ_CATEGORIES = {
  curriculum: "Program Overview",
  timeCommitment: "Eligibility",
  Program: "Program Curriculum",
  Duration: "Duration and Mode",
  Certification: "Certification and Placement",
  selectionCriteria: "Access and Fees",
} as const;

export default function Faq({ courseId }: FaqProps) {
  const [selectedItem, setSelectedItem] = useState<keyof typeof FAQ_CATEGORIES>("curriculum");

  const courseFAQ = faqContent[courseId];

  if (!courseFAQ) {
    return <div>FAQ content not available for this course</div>;
  }

  const renderAccordion = (categoryKey: keyof typeof FAQ_CATEGORIES) => (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {courseFAQ[categoryKey]?.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="border rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
        >
          <AccordionTrigger className="text-base sm:text-md font-semibold px-4 sm:px-6 py-3 sm:py-4 [&[data-state=open]]:text-[#ff0000]">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-sm sm:text-base text-gray-600 px-4 sm:px-6 pb-3 sm:pb-4">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );

  return (
    <div className="bg-gradient-to-r from-gray-50 via-white to-red-50" id="Faq">
      <div className="container mx-auto max-w-6xl px-4 py-6">
        <h1 className="text-3xl md:text-3xl lg:text-3xl font-bold mb-8 sm:mb-12 text-center">
          Frequently Asked <span className="text-[#ff0000]">Questions</span>
        </h1>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          {Object.entries(FAQ_CATEGORIES).map(([key, title]) => (
            <div key={key} className="space-y-4">
              <div className="p-4 rounded-lg border shadow-sm bg-red-200 border-red-500 text-red-600">
                <h2 className="text-md md:text-md font-medium">{title}</h2>
              </div>
              <div className="pl-4">
                {renderAccordion(key as keyof typeof FAQ_CATEGORIES)}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid gap-8 lg:grid-cols-[300px,1fr] lg:gap-12">
          {/* Sidebar */}
          <div className="space-y-4">
            {Object.entries(FAQ_CATEGORIES).map(([key, title]) => (
              <div
                key={key}
                className={`p-4 rounded-lg border shadow-sm cursor-pointer transition-all duration-300 
                ${selectedItem === key ? "bg-red-200 border-red-500 text-red-600" : "bg-white text-gray-600"}`}
                onClick={() => setSelectedItem(key as keyof typeof FAQ_CATEGORIES)}
              >
                <h2 className="text-md md:text-md font-medium">{title}</h2>
              </div>
            ))}
          </div>

          {/* FAQ Accordion */}
          {renderAccordion(selectedItem)}
        </div>
      </div>
    </div>
  );
}