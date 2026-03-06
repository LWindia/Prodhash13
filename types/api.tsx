// src/types/api.ts
export interface DashboardStats {
    totalCourses: number;
    totalStudents: number;
    totalRevenue: number;
    recentCourses: RecentCourseStats[];
  }
  
  export interface RecentCourseStats {
    id: string;
    title: string;
    enrolledStudents: number;
    status: 'draft' | 'published';
    price: number;
  }
  
  export interface ApiResponse<T> {
    data?: T;
    error?: string;
  }