"use client";

import React from "react";
import { OurAlumniWorksAtCarousel } from "./courseDetails/subComponents/OurAlumniWorldsAtCarousel";

// Company logos imports
import samsung from "../../../../public/assets/landingPage/companyLogo/samsung.png";
import Google from "../../../../public/assets/landingPage/companyLogo/google.png";
import TCS from "../../../../public/assets/landingPage/companyLogo/tcs.png";
import Infosys from "../../../../public/assets/landingPage/companyLogo/infosys.png";
import Salesforce from "../../../../public/assets/landingPage/companyLogo/salesforce.png";
import Intel from "../../../../public/assets/landingPage/companyLogo/intel.png";
import RedHat from "../../../../public/assets/landingPage/companyLogo/redhat.png";
import Razorpay from "../../../../public/assets/landingPage/companyLogo/razorpay.png";
import Wipro from "../../../../public/assets/landingPage/companyLogo/wipro.png";
import Zoho from "../../../../public/assets/landingPage/companyLogo/zoho.png";
import Oracle from "../../../../public/assets/landingPage/companyLogo/oracle.png";
import Searce from "../../../../public/assets/landingPage/companyLogo/searce.png";
import Syfe from "../../../../public/assets/landingPage/companyLogo/syfe.png";
import Paytm from "../../../../public/assets/landingPage/companyLogo/paytm.png";
import PWC from "../../../../public/assets/landingPage/companyLogo/pwc.png";
import Nykaa from "../../../../public/assets/landingPage/companyLogo/nykaa.png";
import NPCI from "../../../../public/assets/landingPage/companyLogo/npci.png";
import Accenture from "../../../../public/assets/landingPage/companyLogo/accenture.png";
import JPMorgan from "../../../../public/assets/landingPage/companyLogo/jpmorgan.png";
import Microsoft from "../../../../public/assets/landingPage/companyLogo/mircosoft.png";
import Deloitte from "../../../../public/assets/landingPage/companyLogo/deloitte.png";
import Dell from "../../../../public/assets/landingPage/companyLogo/dell.png";
import IBM from "../../../../public/assets/landingPage/companyLogo/ibm.png";
// import pinkcompany from "../../../../public/assets/landingPage/companyLogo/36.png";
import Mercedece from "../../../../public/assets/landingPage/companyLogo/mercedes.png";
import Tesco from "../../../../public/assets/landingPage/companyLogo/tesco.png";
import Airtel from "../../../../public/assets/landingPage/companyLogo/airtel.png";
import Allianz from "../../../../public/assets/landingPage/companyLogo/allianz.png";
import BankOfAmerica from "../../../../public/assets/landingPage/companyLogo/bankofamerica.png";
import BigBasket from "../../../../public/assets/landingPage/companyLogo/bigbasket.png";
import BluePlanet from "../../../../public/assets/landingPage/companyLogo/blueplanet.png";
// import Capgemini from "../../../../public/assets/landingPage/companyLogo/capgemini.png";
import shyenaTech from "../../../../public/assets/landingPage/companyLogo/shyenaTechLogo.png";
import quantifi from "../../../../public/assets/landingPage/companyLogo/quantfi.png";
import peerxp from "../../../../public/assets/landingPage/companyLogo/peerXp-Photoroom.png";
import unthinkable from "../../../../public/assets/landingPage/companyLogo/logo_unthinkable_dbd9877981.png";

export function LeftRightAlumniCarousel() {
  return (
    <div className="max-w-7xl px-4 md:py-8 lg:py-8 py-2 mx-auto relative bg-white">
      <div className="text-center mb-8">
        <div className="font-bold text-3xl inline-block">
          <span className="text-[#ff0000]">Our  Learner&apos;s</span> Are Working At
        </div>
        <div className="text-gray-500">
          Become a part of our Alumni working at Leading Companies
        </div>
      </div>

      {/* First row - Moving Left */}
      <div className="flex flex-col items-center justify-center relative overflow-hidden mt-6">
        <OurAlumniWorksAtCarousel
          items={companiesRow1}
          direction="left"
          speed="slow"
          cardWidth={160}
          cardHeight={80}
        />
      </div>

      {/* Second row - Moving Right */}
      <div className="flex flex-col items-center justify-center relative overflow-hidden">
        <OurAlumniWorksAtCarousel 
          items={companiesRow2}
          direction="right"
          speed="slow"
          cardWidth={160}
          cardHeight={80}
        />
      </div>
    </div>    
  );
}

const companiesRow1 = [
  { image: Google.src },
  { image: BigBasket.src },
  { image: Microsoft.src },
  { image: IBM.src },
  { image: TCS.src },
  { image: Infosys.src },
  { image: Salesforce.src },
  { image: Intel.src },
  { image: RedHat.src },
  { image: PWC.src },
  { image: peerxp.src },
  { image: Wipro.src },
  { image: Zoho.src },
  { image: Oracle.src },
  { image: Searce.src },
  { image: Syfe.src },
  { image: Paytm.src },
  { image: JPMorgan.src },
];

const companiesRow2 = [
  { image: Accenture.src },
//   { image: Capgemini.src },
  { image: Nykaa.src },
  { image: NPCI.src },
  { image: Accenture.src },
  { image: unthinkable.src },
  { image: Razorpay.src },
  { image: Deloitte.src },
  { image: Dell.src },
//   { image: pinkcompany.src },
  { image: Mercedece.src },
  { image: Tesco.src },
  { image: Airtel.src },
  { image: Allianz.src },
  { image: BankOfAmerica.src },
  { image: quantifi.src },
  { image: BluePlanet.src },
  { image: shyenaTech.src },
];