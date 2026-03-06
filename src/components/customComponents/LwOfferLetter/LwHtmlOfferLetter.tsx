import React, { useEffect, useState } from 'react';
import { OfferLetterFormData } from '../../../../types/offerLetter';
import lwlogo from "../../../../public/assets/OfferLetter/LW JAZBAA.png";
import seal from "../../../../public/assets/OfferLetter/seal.png";
import sign from "../../../../public/assets/OfferLetter/sign.png";
// import Image from 'next/image'; // Replaced with standard <img> for PDF rendering

interface HtmlOfferLetterProps {
  data: OfferLetterFormData;
  innerRef: React.RefObject<HTMLDivElement>;
}

const HtmlOfferLetter: React.FC<HtmlOfferLetterProps> = ({ data, innerRef }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload images to ensure they're available for PDF generation
  useEffect(() => {
    const preloadImages = async () => {
      const imageUrls = [lwlogo.src, seal.src, sign.src];
      const imagePromises = imageUrls.map((url) => {
        return new Promise((resolve, reject) => {
          const img = new window.Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = url;
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        setImagesLoaded(true); // Continue anyway
      }
    };

    preloadImages();
  }, []);

  // Format today's date with ordinal suffix (1st, 2nd, 3rd, etc.)
  const formatDate = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleDateString('en-US', { month: 'long' });
    const year = today.getFullYear();
    
    // Add ordinal suffix
    const getOrdinalSuffix = (d: number) => {
      if (d > 3 && d < 21) return 'th';
      switch (d % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };
    
    return `${day}${getOrdinalSuffix(day)} ${month}, ${year}`;
  };

  // Generate reference number based on course - NOW USING SERIAL NUMBER
  const generateRefNumber = () => {
    const projectCodeMap: {[key: string]: string} = {
      "DevOps End to End": "JPR",
      "Cloud Computing": "JPR",
      "Data Science": "JPR",
      "Machine Learning": "JPR",
      "Artificial Intelligence": "JPR",
    };
    
    const projectCode = projectCodeMap[data.courseTitle] || "JPR";
    const year = new Date().getFullYear();
    const serialNumber = data.serialNumber || 100; // Use the serial number from data
    
    return `LWIPL-${projectCode}-${year}-${serialNumber}`;
  };

  if (!imagesLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div 
      ref={innerRef} 
      className="w-[210mm] h-[297mm] mx-auto bg-white relative font-sans hidden overflow-hidden"
    >
      {/* Background image */}
      <img
        src={lwlogo.src}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-10 z-0"
      />

      {/* Content container */}
      <div className="relative z-20 pt-[60px] pl-[60px] pr-[60px] h-full box-border">
        {/* Header: Ref and Date */}
        <div className="flex justify-between mb-8 text-sm font-medium">
          <div><span className="font-bold">Ref :</span> {generateRefNumber()}</div>
          <div><span className="font-bold">Date:</span> {formatDate()}</div>
        </div>

        {/* Recipient Block */}
        <div className="mb-6 text-sm leading-relaxed">
          <div>To,</div>
          <div>The Training & Placement Officer</div>
          <div className="font-bold">{data.instituteName}</div>
        </div>

        {/* Letter Body */}
        <div className="text-sm leading-relaxed text-justify mb-6">
          <p className="mb-4">
            This is to certify that <span className="font-bold">{data.fullName}</span> Student of <span className="font-bold">{data.instituteName}</span> will be undergoing the Summer Internship Program on <span className="font-bold">&ldquo;{data.courseTitle}&rdquo;</span> at LinuxWorld Informatics Pvt. Ltd. under the mentorship of The World Record Holder & CTO- <span className="font-bold">Mr. Vimal Daga</span>, for a period of 2 month as per the official college Curriculum.
          </p>
          <p className="mb-2">
            The management will continuously monitor his performance during the summer period of research and development.
          </p>
        </div>

        {/* Signature Area */}
        <div className="mt-8">
          <p className="mb-1">Regards,</p>
          <p className="mb-2">LinuxWorld Informatics Pvt Ltd</p>
          {/* Signature and Seal Container */}
          <div className="relative mt-4 h-[110px] w-[160px]">
            {/* Seal Image: Positioned within the container, at the back. */}
            <img 
              src={seal.src}
              alt="Official Seal"
              width={100}
              height={100}
              className="absolute bottom-0 left-0 object-contain z-10"
            />
            {/* Signature Image: Overlaps the seal, positioned within the container. */}
            <img 
              src={sign.src}
              alt="Signature"
              width={150}
              height={80}
              className="absolute top-[15px] left-[5px] object-contain z-20"
            />
          </div>
          <p className="font-bold mt-2">Ms. Preeti Daga</p>
        </div>
      </div>
    </div>
  );
};

export default HtmlOfferLetter;
