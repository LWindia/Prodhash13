// src/types/auth.d.ts
import { Types } from 'mongoose';

export interface JWTPayload {
  userId: string;
  role: string;
  email: string;
  iat?: number;
  exp?: number;
}

export interface AdminSession {
  user: {
    id: string;
    email: string;
    role: string;
    name: string;
  };
}