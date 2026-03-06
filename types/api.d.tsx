// src/types/api.d.ts
export interface LoginResponse {
    success: boolean;
    user?: {
      id: string;
      email: string;
      role: string;
      name: string;
    };
    error?: string;
  }
  
  export interface AuthUser {
    id: string;
    email: string;
    role: string;
    name: string;
  }