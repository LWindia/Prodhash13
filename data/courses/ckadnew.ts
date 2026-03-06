import { Course } from "../../types/courses";

export const specialisationInCKAD: Course = {
    _id: "master-ckad",
    title: "[B][R]Certified Kubernetes Application Developer (CKAD)[/R][/B]",
    slug: "master-ckad",
    rating: 4.9,
    totalRatings: 342,
    duration: "Intermediate to Advanced",
    globalStatus: "Globally Recognized Certification for Kubernetes Administrators",
    hours: "32+",
    price: 8999,
    originalPrice: 19999,
    enrolledStudents: 15600,
    category: "DevOps",
  shortDescription: "Master production-grade Kubernetes on AWS with hands-on labs, real-world projects, and expert-led training for DevOps professionals.",
    paymentLink: "https://rzp.io/l/aws-eks-june2025",
    backgroundImage: "/assets/tools1/Kubernestes.png",

learningOutcomes: [
    "Introduction to Kubernetes",
    "Labels & load balancer",
    "Environmental Variable",
    "Deployment - Deployment strategies",
    "Recreate strategies",
    "Design Patterns",
    "Ambassador & Logging Pod"
],

features: [
    "Most Relevant Kubernetes Tips & Tricks",
    "Technical Support for 90 days",
    "Industry Use Cases for Kubernetes",
    "Premium #13 Kubernetes Community"
],

skills: [
    "kubectl for application management",
    "Helm chart deployments",
    "Kubernetes networking (Services, Ingress)",
    "Application scaling (HPA)",
    "Pod design patterns",
    "Resource monitoring and logging"
],

requirements: [
    "Basic container concepts (Docker)",
    "Linux fundamentals",
    "CLI experience"
],
    level: "Intermediate",
    language: "English",
    lastUpdated: "2024-06",

    module: [
        {
            id: 1,
            title: "Lab Setup",
            description: "Set up and configure a Minikube cluster for Kubernetes hands-on practice.",
            content: [
                "Set up and configure a Minikube cluster for Kubernetes hands-on practice"
            ]
        },
        {
            id: 2,
            title: "Kubernetes Basics",
            description: "Understand Kubernetes fundamentals and how to manage basic resources using kubectl and YAML.",
            content: [
                "Understand Kubernetes fundamentals: Pods, Deployments, and Services",
                "Create, manage, and delete Pods using the command line (kubectl) and YAML files",
                "Learn YAML syntax and structure for Kubernetes resource definitions"
            ]
        },
        {
            id: 3,
            title: "Labels & Replica Management",
            description: "Organize Kubernetes resources using labels and scale applications with replicas.",
            content: [
                "Use labels and selectors for resource organization and filtering",
                "Create and manage replication controllers and replica sets for scaling applications"
            ]
        },
        {
            id: 4,
            title: "Environment Variables",
            description: "Manage environment variables in Pods and understand resource creation methods.",
            content: [
                "Define and manage environment variables in Kubernetes Pods",
                "Understand the difference between kubectl create and kubectl apply"
            ]
        },
        {
            id: 5,
            title: "Application Deployments",
            description: "Deploy applications using different strategies and perform updates and rollbacks.",
            content: [
                "Explore deployment strategies: Roll-in and Roll-out",
                "Recreate and Rolling Update strategies",
                "Perform rolling updates and rollbacks with Deployments"
            ]
        },
        {
            id: 6,
            title: "Secrets & Kustomize",
            description: "Secure sensitive data using Secrets and deploy multi-container apps using Kustomize.",
            content: [
                "Work with Kubernetes Secrets to manage sensitive information",
                "Use Kustomize to configure and deploy multi-container applications like WordPress and MariaDB"
            ]
        },
        {
            id: 7,
            title: "ConfigMaps",
            description: "Use ConfigMaps to configure applications and persist web server ports.",
            content: [
                "Create and use ConfigMaps for application configuration",
                "Configure ports to persist in web servers like Apache"
            ]
        },
        {
            id: 8,
            title: "Networking",
            description: "Manage application routing and control traffic flow using Kubernetes networking resources.",
            content: [
                "Implement Ingress controllers for routing traffic to applications",
                "Configure path-based and host-based routing rules",
                "Create and manage NetworkPolicies to control traffic flow and packet filtering"
            ]
        },
        {
            id: 9,
            title: "Design Patterns & Logging",
            description: "Explore common Pod design patterns and logging best practices.",
            content: [
                "Explore Pod design patterns: Sidecar, Ambassador, and Init containers",
                "Monitor and manage logs for troubleshooting and debugging",
                "Customize log formats for specific use cases"
            ]
        },
        {
            id: 10,
            title: "Interview Preparation & Certification",
            description: "Get ready for CKAD certification and ace Kubernetes-related job interviews.",
            content: [
                "Prepare for Certified Kubernetes Application Developer (CKAD) certification with hands-on practice and mock tests",
                "Review commonly asked interview questions to ensure readiness for job roles"
            ]
        }
    ]
,    
      
highlights: [
    { number: "10", description: "Intensive Modules" },
    { number: "20+", description: "Hands-on Labs" },
    { number: "3", description: "Real-World Projects" }
],

    certificateImage: "/assets/tools1/CKAD1.jpeg",

   
    project: [
        {
            icon: "/assets/icons/kubernetes.svg",
            title: "Microservice Application",
            description: "Deploy a multi-tier application with various Kubernetes resources",
            skills: ["Services", "ConfigMaps", "Deployments"]
        },
        {
            icon: "/assets/icons/helm.svg",
            title: "Application Packaging",
            description: "Create and manage Helm charts for application deployment",
            skills: ["Helm", "Templates", "Values"]
        },
        {
            icon: "/assets/icons/prometheus.svg",
            title: "Application Monitoring",
            description: "Implement monitoring and resource management",
            skills: ["Resource Limits", "Prometheus", "Metrics"]
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
        sectionTitle: "CKAD Developer Toolkit",
        category: "Core Tools for Kubernetes Mastery",
        toolsCount: "12+",
        displayImage: "/assets/tools1/1.png",
        tools: [
            {
                id: "kubectl",
                icon: "Terminal",
                title: "Kubernetes CLI (kubectl)"
            },
            {
                id: "minikube",
                icon: "Shield",
                title: "Local Kubernetes Cluster (Minikube)"
            },
            {
                id: "yaml",
                icon: "Cpu",
                title: "YAML Configuration for Resources"
            },
            {
                id: "kustomize",
                icon: "BarChart",
                title: "Customize Manifests with Kustomize"
            },
            {
                id: "helm",
                icon: "BarChart",
                title: "Application Packaging with Helm"
            },
            {
                id: "docker",
                icon: "Cpu",
                title: "Containerization with Docker"
            },
            {
                id: "curl",
                icon: "BarChart",
                title: "HTTP Requests and Testing with cURL"
            },
            {
                id: "httpd",
                icon: "Terminal",
                title: "Web Server (Apache HTTPD)"
            },
            {
                id: "ingress-nginx",
                icon: "BarChart",
                title: "Ingress Controller (NGINX)"
            },
            {
                id: "vscode",
                icon: "Terminal",
                title: "Code Editing with VS Code"
            },
            {
                id: "git",
                icon: "BarChart",
                title: "Version Control with Git"
            },
            {
                id: "mocktest",
                icon: "Cpu",
                title: "CKAD Mock Test Environment"
            }
        ]
    },
    
    programBy: "Vimal Daga"
};