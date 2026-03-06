import { Course } from "../../types/courses";

export const specialisationInMongoDB: Course = {
    _id: "specialisation-in-mongodb",
    title: "[B][R]MongoDB Basic to Advance[/R]  [/B] | Secure NoSQL Data Transactions",
    slug: "specialisation-in-mongodb",
    rating: 5,
    totalRatings: 10,
    duration: "Beginner to Advance",
    globalStatus: "GLOBALLY RECOGNISED PROGRAM",
    programBy: "Vimal Daga",
    hours: "16+",
    price: 2000,
    originalPrice: 7000,
    enrolledStudents: 12000,
    category: "Databases",
    shortDescription: "Industry-Recognized Curriculum | Live Projects | Expert-Led Training | Advanced NoSQL Techniques | High-Performance Data Handling",
    paymentLink: " https://rzp.io/rzp/at46f6D",
    backgroundImage: "/assets/cources/courseDetails/mongodb/mongodb.jpg",

    learningOutcomes: [
        "MongoDB Fundamentals & NoSQL concepts",
        "CRUD Operations & Document Management",
        "Schema Design & Data Modeling",
        "Indexing & Aggregation Pipelines",
        "Replication & Sharding Architecture",
        "Backup & Recovery Strategies"
    ],

    features: [
        "Industry-Relevant MongoDB Training",
        "Technical Support for 90 days",
        "Real-World Database Projects",
        "Premium #13 MongoDB Community"
    ],

    skills: [
        "NoSQL Database Management",
        "Document Database Design",
        "CRUD Operations",
        "Aggregation Framework",
        "Indexing Strategies",
        "Replication",
        "Sharding",
        "Performance Optimization"
    ],

    requirements: [
        "Basic understanding of databases",
        "Familiarity with JSON",
        "Basic programming knowledge"
    ],

    level: "Beginner to Advanced",
    language: "English",
    lastUpdated: "2024-01",
    

    module: [
        {
            id: 1,
            title: "What is NoSQL DB, Why MongoDB & CRUD Operation in MongoDB",
            description: "Understanding NoSQL databases, MongoDB architecture, and CRUD operations.",
            content: [
                "MongoDB Development Architecture",
                "MongoDB Production Architecture",
                "MongoDB CRUD Introduction, MongoDB CRUD Concepts",
                "MongoDB CRUD Concerns (Read & Write Operations)",
                "Concern Levels, Journaling, etc.",
                "Cursor Query Optimizations, Query Behavior in MongoDB",
                "Distributed Read & Write Queries",
                "MongoDB Datatypes",
                "MongoDB CRUD Syntax & Queries (Live Hands-on)"
            ]
        },
        {
            id: 2,
            title: "Model Data & Create Schema",
            description: "Understanding data modeling in MongoDB and schema design patterns.",
            content: [
                "Data Modelling Concepts",
                "Why Data Modelling? Data Modelling Approach",
                "Analogy between RDBMS & MongoDB Data Model",
                "MongoDB Data Model (Embedding & Linking)",
                "Challenges for Data Modelling in MongoDB",
                "Data Model Examples and Patterns",
                "Model Relationships between Documents",
                "Model Tree Structures",
                "Model Specific Application Contexts",
                "Use Case Discussion of Data Modeling"
            ]
        },
        {
            id: 3,
            title: "Indexing and Aggregation Framework",
            description: "Understanding indexing strategies and aggregation framework in MongoDB.",
            content: [
                "Index Introduction, Index Concepts, Index Types, Index Properties",
                "Index Creation and Indexing Reference",
                "Introduction to Aggregation",
                "Approach to Aggregation",
                "Types of Aggregation (Pipeline, MapReduce & Single Purpose)",
                "Performance Tuning",
                "Atlas Scaling & Deployment",
                "Atlas Search",
                "Atlas Data Lake"
            ]
        },
        {
            id: 4,
            title: "MongoDB Security",
            description: "Security principles and best practices in MongoDB.",
            content: [
                "Security Introduction",
                "Security Concepts"
            ]
        },
        {
            id: 5,
            title: "MongoDB on Cloud",
            description: "Exploring MongoDB Cloud products and services.",
            content: [
                "Overview of MongoDB Cloud products",
                "Using Cloud Manager to monitor MongoDB deployments",
                "Introduction to MongoDB Stitch",
                "MongoDB Cloud Atlas",
                "MongoDB Cloud Manager",
                "Working with MongoDB Ops Manager",
                "Realm - Application Development Service",
                "Charts - Visualization of MongoDB Data",
                "MongoDB - Industry Use Cases"
            ]
        }
    ],
    

    highlights: [
        {
            number: "10",
            description: "Modules"
        },
        {
            number: "16+",
            description: "Hours of learning"
        },
        {
            number: "3+",
            description: "Capstone Projects"
        }
    ],

    certificateImage: "/assets/certificate/MongoDB_Certificate.jpg",

    project: [
        {
            icon: "",
            title: "E-Commerce Database",
            description: "Build a scalable e-commerce database system",
            skills: ["MongoDB", "Schema Design", "Indexing"]
        },
        {
            icon: "",
            title: "Analytics Platform",
            description: "Create a data analytics platform using aggregation",
            skills: ["Aggregation Pipeline", "Data Analysis", "Reporting"]
        },
        {
            icon: "",
            title: "Distributed Database",
            description: "Implement a distributed database with replication",
            skills: ["Replication", "Sharding", "High Availability"]
        }
    ],

    programFor: [
        { src: "/assets/cources/courseDetails/terraform/Software Developers.jpg", alt:"" , text: "Software Developers" },
        { src: "/assets/cources/courseDetails/mongodb/Database Administrators.jpg", alt: "", text: "Database Administrators" },
        { src: "/assets/cources/courseDetails/mongodb/System Administrators.jpg", alt: "", text: "System Administrators" },
        { src: "/assets/cources/courseDetails/terraform/Cloud Engineers.jpg", alt: "", text: "Cloud Engineers" },
        { src: "/assets/cources/courseDetails/shell-scripting/DevOps Engineers.jpg", alt: "", text: "DevOps Engineers" },
        { src: "/assets/cources/courseDetails/mongodb/Data Engineers.jpg", alt: "", text: "Data Engineers" },
        { src: "/assets/cources/courseDetails/mongodb/IT Professionals.jpg", alt: "", text: "Working IT Professionals" },
        { src: "/assets/cources/courseDetails/mongodb/Students.jpg", alt: "", text: "Enthusiast Students" }
    ],

    toolsData: {
        sectionTitle: "Complete MongoDB Program",
        category: "Database Management",
        toolsCount: "10+",
        displayImage: "/assets/cources/tools/MongoDB (1).jpg",
        tools: [
            {
                id: "basics",
                icon: "TrendingUp",
                title: "MongoDB Basics: NoSQL, Documents, Collections"
            },
            {
                id: "crud",
                icon: "BarChart",
                title: "CRUD Operations: Create, Read, Update, Delete"
            },
            {
                id: "schema",
                icon: "Cpu",
                title: "Schema Design: Data Modeling, Relationships"
            },
            {
                id: "performance",
                icon: "TrendingUp",
                title: "Performance: Indexing, Aggregation Pipeline"
            },
            {
                id: "scaling",
                icon: "Cpu",
                title: "Scaling: Replication, Sharding, Clustering"
            }
        ]
    },
}