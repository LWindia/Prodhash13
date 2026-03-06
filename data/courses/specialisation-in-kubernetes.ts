import { Course } from "../../types/courses";
export const specialisationInKubernetes: Course = {
    _id: "specialisation-in-kubernetes",
    title: "[B][R]Certified Kubernetes Admin (CKA)[/R][/B] | Optimize Cluster Performance and Scaling",
    slug: "specialisation-in-kubernetes",
    rating: 5,
    totalRatings: 10,
    duration: "Beginner to Advance",
    globalStatus: "GLOBALLY RECOGNISED PROGRAM",
    programBy: "Vimal Daga",
    hours: "60+",
    price: 4200,
    originalPrice: 17500,
    enrolledStudents: 12000,
    category: "DevOps",
    shortDescription: "Industry-Relevant & Recognized Training | Hands-On Orchestration Experience | Advanced Deployment Techniques | Real-Time Industry Use Cases",
    paymentLink: " https://rzp.io/rzp/c619eyw",
    backgroundImage: "/assets/cources/courseDetails/kubernets/kubernetes.jpg",

    learningOutcomes: [
        "Kubernetes Architecture & Components",
        "Advanced Deployment Strategies",
        "Container Orchestration & Scaling",
        "Networking & Service Discovery",
        "Storage Management & Persistence",
        "Security Best Practices & RBAC"
    ],

    features: [
        "Industry-Recognized Kubernetes Training",
        "Technical Support for 90 days",
        "Real-World Cloud-Native Projects",
        "Premium #13 Kubernetes Community"
    ],

    skills: [
        "Container Orchestration",
        "Cluster Management",
        "Deployment Strategies",
        "Kubernetes Networking",
        "Storage Management",
        "Security Configuration",
        "Service Mesh",
        "Cloud-Native Practices"
    ],

    requirements: [
        "Basic understanding of containers",
        "Familiarity with Docker",
        "Basic Linux administration skills",
        "Command-line experience"
    ],

    level: "Beginner to Advanced",
    language: "English",
    lastUpdated: "2024-01",
    

    module: [
        {
          id: 1,
          title: "Lab Setup",
          description: "Setting up a Minikube cluster with Minikube",
          content: [
            "Minikube Installation",
            "Cluster Initialization",
            "Basic Cluster Management"
          ]
        },
        {
          id: 2,
          title: "Introduction to Kubernetes",
          description: "Understanding Kubernetes basics",
          content: [
            "Starting the Kubernetes Cluster",
            "Interacting with Kubernetes Cluster",
            "What is a Pod?",
            "Launching a Pod using CLI",
            "YAML Language Basics",
            "Creating a Pod using YAML",
            "Checking Pod Details",
            "Deleting All Pods"
          ]
        },
        {
          id: 3,
          title: "Labels & Load Balancer",
          description: "Exploring labels, selectors, replication controllers, and replica sets",
          content: [
            "What are Labels?",
            "Setting Labels in a Pod",
            "Types of Selectors",
            "What is a Replication Controller?",
            "Creating a Replication Controller",
            "Scaling Pods",
            "Creating a Load Balancer",
            "What is a Replica Set?"
          ]
        },
        {
          id: 4,
          title: "Environmental Variables",
          description: "Understanding and managing environment variables in Kubernetes",
          content: [
            "What is an Environmental Variable?",
            "Creating Environmental Variables",
            "Viewing Environmental Variables in Pods",
            "Difference Between kubectl create & apply"
          ]
        },
        {
          id: 5,
          title: "Storage",
          description: "Understanding Persistent Volumes, Claims, and Storage Classes",
          content: [
            "Types of Storage",
            "Making Storage Persistent",
            "Persistent Volume Claim (PVC) & How to Create PVC",
            "Persistent Volume (PV) & How to Create PV",
            "Storage Classes (SC) & Their Types",
            "Dynamic Provisioning",
            "NFS in Storage Class"
          ]
        },
        {
          id: 6,
          title: "Deployment",
          description: "Understanding deployment strategies and rolling updates",
          content: [
            "What is Deployment?",
            "Deployment Strategies",
            "Rolling In & Rolling Out",
            "Recreate vs Rolling Update Strategy",
            "Launching Pods with Deployment"
          ]
        },
        {
          id: 7,
          title: "Secrets",
          description: "Understanding secrets in Kubernetes and how to use them",
          content: [
            "What are Secrets in Kubernetes?",
            "How to Use Secrets",
            "What is Kustomize?",
            "Using Kustomize for Launching WordPress & MariaDB Pods"
          ]
        },
        {
          id: 8,
          title: "Namespace",
          description: "Understanding namespaces, authentication, and Kubernetes context",
          content: [
            "What is a Namespace?",
            "Creating a Namespace",
            "Launching Pods in a Namespace",
            "Authentication in Kubernetes",
            "Understanding Kubernetes Context"
          ]
        },
        {
          id: 9,
          title: "Authentication & User Management",
          description: "Understanding API server, authentication types, and RBAC",
          content: [
            "How API Server Works",
            "Types of Authentication",
            "Creating a RHEL-8 Kubernetes Client",
            "Understanding Context & Custom Context",
            "Config Files & Keys",
            "Encryption & Decryption",
            "Certificate Signing Request (CSR)",
            "Certificate Authority (CA)",
            "Role-Based Access Control (RBAC)",
            "Practical: Creating CSR & Role"
          ]
        },
        {
          id: 10,
          title: "Config Map",
          description: "Understanding configuration files and Config Maps",
          content: [
            "What are Configuration Files?",
            "Understanding Config Map",
            "Creating Config Maps",
            "Making Ports Permanent in Apache Webserver"
          ]
        },
        {
          id: 11,
          title: "Networking",
          description: "Understanding Ingress, network policies, and DNS management",
          content: [
            "What is Ingress?",
            "What is an Ingress Controller?",
            "What is Path-Based Routing?",
            "Creating an Ingress Controller",
            "Setting Local DNS",
            "What is a Network Policy?",
            "How to Create Network Policies",
            "Filtering Network Packets",
            "Source & Destination Ports",
            "Ingress & Egress",
            "Editing Image Name After Launching a Container"
          ]
        },
        {
          id: 12,
          title: "Design Patterns & Logs",
          description: "Exploring pod design patterns, logging, and agent programs",
          content: [
            "Different Pod Design Patterns",
            "Understanding Logs",
            "Agent Programs in Kubernetes",
            "Viewing Logs in Apache Webserver",
            "Changing Log Formats",
            "Sidecar & Ambassador Design Patterns"
          ]
        },
        {
          id: 13,
          title: "Container Security",
          description: "Understanding user permissions, capabilities, and security measures",
          content: [
            "Creating a General User",
            "Understanding Capabilities",
            "Granting All Capabilities to a Container",
            "Removing Capabilities from a Pod",
            "File Permission Management",
            "Using strace Command",
            "Service Accounts in Kubernetes",
            "Listing All Service Accounts",
            "Understanding Tokens & Their Storage",
            "Using Tokens in curl Commands"
          ]
        },
        {
          id: 14,
          title: "Custom Resources & CRD",
          description: "Exploring Custom Resources and CRDs in Kubernetes",
          content: [
            "Checking Available Resources",
            "Understanding Custom Resources",
            "Creating Custom Resources in Kubernetes"
          ]
        },
        {
          id: 15,
          title: "Projects",
          description: "Hands-on Kubernetes projects",
          content: [
            "Launching Apache Webserver in a Pod",
            "Multi-Container Pod Setup",
            "Creating RHEL-8 Kubernetes Client"
          ]
        },
        {
          id: 16,
          title: "Interview Questions",
          description: "Preparing for Kubernetes certification and job interviews",
          content: [
            "Certified Kubernetes Administrator (CKA) Questions",
            "Certified Kubernetes Application Developer (CKAD) Questions"
          ]
        },
        {
          id: 17,
          title: "Preparation for Global Certification",
          description: "Practical knowledge required to pass Kubernetes certifications",
          content: [
            "Certified Kubernetes Administrator (CKA) Preparation",
            "Certified Kubernetes Application Developer (CKAD) Preparation"
          ]
        }
      ],

    highlights: [
        {
            number: "17",
            description: "Modules"
        },
        {
            number: "60+",
            description: "Hours of learning"
        },
        {
            number: "4+",
            description: "Capstone Projects"
        }
    ],

    certificateImage: "/assets/certificate/Kubernetes_certificate.jpg",

    project: [
        {
            icon: "",
            title: "Microservices Platform",
            description: "Build a complete microservices platform on Kubernetes",
            skills: ["Kubernetes", "Microservices", "Service Mesh"]
        },
        {
            icon: "",
            title: "High-Availability Cluster",
            description: "Deploy and manage a highly available Kubernetes cluster",
            skills: ["Cluster Management", "HA Configuration", "Scaling"]
        },
        {
            icon: "",
            title: "CI/CD Pipeline",
            description: "Implement a complete CI/CD pipeline with Kubernetes",
            skills: ["DevOps", "Automation", "Continuous Deployment"]
        },
        {
            icon: "",
            title: "Multi-Cloud Setup",
            description: "Create a multi-cloud Kubernetes infrastructure",
            skills: ["Cloud Integration", "Federation", "Multi-cluster Management"]
        }
    ],

    programFor: [
        { src: "/assets/cources/courseDetails/shell-scripting/Engineer Graduates.jpg", alt: "Engineering Graduates", text: "Engineering Graduates " },
        { src: "/assets/cources/courseDetails/mongodb/System Administrators.jpg", alt: "System Administrators", text: "System Administrators" },
        { src: "/assets/cources/courseDetails/shell-scripting/DevOps Engineers.jpg", alt: "DevOps Engineers", text: "DevOps Engineers" },
        { src: "/assets/cources/courseDetails/shell-scripting/Cloud Administrators.jpg", alt: "Cloud Administrators", text: "Cloud Administrators" },
        { src: "/assets/cources/courseDetails/terraform/Software Developers.jpg", alt: "Software Developers", text: "Software Developers" },
        { src: "/assets/cources/courseDetails/shell-scripting/Automation Engineers.jpg", alt: "Automation Engineers", text: "Automation Engineers" },
        { src: "/assets/cources/courseDetails/shell-scripting/Network Adminstrators.jpg", alt: "Network Administrators", text: "Network Administrators" },
        // { src: "", alt: "Academicians", text: "Academicians" },
        { src: "/assets/cources/courseDetails/shell-scripting/Freshers seeking Automation or DevOps Roles.jpg", alt: "Freshers", text: "Enthusiast Students" }
    ],

    toolsData: {
        sectionTitle: "Complete Kubernetes Program",
        category: "Container Orchestration",
        toolsCount: "15+",
        displayImage: "/assets/cources/tools/Kubernetes (1).jpg",
        tools: [
            {
                id: "fundamentals",
                icon: "TrendingUp",
                title: "Core Concepts: Architecture, Components, API"
            },
            {
                id: "deployment",
                icon: "Cpu",
                title: "Deployments: Strategies, Scaling, Updates"
            },
            {
                id: "networking",
                icon: "BarChart",
                title: "Networking: Services, Ingress, Policies"
            },
            {
                id: "storage",
                icon: "TrendingUp",
                title: "Storage: PV, PVC, StorageClasses"
            },
            {
                id: "security",
                icon: "BarChart",
                title: "Security: RBAC, Policies, Authentication"
            }
        ]
    },
}