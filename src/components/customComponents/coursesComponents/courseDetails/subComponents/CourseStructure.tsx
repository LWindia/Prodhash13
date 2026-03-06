

// components/CourseStructure.tsx
import { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface Module {
  id: number;
  title: string;
  content: string[];
  description?: string;
  duration?: string;
}

interface CourseStructureProps {
  modules: Module[];
}

const CourseStructure: React.FC<CourseStructureProps> = ({ modules }) => {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 w-full">
        {modules.map((module) => (
          <Card
            key={module.id}
            className={`
              bg-red-0 border-none text-white 
              w-full max-w-[650px] mx-auto 
              cursor-pointer transition-all duration-300 
              overflow-hidden relative 
              ${expandedModule === module.id ? 'h-auto' : 'h-[350px]'}
            `}
            onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
          >
            {/* Header with background */}
            <div 
              className="bg-white p-4 sm:p-6 relative rounded-xl"
              style={{
                backgroundImage: `url('/assets/cources/courseDetails/moduleHeaderImage2.png')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right center',
                backgroundSize: 'cover'
              }}
            >
              <div className="text-xs sm:text-sm text-white font-bold mb-1">
                MODULE {module.id}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                {module.title}
              </h3>
              {module.duration && (
                <div className='flex gap-2 mt-2'>
                  <Calendar className='w-4 h-4 text-white'/>
                  <span className="text-xs sm:text-sm text-white block">
                    {module.duration} 
                  </span>
                </div>
              )}
            </div>

            {/* Content section */}
            <div className="p-4 sm:p-6">
              {module.description && (
                <div className="mb-4 bg-red-100 rounded-xl p-3 sm:p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-yellow-500">⚡</span>
                    <span className="text-xs sm:text-sm font-medium text-black font-bold">
                      Why learn this
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-black">
                    {module.description}
                  </p>
                </div>
              )}

              {/* Content items with flex wrap */}
              <div className="flex flex-wrap gap-2">
                {module.content
                  .slice(0, expandedModule === module.id ? module.content.length : 6)
                  .map((item, index) => (
                    <div
                      key={index}
                      className="
                        text-xs sm:text-sm 
                        py-1 sm:py-2 px-2 sm:px-4 
                        text-black bg-red-100 
                        rounded-md hover:bg-red-300 
                        transition-colors 
                        flex-shrink-0 flex-grow-0 
                        basis-auto max-w-full
                      "
                    >
                      {item}
                    </div>
                  ))}
              </div>

              {/* Show expand/collapse button */}
              {module.content.length > 6 && (
                <div className="absolute bottom-4 left-0 right-0 flex justify-center -mb-3">
                  {expandedModule === module.id ? (
                    <ChevronUp className="w-6 h-6 text-gray-400" />
                  ) : (
                    <div className="flex flex-col items-center">
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CourseStructure;