import React from 'react';
import { Button } from '@/components/ui/button'; /// Assuming Shadcn is correctly set up and Button component is available

const EnrollNow = ({ course }:any) => {
  return (
    // Container for the button with Tailwind's responsive utilities
    <div className="fixed bottom-0 left-0 w-full h-[90px]  z-50 flex md:hidden lg:hidden items-center justify-center ">
     <div className="flex items-center justify-between h-full bg-[#0F0000] text-white p-2 w-full">
      <div className="flex items-center gap-2">
        <span className="text-[#FF0000] text-xl">₹{course.price}+Taxes</span>
        <span className="text-xs text-gray-400 line-through">₹{course.originalPrice}</span>
      </div>
      <a href={course.paymentLink}>
      <Button className="bg-[#FF0000] hover:bg-[#E60000] text-white rounded-sm text-xl px-4 py-1 h-auto font-normal">
        Reserve Seat
      </Button>
      </a>
    </div>
    </div>
  );
};

export default EnrollNow;
