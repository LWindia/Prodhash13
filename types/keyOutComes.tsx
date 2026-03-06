// types/keyOutcomes.ts
export interface Learner {
  name: string;
  company: string;
  image?: string;
}

export interface KeyOutcomesData {
  learners: Learner[];
  benefits: string[];
  defaultLearnerImg: string;
  LinuxWorldUrl: string;
}