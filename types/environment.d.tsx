// src/types/environment.d.ts
declare global {
    namespace NodeJS {
      interface ProcessEnv {
        // Authentication
        JWT_SECRET: string
        
        // Database
        MONGODB_URI: string
        
        // Admin credentials
        ADMIN_EMAIL: string
        ADMIN_PASSWORD: string
        
        // Don't include NODE_ENV here as it's already defined
      }
    }
  }
  
  export {}