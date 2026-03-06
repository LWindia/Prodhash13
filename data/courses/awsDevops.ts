import { Course } from "../../types/courses";

export const awsDevOpsMastery: Course = {
    _id: "aws-devops-pro",
    title: "[B][R]AWS DevOps Pro: CI/CD, IaC & Automation[/R][/B]",
    slug: "aws-devops-pro",
    rating: 4.8,
    totalRatings: 420,
    duration: "Intermediate",
    globalStatus: "AWS AUTHORIZED TRAINING PROGRAM",
    hours: "30+",
    price: 9999,
    originalPrice: 21999,
    enrolledStudents: 18200,
    category: "DevOps",
    shortDescription: "Master AWS DevOps tools like CodePipeline, Terraform, and ECS to build scalable, automated cloud infrastructure with real-world projects.",
    paymentLink: "https://rzp.io/l/aws-devops-july2025",
    backgroundImage: "/assets/tools1/Devops pro.jpg",

    learningOutcomes: [
        "Design end-to-end CI/CD pipelines on AWS",
        "Automate infrastructure with Terraform & CloudFormation",
        "Secure deployments using IAM & AWS Secrets Manager",
        "Monitor systems with CloudWatch & X-Ray",
        "Deploy containerized apps using ECS/EKS",
        "Implement GitOps workflows with CodeCommit & CodeDeploy"
    ],

    features: [
        "Live AWS sandbox environment",
        "Certification prep for AWS DevOps Engineer Pro",
        "Lifetime access to course updates",
        "1:1 mentorship sessions"
    ],

    skills: [
        "AWS CodeSuite (CodeBuild, CodePipeline, CodeDeploy)",
        "Infrastructure as Code (Terraform, CloudFormation)",
        "Docker & Kubernetes on AWS",
        "Serverless CI/CD with Lambda",
        "Security & Compliance (AWS Config, GuardDuty)",
        "Cost optimization strategies"
    ],

    requirements: [
        "Basic AWS knowledge (EC2, S3, IAM)",
        "Familiarity with Linux commands",
        "Understanding of DevOps principles"
    ],

    level: "Intermediate",
    language: "English",
    lastUpdated: "2024-07",

    module: [
        {
            id: 1,
            title: "AWS DevOps Fundamentals",
            description: "Core principles & AWS toolchain overview",
            content: [
                "DevOps lifecycle on AWS",
                "IAM roles for DevOps pipelines",
                "AWS CLI & SDK setup",
                "Cost optimization best practices"
            ]
        },
        {
            id: 2,
            title: "Infrastructure as Code (IaC)",
            description: "Automating cloud provisioning",
            content: [
                "Terraform vs CloudFormation",
                "Modular Terraform architectures",
                "State management with S3 backends",
                "AWS CDK (Python/TypeScript)"
            ]
        },
        {
            id: 3,
            title: "CI/CD Pipelines",
            description: "Building automated workflows",
            content: [
                "AWS CodePipeline deep dive",
                "GitHub Actions integration",
                "Blue/Green deployments",
                "Testing strategies in CI/CD"
            ]
        },
        {
            id: 4,
            title: "Containerization & Orchestration",
            description: "ECS, EKS, and Fargate",
            content: [
                "Docker on AWS ECR",
                "ECS task definitions & services",
                "EKS cluster autoscaling",
                "Serverless containers with Fargate"
            ]
        },
        {
            id: 5,
            title: "Security & Compliance",
            description: "Hardening DevOps pipelines",
            content: [
                "AWS KMS & Secrets Manager",
                "Pod security policies (EKS)",
                "Compliance with AWS Config",
                "VPC networking for security"
            ]
        },
        {
            id: 6,
            title: "Monitoring & Logging",
            description: "Observability at scale",
            content: [
                "CloudWatch alarms & dashboards",
                "X-Ray for distributed tracing",
                "ELK stack on AWS",
                "SLOs & error budgets"
            ]
        },
        {
            id: 7,
            title: "Advanced DevOps Patterns",
            description: "Real-world case studies",
            content: [
                "Multi-account CI/CD strategies",
                "Disaster recovery pipelines",
                "Spot instances for cost savings",
                "Serverless DevOps workflows"
            ]
        }
    ],

    highlights: [
        { number: "7", description: "Hands-On Modules" },
        { number: "20+", description: "AWS Labs" },
        { number: "3", description: "Capstone Projects" }
    ],

    certificateImage: "/assets/tools1/Devopro2.jpg",

    project: [
        {
            icon: "/assets/icons/cicd.svg",
            title: "Multi-Stage CI/CD Pipeline",
            description: "Build a secure pipeline with CodeBuild and CodeDeploy",
            skills: ["CodePipeline", "IAM Roles", "Canary Testing"]
        },
        {
            icon: "/assets/icons/terraform.svg",
            title: "Infrastructure Automation",
            description: "Provision a VPC with Terraform modules",
            skills: ["Terraform", "Modules", "DRY Principles"]
        },
        {
            icon: "/assets/icons/kubernetes.svg",
            title: "EKS Cluster with GitOps",
            description: "Deploy apps using ArgoCD on EKS",
            skills: ["Kubernetes", "GitOps", "Helm Charts"]
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
        sectionTitle: "AWS DevOps Toolbox",
        category: "End-to-End Automation",
        toolsCount: "12+",
        displayImage: "/assets/tools1/7.png",
        tools: [
            {
                id: "terraform",
                icon: "Cpu",
                title: "Infrastructure as Code"
            },
            {
                id: "codepipeline",
                icon: "BarChart",
                title: "CI/CD Pipelines"
            },
            {
                id: "ecs",
                icon: "Shield",
                title: "Container Orchestration"
            },
            {
                id: "cloudwatch",
                icon: "BarChart",
                title: "Monitoring & Logging"
            },
            {
                id: "secrets-manager",
                icon: "Network",
                title: "Security Tools"
            }
        ]
    },
    programBy: "Vimal Daga"
};