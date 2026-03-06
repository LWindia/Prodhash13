// components/customComponents/coursesComponents/courseDetails/subComponents/BenefitsList.tsx
import { Check } from "lucide-react";
import { benefits } from '../../../../../../data/keyOutComes/keyOutComes';

const BenefitsList = () => {
  return (
    <ul className="space-y-4">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-start gap-3">
          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
          <span className="text-sm sm:text-base text-muted-foreground">
            {benefit}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default BenefitsList;