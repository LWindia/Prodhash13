import { Course } from "../../types/courses";

export const specialisationInselinux: Course = {
    _id: "specialisation-in-selinux",
    title: "[B][R]Master SELinux: Security Hardening for Linux Systems[/R][B]",
    slug: "specialisation-in-selinux",
    rating: 5,
    totalRatings: 10,
    duration: "Beginner to Advanced",
    globalStatus: "GLOBALLY RECOGNIZED CERTIFICATION",
    hours: "12+",
    price: 2500,
    originalPrice: 7500,
    enrolledStudents: 12000,
    category: "Cybersecurity & Linux",
    shortDescription: "Learn SELinux policies, enforcement, and troubleshooting to secure enterprise Linux environments.",
    paymentLink: "https://rzp.io/rzp/JLv8cEhD",
    backgroundImage: "/assets/cources/courseDetails/6course/linux-mascot-sitting-on-a-chip-with-blurred-code-in-the-background.jpg", // Update image

    learningOutcomes: [
    "Understand SELinux Architecture & Security Models",
    "Enforce Mandatory Access Control (MAC) Policies",
    "Write, Modify, and Debug Custom SELinux Policies",
    "Troubleshoot SELinux Denials and Audit Logs",
    "Configure SELinux for Web Servers (Apache/Nginx) and Databases",
    "Integrate SELinux with Containers (Docker/Podman)",
    "Apply SELinux in Compliance Frameworks (CIS, HIPAA)"
],

features: [
    "Hands-On Labs with Real Linux Systems",
    "Technical Support for 90 Days",
    "Access to SELinux Policy Templates & Cheat Sheets",
    "Exclusive Linux Security Community Access"
],

skills: [
    "SELinux Policy Writing",
    "Security Context Management (Files, Processes, Ports)",
    "Audit Log Analysis with `ausearch` and `audit2why`",
    "Boolean Tuning for Application-Specific Rules",
    "SELinux Modes (Enforcing, Permissive, Disabled)",
    "Container Security with `container_t` Contexts",
    "Integration with Linux Auditing System (auditd)"
],

requirements: [
    "Basic Linux command-line experience (e.g., file permissions, user management)",
    "Familiarity with Linux system administration (optional but helpful)",
    "No prior SELinux knowledge required",
    "A Linux system (physical or VM) for hands-on labs"
],

    level: "Beginner to Advanced",
    language: "English",
    lastUpdated: "2024-01",


    module: [
        {
            id: 1,
            title: "Linux Security Fundamentals",
            description: "Master core Linux security mechanisms that underpin SELinux.",
            content: [
                "Understanding Discretionary Access Control (DAC)",
                "File permissions (chmod, chown, ACLs)",
                "Process isolation and user privileges",
                "Introduction to Mandatory Access Control (MAC)"
            ]
        },
        {
            id: 2,
            title: "SELinux Architecture & Concepts",
            description: "Learn how SELinux enforces security policies at the kernel level.",
            content: [
                "DAC vs. MAC: Key differences",
                "SELinux security contexts (labels, users, roles)",
                "SELinux modes: Enforcing, Permissive, Disabled",
                "Policy types (Targeted, MLS, Strict)"
            ]
        },
        {
            id: 3,
            title: "SELinux Policy Management",
            description: "Create and customize policies to secure applications.",
            content: [
                "Writing and compiling SELinux policies (.te, .fc files)",
                "Managing booleans with `setsebool` and `getsebool`",
                "Labeling files/processes with `chcon` and `restorecon`",
                "Using `semanage` for persistent context changes"
            ]
        },
        {
            id: 4,
            title: "Troubleshooting SELinux",
            description: "Diagnose and resolve common SELinux denials and conflicts.",
            content: [
                "Analyzing audit logs with `ausearch` and `audit2why`",
                "Using `sealert` for human-readable error reports",
                "Temporarily allowing access with `audit2allow`",
                "Debugging common Apache/Nginx/Database issues"
            ]
        },
        {
            id: 5,
            title: "SELinux for Servers & Containers",
            description: "Apply SELinux to secure web servers and containerized environments.",
            content: [
                "Configuring SELinux for Apache/Nginx",
                "Database security (MySQL/PostgreSQL with SELinux)",
                "Container isolation with `container_t` and `svirt_lxc_net_t`",
                "Podman/Docker SELinux integration"
            ]
        },
        {
            id: 6,
            title: "Advanced SELinux Features",
            description: "Explore niche capabilities for enterprise-grade security.",
            content: [
                "Multi-Level Security (MLS) policies",
                "Role-Based Access Control (RBAC) in SELinux",
                "Custom policy modules with `checkmodule` and `semodule`",
                "SELinux and Kubernetes (OpenShift, RKE2)"
            ]
        },
        {
            id: 7,
            title: "Real-World SELinux Deployments",
            description: "Hands-on labs simulating enterprise security scenarios.",
            content: [
                "Hardening a web server to meet CIS benchmarks",
                "Implementing SELinux for PCI-DSS compliance",
                "Case study: SELinux in government systems",
                "Migrating from permissive to enforcing mode"
            ]
        },
        {
            id: 8,
            title: "SELinux Audit & Compliance",
            description: "Monitor and validate SELinux policies for regulatory requirements.",
            content: [
                "Integrating SELinux with auditd",
                "Generating compliance reports with `seaudit`",
                "SELinux and GDPR/HIPAA compliance",
                "Automating policy audits with OpenSCAP"
            ]
        }
    ]
    ,

    highlights: [
        {
            number: "12+",
            description: "Hands-On Labs"
        },
        {
            number: "50+",
            description: "SELinux Policy Templates"
        },
        {
            number: "100%",
            description: "Real-World Use Cases"
        },
        {
            number: "CIS & HIPAA",
            description: "Compliance Ready"
        }
    ],

    certificateImage: "/assets/certificate/mojo-certificate.jpg",

    project: [
        {
            icon: "",  // Lock icon for security
            title: "Hardening a Web Server with SELinux",
            description: "Configure and enforce SELinux policies for Apache/Nginx to block unauthorized access while allowing legitimate traffic.",
            skills: ["SELinux Policies", "Security Contexts", "Audit Logs"]
        },
        {
            icon: "",  // Whale icon for containers
            title: "Securing Docker Containers with SELinux",
            description: "Implement container isolation using SELinux types (container_t) to prevent container breakout attacks.",
            skills: ["Container Security", "SELinux Booleans", "Podman/Docker"]
        },
        {
            icon: "",  // Scroll icon for compliance
            title: "SELinux for HIPAA Compliance",
            description: "Audit and customize SELinux policies to meet healthcare data protection standards (HIPAA/GDPR).",
            skills: ["Compliance Frameworks", "Policy Modules", "OpenSCAP"]
        }
    ],
    

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
        sectionTitle: "Master SELinux: Security Hardening for Linux Systems",
        category: "Linux Security & Mandatory Access Control",
        toolsCount: "15+",
        displayImage: "/assets/cources/courseDetails/selinux/selinux-lab.jpg", // Update image path
        tools: [
            {
                id: "policies",
                icon: "TrendingUp", // Security shield icon
                title: "Write and enforce custom SELinux policies (.te, .fc files)."
            },
            {
                id: "troubleshooting",
                icon: "BarChart", // Magnifying glass icon
                title: "Analyze and resolve denials with `audit2why` and `sealert`."
            },
            {
                id: "contexts",
                icon: "TrendingUp", // Tag/label icon
                title: "Manage security contexts for files, processes, and ports."
            },
            {
                id: "booleans",
                icon: "BarChart", // Toggle icon
                title: "Configure SELinux booleans for application-specific rules."
            },
            {
                id: "containers",
                icon: "BarChart", // Server/container icon
                title: "Secure Docker/Podman containers with SELinux types."
            },
            {
                id: "compliance",
                icon: "Cpu", // Document icon
                title: "Generate compliance reports for HIPAA/CIS benchmarks."
            }
        ]
    },
    programBy: "Vimal Daga"
}