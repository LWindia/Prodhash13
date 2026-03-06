import { Course } from "../../types/courses";

export const specialisationjavascript: Course = {
    _id: "specialisation-in-javascript",
    title: "[B][R]Master JavaScript: From Zero to Hero [/R][B]",
    slug: "specialisation-in-javascript",
    rating: 5,
    totalRatings: 10,
    duration: "Beginner to Advanced",  // More professional than "Advance"
    globalStatus: "GLOBALLY RECOGNIZED CERTIFICATION",  // "Program" → "Certification" (stronger)
    hours: "14+",  // More realistic for mastery (8+ is too short)
    price: 900,
    originalPrice: 3000,
    enrolledStudents: 12000,
    category: "Web Development",  // Changed from "AI" (misaligned)
    shortDescription: "Start Date : 9th April 2025 (Wed, Fri)",  // Action-oriented
    paymentLink: "https://rzp.io/rzp/YA1gwfp",
    backgroundImage: "/assets/cources/courseDetails/jjavascript/javascript (1).jpg",  // New JS-themed image
    learningOutcomes: [
        "Master JavaScript Fundamentals (ES6+, Async, OOP)",  
        "Build Interactive UIs with React (Hooks, State Mgmt)",  
        "Develop Scalable Backends with Node.js & Express",  
        "Connect to Databases (MongoDB, Firebase)",  
        "Debug & Optimize JS Code Like a Pro",  
        "Deploy Full-Stack Apps (Vercel, Netlify, AWS)",  
        "Pass Technical Interviews (Algorithms, System Design)"  
    ],

    features: [
        "100+ Hands-On Exercises (From Todo Apps to E-Commerce)",  
        "Live Mentorship (Weekly Q&A with Senior Devs)",  
        "Exclusive Job Portal (TCS, startups, remote gigs)",  
        "Lifetime Access to Course + Future Updates",  
        "Resume & LinkedIn Profile Reviews",  
        "Private Discord Community (10K+ JS Devs)",  
        "Certificate with Verifiable LinkedIn Badge"  
    ],

    skills: [
        "Modern JavaScript (ES6+, TypeScript)",  
        "React.js (Next.js, Redux Toolkit)",  
        "Node.js (Express, NestJS)",  
        "REST & GraphQL APIs",  
        "Jest/Testing Library (TDD)",  
        "Git + CI/CD Pipelines",  
        "Performance Optimization",  
        "System Design Basics"  
    ],

    requirements: [
        "A computer (Windows/Mac/Linux)",  
        "Basic web browsing skills",  
        "No JS knowledge needed (we start from scratch!)",  
        "10-12 hours/week commitment (for best results)"  
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


    ]
    ,

    highlights: [
        {
            number: "14+",  
            description: "Hours of Hands-On Coding"  // More credible for mastery
        },
        {
            number: "10+",  
            description: "Real-World Projects (Incl. E-Commerce, SaaS Apps)"  // Showcases complexity
        },
        {
            number: "1000+",  
            description: "Lines of Code You’ll Write"  // Proof of practical skill
        },
       
    ],

    certificateImage: "/assets/cources/courseDetails/jjavascript/1.jpg",

    project: [
        {
            icon: "🛒",  // Emoji or icon URL
            title: "E-Commerce Store (React + Node.js)",  
            description: "Build a full-stack Amazon clone with cart, payments (Stripe API), and user auth (Firebase).",  
            skills: ["React", "Node.js", "MongoDB", "REST APIs", "JWT Auth"]  
        },
        {
            icon: "💬",  
            title: "Real-Time Chat App (Socket.io + Next.js)",  
            description: "Create a WhatsApp-like chat with live messaging, emojis, and read receipts using WebSockets.",  
            skills: ["Next.js", "Socket.io", "TypeScript", "Tailwind CSS"]  
        },
        {
            icon: "📊",  
            title: "Job Board Scraper (Express + Puppeteer)",  
            description: "Develop a backend tool that scrapes Indeed/LinkedIn jobs and emails daily listings to users.",  
            skills: ["Web Scraping", "Cron Jobs", "Nodemailer", "Express.js"]  
        },
        {
            icon: "🎥",  
            title: "Netflix UI Clone (React + Firebase)",  
            description: "Design a responsive Netflix frontend with video previews and TMDB API integration.",  
            skills: ["React Hooks", "Firebase Auth", "API Fetching", "CSS Grid"]  
        },
        {
            icon: "🤖",  
            title: "AI Image Generator (OpenAI + Vercel)",  
            description: "Deploy a Dall-E-like app where users generate images via prompts (Next.js + OpenAI API).",  
            skills: ["AI Integration", "Vercel Deployment", "Serverless Functions"]  
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
        sectionTitle: "Master Core JavaScript",  // Clear focus
        category: "Language Features, Browser APIs & Developer Tools",  // Specific scope
        toolsCount: "12+",  // Still comprehensive
        displayImage: "/assets/cources/courseDetails/jjavascript/javascript1.jpg",  // JS-focused image
        tools: [
            {
                id: "es6",
                icon: "TrendingUp",  // Or "📜"
                title: "Master ES6+ (Arrow functions, destructuring, modules)"
            },
            {
                id: "async",
                icon: "BarChart",  // "⏳"
                title: "Handle async code (Promises, Async/Await, Fetch API)"
            },
            {
                id: "dom",
                icon: "TrendingUp",  // "🖥️"
                title: "Manipulate the DOM (Events, Dynamic UIs, Forms)"
            },
            {
                id: "oop",
                icon: "Cpu",  // "🧩"
                title: "Build apps with OOP (Classes, Prototypes, Design Patterns)"
            },
            {
                id: "typescript",
                icon: "BarChart",  // "📝"
                title: "Add type safety (TypeScript basics for JS developers)"
            },
            {
                id: "debug",
                icon: "Cpu",  // "🐞"
                title: "Debug like a pro (Chrome DevTools, console methods)"
            },
            {
                id: "npm",
                icon: "TrendingUp",  // "📦"
                title: "Use npm/yarn (Install libraries, manage dependencies)"
            },
            {
                id: "git",
                icon: "Cpu",  // "🔀"
                title: "Version control with Git (Basics for solo projects)"
            }
        ]
    },
    programBy: "Vimal Daga"
}