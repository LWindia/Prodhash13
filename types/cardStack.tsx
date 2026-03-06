
export interface Module {
  number: string;
  title: string;
  videos: number;
  duration: string;
  features: string[];
  colors: {
    background: string;
    text: string;
    badge: string;
    badgeText: string;
  };
}

export interface Learner {
  name: string;
  company: string;
  image: string;
}
