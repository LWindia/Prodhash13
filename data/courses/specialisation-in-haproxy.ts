import { Course } from "../../types/courses";

export const specialisationInHAproxyMasterclass: Course = {
    _id: "haproxy-masterclass",
    title: "[B] [R]High-Performance Load Balancer - HAproxy Training[/R] [/B]",
    slug: "haproxy-masterclass",
    rating: 5,
    totalRatings: 10,
    duration: "Basic to Advance",
    globalStatus: "World's Most Trusted Open Source Load Balancer",
    programBy: "Vimal Daga",
    hours: "20+",
    price: 1990,
    originalPrice: 7500,
    enrolledStudents: 3500,
    category: "DevOps",
    shortDescription: "Industry Relevant Content with Use Cases under the guidance of Mr. Vimal Daga",
    paymentLink: "https://rzp.io/rzp/haproxy",
    backgroundImage: "/assets/cources/courseDetails/6course/haproxy2.jpg",

    learningOutcomes: [
        "Master HAProxy Configuration and Setup",
        "Implement Load Balancing Strategies",
        "Configure High Availability",
        "Secure Load Balancer Setup",
        "Performance Optimization"
    ],

    features: [
        "Most Relevant HAProxy Tips & Tricks",
        "Technical Support for 60 days",
        "Industry Use Cases",
        "Premium #13 HAProxy Community"
    ],

    skills: [
        "Load Balancing",
        "High Availability",
        "Security Configuration",
        "Performance Tuning",
        "Network Management"
    ],

    requirements: [
        "Basic networking knowledge",
        "Basic Linux administration skills"
    ],

    level: "Beginner to Advanced",
    language: "English",
    lastUpdated: "2024-03",

    module: [
        {
            id: 1,
            title: "Introduction to HAProxy and Load Balancing",
            description: "Fundamentals of HAProxy and load balancing concepts",
            content: [
                "Understanding HAProxy",
                "Importance and Features of Load Balancer Services",
                "Ensuring Availability and High Availability",
                "Addressing Security Concerns",
                "Handling Public IP Traffic",
                "Auditing Process and Access Control",
                "Dealing with Bad User Experience (UX)",
                "Implementing Reverse Proxy",
                "Front-end and Back-end Server Concepts",
                "Introduction to Round Robin Load Balancing",
                "Securing Communication with TLS"
            ]
        },
        {
            id: 2,
            title: "Setting Up HAProxy",
            description: "Installation and basic configuration of HAProxy",
            content: [
                "Installing HAProxy",
                "Launching EC2 Instance for HAProxy",
                "Utilizing Docker and Container Technology",
                "Setting Up Public IP",
                "Configuring HAProxy with Gitbash",
                "Installing Node.js and Creating a Node Server",
                "Implementing Reverse Proxy with Express",
                "Configuring Port Numbers",
                "Understanding HAProxy Configuration File",
                "Working with Timeouts",
                "Utilizing CURL Commands"
            ]
        },
        {
            id: 3,
            title: "Advanced Routing and Access Control",
            description: "Advanced configuration and access control in HAProxy",
            content: [
                "Creating Custom Routes",
                "Understanding Access Control Lists (ACL)",
                "Working with Backend Servers in Multi-Node Environments",
                "Utilizing Load Balancer for Target Groups",
                "Managing HTTPD Headers",
                "Exploring OSI Layer and TCP",
                "Fetching Data and Application-Level Load Balancer",
                "Role Management and Server Configuration",
                "Handling Timeouts in Detail",
                "Implementing Firewall Rules",
                "Monitoring Tools and Response Analysis",
                "Utilizing ACL Keywords and Matching Methods"
            ]
        },
        {
            id: 4,
            title: "Load Balancer Algorithms and SSL/TLS",
            description: "Understanding and implementing various load balancing algorithms",
            content: [
                "Exploring Load Balancer Algorithms",
                "Configuring SSL/TLS for Secure Communication",
                "Analyzing HAProxy Statistics",
                "Installing PHP HTTPD",
                "Implementing Weighted and Unweighted Round Robin Algorithm",
                "Utilizing Least Connection Algorithm",
                "Understanding Static Round Robin and IP Hash Load Balancer Algorithms",
                "Implementing Sticky Sessions",
                "Configuration of Frontend and Backend Servers",
                "Logging and Monitoring with VIM"
            ]
        },
        {
            id: 5,
            title: "Ensuring High Availability and Security",
            description: "Advanced security and high availability configurations",
            content: [
                "Understanding Single Point of Failure",
                "Implementing High Availability Techniques",
                "Ensuring Encryption for Data Security",
                "Handling Scaler Load Balancer",
                "Access Control List (ACL) Implementation",
                "DNS Health Checking with VRRP Protocol",
                "Configuring Static IP, Floating IP, and Virtual IP",
                "Setting Up Keepalive Program",
                "Installation and Configuration of HAProxy",
                "Configuring Network Interfaces and Virtual Route IPs",
                "Utilizing Monitoring Tools like Monit",
                "Implementing Security Measures and SSL/TLS Setup",
                "Protecting against DDoS Attacks",
                "Utilizing Stick Tables and Setting up API by UNIX Socket",
                "Threading and Performance Tuning",
                "Managing SSL/TLS Termination and End-to-End Encryption",
                "Creating CSR Files and Implementing SSL Keywords"
            ]
        }
    ],

    highlights: [
        {
            number: "5",
            description: "Modules"
        },
        {
            number: "20+",
            description: "Hours of learning"
        },
        {
            number: "60",
            description: "Days of support"
        }
    ],

    programFor: [
        { src: "/assets/courses/programFor/web.jpg", alt: "Web Developers", text: "Web developers" },
        { src: "/assets/courses/programFor/admin.jpg", alt: "Server Admin", text: "Server Admin" },
        { src: "/assets/courses/programFor/specialist.jpg", alt: "Server Specialist", text: "Server Specialist" },
        { src: "/assets/courses/programFor/sysadmin.jpg", alt: "System Admin", text: "System Admin" },
        { src: "/assets/courses/programFor/linux.jpg", alt: "Linux Admin", text: "Linux Admin" },
        { src: "/assets/courses/programFor/student.jpg", alt: "Students", text: "Students pursuing any technical degree" },
        { src: "/assets/courses/programFor/support.jpg", alt: "IT Support", text: "IT Support" },
        { src: "/assets/courses/programFor/devops.jpg", alt: "DevOps Engineer", text: "DevOps Engineer" }
    ],

    certificateImage: "/assets/certificate/HAproxy1.jpg",

    toolsData: {
        sectionTitle: "Comprehensive HAProxy Program",
        category: "DevOps",
        toolsCount: "5+",
        displayImage: "/assets/tools1/4.png",
        tools: [
            {
                id: "loadbalancer",
                icon: "TrendingUp",
                title: "Load Balancing: HAProxy Configuration"
            },
            {
                id: "security",
                icon: "Cpu",
                title: "Security: SSL/TLS Implementation"
            },
            {
                id: "monitoring",
                icon: "TrendingUp",
                title: "Monitoring: HAProxy Statistics"
            }
        ]
    }
};