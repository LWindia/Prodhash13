import { Course } from "../../types/courses";

export const specialisationInStreamlit: Course = {
    _id: "specialisation-in-streamlit",
    title: "[B] [R]Specialisation in Streamlit Development[/R] [/B] |   Build Interactive Apps with Streamlit ",
    slug: "specialisation-in-streamlit",
    rating: 5,
    totalRatings: 10,
    duration: "Beginner to Advance",
    globalStatus: "GLOBALLY RECOGNISED PROGRAM",
    programBy: "Vimal Daga",
    hours: "14+",
    price: 2500,
    originalPrice: 7500,
    enrolledStudents: 8000,
    category: "Data Applications",
    shortDescription: "Weekend Live Batch",
    paymentLink: "https://rzp.io/rzp/johHCWU4",
    backgroundImage: "/assets/streamlit1 (1).jpg",

    learningOutcomes: [
        "Master Streamlit Framework Fundamentals",
        "Interactive Data Visualization",
        "ML Model Deployment",
        "Custom Components Development",
        "Production-Grade Applications",
        "Real-time Analytics Dashboard"
    ],

    features: [
        "Industry-relevant Data App Development Skills",
        "Technical Support for 90 days",
        "Premium #13 Data App Community Membership"
    ],

    skills: [
        "Python Programming",
        "Data Visualization",
        "ML Model Integration",
        "UI/UX Design",
        "App Deployment"
    ],

    requirements: [
        "Basic Python knowledge",
        "Understanding of data structures",
        "Familiarity with data analysis concepts"
    ],

    level: "Beginner to Advanced",
    language: "English",
    lastUpdated: "2024-03",

    module: [
        {
            id: 1,
            title: "Introduction to Streamlit",
            description: "Learn the fundamentals of Streamlit framework and setup",
            content: [
                "What is Streamlit?",
                "Setting up development environment",
                "First Streamlit app",
                "Core components overview",
                "Basic app structure",
                "App configuration",
                "Command line interface",
                "Development workflow",
                "Basic styling and theming",
                "App deployment basics"
            ]
        },
        {
            id: 2,
            title: "Core Components & Widgets",
            description: "Master Streamlit's built-in components and widgets",
            content: [
                "Text elements (title, header, markdown)",
                "Data display components",
                "Input widgets",
                "Buttons and interactions",
                "File uploaders",
                "Progress and status",
                "Forms and containers",
                "Layouts and columns",
                "Sidebar navigation",
                "State management",
                "Session state",
                "Caching mechanisms"
            ]
        },
        {
            id: 3,
            title: "Data Visualization & Analytics",
            description: "Create interactive visualizations and analytics dashboards",
            content: [
                "Basic charts and plots",
                "Interactive Plotly integration",
                "Custom visualizations",
                "Maps and geographical data",
                "Real-time data updates",
                "Multi-page applications",
                "Dashboard layouts",
                "Data filtering",
                "Interactive analytics",
                "Performance optimization"
            ]
        },
        {
            id: 4,
            title: "Machine Learning Integration",
            description: "Deploy and integrate ML models with Streamlit",
            content: [
                "ML model deployment basics",
                "Model prediction interface",
                "File handling for ML",
                "Real-time predictions",
                "Model performance visualization",
                "Multiple model integration",
                "Model optimization",
                "Error handling",
                "Batch processing",
                "Model monitoring"
            ]
        },
        {
            id: 5,
            title: "Advanced Features & Components",
            description: "Explore advanced Streamlit capabilities",
            content: [
                "Custom components development",
                "Component styling",
                "Authentication systems",
                "Database integration",
                "API connections",
                "WebSocket integration",
                "Caching strategies",
                "Performance tuning",
                "Error handling",
                "Testing strategies"
            ]
        },
        {
            id: 6,
            title: "Deployment & Production",
            description: "Learn deployment and production management",
            content: [
                "Deployment options",
                "Cloud hosting setup",
                "Docker containerization",
                "Environment management",
                "Security best practices",
                "Monitoring setup",
                "Performance optimization",
                "Scaling strategies",
                "Maintenance procedures",
                "CI/CD integration"
            ]
        }
    ],

    highlights: [
        {
            number: "6",
            description: "Modules"
        },
        {
            number: "24+",
            description: "Hours of learning"
        },
        {
            number: "4",
            description: "Capstone Projects"
        }
    ],

    certificateImage: "/assets/cources/courseDetails/streamlit/streamlit.jpg",

    project: [
        {
            icon: "/assets/projects/dashboard.png",
            title: "Interactive Analytics Dashboard",
            description: "Build a comprehensive analytics dashboard with real-time data visualization and interactive filters",
            skills: ["Streamlit", "Data Visualization", "Real-time Analytics"]
        },
        {
            icon: "/assets/projects/ml.png",
            title: "ML Model Deployment Platform",
            description: "Create a platform for deploying and testing machine learning models with user interface",
            skills: ["ML Integration", "Model Deployment", "Interactive UI"]
        },
        {
            icon: "/assets/projects/finance.png",
            title: "Financial Analysis Tool",
            description: "Develop a financial analysis tool with stock market data visualization and portfolio tracking",
            skills: ["Financial Analysis", "Data Processing", "Real-time Updates"]
        },
        {
            icon: "/assets/projects/bi.png",
            title: "Business Intelligence Dashboard",
            description: "Build a BI dashboard with KPI tracking and automated reporting features",
            skills: ["Business Intelligence", "Data Analysis", "Reporting"]
        }
    ],

    programFor: [
        { src: "/assets/courses/streamlit/roles/data-scientist.jpg", alt: "Data Scientists", text: "Data Scientists" },
        { src: "/assets/courses/streamlit/roles/data-analyst.jpg", alt: "Data Analysts", text: "Data Analysts" },
        { src: "/assets/courses/streamlit/roles/ml-engineer.jpg", alt: "ML Engineers", text: "ML Engineers" },
        { src: "/assets/courses/streamlit/roles/bi-developer.jpg", alt: "BI Developers", text: "BI Developers" },
        { src: "/assets/courses/streamlit/roles/python-dev.jpg", alt: "Python Developers", text: "Python Developers" },
        { src: "/assets/courses/streamlit/roles/data-engineer.jpg", alt: "Data Engineers", text: "Data Engineers" },
        { src: "/assets/courses/streamlit/roles/product-manager.jpg", alt: "Product Managers", text: "Product Managers" },
        { src: "/assets/courses/streamlit/roles/researcher.jpg", alt: "Researchers", text: "Research Scientists" },
        { src: "/assets/courses/streamlit/roles/student.jpg", alt: "Students", text: "Students" },
        { src: "/assets/courses/streamlit/roles/professional.jpg", alt: "IT Professionals", text: "IT Professionals" }
    ],

    toolsData: {
        sectionTitle: "Complete Streamlit Development Program",
        category: "Data App Development",
        toolsCount: "15+",
        displayImage: "/assets/cources/tools/streamlit.jpg",
        tools: [
            {
                id: "basics",
                icon: "Cpu",
                title: "Core Streamlit Components & App Development"
            },
            {
                id: "visualization",
                icon: "BarChart",
                title: "Data Visualization & Interactive Analytics"
            },
            {
                id: "ml",
                icon: "TrendingUp",
                title: "ML Model Integration & Deployment"
            },
            {
                id: "deployment",
                icon: "Cpu",
                title: "Production Deployment & Management"
            },
            {
                id: "advanced",
                icon: "BarChart",
                title: "Custom Components & Advanced Features"
            }
        ]
    }
}