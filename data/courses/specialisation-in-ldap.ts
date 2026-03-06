import { Course } from "../../types/courses";

export const ldapMasterclass: Course = {
    _id: "ldap-masterclass",
    title: "[B] [R]LDAP (Lightweight Directory Access Protocol) Masterclass[/R] [/B]",
    slug: "ldap-masterclass",
    rating: 5,
    totalRatings: 10,
    duration: "Basic to Advance",
    globalStatus: "GLOBALLY RECOGNISED PROGRAM",
    programBy: "Vimal Daga",
    hours: "16+",
    price: 1990,
    originalPrice: 7500,
    enrolledStudents: 2500,
    category: "System Administration",
    shortDescription: "Master Directory Services with LDAP - From Basics to Enterprise Implementation",
    paymentLink: "https://rzp.io/rzp/ldap",
    backgroundImage: "/assets/cources/courseDetails/6course/LDAP (1).jpg",

    learningOutcomes: [
        "Understand LDAP architecture and protocols",
        "Implement Authentication & Authorization",
        "Configure Directory Services",
        "Master LDAP Security",
        "Deploy Enterprise LDAP Solutions"
    ],

    features: [
        "Hands-on LDAP Implementation",
        "Technical Support for 60 days",
        "Real-world Industry Use Cases",
        "Premium #13 LDAP Community"
    ],

    skills: [
        "Directory Services",
        "Authentication Systems",
        "Security Implementation",
        "System Administration",
        "Enterprise Integration"
    ],

    requirements: [
        "Basic networking knowledge",
        "Linux/Windows administration basics",
        "Understanding of authentication concepts"
    ],

    level: "Beginner to Advanced",
    language: "English",
    lastUpdated: "2024-03",

    module: [
        {
            id: 1,
            title: "Introduction to LDAP",
            description: "Fundamentals of Directory Services and LDAP",
            content: [
                "Understanding Directory Services",
                "LDAP Protocol Overview",
                "X.500 Directory Services",
                "LDAP vs Traditional Databases",
                "LDAP Versions and Evolution",
                "Directory Information Tree (DIT)",
                "LDAP Data Interchange Format (LDIF)",
                "Basic LDAP Operations",
                "LDAP URLs and Referrals",
                "LDAP Schema Basics"
            ]
        },
        {
            id: 2,
            title: "LDAP Architecture and Components",
            description: "Core components and architectural elements",
            content: [
                "Directory Information Tree Structure",
                "Distinguished Names (DN)",
                "Relative Distinguished Names (RDN)",
                "Object Classes",
                "Attributes and Their Types",
                "LDAP Data Types",
                "Naming Contexts",
                "Directory Schema",
                "LDAP Backends",
                "Replication Architecture"
            ]
        },
        {
            id: 3,
            title: "LDAP Operations and Implementation",
            description: "Working with LDAP operations and commands",
            content: [
                "Bind Operations",
                "Search Operations",
                "Add Operations",
                "Delete Operations",
                "Modify Operations",
                "Compare Operations",
                "Extended Operations",
                "Abandon Operations",
                "LDAP Command-Line Tools",
                "LDAP APIs and Libraries"
            ]
        },
        {
            id: 4,
            title: "Authentication and Security",
            description: "Security implementation in LDAP",
            content: [
                "Simple Authentication",
                "SASL Authentication",
                "SSL/TLS Configuration",
                "Access Control Lists (ACLs)",
                "Password Policies",
                "Security Considerations",
                "Encryption Methods",
                "Certificate Management",
                "Security Best Practices",
                "Audit Logging"
            ]
        },
        {
            id: 5,
            title: "Enterprise Implementation",
            description: "Implementing LDAP in enterprise environments",
            content: [
                "OpenLDAP Installation",
                "Active Directory Integration",
                "Multi-Master Replication",
                "High Availability Setup",
                "Load Balancing",
                "Backup and Recovery",
                "Performance Tuning",
                "Monitoring and Maintenance",
                "Troubleshooting Techniques",
                "Disaster Recovery Planning"
            ]
        }
    ],

    highlights: [
        {
            number: "5",
            description: "Modules"
        },
        {
            number: "16+",
            description: "Hours of learning"
        },
        {
            number: "60",
            description: "Days of support"
        }
    ],

    programFor: [
        { src: "/assets/courses/programFor/sysadmin.jpg", alt: "System Administrators", text: "System Administrators" },
        { src: "/assets/courses/programFor/security.jpg", alt: "Security Engineers", text: "Security Engineers" },
        { src: "/assets/courses/programFor/network.jpg", alt: "Network Engineers", text: "Network Engineers" },
        { src: "/assets/courses/programFor/devops.jpg", alt: "DevOps Engineers", text: "DevOps Engineers" },
        { src: "/assets/courses/programFor/it.jpg", alt: "IT Managers", text: "IT Managers" },
        { src: "/assets/courses/programFor/support.jpg", alt: "Technical Support", text: "Technical Support" },
        { src: "/assets/courses/programFor/architect.jpg", alt: "Solution Architects", text: "Solution Architects" },
        { src: "/assets/courses/programFor/consultant.jpg", alt: "IT Consultants", text: "IT Consultants" }
    ],

    certificateImage: "/assets/certificate/LDAP1.jpg",

    toolsData: {
        sectionTitle: "Comprehensive LDAP Implementation Program",
        category: "System Administration",
        toolsCount: "5+",
        displayImage: "/assets/tools1/5.png",
        tools: [
            {
                id: "directory",
                icon: "TrendingUp",
                title: "Directory Services: OpenLDAP, Active Directory"
            },
            {
                id: "security",
                icon: "Cpu",
                title: "Security: SSL/TLS, SASL"
            },
            {
                id: "management",
                icon: "BarChart",
                title: "Management: Directory Tools and Utilities"
            }
        ]
    }
};
