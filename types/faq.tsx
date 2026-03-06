// data/faq/types.ts
import { ReactNode } from 'react';

export interface FAQItem {
  question: string;
  answer: string | ReactNode;
}

export interface FAQContent {
  [courseId: string]: {
    curriculum: FAQItem[];
    timeCommitment: FAQItem[];
    Program: FAQItem[];
    Duration: FAQItem[];
    Certification: FAQItem[];
    selectionCriteria: FAQItem[];
    accessAndFees?: FAQItem[];
    eligibility?: FAQItem[];
  };
}