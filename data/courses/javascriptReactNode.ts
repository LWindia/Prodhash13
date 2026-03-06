import { Course } from "../../types/courses";

export const specialisationInReactjavascriptnode: Course = {
    "_id": "specialisation-in-javascriptandreactnode",
  "title": "[B][R]Full-Stack JavaScript Mastery: React & Node.js/Express[/R][B]",
  "slug": "specialisation-in-javascriptandreactnode",
  "rating": 5,
  "totalRatings": 10,
  "duration": "Beginner to Advanced",
  "globalStatus": "GLOBALLY RECOGNIZED CERTIFICATION",
  "hours": "30+",
  "price": 3000,
  "originalPrice": 8000,
  "enrolledStudents": 12000,
  "category": "Web Development",
  "shortDescription": "Start Date : 9th April 2025 (Wed, Fri)",
  "paymentLink": "https://rzp.io/rzp/6guyqLx2",
  "backgroundImage": "/assets/cources/courseDetails/jjavascript/javascript (1).jpg", // Ensure this path is correct

 learningOutcomes: [
    "Master JavaScript (ES6+) fundamentals: Async/Await, Modules, OOP",  
    "Build dynamic UIs with React (Hooks, Components, JSX)",  
    "State management without Redux (Context API, useReducer)",  
    "Develop RESTful APIs with Node.js & Express",  
    "Integrate React frontend with Express backend (Fetch/Axios)",  
    "Debug full-stack apps (Chrome DevTools, Postman)",  
    "Deploy React apps (Vercel) & Node.js APIs (Render)"  
],
features: [
    "5+ hands-on projects (e.g., Weather App, Blog API, Task Manager)",  
    "Lifetime access to updates & private developer community",  
    "1:1 code reviews & career mentorship",  
    "Globally recognized certification",  
    "Exclusive job-prep kit (API interview Q&A, resume templates)"  
],

skills: [
    "Modern JavaScript (ES6+ Promises, Destructuring)",  
    "React Hooks (useState, useEffect, useContext)",  
    "Component lifecycle & reusable architecture",  
    "Routing with React Router v6",  
    "API design with Express (Middleware, Error Handling)",  
    "Frontend-backend integration (CORS, JWT basics)",  
    "Responsive UI (CSS Modules, Flexbox)",  
    "Debugging full-stack apps (Network Tab, Logging)"  
],

requirements: [
    "No prior coding experience needed!",  
    "A computer (Windows/Mac/Linux) with internet",  
    "Basic familiarity with browsers (Chrome/Firefox)",  
    "Willingness to learn & build projects"  
],

    level: "Beginner to Advanced",
    language: "English",
    lastUpdated: "2024-01",


    module: [
      // ========== JAVASCRIPT FUNDAMENTALS (4 Modules) ==========
      {
        id: 1,
        title: "JavaScript Basics & Syntax",
        description: "Master variables, operators, loops, and functions.",
        content: [
          "Data types (primitives vs objects)",
          "Operators, conditionals (if/else, switch)",
          "Loops (for, while, forEach)",
          "Functions (declarations, expressions)"
        ]
      },
      {
        id: 2,
        title: "Advanced JavaScript Concepts",
        description: "Learn scopes, closures, and ES6+ features.",
        content: [
          "Block scope (let/const), hoisting",
          "Closures and higher-order functions",
          "ES6+ (arrow functions, template literals)",
          "Destructuring and spread/rest operators"
        ]
      },
      {
        id: 3,
        title: "Asynchronous JavaScript",
        description: "Master async patterns for backend/frontend.",
        content: [
          "Callbacks and callback hell",
          "Promises (then/catch/finally)",
          "Async/await syntax",
          "Fetch API and error handling"
        ]
      },
      {
        id: 4,
        title: "OOP & Modern JS Patterns",
        description: "Apply OOP and functional programming in JS.",
        content: [
          "Prototypes, classes, inheritance",
          "Factory functions vs constructors",
          "Functional programming (map/filter/reduce)",
          "Modules (CommonJS vs ES Modules)"
        ]
      },
  
      // ========== NODE.JS (3 Modules) ==========
      {
        id: 5,
        title: "Node.js Core & Runtime",
        description: "Understand Node.js architecture and core modules.",
        content: [
          "Event loop and non-blocking I/O",
          "Global objects (process, buffer)",
          "File system (fs) and streams",
          "HTTP module (create server)"
        ]
      },
      {
        id: 6,
        title: "NPM & Package Management",
        description: "Manage dependencies and scripts.",
        content: [
          "npm/yarn workflows (install, update)",
          "package.json configurations",
          "Semantic versioning (^, ~)",
          "Publishing custom packages"
        ]
      },
      {
        id: 7,
        title: "Debugging & Testing in Node.js",
        description: "Write testable and debuggable code.",
        content: [
          "Debugging with Chrome DevTools",
          "Winston/morgan for logging",
          "Unit testing (Jest/Mocha)",
          "Mocking API calls (nock)"
        ]
      },
  
      // ========== EXPRESS.JS (3 Modules) ==========
      {
        id: 8,
        title: "Express Basics & Routing",
        description: "Build RESTful APIs with Express.",
        content: [
          "Middleware (app.use, next())",
          "Routing (params, query strings)",
          "Request/response cycle",
          "Error-handling middleware"
        ]
      },
      {
        id: 9,
        title: "Advanced Express Techniques",
        description: "Optimize APIs for production.",
        content: [
          "Rate limiting (express-rate-limit)",
          "Helmet for security headers",
          "Compression (gzip)",
          "CORS and preflight requests"
        ]
      },
      {
        id: 10,
        title: "Authentication & Authorization",
        description: "Secure APIs with JWT and sessions.",
        content: [
          "JWT (access/refresh tokens)",
          "bcrypt for password hashing",
          "OAuth 2.0 (Passport.js)",
          "Role-based access control"
        ]
      },
  
      // ========== REACT (4 Modules) ==========
      {
        id: 11,
        title: "React Components & JSX",
        description: "Build UIs with component architecture.",
        content: [
          "Functional vs class components",
          "Props and prop drilling",
          "Conditional rendering",
          "Lists and keys"
        ]
      },
      {
        id: 12,
        title: "React Hooks & State Management",
        description: "Manage state efficiently with hooks.",
        content: [
          "useState, useEffect, useContext",
          "Custom hooks",
          "useReducer for complex state",
          "React Query for data fetching"
        ]
      },
      {
        id: 13,
        title: "Routing & Performance Optimization",
        description: "Build SPAswith React Router.",
        content: [
          "React Router (v6+)",
          "Lazy loading and code splitting",
          "Memoization (useMemo/useCallback)",
          "Profiling with React DevTools"
        ]
      },
      {
        id: 14,
        title: "Advanced React Patterns",
        description: "Learn scalable frontend architecture.",
        content: [
          "Compound components",
          "Render props pattern",
          "State management (Redux Toolkit)",
          "Server-side rendering (Next.js)"
        ]
      },
  
      // ========== FULL-STACK PROJECTS (2 Modules) ==========
      {
        id: 15,
        title: "Full-Stack Integration",
        description: "Connect React frontend to Node.js backend.",
        content: [
          "Axios vs fetch for API calls",
          "Environment variables (dotenv)",
          "Proxy setup (CORS alternatives)",
          "JWT auth flow (frontend)"
        ]
      },
      {
        id: 16,
        title: "Deployment & DevOps",
        description: "Deploy full-stack apps to production.",
        content: [
          "Dockerizing Node.js + React",
          "AWS/Heroku/Vercel deployment",
          "CI/CD (GitHub Actions)",
          "Monitoring (Sentry, LogRocket)"
        ]
      }
    ]
    ,

    highlights: [
        {
            number: "40+",
            description: "Hours of Hands-on Coding"
        },
        {
            number: "12",
            description: "Core Modules (From JS Basics to Advanced React)"
        },
        {
            number: "5+",
            description: "Real-World Projects (Portfolio Ready)"
        },
        
       
    ],

    certificateImage: "/assets/cources/courseDetails/jjavascript/3.jpg",

    project: [
        {
            icon: "", // Shopping cart emoji for e-commerce
            title: "E-Commerce Product Dashboard",
            description: "Build a React UI with product filtering, cart management, and API-driven data fetching.",
            skills: ["React Hooks", "Context API", "REST APIs", "Tailwind CSS"]
        },
        {
            icon: "", // Checkmark for task manager
            title: "Advanced Task Manager App",
            description: "Create a drag-and-drop task board with Firebase authentication and real-time updates.",
            skills: ["React DnD", "Firebase Auth", "Firestore DB", "React Router"]
        },
        {
            icon: "", // Weather emoji for weather app
            title: "Weather Forecast Dashboard",
            description: "Fetch live weather data from an API and display it with interactive charts and animations.",
            skills: ["Axios/Fetch", "Chart.js", "Geolocation API", "Responsive Design"]
        },
        {
            icon: "", // Lock emoji for auth app
            title: "User Authentication System",
            description: "Implement JWT-based login/signup with protected routes and role-based access.",
            skills: ["JWT", "React Router Guards", "Context API", "Form Validation"]
        },
        {
            icon: "🎥", // Movie emoji for streaming app
            title: "Movie Discovery App",
            description: "Build a Netflix-like UI with search, pagination, and video previews using TMDB API.",
            skills: ["React Query", "Infinite Scroll", "API Pagination", "CSS Grid"]
        }
    ]
,    

    programFor: [
        { src: "/assets/cources/courseDetails/shell-scripting/DevOps Engineers.jpg", alt: "DevOps Engineers", text: "Digital Marketers" },
        { src: "/assets/cources/courseDetails/terraform/Cloud Engineers.jpg", alt: "Startup Founders –", text: "Startup Founders" },
        { src: "/assets/cources/courseDetails/mongodb/System Administrators.jpg", alt: "System Administrators", text: "System Administrators" },
        { src: "/assets/cources/courseDetails/terraform/Infrastructure Engineers.jpg", alt: "Solopreneurs ", text: "Solopreneurs " },
        { src: "/assets/cources/courseDetails/terraform/Software Developers.jpg", alt: "Software Developers", text: "Software Developers" },
        { src: "/assets/cources/courseDetails/terraform/Site Reliability Engineers (SRE).jpg", alt: "Product Managers ", text: "Product Managers " },
        { src: "/assets/cources/courseDetails/terraform/Technical Co-Founders.jpg", alt: "Technical Managers", text: "Data Analytics Specialist" },
        { src: "/assets/cources/courseDetails/shell-scripting/Cloud Administrators.jpg", alt: "Cloud Architects", text: "Artificial Intelligence Consultant" },
        { src: "/assets/cources/courseDetails/terraform/IT Professionals seeking to enhance their DevOps skills.png", alt: "Working IT Professionals", text: "Working IT Professionals" },
        { src: "/assets/cources/courseDetails/terraform/Cloud Engineers.jpg", alt: "College Students", text: "Natural Language Engineer" }
    ],

    toolsData: {
      sectionTitle: "Full-Stack JavaScript Developer Toolkit",
      category: "End-to-End Web Development with React & Node.js",
      toolsCount: "15+",
      displayImage: "/assets/cources/courseDetails/jjavascript/last.jpg", // Verify image path
      tools: [
          {
              id: "js-fundamentals",
              icon: "BarChart", // Represents core JS
              title: "Master JavaScript ES6+ (Async/Await, Modules, OOP)"
          },
          {
              id: "react-core",
              icon: "Cpu", // For React components
              title: "Build UIs with React (Hooks, JSX, Component Lifecycle)"
          },
          {
              id: "routing",
              icon: "Cpu", // For routing
              title: "Client-side routing with React Router v6"
          },
          {
              id: "state-management",
              icon: "TrendingUp", // For state
              title: "State management with Context API & useReducer"
          },
          {
              id: "node-express",
              icon: "BarChart", // For backend
              title: "Develop REST APIs with Node.js & Express"
          },
          {
              id: "api-integration",
              icon: "Cpu", // For APIs
              title: "Connect React to Express APIs (Fetch/Axios)"
          },
          {
              id: "error-handling",
              icon: "TrendingUp", // For debugging
              title: "Debug full-stack apps (DevTools, Postman)"
          },
          {
              id: "deployment",
              icon: "BarChart", // For deployment
              title: "Deploy React (Vercel) & Node.js (Render)"
          }
      ]
  },
    programBy: "Vimal Daga"
}