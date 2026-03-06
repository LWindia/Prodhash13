


import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DisplayCourseContentProps } from '../../../../../../types/displayCourseContent';

const DisplayCourseContent: React.FC<DisplayCourseContentProps> = ({ modules }) => {
  return (
    <div className="w-full mx-auto space-y-4">
      <Accordion type="single" collapsible className="w-full">
        {modules.map((module) => (
          <AccordionItem
            key={module.id}
            value={`module-${module.id}`}
            className="border rounded-2xl mb-4 overflow-hidden data-[state=open]:bg-white"
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <div className="text-left">
                <div className="text-sm text-[#ff0000] font-bold mb-1">
                  MODULE {module.id}
                </div>
                <h3 className="font-bold text-[#494848]">{module.title}</h3>
                {/* <p>{module.description}</p> */}
              </div>
            </AccordionTrigger>
            {module.content && (
              <AccordionContent className="px-6 pb-4">
                <div className="grid grid-cols-4 gap-4"> {/* Added grid container */}
                  {module.content.map((item, index) => {
                    // Calculate which column this item should be in
                    const columnItems = Math.ceil(module.content.length / 4);
                    const items = [];
                    
                    // Create a column of items
                    for (let i = 0; i < columnItems; i++) {
                      const itemIndex = i * 4 + index;
                      if (itemIndex < module.content.length) {
                        items.push(
                          <li key={itemIndex} className="text-green-700 list-disc">
                            {module.content[itemIndex]}
                            
                          </li>
                        );
                      }
                    }
                    
                    // Only render the column if this is one of the first 4 iterations
                    return index < 4 ? (
                      <ul key={index} className="space-y-2">
                        {items}
                      </ul>
                    ) : null;
                  })}
                </div>
              </AccordionContent>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default DisplayCourseContent;