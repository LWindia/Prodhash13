
// Types file (types/analyst.ts)
export interface SalaryData {
  label: string;
  values: number[];
}

export interface AnalystData {
  title: string;
  subtitle: string;
  salary: SalaryData;
  companies: string[];
  demand: number;
  jobCount: string;
  description: string;
  yearLabel: string;
  salaryLabel: string;
  companiesLabel: string;
  jobsLabel: string;
  jobsDescription: string;
}

export interface CourseAnalystData {
  [courseId: string]: AnalystData;
}



