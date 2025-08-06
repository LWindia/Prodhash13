import { Course } from "../../types/courses";

export const specialisationInAnsible: Course = {
    _id: "specialisation-in-ansible",
     title: "[B][R]Automation with Ansible[/R][/B] | Simplify Configuration Management Tasks",
    slug: "specialisation-in-ansible",
    rating: 5,
    totalRatings: 10,
    globalStatus: "GLOBALLY RECOGNISED PROGRAM",
    duration: "Beginner to Advance",
    programBy: "Vimal Daga",
    hours: "24+",
    price: 2500,
    originalPrice: 10000,
    enrolledStudents: 12000,
    category: "DevOps",
    shortDescription: "Industry-Relevant & Recognized Training | Hands-On Automation Experience | Advanced Playbook Techniques | Real-Time Industry Use Cases",
    paymentLink: "https://rzp.io/rzp/YgZsD9b",
    backgroundImage: "/assets/cources/courseDetails/Hero.jpeg",

    learningOutcomes: [
        "Ansible Fundamentals & Installation",
        "Playbook Development & Execution",
        "Variables & Facts Management",
        "Task Control & Handlers",
        "Role-Based Automation",
        "Enterprise Features & Tower",
        "Cloud Integration"
    ],

    features: [
        "Industry-Recognized Ansible Training",
        "Technical Support for 90 days",
        "Real-World Automation Projects",
        "Premium #13 Ansible Community"
    ],

    skills: [
        "Infrastructure Automation",
        "Playbook Development",
        "Configuration Management",
        "Task Orchestration",
        "Role Management",
        "Cloud Automation",
        "Ansible Tower",
        "Security Implementation"
    ],

    requirements: [
        "Basic Linux administration knowledge",
        "Understanding of YAML syntax",
        "Familiarity with command line",
        "Basic scripting knowledge"
    ],

    level: "Beginner to Advanced",
    language: "English",
    lastUpdated: "2024-01",
    

    module: [
        {
            id: 1,
            title: "Introduction to Ansible",
            description: "Understanding Ansible concepts and installing Ansible Engine.",
            content: [
                "Describe Ansible concepts",
                "Install Ansible Engine"
            ]
        },
        {
            id: 2,
            title: "Deploy Ansible",
            description: "Configuring Ansible to manage hosts and run ad hoc commands.",
            content: [
                "Configure Ansible to manage hosts",
                "Run ad hoc Ansible commands"
            ]
        },
        {
            id: 3,
            title: "Implement Playbooks",
            description: "Writing and executing Ansible playbooks to automate tasks.",
            content: [
                "Write a simple Ansible playbook",
                "Run playbooks on multiple managed hosts",
                "Packages: yum, become, with_items",
                "Services: service",
                "Files: copy, file, template, lineinfile",
                "Application Modules: pip, mysql_db, mysql_user",
                "Stack Status: wait_for, uri, register, fail, when"
            ]
        },
        {
            id: 4,
            title: "Manage Variables and Facts",
            description: "Using variables and facts to simplify Ansible playbooks.",
            content: [
                "Use variables in playbooks",
                "Reference facts about managed hosts"
            ]
        },
        {
            id: 5,
            title: "Implement Task Control",
            description: "Managing task execution flow, handlers, and error handling.",
            content: [
                "Manage task control",
                "Use handlers",
                "Handle task errors in Ansible playbooks"
            ]
        },
        {
            id: 6,
            title: "Deploy Files to Managed Hosts",
            description: "Managing files and configurations on remote hosts.",
            content: [
                "Deploy, manage, and adjust files on hosts managed by Ansible"
            ]
        },
        {
            id: 7,
            title: "Manage Large Projects",
            description: "Optimizing playbooks for scalability and complexity.",
            content: [
                "Write playbooks optimized for larger projects"
            ]
        },
        {
            id: 8,
            title: "Simplify Playbooks with Roles",
            description: "Using roles to modularize and reuse Ansible code.",
            content: [
                "Use Ansible roles to develop playbooks quickly",
                "Converting to Roles: tasks, handlers, files, templates",
                "Site.yml: include",
                "Variables: facts, defaults, vars, with_dict, vars_files, group_vars, vault",
                "Selective Removal: shell, register, with_items, when",
                "External Roles & Galaxy"
            ]
        },
        {
            id: 9,
            title: "Troubleshoot, Testing & Validation",
            description: "Debugging and troubleshooting Ansible playbooks and managed hosts.",
            content: [
                "Troubleshoot playbooks and managed hosts",
                "Troubleshooting ordering problems",
                "Jumping to specific tasks: list-tasks, step, start-at-task",
                "Retrying failed hosts",
                "Syntax-Check & Dry-Run: syntax-check, check",
                "Debugging: debug",
                "Testing concepts"
            ]
        },
        {
            id: 10,
            title: "Automate Linux Administration Tasks",
            description: "Using Ansible for automating common Linux system administration tasks.",
            content: [
                "Automate Linux system administration tasks with Ansible"
            ]
        },
        {
            id: 11,
            title: "Advanced Execution",
            description: "Enhancing Ansible execution efficiency and performance.",
            content: [
                "Removing unnecessary steps: gather_facts",
                "Extracting repetitive tasks: cache_valid_time",
                "Limiting execution by hosts & tasks",
                "Idempotence: changed_when, failed_when",
                "Accelerated Mode and Pipelining"
            ]
        }
    ],
    

    highlights: [
        {
            number: "10",
            description: "Modules"
        },
        {
            number: "24+",
            description: "Hours of learning"
        },
        {
            number: "3+",
            description: "Capstone Projects"
        }
    ],

    certificateImage: "/assets/certificate/Ansible_certificate.jpg",

    project: [
        {
            icon: "",
            title: "Multi-Tier Application Deployment",
            description: "Automate deployment of a complete application stack",
            skills: ["Playbooks", "Roles", "Configuration Management"]
        },
        {
            icon: "",
            title: "Cloud Infrastructure Automation",
            description: "Implement cloud resource management with Ansible",
            skills: ["Cloud Automation", "Infrastructure Management", "AWS/Azure Integration"]
        },
        {
            icon: "",
            title: "Enterprise Automation Framework",
            description: "Build a scalable automation framework using Ansible Tower",
            skills: ["Ansible Tower", "Role-Based Access", "Workflow Automation"]
        }
    ],

    programFor: [
        { src: "/assets/cources/courseDetails/shell-scripting/Engineer Graduates (2).jpg", alt: "Engineering Graduates", text: "Engineering Graduates " },
        { src: "/assets/cources/courseDetails/shell-scripting/Linux System Administrators.jpg", alt: "System Administrators", text: "Linux System Administrators" },
        { src: "/assets/cources/courseDetails/shell-scripting/DevOps Engineers.jpg", alt: "DevOps Engineers", text: "DevOps Engineers" },
        { src: "/assets/cources/courseDetails/shell-scripting/Cloud Administrators.jpg", alt: "Cloud Administrators", text: "Cloud Administrators" },
        { src: "/assets/cources/courseDetails/shell-scripting/Automation Engineers.jpg", alt: "Automation Engineers", text: "Automation Engineers" },
        { src: "/assets/cources/courseDetails/mongodb/IT Professionals.jpg", alt: "IT Professionals", text: "Working IT Professionals" }
    ],

    toolsData: {
        sectionTitle: "Complete Ansible Program",
        category: "Infrastructure Automation",
        toolsCount: "10+",
        displayImage: "/assets/cources/tools/Ansible.jpg",
        tools: [
            {
                id: "basics",
                icon: "TrendingUp",
                title: "Ansible Basics: Installation, Configuration, Commands"
            },
            {
                id: "playbooks",
                icon: "BarChart",
                title: "Playbooks: Development, Execution, Best Practices"
            },
            {
                id: "variables",
                icon: "Cpu",
                title: "Variables: Facts, Templates, Dynamic Inventory"
            },
            {
                id: "roles",
                icon: "TrendingUp",
                title: "Roles: Creation, Management, Reusability"
            },
            {
                id: "enterprise",
                icon: "BarChart",
                title: "Enterprise: Tower, Security, Scaling"
            }
        ]
    },
}