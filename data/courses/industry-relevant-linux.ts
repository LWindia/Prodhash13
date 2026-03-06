import { Course } from "../../types/courses";

export const advanceLinuxTraining: Course = {
    _id: "advance-linux-training",
    title: "[B] [R]Industry Relevant Advance Linux Training[/R] [/B] | Master Linux in 2 Months",
    slug: "advance-linux-training",
    rating: 5,
    totalRatings: 10,
    duration: "Beginner to Advance",
    globalStatus: "GLOBALLY RECOGNISED PROGRAM",
    programBy: "Vimal Daga",
    hours: "16+",
    price: 3500,
    originalPrice: 15000,
    enrolledStudents: 200000,
    category: "System Administrations",
    shortDescription: "Learn Tested & Proven Linux Skills | Gain HandsOn Experience | Best-In-Class Content | Industry Use-Cases",
    paymentLink: "https://rzp.io/rzp/eVtYuJF",
    backgroundImage: "/assets/cources/courseDetails/6course/linux-mascot-sitting-on-a-chip-with-blurred-code-in-the-background.jpg",
    certificateImage:  "/assets/tools1/advancelinux1.jpg",

    learningOutcomes: [
        "Master Linux OS Administration",
        "System Resource Management",
        "Terminal Operations & Recording",
        "Advanced System Calls & PID Management",
        "Memory Management with Valgrind",
        "CPU Scheduling & Job Management",
        "Network Monitoring & Security"
    ],

    features: [
        "Most Relevant Linux Tips & Tricks",
        "Technical Support for 90 days",
        "Industry Use Cases & Projects",
        "Premium #13 Linux Community"
    ],

    skills: [
        "Linux Administration",
        "System Resource Management",
        "Network Management",
        "Security Implementation",
        "Performance Optimization"
    ],

    requirements: [
        "Basic computer knowledge",
        "Interest in system administration"
    ],

    level: "Beginner to Advanced",
    language: "English",
    lastUpdated: "2024-01",

    module: [
        {
            id: 1,
            title: "Introduction",
            description: "Core concepts of Linux OS and installation procedures",
            content: [
                "Right approach of OS",
                "Program & Process concepts",
                "Tuning physical resources",
                "Installation of RedHat Linux OS on AWS Cloud",
                "Using Putty on Windows to connect to Linux instances"
            ]
        },
        {
            id: 2,
            title: "Sessions and Scopes",
            description: "Understanding Linux sessions and system management",
            content: [
                "Command prompt concepts",
                "W command implementation",
                "Loginctl command usage",
                "Detailed description on Sessions",
                "Understanding Scope",
                "CGroup fundamentals"
            ]
        },
        {
            id: 3,
            title: "CGroups",
            description: "Control Groups management and constraints",
            content: [
                "Setting constraints on users",
                "Session constraints",
                "Scope control over constraints",
                "Resource management",
                "CGroup hierarchy"
            ]
        },
        {
            id: 4,
            title: "Unit File",
            description: "Understanding and implementing unit files",
            content: [
                "Unit file reading by Cgroup",
                "Setting constraints in unit file",
                "Configuration management",
                "Service definitions",
                "Unit file syntax"
            ]
        },
        {
            id: 5,
            title: "Slices",
            description: "Resource slicing and productivity enhancement",
            content: [
                "Physical resource slicing",
                "Resource allocation to sessions",
                "Productivity shortcuts in OS",
                "Resource management techniques",
                "Performance optimization"
            ]
        },
        {
            id: 6,
            title: "Recording a Terminal",
            description: "Terminal recording and management",
            content: [
                "Terminal recording commands",
                "Recording management",
                "Playback options",
                "Storage management",
                "Terminal session logging"
            ]
        },
        {
            id: 7,
            title: "Terminal Multiplexer",
            description: "Advanced terminal management techniques",
            content: [
                "Multiple command execution",
                "Multiple window creation",
                "Pane management",
                "Shortcut implementation",
                "Session management"
            ]
        },
        {
            id: 8,
            title: "Systemcall",
            description: "Understanding system calls and kernel interaction",
            content: [
                "Device Drivers",
                "User Space concepts",
                "Kernel Space understanding",
                "Systemcall implementation",
                "Context Switching",
                "Time complexity optimization"
            ]
        },
        {
            id: 9,
            title: "Netcat",
            description: "Network utility implementation",
            content: [
                "Port number programming",
                "Chat program creation",
                "Text sharing",
                "Command output sharing",
                "Network communication"
            ]
        },
        {
            id: 10,
            title: "Audit",
            description: "System call management and auditing",
            content: [
                "Systemcall Management",
                "Audit implementation",
                "Log file storage",
                "Analysis techniques",
                "Audit reporting"
            ]
        },
        {
            id: 11,
            title: "PID",
            description: "Process ID management",
            content: [
                "Kernel PID creation",
                "Process management",
                "PID tracking",
                "Process hierarchy",
                "PID optimization"
            ]
        },
        {
            id: 12,
            title: "Valgrind",
            description: "Memory leakage detection and management",
            content: [
                "Memory leakage checking",
                "Valgrind implementation",
                "Memory optimization",
                "Performance analysis",
                "Debug techniques"
            ]
        },
        {
            id: 13,
            title: "Systemd and CGroup",
            description: "Service and resource management",
            content: [
                "Systemctl command usage",
                "Unit file creation",
                "Service management",
                "CGroup implementation",
                "Resource control"
            ]
        },
        {
            id: 14,
            title: "CPU",
            description: "CPU management and monitoring",
            content: [
                "CPU information commands",
                "Performance monitoring",
                "Resource utilization",
                "CPU optimization",
                "System analysis"
            ]
        },
        {
            id: 15,
            title: "Unit File Advanced",
            description: "Advanced unit file implementation",
            content: [
                "Unit file creation",
                "CGroup implementation",
                "File location techniques",
                "Locate command usage",
                "Configuration management"
            ]
        },
        {
            id: 16,
            title: "CPU Scheduling",
            description: "Advanced CPU management",
            content: [
                "Hardware information commands",
                "HTML page creation",
                "CPU sharing concepts",
                "Scheduling types",
                "Performance optimization"
            ]
        },
        {
            id: 17,
            title: "Job Scheduling",
            description: "Task automation and scheduling",
            content: [
                "Timer implementation",
                "Job scheduling",
                "Task automation",
                "Schedule management",
                "Cron jobs"
            ]
        },
        {
            id: 18,
            title: "Testdisk",
            description: "Data recovery and partition management",
            content: [
                "Testdisk tool usage",
                "File recovery",
                "Partition management",
                "Data restoration",
                "Disk analysis"
            ]
        },
        {
            id: 19,
            title: "Cockpit Graphic Tool",
            description: "System performance monitoring",
            content: [
                "PMLogger implementation",
                "Performance metrics collection",
                "Real-time monitoring",
                "Graphical dashboard",
                "System analysis"
            ]
        },
        {
            id: 20,
            title: "TCPDump",
            description: "Network packet analysis",
            content: [
                "Network level analysis",
                "Packet capture",
                "IP address monitoring",
                "Port number tracking",
                "Network debugging"
            ]
        }
    ],

    highlights: [
        {
            number: "20+",
            description: "Modules"
        },
        {
            number: "16+",
            description: "Hours of learning"
        },
        {
            number: "90",
            description: "Days Support"
        }
    ],

    programFor: [
        { src: "/assets/cources/programFor/programfor1.jpg", alt: "System Administrators", text: "System Administrators" },
        { src: "/assets/cources/programFor/programfor3.jpg", alt: "IT Professionals", text: "IT Professionals" },
        { src: "/assets/cources/programFor/programfor8.jpg", alt: "College Students", text: "College Students" },
        { src: "/assets/cources/programFor/programfor4.jpg", alt: "Team Leaders", text: "Team Leaders" },
        { src: "/assets/cources/programFor/programfor10.jpg", alt: "Technical Co-Founders", text: "Technical Co-Founders" }
    ],

    toolsData: {
        sectionTitle: "Comprehensive Linux Tools Coverage",
        category: "Linux",
        toolsCount: "10+",
        displayImage: "/assets/tools1/6.png",
        tools: [
            {
                id: "system-tools",
                icon: "Terminal",
                title: "System Management: Systemctl, CGroup, Valgrind"
            },
            {
                id: "monitoring",
                icon: "Activity",
                title: "Monitoring: TCPDump, Cockpit, PMLogger"
            },
            {
                id: "security",
                icon: "Shield",
                title: "Security: TestDisk, Audit Tools"
            }
        ]
    }
};