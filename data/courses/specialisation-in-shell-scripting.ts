import { Course } from "../../types/courses";

export const specialisationInShellScripting: Course = {
    _id: "specialisation-in-shell-scripting",
    title: "[B][R]Bash Shell Scripting [/R][/B] | Simplify Repetitive Tasks with Scripting",
    slug: "specialisation-in-shell-scripting",
    rating: 5, // Not provided
    totalRatings: 10, // Not provided
    duration: "Beginner to Advance",
    globalStatus: "GLOBALLY RECOGNISED PROGRAM",
    programBy: "Vimal Daga",
    hours: "16+",
    price: 2000, // Not provided
    originalPrice: 7000, // Not provided
    enrolledStudents: 12000, // Not provided
    category: "Programming",
    shortDescription: "Industry-Relevant & Recognized Training | Hands-On Automation Experience | Advanced Scripting Techniques | Real-Time Industry Use Cases",
    paymentLink: " https://rzp.io/rzp/z1hJjFR8", // Not provided
    backgroundImage: "/assets/cources/courseDetails/shell-scripting/shell-scripting.jpg", // Need path

    learningOutcomes: [
       " Introduction to Shell Scripting | Input | Output | Control Structures | Loops",
        "Grep command | Everything about vi editor | Advanced Scripting Techniques",
        "Sample Scripts | Regex | Apache httpd | Build Unique Linux Programs | AWK",
        "Arrays | Cut and sed command | Blacklisting an IP | Conditional Statement",
        "Useful utilities for Shell Scripts "
    ],

    features: [
        "Most Relevant Shell Scripting Tips & Tricks",
        "Technical Support for 90 days",
        "Automation Related Industry Use Cases",
        "Premium #13 Shell Scripting Community"
    ],

    skills: [
        "Bash Scripting",
        "Shell Programming",
        "Automation",
        "System Administration",
        "Text Processing",
        "Network Scripting",
        "Process Management"
    ],

    requirements: [
        "Basic computer knowledge",
        "Basic understanding of Linux/Unix"
    ],

    level: "Beginner to Advanced",
    language: "English",
    lastUpdated: "2024-01",
    

    module: [
        {
            id: 1,
            title: "Introduction to Shell Scripting",
            description: "Basic shell scripting fundamentals",
            content: [
                "What is Shell & Shell Scripting?",
                "Operating System GUI & CLI",
                "Introduction to Bash Shell"
            ]
        },
        {
            id: 2,
            title: "Creating a Script File and Building a Command",
            description: "Script creation fundamentals",
            content: [
                "Creating a Script File and Building a Command",
                "Variables & User-defined Variables",
                "Status Code",
                "Executable Program",
                "Path",
                "Hashbang or Shebang",
                "Script File",
                "Bashrc File",
                "Arguments"
            ]
        },
        {
            id: 3,
            title: "Iteration in Shell Scripting",
            description: "Understanding iterations and loops",
            content: [
                "Iteration in Shell Scripting",
                "Useradd & ID Command",
                "Iteration & Loop",
                "For Loop Syntax",
                "Passwd File Manipulation"
            ]
        },
        {
            id: 4,
            title: "If/Else Conditions & User Backup Scripting",
            description: "Conditional programming and user management",
            content: [
                "If/Else Conditions & User Backup Scripting",
                "If-Else Conditions",
                "Test Command",
                "Conditional Operators",
                "I/O Redirection",
                "Nested Conditions",
                "User Management Commands (Useradd, User Lock)",
                "Regex, Grep & Cut Command",
                "Home Directory Management",
                "Backup using Tar Command"
            ]
        },
        {
            id: 5,
            title: "Executing Scripts Over Network",
            description: "Network operations and file management",
            content: [
                "Executing Scripts Over Network",
                "Log Analysis",
                "Launching AWS EC2 Instance",
                "WinSCP Tool",
                "Configuring Web Server (HTTPD)",
                "Access Logs & Error Logs",
                "File Operations (WC, CHMOD, SUDO, AWK, SORT, UNIQ, TAIL, SCP)"
            ]
        },
        {
            id: 6,
            title: "Advanced Scripting Techniques",
            description: "Advanced scripting concepts",
            content: [
                "Advanced Scripting Techniques",
                "Regular Expressions",
                "AWK & GREP Command",
                "SED Command",
                "Creating Options in Scripts",
                "Using GETOPTS & SET Command",
                "Pre-created Variables & Functions"
            ]
        },
        {
            id: 7,
            title: "Linux OS Fundamentals",
            description: "Operating system and shell basics",
            content: [
                "Linux OS Fundamentals",
                "Shell Basics",
                "Cisco Switches",
                "GUI vs. CLI",
                "Introduction to Bash Shell",
                "Script File Creation",
                "Test Keyword",
                "Logical Operators"
            ]
        },
        {
            id: 8,
            title: "Advanced Shell Scripting Concepts",
            description: "Advanced shell programming",
            content: [
                "Advanced Shell Scripting Concepts",
                "User-defined Variables",
                "Arrays",
                "File Manipulation",
                "Looping Constructs"
            ]
        },
        {
            id: 9,
            title: "Process & Subprocess Management",
            description: "Process control and management",
            content: [
                "Process & Subprocess Management",
                "Job Control",
                "Daemon Processes",
                "Signal Handling",
                "Looping & Flow Control"
            ]
        },
        {
            id: 10,
            title: "Advanced Commands and Techniques",
            description: "Advanced shell commands",
            content: [
                "Advanced Commands and Techniques",
                "Shopt Command",
                "Tree Command",
                "Export Keyword",
                "Parallel Execution",
                "SSH & SCP Commands",
                "AWK Command for Text Processing"
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

    certificateImage: "/assets/certificate/Shell_certificate.png", // Need path

    project: [
        {
            icon: "", // Need path
            title: "System Automation Framework",
            description: "Build a comprehensive automation framework for system administration tasks",
            skills: ["Shell Scripting", "Automation", "System Administration"]
        },
        {
            icon: "", // Need path
            title: "Log Analysis System",
            description: "Create an automated log analysis and reporting system",
            skills: ["Text Processing", "AWK", "GREP", "SED"]
        },
        {
            icon: "", // Need path
            title: "Backup Automation",
            description: "Implement an automated backup and recovery system",
            skills: ["File Management", "Cron Jobs", "AWS Integration"]
        }
    ],

    programFor: [
        { src: "/assets/cources/courseDetails/shell-scripting/Engineer Graduates.jpg", alt: "Engineering Graduates", text: "Engineering Graduates" },
        { src: "/assets/cources/courseDetails/shell-scripting/Linux System Administrators.jpg", alt: "System Administrators", text: "Linux System Administrators" },
        { src: "/assets/cources/courseDetails/shell-scripting/DevOps Engineers.jpg", alt: "DevOps Engineers", text: "DevOps Engineers" },
        { src: "/assets/cources/courseDetails/shell-scripting/Cloud Administrators.jpg", alt: "Cloud Administrators", text: "Cloud Administrators" },
        { src: "/assets/cources/courseDetails/shell-scripting/Web Developers (BackendFull Stack).jpg", alt: "Web Developers", text: "Web Developers " },
        { src: "/assets/cources/courseDetails/shell-scripting/Automation Engineers.jpg", alt: "Automation Engineers", text: "Automation Engineers" },
        { src: "/assets/cources/courseDetails/shell-scripting/Server AdministratorsS.jpg", alt: "Server Administrators", text: "Server Administrators" },
        { src: "/assets/cources/courseDetails/shell-scripting/Network Adminstrators.jpg", alt: "Network Administrators", text: "Network Administrators" },
        { src: "/assets/cources/courseDetails/shell-scripting/Freshers seeking Automation or DevOps Roles.jpg", alt: "Freshers", text: "Enthusiast Students" },
        // { src: "", alt: "Professors & Trainers in IT", text: "Professors & Trainers in IT " }
    ],

    toolsData: {
        sectionTitle: "Complete Shell Scripting Program",
        category: "Automation",
        toolsCount: "10+",
        displayImage: "/assets/cources/tools/Shell-Scripting (1).jpg", // Need path
        tools: [
            {
                id: "basics",
                icon: "BarChart",
                title: "Shell Essentials: Bash scripting, CLI commands, shebang, chmod"
            },
            {
                id: "control",
                icon: "TrendingUp",
                title: "Control Structures: If-Else, For, While loops, Regex, exit status"
            },
            {
                id: "automation",
                icon: "Cpu",
                title: "File & Process Automation: File I/O, cron jobs, signal trapping"
            },
            {
                id: "network",
                icon: "BarChart",
                title: "Network Scripting: SCP, SSH, AWS EC2 automation, log analysis"
            },
            {
                id: "text",
                icon: "TrendingUp",
                title: "Text Processing Tools: AWK, GREP, SED, GETOPTS"
            }
        ]
    },
}
