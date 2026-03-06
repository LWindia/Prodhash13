export type Program = {
    title: string;
    mentor: string;
    duration: string;
    status: string;
    type: "Live" | "Recorded";
    image:string,
    slug:string
  };
  
  export type CategoryData = {
    mentorshipPrograms: Program[];
    selfPacedPrograms: Program[];
  };
  
  export type MenuData = {
    categories: Record<string, CategoryData>;
  };
  
  export type MenuKey = "workingProfessionals" | "collegeStudents" | "more";