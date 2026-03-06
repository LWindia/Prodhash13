// components/customComponents/coursesComponents/courseDetails/subComponents/AccreditationCard.tsx
import Image from 'next/image';
import { Card } from "@/components/ui/card";

const AccreditationCard = () => {
  return (
    <Card className="w-full p-4">
      <h2 className="text-lg sm:text-xl font-semibold mb-4">
      <span className='text-[#ff0000]'> Recognised</span> Across The Globe
      </h2>
      <div className="flex flex-col sm:flex-row items-center gap-4">
         <Image
          src="/assets/featured.jpg"
          alt="Linux World"
          width={400}
          height={400}
          className="h-full w-full sm:h-15 "
        />
       {/* <div className="flex items-center gap-2">
          <Image
            src="/assets/cources/linkdin.png"
            alt="Linkdin"
            width={24}
            height={24}
            className="h-5 w-auto sm:h-6 sm:w-6"
          />
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm text-muted-foreground">
              LinkedIn
            </span>
            <span className="text-xs sm:text-sm font-semibold">
              Top Startup India 2023
            </span>
          </div> */}
        {/* </div> */}
      </div>
    </Card>
  );
};

export default AccreditationCard;