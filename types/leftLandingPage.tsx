// Define the interface for headings
export interface Headings {
    main: string;
    sub: string;
  }
  
  // Define the interface for search
  export interface Search {
    placeholder: string;
  }
  
  // Define the interface for community
  export interface Community {
    text: string;
    learnersCount: string;
  }
  
  // Define the interface for the entire structure
  export interface LeftLandingPage {
    headings: Headings;
    search: Search;
    goals: { text: string; href: string; }[];
    community: Community;
    trendingSearches: string[];
  }
  